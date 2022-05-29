let Frutas =[
    {
        fruta : 'Melancia',
        preço : 7.20
    },
    {
        fruta : 'Banana',
        preço : 3.50
    },
    {
        fruta : 'Maça',
        preço : 4.80
    },
    {
        fruta : 'Laranja',
        preço : 2.75
    },
    {
        fruta : 'Pera',
        preço : 6.5
    },
]
Frutas.push(
    {
        fruta: 'Limão',
        preço: 2.50
    }
)

let lista = (produto)=>{
    let total=0;
    for (let propriedade of produto){
        document.write("<br>")
    for (let itens in propriedade){        
        document.write(`${itens}.....: ${propriedade[itens]}<br>`)
       
    }
    total = total + propriedade.preço;
       
    }
    document.write(`<br>Total.....R$ ${total}`);
}

lista(Frutas);
