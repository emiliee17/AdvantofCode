import * as fs from 'fs';

const input = fs.readFileSync("input.txt",'utf-8').split('\n\n');
const input1= input.map((x)=>x.split('\n').map(Number));
const calories =input1.map((x)=>x.reduce((acc,curr)=> acc+curr));
//Part_One:

function compare(){
    let max=calories[0];
    calories.forEach((x)=> {if(x>max) {max=x;}})
    return max;
}
console.log(compare());

//Part_Two:

function compare2(){
    let max=[0,0,0];
    calories.forEach((x)=> {if(x>max[0]) { max[2]= max[1] ; max[1] = max[0] ;max[0]=x } else{if(x>max[1]){ max[2]=max[1]; max[1]=x} else {if(x>max[2]){max[2]=x}}}} )
    return max;
}

//console.log(compare2());
const sum= compare2().reduce((acc,curr)=>acc+curr);

console.log(sum);

