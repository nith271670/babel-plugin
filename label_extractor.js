var path = require('path');
const fs = require('fs');
var recursive = require('recursive-readdir-filter');
var Parser = require('node-html-parser');
var dir = directories + '/src/';

var directories = path.dirname(__dirname);

if (path.basename(directories) == 'node_modules') {
  directories = path.dirname(directories);
  dir = directories + '/src/';
} else {
  dir = __dirname + '/src/';
}

function getTree(dir) {
  var result = {};
  var finalTree = {};

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
          finalTree = JSON.stringify(result, null, '\t');

          fs.writeFile(
            'labelList.json',
            JSON.stringify(result, null, '\t'),
            (err) => {
              if (err) throw err;
              console.log(err);
            },
          );
          return finalTree;
        });
      }
    });
  });
}

getTree(dir);
module.exports = getTree;
