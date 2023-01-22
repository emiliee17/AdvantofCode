import { Console } from 'console';
import * as fs from 'fs';

const input = fs.readFileSync("data/input9.txt",'utf-8').split(/[\n]/);
const input1=input.map((x)=>x.split(/[ ]/));

//console.log(input1);

//Part_one: 

const s= [0,0];
let pos_x_T=0;
let pos_y_T=0;
let pos_x_Q=0;
let pos_y_Q=0;
const passage =[];
passage.push(s);
//console.log(passage);
function mov(){
    for (let i=0;i<input1.length;i++){
        if (input1[i][0]==='R'){
            let u=0;
            while (u<input1[i][1]){
                //console.log('Right');
                pos_y_T=pos_y_T+1;
                u++
                if(pos_y_Q===pos_y_T-2 && pos_x_Q===pos_x_T){
                    pos_y_Q=pos_y_Q+1;
                    //console.log(pos_x_Q,pos_y_Q)
                    passage.push([pos_x_Q,pos_y_Q]);
    
                }
                if(pos_y_Q===pos_y_T-2 && pos_x_Q===pos_x_T-1){
                    pos_x_Q=pos_x_Q+1;
                    pos_y_Q=pos_y_Q+1
                    //console.log(pos_x_Q,pos_y_Q)
                    passage.push([pos_x_Q,pos_y_Q]);
                }
                if(pos_y_Q===pos_y_T-2 && pos_x_Q===pos_x_T+1){
                    pos_y_Q=pos_y_Q+1;
                    pos_x_Q=pos_x_Q-1;
                    //console.log(pos_x_Q,pos_y_Q)
                    passage.push([pos_x_Q,pos_y_Q]);
                }
            }
        } 
        if(input1[i][0]==='U'){
            let u=0;
            while (u<input1[i][1]){
                //console.log('Up');
                pos_x_T=pos_x_T-1;
                // console.log(pos_x_T+2,pos_y_T-1);
                // console.log(pos_x_Q,pos_y_Q);
                if(pos_x_Q===pos_x_T+2 && pos_y_Q===pos_y_T){
                    pos_x_Q=pos_x_Q-1;
                    //console.log(pos_x_Q,pos_y_Q)
                    passage.push([pos_x_Q,pos_y_Q]);
    
                }
                if(pos_x_Q===pos_x_T+2 && pos_y_Q===pos_y_T+1){
                    pos_x_Q=pos_x_Q-1;
                    pos_y_Q=pos_y_Q-1
                    //console.log(pos_x_Q,pos_y_Q)
                    passage.push([pos_x_Q,pos_y_Q]);
                }

                // console.log(pos_y_Q===pos_y_T-1);
                if(pos_x_Q===pos_x_T+2 && pos_y_Q===pos_y_T-1){
                    pos_x_Q=pos_x_Q-1;
                    pos_y_Q=pos_y_Q+1;
                    //console.log(pos_x_Q,pos_y_Q)
                    passage.push([pos_x_Q,pos_y_Q]);
                }
                u++;
            }
        }
        if(input1[i][0]==='D'){
            let u=0;
            while (u<input1[i][1]){
                //console.log('Down');
                pos_x_T=pos_x_T+1;
                u++;
                if(pos_x_Q===pos_x_T-2 && pos_y_Q===pos_y_T){
                    pos_x_Q=pos_x_Q+1;
                    //console.log(pos_x_Q,pos_y_Q)
                    passage.push([pos_x_Q,pos_y_Q]);
    
                }
                if(pos_x_Q===pos_x_T-2 && pos_y_Q===pos_y_T-1){
                    pos_x_Q=pos_x_Q+1;
                    pos_y_Q=pos_y_Q+1
                    //console.log(pos_x_Q,pos_y_Q)
                    passage.push([pos_x_Q,pos_y_Q]);
                }
                if(pos_x_Q===pos_x_T-2 && pos_y_Q===pos_y_T+1){
                    pos_x_Q=pos_x_Q+1;
                    pos_y_Q=pos_y_Q-1;
                    //console.log(pos_x_Q,pos_y_Q)
                    passage.push([pos_x_Q,pos_y_Q]);
                }
            }
        }
        if(input1[i][0]==='L'){
            let u=0;
            while (u<input1[i][1]){
                //console.log('Left');
                pos_y_T=pos_y_T-1;
                u++;
                if(pos_y_Q===pos_y_T+2 && pos_x_Q===pos_x_T){
                    pos_y_Q=pos_y_Q-1;
                    //console.log(pos_x_Q,pos_y_Q)
                    passage.push([pos_x_Q,pos_y_Q]);
    
                }
                if(pos_y_Q===pos_y_T+2 && pos_x_Q===pos_x_T-1){
                    pos_x_Q=pos_x_Q+1;
                    pos_y_Q=pos_y_Q-1
                    //console.log(pos_x_Q,pos_y_Q)
                    passage.push([pos_x_Q,pos_y_Q]);
                }
                if(pos_y_Q===pos_y_T+2 && pos_x_Q===pos_x_T+1){
                    pos_y_Q=pos_y_Q-1;
                    pos_x_Q=pos_x_Q-1;
                    //console.log(pos_x_Q,pos_y_Q)
                    passage.push([pos_x_Q,pos_y_Q]);
                }
                
            }
        }
    
    }
    
return (passage);  
}




let array_x =[];


const a=mov();
array_x= a.map((x)=>x.toString());

    
//console.log(array_x);

const count = {};
let somme=0;

array_x.forEach(element => {
  count[element] = (count[element]||0) + 1;
  if(count[element]>1){
    somme=somme+1
  }

});

// 👇️ {one: 3, two: 2, three: 1}
console.log(a.length-somme);


//Part_two:

function createVariables(){
    let pos = [];
    for (let i = 0; i <9; ++i) {
        pos[i] = [0,0];
    }
  
    return pos;
  }
let pos = createVariables();
//console.log(pos);
let passage1=[];
console.log(pos);

function mov1(){
    pos_y_T=0;
    pos_x_T=0;
    for (let i=0;i<input1.length;i++){
        if (input1[i][0]==='R'){
            let u=0;
            while (u<input1[i][1]){
                console.log('Right');
                pos_y_T=pos_y_T+1;
                u++
                for (let n=1;n<9;n++){
                    console.log('hello');
                    if(pos[0][1]===pos_y_T-2 && pos[0][0]===pos_x_T){ 
                        console.log(pos[0][1]);
                        console.log(u);
                        pos[0][1]=pos[0][1]+1;
                        console.log(pos);
                        if(pos[n][1]===pos[n-1][1]-2 && pos[n][0]===pos[n-1][0]){
                            console.log(n);
                            pos[n][1]=pos[n][1]+1;
                            console.log(pos);
                            if(n===8){
                                passage1.push([pos[8][0],pos[8][1]]);

                            }
                        }
                    }
                    if(pos[0][1]===pos_y_T-2 && pos[0][0]===pos_x_T-1){
                        //pos[0][1]=pos[0][1]+1;
                        if(pos[n][1]===pos[n-1][1]-2 && pos[n][0]===pos[n-1][0]-1){
                            pos[n][0]=pos[n][0]+1;
                            pos[n][1]=pos[n][1]+1;
                            if(n===8){
                                passage1.push([pos[8][0],pos[8][1]]);

                            }
                        }
                    }
                    if(pos[0][1]===pos_y_T-2 && pos[0][0]===pos_x_T+1){
                        if(pos[n][1]===pos[n-1][1]-2 && pos[n][0]===pos[n-1][0]-1){
                            pos[n][1]=pos[n][1]+1;
                            pos[n][0]=pos[n][0]-1;
                        //console.log(pos_x_Q,pos_y_Q)
                            if(n===8){
                                passage1.push([pos[8][0],pos[8][1]]);
                            }

                        }
                    }

                }
               
            }
        } 
        if(input1[i][0]==='U'){
            let u=0;
            while (u<input1[i][1]){
                //console.log('Up');
                pos_x_T=pos_x_T-1;
                // console.log(pos_x_T+2,pos_y_T-1);
                // console.log(pos_x_Q,pos_y_Q);
                if(pos_x_Q===pos_x_T+2 && pos_y_Q===pos_y_T){
                    pos_x_Q=pos_x_Q-1;
                    //console.log(pos_x_Q,pos_y_Q)
                    passage1.push([pos_x_Q,pos_y_Q]);
    
                }
                if(pos_x_Q===pos_x_T+2 && pos_y_Q===pos_y_T+1){
                    pos_x_Q=pos_x_Q-1;
                    pos_y_Q=pos_y_Q-1
                    //console.log(pos_x_Q,pos_y_Q)
                    passage1.push([pos_x_Q,pos_y_Q]);
                }

                // console.log(pos_y_Q===pos_y_T-1);
                if(pos_x_Q===pos_x_T+2 && pos_y_Q===pos_y_T-1){
                    pos_x_Q=pos_x_Q-1;
                    pos_y_Q=pos_y_Q+1;
                    //console.log(pos_x_Q,pos_y_Q)
                    passage1.push([pos_x_Q,pos_y_Q]);
                }
                u++;
            }
        }
        if(input1[i][0]==='D'){
            let u=0;
            while (u<input1[i][1]){
                //console.log('Down');
                pos_x_T=pos_x_T+1;
                u++;
                if(pos_x_Q===pos_x_T-2 && pos_y_Q===pos_y_T){
                    pos_x_Q=pos_x_Q+1;
                    //console.log(pos_x_Q,pos_y_Q)
                    passage1.push([pos_x_Q,pos_y_Q]);
    
                }
                if(pos_x_Q===pos_x_T-2 && pos_y_Q===pos_y_T-1){
                    pos_x_Q=pos_x_Q+1;
                    pos_y_Q=pos_y_Q+1
                    //console.log(pos_x_Q,pos_y_Q)
                    passage1.push([pos_x_Q,pos_y_Q]);
                }
                if(pos_x_Q===pos_x_T-2 && pos_y_Q===pos_y_T+1){
                    pos_x_Q=pos_x_Q+1;
                    pos_y_Q=pos_y_Q-1;
                    //console.log(pos_x_Q,pos_y_Q)
                    passage1.push([pos_x_Q,pos_y_Q]);
                }
            }
        }
        if(input1[i][0]==='L'){
            let u=0;
            while (u<input1[i][1]){
                //console.log('Left');
                pos_y_T=pos_y_T-1;
                u++;
                if(pos_y_Q===pos_y_T+2 && pos_x_Q===pos_x_T){
                    pos_y_Q=pos_y_Q-1;
                    //console.log(pos_x_Q,pos_y_Q)
                    passage1.push([pos_x_Q,pos_y_Q]);
    
                }
                if(pos_y_Q===pos_y_T+2 && pos_x_Q===pos_x_T-1){
                    pos_x_Q=pos_x_Q+1;
                    pos_y_Q=pos_y_Q-1
                    //console.log(pos_x_Q,pos_y_Q)
                    passage1.push([pos_x_Q,pos_y_Q]);
                }
                if(pos_y_Q===pos_y_T+2 && pos_x_Q===pos_x_T+1){
                    pos_y_Q=pos_y_Q-1;
                    pos_x_Q=pos_x_Q-1;
                    //console.log(pos_x_Q,pos_y_Q)
                    passage1.push([pos_x_Q,pos_y_Q]);
                }
                
            }
        }
    
    }
    
return passage1;  
}
console.log(mov1());
console.log(input1[0][1]);