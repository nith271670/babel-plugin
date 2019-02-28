const fs = require('fs');
var recursive = require('recursive-readdir-filter');
var Parser = require('node-html-parser');

function getTree(dir) {
    
    var result = {};
  
    var options = {
      filterDir: function(stats) {
        return stats.name !== 'node_modules';
      },
      filterFile: function(stats) {
        return stats.name.match(/\.tsx$ || \.js$ || \.ts$ || \.html$/);
      },
    };
  
    recursive(dir, options, function(err, files) {
      // `files` is an array of file paths
      files.forEach((file) => {
        const content = fs.readFileSync(file, 'utf8');
        if (file != undefined) {
          fs.readFile(file, 'utf8', function(err, contents) {
            var root = Parser.parse(contents);
            var label_obj = root.querySelectorAll('Label');
  
            label_obj.forEach((labelAttr) => {
              if (labelAttr.attributes.uuid != undefined) {
                var attrs = labelAttr.attributes;
                var uuid = attrs.uuid;
                delete attrs.uuid;
                result[uuid] = attrs;
              }
            });
            JSON.stringify(result, null, '\t');
  
            fs.writeFile(
              'labelList.json',
              JSON.stringify(result, null, '\t'),
              (err) => {
                if (err) throw err;
                console.log(err);
              },
            );
          });
        }
      });
    });
  }

  
  module.exports = getTree;