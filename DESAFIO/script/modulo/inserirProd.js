import { produtos } from "./produtos.js";

const ProdNov = document.querySelector("#btnProdNov");
const ProdSalv = document.querySelector("#btnProdSalv");

function inserirProd() {

    ProdNov.addEventListener('click', () => {
        codProduto.value = produtos.length + 1;
        descProduto.value = '';
        precoProduto.value = '';
        qtdEstoqueProd.value = '';

    })

    ProdSalv.addEventListener('click', () => {
        produtos.push({
            codProduto: codProduto.value,
            descProduto: descProduto.value,
            precoProduto: precoProduto.value,
            qtdEstoqueProd: qtdEstoqueProd.value
        })
        codProduto.value = produtos[0].codProduto;
        descProduto.value = produtos[0].descProduto;
        precoProduto.value = produtos[0].precoProduto;
        qtdEstoqueProd.value = produtos[0].qtdEstoqueProd;
        alert("Produto inserido com sucesso");
    })
}
export { inserirProd };
