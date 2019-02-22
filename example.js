const fs = require('fs');
const { getTree } = require('./dist/jsx-to-simple-ast.cjs.js');


// const content = fs.readFileSync(__dirname + '/Welcome/index.js', 'utf8');
// const result = getTree(content);
// console.log(JSON.stringify(result));

var dir = __dirname + '/src/';

var result = [];
fs.writeFile('myfile.json', JSON.stringify(result, null, "\t"), (err) => {
  if (err) throw err
  console.log('empty file created');
  console.log(err);
})
// fs.readdirSync(dir).forEach(function (file, i) {
//     const content = fs.readFileSync(dir+ file, 'utf8');
//     result[i] = getTree(content);      
// });



// fs.readdirSync(dir).forEach(file => {
//     const content = fs.readFileSync(dir+ file, 'utf8');
//     if(getTree(content) != ''){
//         result.push(getTree(content));
//     }

//   });

console.log(__dirname);
  var recursive = require("recursive-readdir-filter");
  var options = {
    filterDir: function (stats) {
        return stats.name !== 'node_modules';
    },
    filterFile: function (stats) {
        return stats.name.match(/\.js$/);
    }
};
 
recursive(dir, options, function (err, files) {
  // `files` is an array of file paths
 
  files.forEach(file => {
    console.log(file);
        const content = fs.readFileSync(file, 'utf8');
        if(file != undefined)
       {
        if(getTree(content) != ''){
          result.push(getTree(content));
          console.log(JSON.stringify(result, null, "\t"));
          fs.writeFile('myfile.json', JSON.stringify(result, null, "\t"), (err) => {
            if (err) throw err
            console.log('The file has been saved!');
            console.log(err);
          })
      }
       }
    
      });

    

  
      
});

  
