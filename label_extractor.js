const { getTree } = require('./getTree');

var path = require('path');

var dir = path.resolve(path.resolve(__dirname));

// if (path.basename(directories) == 'node_modules') {
//   directories = path.dirname(directories);
//   dir = directories + '/src/';
// } else {
//   dir = __dirname + '/src/';
// }
dir = dir + '/src/';

console.log(getTree(dir));
