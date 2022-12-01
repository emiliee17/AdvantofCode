import * as fs from 'fs';

const input = fs.readFileSync("input.txt",'utf-8').split('\n\n');
const input1= input.map((x)=>x.split('\n').map(Number));
const calories =input1.map((x)=>x.reduce((acc,curr)=> acc+curr));
const calories_sort=calories.sort(compare);
const top_three_calories=calories_sort.slice(0,3);
const sum= top_three_calories.reduce((acc,curr)=>acc+curr);


console.log(sum);
console.log(input.length);

function compare (a,b){
    if(a>b){
        return -1;

    }else {
        return 1;
    }
}


