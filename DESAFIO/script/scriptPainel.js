import { listarCli } from "./modulo/listarCli.js";
import { inserirCli } from "./modulo/inserirCli.js";
import { listarProd } from "./modulo/listarProd.js";
import { inserirProd } from "./modulo/inserirProd.js";
import { buscarCliPed } from "./modulo/buscarCliPed.js";
import { localizarProd } from "./modulo/localizarProd.js";
import { clientes } from "./modulo/clientes.js";

window.onload = function () {    

    const aClientes = document.querySelector("#clientes");
    const aProdutos = document.querySelector("#produtos");
    const aPedidos = document.querySelector("#pedidos");

    const fecharCli = document.querySelector("#btnFechCli");
    const fecharProd = document.querySelector("#btnFechProd");
    const fecharPed = document.querySelector("#btnFechPed");

    const avanca = document.querySelector("#btnAvanc");
    const retroceder = document.querySelector("#btnRetro");

    const codCliente = document.querySelector("#codCliente");
    const nomeCliente = document.querySelector("#nomeCliente");
    const dataCadCli = document.querySelector("#dataCadCli");

    const btnNovo = document.querySelector("#btnCliNov");
    const btnSalvar = document.querySelector("#btnCliSalv");

    aClientes.addEventListener('click', () => {
        document.getElementById("cli").style.display = "block";
        document.getElementById("prod").style.display = "none";
        document.getElementById("ped").style.display = "none";
        
        listarCli(codCliente, nomeCliente, dataCadCli, avanca, retroceder);
        inserirCli(btnNovo, btnSalvar);
        
    });
    aProdutos.addEventListener('click', () => {
        document.getElementById("cli").style.display = "none";
        document.getElementById("prod").style.display = "block";
        document.getElementById("ped").style.display = "none";
        listarProd();
        inserirProd();
    })
    aPedidos.addEventListener('click', () => {
        document.getElementById("cli").style.display = "none";
        document.getElementById("prod").style.display = "none";
        document.getElementById("ped").style.display = "block";

        buscarCliPed();
        localizarProd();
    })

    fecharCli.addEventListener('click', () => {
        document.getElementById("cli").style.display = "none";
    })
    fecharProd.addEventListener('click', () => {
        document.getElementById("prod").style.display = "none";
    })
    fecharPed.addEventListener('click', () => {
        document.getElementById("ped").style.display = "none";
    })

}
