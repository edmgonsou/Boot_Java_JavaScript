
//incremento

let n = 1;
n++;
n++;
n++;
n--;
//document.write(n);

let frutas = ['Melancia','Banan','Uva','Nevascaranga'];
frutas.push('Jabuticaba');
frutas.push('Maça');
console.log(frutas[3]);


// for (let i=0; i<frutas.length; i++){
//     console.log(frutas[i]);
// };

for (let i=frutas.length -1; i>=0; i--){
    console.log(frutas[i])
}

