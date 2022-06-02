import { produtos } from "./produtos.js";

const codProdPed = document.querySelector("#codProdPed");
const nomeProdPed = document.querySelector("#nomeProdPed");
const precoProdPed = document.querySelector("#precoProdPed");
const quantProdPed = document.querySelector("#quantProdPed");
const btnLancar = document.querySelector("#btnLancar");

const mostraTotalCompra = document.querySelector("#mostraTotalCompra");

const listItem = document.querySelector("#listItem");

let pedido = [];

function localizarProd() {
    codProdPed.addEventListener('change', () => {

        let i = codProdPed.value;

        for (let prod of produtos) {
            if (i == prod.codProduto) {
                nomeProdPed.value = prod.descProduto;
                precoProdPed.value = prod.precoProduto;
            }
        }
    })

    btnLancar.addEventListener('click', () => {

        const verifica = pedido.find(item => {
            return item.item == codProdPed.value;
        })

        if (quantProdPed.value > produtos[codProdPed.value - 1].qtdEstoqueProd || quantProdPed.value === '' || quantProdPed.value <= 0) {
            alert("Quantidade acima do estoque ou invalido");
            quantProdPed.value = '';
        } else {
            
            if (!verifica) {
                pedido.push({
                    item: codProdPed.value,
                    descricao: nomeProdPed.value,
                    preco: precoProdPed.value,
                    quantidade: quantProdPed.value,
                    subtotal: precoProdPed.value * quantProdPed.value
                })
                alert("Produto adcionado com sucesso");
                listItem.innerHTML = '';

                pedido.forEach((item) => {

                    const listItem = document.querySelector("#listItem");

                    const tr = document.createElement("tr");
                    const tdItem = document.createElement("td");
                    const tdDecr = document.createElement("td");
                    const tdPreco = document.createElement("td");
                    const tdQtd = document.createElement("td");
                    const tdSub = document.createElement("td");

                    tdItem.textContent = item.item;
                    tdDecr.textContent = item.descricao;
                    tdPreco.textContent = item.preco;
                    tdQtd.textContent = item.quantidade;
                    tdSub.textContent = item.subtotal;

                    tr.appendChild(tdItem);
                    tr.appendChild(tdDecr);
                    tr.appendChild(tdPreco);
                    tr.appendChild(tdQtd);
                    tr.appendChild(tdSub);
                    listItem.appendChild(tr);

                })
            } else {
                alert("Produto Já adcionado na Lista");
            }
            let subtotal = 0;

            subtotal = pedido.reduce((subtotal, i) => {
                return subtotal + i.preco * i.quantidade;
            }, subtotal)
            mostraTotalCompra.value = subtotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        }

    })

}

export { localizarProd };

