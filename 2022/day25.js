import * as fs from 'fs';


const input = fs.readFileSync("data/input25.txt",'utf-8').split('\n');
const input1=input.map((x)=>x.split(''));



function correspondance(x){
    if (x==='='){
        x=-2;
        return x
    }
    if(x==='-'){
        x=-1;
        return x
    }

}

function sum(s){
    return s.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
);
}

//Part_One: 

function Part_one(){
    let ligne_s=0;
    let s=[];
    let result_decimal;
    let i=0;
    let reste;
    let result=[];

    for (let i=0;i<input.length;i++){
        ligne_s=0;

        for(let j=0;j<input[i].length;j++){
            if((input[i][j]==='=')||(input[i][j]==='-')){
                ligne_s=ligne_s+correspondance(input[i][j])*5**(input[i].length-j-1);
            } else{
                ligne_s=ligne_s+input[i][j]*5**(input[i].length-j-1);
            }
        }
        s.push(ligne_s);
    }
    result_decimal= sum(s);
    while(result_decimal!=0){
        reste=result_decimal%(5**(i+1))/(5**i);
        if((reste===3)||(reste===4)){
            reste=reste-5;
        }
        result_decimal=result_decimal-reste*(5**i);
        if(reste===-2){
            reste='=';
        }
        if(reste===-1){
            reste='-';
        }
        result.push(reste);

        i=i+1;
    
    }
    let result_string = result.reverse().join("");
    return result_string
}

console.log(Part_one());



