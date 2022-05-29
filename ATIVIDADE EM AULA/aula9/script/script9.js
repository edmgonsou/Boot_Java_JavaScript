//concat() "junta" dois ou mais arrays;
// let nomes = ["Marcelo","Suellen","Rafhael","Edmilson","todos"];
// let nomes2 =["Pedro", "Paulo","Maria","Samanta"];

// let todosOs = nomes.concat(nomes2);

// console.log(todosOs);

// indexof() Procura um determinado elemento dentro do array, retorna uma posição.
// let nomes3 = ["Pedro","Paulo","Maria","Samanta"];

// let busca = "Paulo";
// if(nomes3.indexOf(busca) != (-1)){
//     alert(`Eu encontrei o nome ${busca} e está a posição ${nomes3.indexOf(busca)}`);
// } else{
//     alert(`não encontrei o ${busca}`);
// }
// console.log(nomes3.indexOf("Juma"));

//join() transforma elementos de um array em uma string

// let nomes2 =["Pedro", "Paulo","Maria","Samanta"];

// console.log(nomes2);
// console.log(nomes2.join());

//push() insere elementosno fim do array

// let frutas = ["Uva", "Pera","Jaca","nevascaranga"];
// // frutas.push("Maçã","Laranja");
// // frutas.push("Melancia");

// // console.log(frutas.indexOf("Jaca"));

// let insertFruta = "Amora"
// if(frutas.indexOf() == -1){
//     console.log(`A fruta ${insertFruta} não está na lista`);
//     frutas.push(insertFruta);
// }else{
//     console.log(`A fruta ${insertFruta} já está na lista`);
// }
// console.log(frutas);

//pop() remove o ultimo elemento de um array

// let frutas = ["Uva", "Pera","Jaca","nevascaranga"];

// frutas.pop();
// console.log(frutas);

//reverse() Inverte a ordem dos elementos de um array

// let frutas = ["Uva", "Pera","Jaca","nevascaranga"];

// frutas.reverse();
// console.log(frutas);
// console.log(frutas[0]);

//shift() remove o primeiro elemento de um array

// let frutas = ["Uva", "Pera","Jaca","nevascaranga"];

// frutas.shift();
// console.log(frutas)

//sort() ordena elementos de um array em ordem crescente

// let numeros = [200,2,1,189,67];
// let alfa = ['n', 'e','c','a','b','j'];

// numeros.sort();
// alfa.sort();
// console.log(alfa);

//tostring() converte um array em uma string e retorna uma string

// let frutas = ["Uva", "Pera","Jaca","nevascaranga"];

// console.log(frutas.toString());

//unshift() Insere um elemento no inicio do array

// splice( ) corta ou remove em elemento de um array em um ponto indicado
//agrupa com indexoff

let nomes = ["Mariana","Patati Patatá","Xuxa","Balão Mágico"];

let indice = nomes.indexOf("Balão Mágico");
let novoNomes = nomes.splice(indice,1);//parentes(indice,quantidade de elementos)


console.log(nomes);