import * as fs from 'fs';

const input = fs.readFileSync("data/input2.txt",'utf-8').split(/[\n]/);
const input1 =input.map((x,i)=>x.split(' '));
// Part_One: 

let score =0;
input1.map((x)=>{
     if((x[0]==='A') & (x[1]==='Y')) {
        score=score+8
    } else {
        if((x[0]==='B') & (x[1]==='X')) {
            score=score+1
        } else {
            if((x[0]==='C') & (x[1]==='Z')) {
                score=score+6
            } else {
                if((x[0]==='A') & (x[1]==='X')) {
                    score=score+4
                } else{
                    if((x[0]==='A') & (x[1]==='Z')) {
                        score=score+3
                    } else{
                        if((x[0]==='B') & (x[1]==='Y')) {
                            score=score+5
                        } else {
                            if((x[0]==='B') & (x[1]==='Z')) {
                                score=score+9
                            } else {
                                if((x[0]==='C') & (x[1]==='Y')) {
                                    score=score+2
                                } else {
                                    if((x[0]==='C') & (x[1]==='X')) {
                                        score=score+7}
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })



console.log(score);

// Part_Two:

let score1=0;
input1.map((x)=>{ 
    if((x[0]==='A') & (x[1]==='Y')) {
        score1=score1+4
    } else {
        if((x[0]==='B') & (x[1]==='X')) {
            score1=score1+1
        } else {
            if((x[0]==='C') & (x[1]==='Z')) {
                score1=score1+7
            } else {
                if((x[0]==='A') & (x[1]==='X')) {
                    score1=score1+3
                } else{
                    if((x[0]==='A') & (x[1]==='Z')) {
                        score1=score1+8
                    } else{
                        if((x[0]==='B') & (x[1]==='Y')) {
                        score1=score1+5
                    } else {
                        if((x[0]==='B') & (x[1]==='Z')) {
                            score1=score1+9
                        } else {
                            if((x[0]==='C') & (x[1]==='Y')) {
                                score1=score1+6
                            } else {
                                if((x[0]==='C') & (x[1]==='X')) {
                                    score1=score1+2
                                }}
                        }
                    }
                }
            }
        }
    }}
})

console.log(score1);