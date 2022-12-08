import * as fs from 'fs';

const input = fs.readFileSync("data/input8.txt",'utf-8').split('\n');


//Part_one:

const colonne=[];
const ligne=[];

for (let i=0;i<input.length;i++){
    colonne[i]=input.map((x)=>x[i]);
}
for (let j=0;j<input[0].length;j++){
    ligne[j]=colonne.map((x)=>x[j]);
}


let result =edges();
function Part_ONE(){
    for (let l=1;l<input.length-1;l++){
        for( let r=1;r<input[0].length-1;r++){
            if( verif_colonne_haut(l,r) | verif_colonne_bas(l,r) | verif_ligne_droit(l,r) | verif_ligne_gauche(l,r)){
                result=result+1;
            }
        }
    }   
    return result;
}

function verif_colonne_haut(l,r){
    let b = new Boolean(true);
    for (let n=0;n<l;n++){
        if( ligne[n][r]>=ligne[l][r]){
            b=false;
        }
    }
    return b;
}

function verif_colonne_bas(l,r){
    let b = new Boolean(true);
    for (let n=l+1;n<input.length;n++){
        if( ligne[n][r]>=ligne[l][r]){
            b=false;
        }
    }
return b;
}
function verif_ligne_gauche(l,r){
    let b = new Boolean(true);
    for (let n=0;n<r;n++){
        if( ligne[l][n]>=ligne[l][r]){
            b=false;
        } 
    }
    return b;
}

function verif_ligne_droit(l,r){
    let b = new Boolean(true);
    for (let n=r+1;n<input[0].length;n++){
        if( ligne[l][n]>=ligne[l][r]){
            b=false;
        }   
    }
    return b;
}

function edges(){
    let edge =2*(input[0].length);
    edge=edge+(2*input.length-4)
    return edge;
}


console.log('Résultat 1:'+Part_ONE());


//Part_Two:

let result1 =0;
let product=[];
function Part_TWO(){
    for (let l=1;l<input.length-1;l++){
        for( let r=1;r<input[0].length-1;r++){
            const a= verif_colonne_haut1(l,r);
            const b= verif_colonne_bas1(l,r);
            const c= verif_ligne_gauche1(l,r);
            const d= verif_ligne_droit1(l,r);
            product.push(a*b*c*d);
            result1=Math.max(...product);
            }
        }
        return result1;
    }
console.log('Result 2:'+Part_TWO());

function verif_colonne_haut1(l,r){
    let count_haut = 0;
    let n=l-1;
    let y=n;
    while ((n!=-1) &&ligne[l][r]>ligne[n][r] ){
        count_haut=count_haut+1;
        n--;
        y=n;
    }
    if((y!=-1)&&ligne[y][r]>=ligne[l][r] ){
        count_haut = count_haut +1;
    }
    
    return count_haut;
}



function verif_colonne_bas1(l,r){
    let count_bas = 0;
    let n=l+1;
    let y=n;

    while ((n<input.length) && ligne[l][r]>ligne[n][r]){
        ligne[l][r]>ligne[n][r]
         count_bas = count_bas +1;
         n++;
         y=n;
    } 
    
    if((y<input.length)&&ligne[y][r]>=ligne[l][r] && (l!=n)){
        count_bas = count_bas +1;
    }

    return count_bas;
}


function verif_ligne_gauche1(l,r){
    let count_gauche = 0;
    let n=r-1;
    let y=n;

    while ((n!=-1)&&ligne[l][r]>ligne[l][n] ){
        count_gauche = count_gauche +1;
        n--;
        y=n;
    } 

    if(y!=-1 && ligne[l][y]>=ligne[l][r] ){
       count_gauche = count_gauche +1;
    }

    return count_gauche;
}

function verif_ligne_droit1(l,r){
    let count_droit = 0;
    let n=r+1;
    let y=n;
    
    while ((n<input[0].length) && ligne[l][r]>ligne[l][n]){
        count_droit = count_droit +1;
        n++;
        y=n;

    } 
    
    if(y<input[0].length && (l!=n)&&ligne[l][y]>=ligne[l][r]  ){
       count_droit = count_droit +1;
   }

    return count_droit;
}

