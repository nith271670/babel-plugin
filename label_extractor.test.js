// const getTree = require("./getTree");
const {
  getTree,
  readEachFile,
  extractAttr,
  writeToFile,
} = require('./getTree');
const dir = __dirname + '/src/tests/constants.js';
var mock = require('mock-fs');
var http = require('http');
var path = require('path');

const dummyOutput = {
  'label-4': {
    class: 'label',
    description: 'desc4',
    name: 'label444',
  },
};

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
    // readEachFile(dir);
    // getTree(__dirname + '/src/tests/')
  });
});
describe('read the single file and fetch for the Lable tag in it', () => {
  it('should read each file', async () => {
    const dummyInput = {
      'label-4': { class: 'label', description: 'desc4', name: 'label444' },
    };
    await writeToFile(dummyInput);
    setTimeout(() => {
      var json = require('./labelList.json');
      expect(json).toEqual(dummyInput);
    }, 3000);
    // readEachFile(dir);
    // getTree(__dirname + '/src/tests/')
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
    // readEachFile(dir);
    // getTree(__dirname + '/src/tests/')
  });
});
