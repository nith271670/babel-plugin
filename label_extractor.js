const fs = require('fs');
const { getTree } = require('./dist/jsx-to-simple-ast.cjs.js');
var dir = __dirname + '/src/';
var result = {};

fs.writeFile('myfile.json', JSON.stringify(result, null, '\t'), (err) => {
  if (err) throw err;
  console.log(err);
});
var recursive = require('recursive-readdir-filter');
var options = {
  filterDir: function(stats) {
    return stats.name !== 'node_modules';
  },
  filterFile: function(stats) {
    return stats.name.match(/\.js$/);
  },
};

recursive(dir, options, function(err, files) {
  // `files` is an array of file paths
  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf8');
    if (file != undefined) {
      if (getTree(content) != '') {
        getTree(content).forEach((data) => {
          Object.keys(data).forEach((key) => (result[key] = data[key]));
        });
        console.log(JSON.stringify(result, null, '\t'));
        fs.writeFile(
          'myfile.json',
          JSON.stringify(result, null, '\t'),
          (err) => {
            if (err) throw err;
            console.log(err);
          },
        );
      }
    }
  });
});
