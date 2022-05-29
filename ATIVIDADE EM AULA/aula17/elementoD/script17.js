window.onload = function(){

    let produtos = [
        {descricao: 'Biscoito Mirabel', preco: 2.20},
        {descricao: 'Marmelada', preco: 3.20},
        {descricao: 'Sabonete', preco: 4.20},
        {descricao: 'Pamonha', preco: 2.80},
    ];

    const listaProdutos = document.querySelector("#listaProdutos");
    const total = document.querySelector("#total");

    (()=>{
        let soma = 0;
        for (let pro of produtos){
            const filhoLi = document.createElement('li');
            for(let listaP in pro){
                if(listaP == 'preco'){
                    listaProdutos.appendChild(filhoLi).setAttribute('data-preco', pro[listaP]);
                    soma += pro[listaP];
                } else{
                listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`;
                }
            }
        }
        total.value = soma.toFixed(2);
    })()


}