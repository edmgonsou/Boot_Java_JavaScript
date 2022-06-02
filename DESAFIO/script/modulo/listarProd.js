import { produtos } from "./produtos.js";

const codProduto = document.querySelector("#codProduto");
const descProduto = document.querySelector("#descProduto");
const precoProduto = document.querySelector("#precoProduto");
const qtdEstoqueProd = document.querySelector("#qtdEstoqueProd");

const ProdRetro = document.querySelector("#btnProdRetro");
const ProdAvanc = document.querySelector("#btnProdAvanc");

function listarProd() {
    let indice = 0;
    codProduto.value = produtos[indice].codProduto;
    descProduto.value = produtos[indice].descProduto;
    precoProduto.value = produtos[indice].precoProduto;
    qtdEstoqueProd.value = produtos[indice].qtdEstoqueProd;

    ProdAvanc.addEventListener('click', () => {
        indice++;
        if (indice > produtos.length) {
            alert("Fim do Cadastro");
        } else {
            codProduto.value = produtos[indice].codProduto;
            descProduto.value = produtos[indice].descProduto;
            precoProduto.value = produtos[indice].precoProduto;
            qtdEstoqueProd.value = produtos[indice].qtdEstoqueProd;
        }

    })
    ProdRetro.addEventListener('click', () => {
        indice--;
        if (indice < 0) {
            alert("Primeiro Produto do Cadastro");

        } else {
            codProduto.value = produtos[indice].codProduto;
            descProduto.value = produtos[indice].descProduto;
            precoProduto.value = produtos[indice].precoProduto;
            qtdEstoqueProd.value = produtos[indice].qtdEstoqueProd;
        }

    })
}
export { listarProd };