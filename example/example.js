const fs = require('fs');
const { getTree } = require('../dist/jsx-to-simple-ast.cjs.js');

// const content = fs.readFileSync(__dirname + '/Welcome/index.js', 'utf8');
// const result = getTree(content);
// console.log(JSON.stringify(result));

var dir = __dirname + '/Welcome/';

var result = [];

// fs.readdirSync(dir).forEach(function (file, i) {
//     const content = fs.readFileSync(dir+ file, 'utf8');
//     result[i] = getTree(content);      
// });


fs.readdirSync(dir).forEach(file => {
    const content = fs.readFileSync(dir+ file, 'utf8');
    if(getTree(content) != ''){
        result.push(getTree(content));
    }

  });

  console.log(JSON.stringify(result, null, "\t"));

  fs.writeFile('myfile.json', JSON.stringify(result, null, "\t"), (err) => {
    if (err) throw err
    console.log('The file has been saved!');
    console.log(err);
  })
