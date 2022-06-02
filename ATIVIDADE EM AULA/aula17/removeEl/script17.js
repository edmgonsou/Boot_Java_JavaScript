window.onload = function () {

    function calcular(idProduto, resultado) {
        const preco = document.querySelectorAll(`#${idProduto} > li`);
        const valorResult = document.querySelector(`#${resultado}`);
console.log(preco[0].dataset.preco)
        let totalzinho = 0;
        for (let i of preco) {
            totalzinho += Number(i.dataset.preco);
            
        }
        valorResult.value = totalzinho;
    }

    function removerProdutos(id) {
        const lista = document.querySelectorAll(`#${id} > li`);

        for (let produto of lista) {
            produto.addEventListener('click', function () {
                produto.remove();
                calcular('produto', 'somaTotal')
            })
        }
    }
    removerProdutos('produto');
    calcular('produto', 'somaTotal')

}