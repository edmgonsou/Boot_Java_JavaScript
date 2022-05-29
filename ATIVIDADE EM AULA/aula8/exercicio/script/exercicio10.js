
let nome = prompt("Qual seu nome");
let altura = prompt("Qual sua altura");
let peso = prompt("Qual seu peso");

(function(n,a,p){ 
    
    let imc = Number(peso) / (Number(altura)*2);
    
    document.write(`Nome: ${n}<br>Altura: ${a}<br>Peso: ${p}<br>IMC: ${imc}`);
})(nome,altura,peso)