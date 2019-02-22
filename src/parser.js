import babelParser from '@babel/parser';

var uuid_exist = false;


 function reduceAstNode(oldNode, currentNode){
  
   let element = {};  
  if(currentNode !=undefined){
   if (currentNode.type === 'JSXElement') {
      if(currentNode.openingElement.name.name == "Label"){
         if(currentNode.openingElement.attributes.length>0){
            
            var uuid;
            let attributes_arr = {};
           
            for(var i = 0;i <currentNode.openingElement.attributes.length; i++){
             
               if(currentNode.openingElement.attributes[i].name.name == 'uuid'){
                    uuid = currentNode.openingElement.attributes[i].value.value;
                   uuid_exist = true;
                   break;
               } 

            }

            if(uuid_exist){
              
                     uuid_exist = false;
                     for(var i = 0;i <currentNode.openingElement.attributes.length; i++){
                        if(currentNode.openingElement.attributes[i].name.name != 'uuid'){
                      
                           attributes_arr[currentNode.openingElement.attributes[i].name.name] = currentNode.openingElement.attributes[i].value.value;
                        }
                     }

                     
                  element = {
                     [uuid]: attributes_arr,
                  };

                 
                     oldNode.push(element);
                    //  console.log(oldNode);

                  
                 
                  
            }

            

         }
      }
   

   
  }
  }

 
  if(currentNode != undefined){
     
  if ('children' in currentNode) {

   currentNode.children.forEach(function (node, i) {
    reduceAstNode(oldNode, node)

    // if(i == currentNode.children.length-1){
    //   saveText( JSON.stringify(oldNode), "filename.json" );
    // }
});


  }
  }


  return oldNode;

 };

export const getTree = (content) => {
  const rawAst = babelParser.parse(content, {
    sourceType: 'module',
    plugins: ['jsx'],
  });
  if(rawAst.program.body.find((astNode) => astNode.type === 'ExportNamedDeclaration',) != undefined)
 {
   const initialAst = rawAst.program.body.find(
      (astNode) => astNode.type === 'ExportNamedDeclaration',
    ).declaration.declarations[0].init.body.body[0].argument;
    return reduceAstNode([], initialAst);
 }
 else{
    return [];
 }

  
};

export default {
  getTree,
};
