const fs = require('fs');
var recursive = require('recursive-readdir-filter');
var Parser = require('node-html-parser');
var finalt = [];
function getTree(dir) {
    
    var result = {};
   var finalt = [];
  
    var options = {
      filterDir: function(stats) {
        return stats.name !== 'node_modules';
      },
      filterFile: function(stats) {
        if(stats.name.match(/\.tsx$/)){
          return stats.name.match(/\.tsx$/);
        }
        else  if(stats.name.match(/\.ts$/)){
          return stats.name.match(/\.ts$/);
        }
        else  if(stats.name.match(/\.js$/)){
          return stats.name.match(/\.js$/);
        }
        else  if(stats.name.match(/\.html$/)){
          return stats.name.match(/\.html$/);
        }        
        
      },
    };
  
    recursive(dir, options, function(err, files) {
       finalt = [];

      files.forEach((file) => {
            var root = Parser.parse(fs.readFileSync(file, 'utf8'));
            
            var label_obj = root.querySelectorAll('Label');
  
            label_obj.forEach((labelAttr) => {
              if (labelAttr.attributes.uuid != undefined) {
                var attrs = labelAttr.attributes;
                var uuid = attrs.uuid;
                delete attrs.uuid;
                result[uuid] = attrs;
              }
            });
            finalt.push(result);
  
            
      
      });
      fs.writeFile(
        'labelList.json',
        JSON.stringify(finalt[finalt.length-1], null, '\t'),
        (err) => {
          if (err) throw err;
          // console.log(err);
        },
      );

    });


  }

  
  module.exports = getTree;