let valor = prompt("Digite um valor entre 1 a 10");

let tabuada = (num)=>{
    console.log(`TABUADA DO ${num}`);
    if (typeof(num === 'number') && num > 0 && num <= 10 ){
        for(let i=0; i<=10; i++){
            tab = num * i;
            console.log(`${num} x ${i} = ${tab}`);
        }
    }else{
        console.log("Valor não aceito");
    }
}
tabuada(Number(valor));