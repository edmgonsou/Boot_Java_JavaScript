
let nomes =['Edmilson','Luciana','Mariana','Josy','Fabiana'];

const modNomes = (name, novoNome, index)=>{

    document.write(`Quantidade de elementos do array...: ${name.length}<br>Você escolheu o índice ${index}
     que é o elemento ${name[index]}<br>O nome ${novoNome} foi inserido no array<br> ${name.push(novoNome)}
      A quantidade atual de elementos do array é de..: ${name.length}<br><br>`);

}
modNomes(nomes, "Suzana", 4);
modNomes(nomes, "Cristina", 2);
