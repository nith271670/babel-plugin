const getTree = require("./getTree");
const dir = __dirname + '/src/tests';
getTree(dir);


 
setTimeout(traverse,10000)
  
function traverse(){
  var json = require('./labelList.json');
  if(json){
    describe('Get Tree', () => {
      it('should return a proper tree of jsx elements for the welcome component', () => {
        
      
        const result = json;
        console.log(result);
        expect(result).toEqual({
          "label-4": {
            "class": "label",
            "description": "desc4",
            "name": "label444"
          },
          "abc_lab1": {
            "description": "abc_lab11",
            "name": "abc_lab11"
          },
          "abc_lab12": {
            "name": "abc_lab2",
            "description": "abc_lab12"
          }
        });
      });
    });
}

}

