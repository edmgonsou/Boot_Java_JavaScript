let str =`Qualquer conteudo`;
let str2 = `Uma outra string ${str}`;
console.log(str2)

//Arrays uma coleção de dados.

const frutas = ["uva","banana","laranja","melancia"];

let gosto = `Eu gosto de ${frutas[0]}`;

console.log(gosto);

console.log(frutas);

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

const pessoa = [
    "José",
    23,
    "Solteiro",
    "bola",
    1.7,
    cores = ["azul","preto","vermelho","salmão"]
];
let key = 1;

key++;

console.log(pessoa.length);

console.log(pessoa[5][key]); //array bidimecional

(function(){
const jose = `Meu nome é ${pessoa[0]} eu tenho ${pessoa[1]} anos e sou ${pessoa[2]}
eu tambem gosto de jogar ${pessoa[3]} e tenho ${pessoa[4]} de altura`;
document.write(jose);
})()

