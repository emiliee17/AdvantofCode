import * as fs from 'fs';

const input = fs.readFileSync("data/input3.txt",'utf-8').split("\n");


// Part_one:
const taille =input.map((x)=> (x.length));
const first_compartement= input.map((x)=>x.slice(0,((x.length)/2)));
const second_compartment= input.map((x)=>x.slice(((x.length)/2),x.length));


let result =[];
for (let w=0; w<input.length;w++){
    for (let i=0;i<taille[w]/2;i++){
        for(let j=0;j<taille[w]/2;j++){

            if (first_compartement[w][i]===second_compartment[w][j]){
                result[w]=first_compartement[w][i];
            }
        }
    }
}
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const Uppercase = alpha.map((x) => String.fromCharCode(x));
const Lowercase= Uppercase.map(x=>x.toLowerCase());

const concat=Lowercase.concat(Uppercase);

function final(){
    const result1= result.map((x)=>concat.findIndex(element=> element===x)+1);
    return result1.reduce((acc,curr)=>acc+curr);
}
console.log('Réponse 1:'+final());

// Part_Two: 

function triple(){
    for (let i=0;i<(input.length)/3;i++){
        const triple=input.slice(i*3,i*3+3);
    } 
    return triple ;   
}


let result2 =[];

for (let i=0;i<(input.length)/3;i++){
    let triple1= input.slice(i*3,i*3+3);
    let taille1 =triple1.map((x)=> (x.length));
    let u=0;

    let j=0;
    while(j<taille1[0] && u===0){
        if (triple1[1].includes(triple1[0][j])){
            if (triple1[2].includes(triple1[0][j])){
                result2.push(triple1[0][j]);
                u=1;
            }
        }   
        j++;            
    }
    
}
   

function final2(){
    const result1= result2.map((x)=>concat.findIndex(element=> element===x)+1);
    return result1.reduce((acc,curr)=>acc+curr);
}
console.log('Réponse 2:'+final2());

    