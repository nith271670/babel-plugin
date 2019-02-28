// import {getTree} from './label_extractor';
import { welcomeComponent, customComponent } from './src/tests/constants';
const getTree = require('./label_extractor');
describe('Get Tree', () => {
  const babelParser = require('@babel/parser');
  it('should return a proper tree of jsx elements for the welcome component', () => {
    const dir = __dirname + '/src/';
    console.log(dir);

    const result = getTree(dir);
    console.log(result);

    expect(result).toEqual([
      {
        'label-4': {
          class: 'label',
          description: 'desc4',
          name: 'label444',
        },
      },
    ]);
  });

  xit('should return a proper tree of jsx elements for the welcome component', () => {
    const result = getTree(customComponent);
    expect(result).toEqual([
      {
        children: [
          {
            children: [
              { children: [], name: 'p' },
              {
                children: [{ children: [], name: 'span' }],
                name: 'TestComponent',
              },
            ],
            name: 'div',
          },
          { children: [], name: 'h1' },
        ],
        name: 'div',
      },
    ]);
  });
});
