import * as fs from 'fs';
import { findSourceMap } from 'module';
import { emitKeypressEvents } from 'readline';
import { compileFunction } from 'vm';

const input = fs.readFileSync("data/input21.txt",'utf-8').split('\n');
const input1=input.map((x)=>x.split(/[: ]/));

// let declaration =[];
let declaration2 = new Map();


for (let i=0;i<(input1.length);i++){
    if(isNum(input1[i][2])){
        declaration2.set(input1[i][0],Number(input1[i][2]));
    } else {
        declaration2.set(input1[i][0],[input1[i][2],input1[i][3],input1[i][4]]);
    }
}


// for (let i=0;i<(input1.length);i++){
//     if(isNum(input1[i][2])){
//        declaration.push(input1[i][0],Number(input1[i][2]));
//     } 
// }




function isNum(val){
    return !isNaN(Number(val))
  }


//   let j=0;

// function Part_One2(){


//     while (!isNum(declaration2.get('root'))){
//         if(!isNum(declaration2.get(input1[j][0]))){
//             if(isNum(declaration2.get(input1[j][2]))&& isNum(declaration2.get(input1[j][4]) )){
//                 declaration2.get(input1[j][0],operator(declaration2.get(input1[j][2]),input1[j][3],declaration2.get(input1[j][4])));
//             } 
//     } 
//     }

//     console.log(declaration2.get('root'));

// }

function compute(st){
    let exp=declaration2.get(st);
    if (isNum(exp)){
        return exp
    } else {
        if ((exp[0]===null) || (exp[2]===null)){
            return null
        } else {
            return operator(compute(exp[0]),exp[1],compute(exp[2]))
        }
        
    }
}
function Part_One3(){
    return compute('root')
}


// function Part_One(){

    
//     while (j<(input1.length)){
//         if(!declaration.includes(input1[j][0])){
//             if(declaration.includes(input1[j][2])&& declaration.includes(input1[j][4]) ){
//                 declaration.push(input1[j][0],operator(declaration[declaration.indexOf(input1[j][2])+1],input1[j][3],declaration[declaration.indexOf(input1[j][4])+1]));
//                 j=0;
//             } else {
//                 j=j+1;
//             }
//     } else{
//         j=j+1;
//     }
//     }

//     console.log(declaration[declaration.indexOf('root')+1]);

// }



function operator(x,y,z){
    if(y==='+'){
        return x+z;
    }
    if(y==='-'){
        return x-z;
    }
    if(y==='/'){
        return x/z;
    }
    if(y==='*'){
        return x*z;
    }
}
console.log(Part_One3());

//Part_TWO:

// let declaration1  =[];

// for (let i=0;i<(input1.length);i++){
//     if(isNum(input1[i][2])&& input1[i][0]!='root' && input1[i][0]!='humn'){
//        declaration1.push(input1[i][0],Number(input1[i][2]));
//     } if (input1[i][0]!='humn'){
//         declaration1.push(input1[i][0],0);
//     }
// }

// function Part_Two(){
//     while (j<(input1.length)){
//         if(!declaration1.includes(input1[j][0]) && input1[i][0]!='root'){
//             if(declaration1.includes(input1[j][2])&& declaration1.includes(input1[j][4]) ){
//                 declaration1.push(input1[j][0],operator(declaration1[declaration1.indexOf(input1[j][2])+1],input1[j][3],declaration1[declaration1.indexOf(input1[j][4])+1]));
//                 j=0;
//             } else {
//                 j=j+1;
//             }
//     } else{
//         j=j+1;
//     }
//     }

//     console.log(declaration1[declaration1.length-1]);

// }
let declaration2_res = new Map();
for (let i=0;i<(input1.length);i++){
    if(isNum(input1[i][2])){
        declaration2.set(input1[i][0],Number(input1[i][2]));
    } 
}

function compute2(st){
    if (st==="humn"){
        return null
    } else {
        let exp=declaration2.get(st);
        let comp0;
        let comp2;
        if (isNum(exp)){
            return exp
        } else {
            if ((exp[0]==='humn') || (exp[2]==='humn')){
                return null
            } else {
                comp0=compute2(exp[0]);
                comp2=compute2(exp[2]);
                if (comp0===null || comp2===null){
                    return null
                } else {
                    let resulte=operator(comp0,exp[1],comp2);
                    declaration2_res.set(st,resulte)
                    return resulte
                }
            }
            
        }}
}

function convert_eq(x,comp,op,booll){
    if (booll===0){
        if (op==="+"){
            return x-comp
        }
        if (op==="-"){
            return x+comp
        }
        if (op==="*"){
            return x/comp
        }
        if (op==="/"){
            return x*comp
        }
    }
    if (booll===2){
        if (op==="+"){
            return x-comp
        }
        if (op==="-"){
            return comp-x
        }
        if (op==="*"){
            return x/comp
        }
        if (op==="/"){
            return comp/x
        }
    }
}

function inv_compute(x,st){
    if (st==="humn"){
        return x
    } else {
        let exp=declaration2.get(st);
        let comp0=compute2(exp[0]);
        let comp2=compute2(exp[2]);
        if (comp0===null){
            return inv_compute(convert_eq(x,comp2,exp[1],0),exp[0])
        } else {
            return inv_compute(convert_eq(x,comp0,exp[1],2),exp[2])
        }
    } 
}

function Part_Two(){
    // declaration2.delete("humn");
    let root_exp=declaration2.get("root");
    let humn_dep;
    let not_humn_dep;
    if (compute2(root_exp[0])===null){
        humn_dep=root_exp[0];
        not_humn_dep=root_exp[2];
    } else {
        humn_dep=root_exp[2];
        not_humn_dep=root_exp[0];
    }
    let comp_not_humn_dep=compute2(not_humn_dep);
    // // declaration2.set(humn_dep,comp_not_humn_dep);
    // // let line_with_humn=input1.find(x=>((x[0]==='humn')||(x[2]==='humn')));
    // // declaration2.delete(line_with_humn[0]);
    // // let conv_line_with_humn=convert_eq(line_with_humn);
    // // declaration2.set(conv_line_with_humn[0],[conv_line_with_humn[1],conv_line_with_humn[2],conv_line_with_humn[3]]);
    return inv_compute(comp_not_humn_dep,humn_dep)
}


console.log(Part_Two());
