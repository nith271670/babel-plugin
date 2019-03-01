const fs = require('fs');
var recursive = require('recursive-readdir-filter');
var Parser = require('node-html-parser');
var result = {};
//check for uuid
function extractAttr(labelAttr) {
  if (labelAttr.uuid != undefined) {
    var attrs = labelAttr;
    var uuid = attrs.uuid;
    delete attrs.uuid;
    result[uuid] = attrs;
    // console.log(result);
    return result;
  }
}
function writeToFile(result) {
  fs.writeFile('labelList.json', JSON.stringify(result, null, '\t'), (err) => {
    if (err) throw err;
  });
}
//read a file and check for Label
function readEachFile(file) {
  if (file != undefined) {
    fs.readFile(file, 'utf8', function(err, contents) {
      var root = Parser.parse(contents);
      var label_obj = root.querySelectorAll('Label');
      label_obj.forEach((labelAttr) => {
        // console.log(labelAttr.attributes);

        extractAttr(labelAttr.attributes);
      });
      // JSON.stringify(result, null, '\t');
      console.log(result);

      writeToFile(result);
    });
  }
}

function getTree(dir) {
  var options = {
    filterDir: function(stats) {
      return stats.name !== 'node_modules';
    },
    filterFile: function(stats) {
      if (stats.name.match(/\.tsx$/)) {
        return stats.name.match(/\.tsx$/);
      } else if (stats.name.match(/\.ts$/)) {
        return stats.name.match(/\.ts$/);
      } else if (stats.name.match(/\.js$/)) {
        return stats.name.match(/\.js$/);
      } else if (stats.name.match(/\.html$/)) {
        return stats.name.match(/\.html$/);
      }
    },
  };
  recursive(dir, options, function(err, files) {
    // `files` is an array of file paths
    files.forEach((file) => {
      // const content = fs.readFileSync(file, 'utf8');
      readEachFile(file);
    });
    return files;
  });
}

module.exports = { getTree, readEachFile, extractAttr, writeToFile };
