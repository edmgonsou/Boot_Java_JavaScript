
// let m = false;

// //console.log(typeof(m));

// if (typeof (m) === 'number') {
//     console.log(`O dado informado é um number ${m}`);
// } else {
//     console.log(`O dado informado não é um number ${m}: ${typeof(m)}`);
// }

window.onload = function(){
    //alert("olá");

    const botao = document.getElementById('btn');
    const txtBox = document.querySelector("#txtBox");
    const caixa = document.querySelector("#caixa");
    
    botao.addEventListener('click',function(){
        caixa.innerHTML += ' ' + txtBox.value + ' ';
    })
}