// match() O método match pocura uma palavra em uma string
//g/i/m

let nome = "Marcelo da Silva";

//console.log(nome.match('M'));

//search() esse método procura pela ocorrência e retorna a posição na cadeia da string

//console.log(nome.search(/m/i));
//console.log(nome[0]);

//replace() Este método substitui uma string por outra, simples assim, ele pesquisa

// let str = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus nemo dolore, excepturi molestiae labore corrupti itaque hic tempora quos natus asperiores repudiandae maiores exercitationem culpa minus cupiditate magni nobis! Beatae.';

// let strOutra = str.replace(/sit/gi,'não');
// console.log(strOutra);

//lacaleCompare() efetua comparação entre duas string

// let gato = 'gato';
// let outroGata = 'gato';

// console.log(gato.localeCompare(outroGata));

//tostring()o uso da toString irá converter um valor em uma string

// let num = Number('10');
// console.log(num.toString());

//toLowerCase() faz a conversão de uma string inteira em minúscula(caixa baixa)

// let str = 'Lorem Ipsum Dolor sit amet consectetur, adipisicing elit. Doloribus nemo dolore, excepturi molestiae labore corrupti itaque hic tempora quos natus asperiores repudiandae maiores exercitationem culpa minus cupiditate magni nobis! Beatae.';

// console.log(str.toLowerCase());
let gato = 'gato';
let outroGata = 'GATO';

let cat1 = gato.toLowerCase();
let cat2 = outroGata.toLowerCase();

console.log(cat1.localeCompare(cat2));

//toUpperCase() faz a conversão de uma string inteira em maiuscula(caixa alta)

// let str = 'Lorem Ipsum Dolor sit amet consectetur, adipisicing elit. Doloribus nemo dolore, excepturi molestiae labore corrupti itaque hic tempora quos natus asperiores repudiandae maiores exercitationem culpa minus cupiditate magni nobis! Beatae.';

// console.log(str.toUpperCase());

//trim() faz a remoção de espaços antes e depois da string especifica

// let str = '                               Lorem Ipsum Dolor sit amet consectetur, adipisicing elit. Doloribus nemo dolore, excepturi molestiae labore corrupti itaque hic tempora quos natus asperiores repudiandae maiores exercitationem culpa minus cupiditate magni nobis! Beatae.';

// console.log(str.trim());              

//NaN
//Quando uma string for passada par Number(), parseInt ou parseFloat e
//não consiga efetuar a converção será retornando NaN (Not as Number)
//isNaN()

// let num = 'oooo';
// console.log(isNaN(num));
// if(!isNaN(num)){
// console.log('Isto é um número')
// }else{
//     console.log('Isto não é um numero');
// }

//toFixed() analisa o valor flutuante e retorna uma STRING conforme o parâmetro de casas

let valor = 2.456;

console.log(valor.toFixed(2));

//toLocaleString() irá retornar uma string com um representação da moeda definida como no parâmetro currency.
//toLocaleString('pt-BR',{style: 'currency' , currency:'BRL'})

console.log(valor.toLocaleString('pt-BR',{style: 'currency' , currency:'BRL'}))