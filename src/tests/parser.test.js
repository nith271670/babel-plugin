import { getTree } from '../parser';
import { welcomeComponent, customComponent } from './constants';

describe('Get Tree', () => {
  const babelParser = require('@babel/parser');
  it('should return a proper tree of jsx elements for the welcome component', () => {
    const result = getTree(welcomeComponent, babelParser);
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
