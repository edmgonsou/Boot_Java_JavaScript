let palavra = prompt("Insire uma palavra qualquer");

const analise = (str)=>{
    document.write(`Esta palavra tem ${str.length} carácteres<br>`);
    let str2 = str.toUpperCase();
    document.write(`A palavra ${str} ficou ${str2}<br>`);
    document.write(`A letra ${str2[2]} é o 3º carater da palavre ${str2}<br>`);
    document.write(`${str2} ficou ${str2.replace(str2[2], 'X')}<br>`);
    
}
analise(palavra);