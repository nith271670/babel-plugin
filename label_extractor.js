const { getTree } = require('./getTree');

var path = require('path');

var dir = __dirname + '/src/';

var directories = path.dirname(__dirname);

if (path.basename(directories) == 'node_modules') {
   directories = path.dirname(directories);
    dir = directories + '/src/';
} else {
  dir = __dirname + '/src/';
}


console.log(getTree(dir));
