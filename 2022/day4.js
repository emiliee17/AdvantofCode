import * as fs from 'fs';

const input = fs.readFileSync("data/input4.txt",'utf-8').split(/[\n]/);
const input1=input.map((x)=>x.split(/[,-]/).map(Number));


//Part_one :
let counter =0;
function step1(){
    input1.map((x)=>{
        if(x[0]<=x[2] && x[1]>=x[3]){
            counter =counter+1;
        } else{
            if(x[0]>=x[2] && x[1]<=x[3] ){
                counter =counter+1;
            }
        }
    })
    return counter;
}

console.log('Réponse 1: ' +step1());


// Part_TWO:

let counter1=0;

function step2(){
    input1.map((x)=>{
        if( x[2]>= x[0] && x[2]<=x[1]){
            counter1=counter1+1;
        }else{
            if(x[0]>=x[2] && x[0]<=x[3]){
                counter1=counter1+1;
            }
        }
    })
    return counter1;
}
console.log('Réponse 2: ' +step2());