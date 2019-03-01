const getTree = require("./getTree");
const dir = __dirname + '/src/tests';



describe('Get Tree', () => {

it("create the json file", () => { 
var tree = getTree(dir);
console.log(tree);
});

it('json file should contain proper object of all the Label tags present in the files', () => {

  new Promise((resolve, reject) => {
    new Promise((resolve, reject) => {
      http.post('./labelList.json', (err, res) => {
      if (err) {
      reject(err);
      } else {
      resolve(res);
      }
      })
      }).then((resolve) => {console.log(resolve)})
      }) 
  //   get('./labelList.json').then(JSON.parse).then(function(response) {
      
  //     const result = response;
  //     console.log(response);
  // expect(result).toEqual({
  //   "label-4": {
  //     "class": "label",
  //     "description": "desc4",
  //     "name": "label444"
  //   },
  //   "abc_lab1": {
  //     "description": "abc_lab11",
  //     "name": "abc_lab11"
  //   },
  //   "abc_lab12": {
  //     "name": "abc_lab2",
  //     "description": "abc_lab12"
  //   }
  // });
  //   })
    })
    
   

    

  
