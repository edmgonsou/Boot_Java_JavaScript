function teste(){
    let nome = "Edmilson";
    return nome;
}
//console.log(teste());

let msg = (nome)=>{
    return nome;
}
 //console.log(msg('jose'));

 function teste(){
     alert("Estou na function teste");
     return nome;
 }
 //teste();

// (function(produto, preco){
//     alert("O produto é: "+ produto + " e o preço é R$ " + preco);
// })("Biscoito", 5.50);

let v1 = prompt("Digite o valor 1");
let v2 = prompt("Digite o valor 2");
const soma = (valor1, valor2)=>{
    let resultado = Number(valor1) + Number(valor2);
    console.log(resultado);
}
soma(v1, v2)

