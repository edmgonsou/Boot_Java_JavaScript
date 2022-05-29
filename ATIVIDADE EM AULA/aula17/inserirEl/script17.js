window.onload = function(){

    const cxProduto = document.querySelector("#produto");
    const btnCadastrar = document.querySelector("#cadastrar");
    const lista = document.querySelector("#listaDeProdutos");

    btnCadastrar.addEventListener('click', function(){

        let criarli =document.createElement('li');
        lista.appendChild(criarli).setAttribute('class', 'listaDeFrutas');
        lista.appendChild(criarli).textContent = cxProduto.value;
    })

}