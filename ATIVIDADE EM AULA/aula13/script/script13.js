
// for (let i = 0; i <= 10; i++){
//     console.log(`O valor da iteração é ${i}`);
// }

// let Pessoas = {
//     nome: 'Steven Roger',
//     idade: 90,
//     heroi: 'Capitão America'
// }

// for (let propriedades in Pessoas) {
//     console.log(Pessoas[propriedades]);
// }

//array sociativo
//arr = ["nome"=>"Marcelo"]
//arr[nome]


// let frutas = ['Melancia', 'Manga', 'Banana', 'Uva'];

// for (let nomeFrutas of frutas) {
//     console.log(nomeFrutas);
// }

let Heroes = [
    {
        identidadeSecreta: 'Steven Roger',
        heroi: 'Capitão America'
    },
    {
        identidadeSecreta: 'Tony Stark',
        heroi: 'Homen de Ferro'
    }
]
Heroes.push({
    identidadeSecreta: 'Diana',
    heroi: 'Mulher Maravilha'
});
Heroes.push({
    identidadeSecreta: 'Bruce Benner',
    heroi: 'Hulk'
})

for (let marvel of Heroes) {
    //console.log(marvel);
    for (let m in marvel){
        console.log(`${m} - ${marvel[m]}`);
    }
}
