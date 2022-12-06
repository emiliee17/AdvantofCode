import * as fs from 'fs';

const input = fs.readFileSync("data/input6.txt",'utf-8').split();


function containsDuplicates(array) {
    if (array.length !== new Set(array).size) {
      return true;
    }
  
    return false;
  }
// Part_One:
function Part_One (){
    let i=1;
    let quadruple=input[0].slice(0,4);
    let result;
    while (containsDuplicates(quadruple)){
            quadruple=input[0].slice(i,i+4);
            result=i+4;
            i++;
        }
    
return result;     
} 

console.log('Réponse 1:'+Part_One());

//Part_Two:



function Part_two (){
    let i=1;
    let table=input[0].slice(0,14);
    let result_1;
    while (containsDuplicates(table)){
            table=input[0].slice(i,i+14);
            result_1=i+14;
            i++;
        }
    
return result_1;     
} 

console.log('Réponse 2:'+Part_two ());


    
         
            





