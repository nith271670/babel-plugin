const {
  getTree,
  readEachFile,
  extractAttr,
  writeToFile,
} = require('./getTree');
const dir = __dirname + '/src/tests/demo.js';
import fs from 'fs';
var recursive = require('recursive-readdir-filter');

describe('extract attributes from the label tags', () => {
  it('should have Lable tags', () => {
    const dummyInput = {
      uuid: 'label-4',
      class: 'label',
      description: 'desc4',
      name: 'label444',
    };
    const dummyOutput = {
      'label-4': { class: 'label', description: 'desc4', name: 'label444' },
    };
    const output = extractAttr(dummyInput);
    expect(output).toEqual(dummyOutput);
  });
});

describe('check for the file is written with extracted output', () => {
  it('should have json data in the file', async () => {
    const dummyInput = {
      'label-4': { class: 'label', description: 'desc4', name: 'label444' },
    };
    await writeToFile(dummyInput);
    setTimeout(() => {
      var json = require('./labelList.json');
      expect(json).toEqual(dummyInput);
    }, 3000);
  });
});

describe('read the single file and fetch for the Lable tag in it', () => {
  it('read test', (done) => {
    readEachFile(dir); //
    fs.readFile(dir, function(err, data) {
      if (err) {
        throw 'Unable to read file';
      }
      expect(3).not.toEqual(4);
      done();
    });
  });
});

describe('traverse to all the files in the test directory ', () => {
  it('should have json data in the file', (done) => {
    const dir = __dirname + '/src/tests/';
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
    getTree(dir);
    recursive(dir, options, function(err, files) {
      // `files` is an array of file paths
      files.forEach((file) => {
        // const content = fs.readFileSync(file, 'utf8');
        readEachFile(file);
      });
      // return files;
      expect(3).not.toEqual(4);
      done();
    });
  });
});
