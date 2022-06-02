import { clientes } from "./clientes.js";

function listarCli(codCliente, nomeCliente, dataCadCli, avanca, retroceder) {
    let indice = 0;
    codCliente.value = clientes[indice].codCliente;
    nomeCliente.value = clientes[indice].nomeCliente;
    dataCadCli.value = clientes[indice].dataCadCli;
    
    avanca.addEventListener('click', () => {
        indice++;
        if (indice > clientes.length) {
            alert("Fim do Cadastro");            
        } else {
            codCliente.value = clientes[indice].codCliente;
            nomeCliente.value = clientes[indice].nomeCliente;
            dataCadCli.value = clientes[indice].dataCadCli;
        }

    })
    retroceder.addEventListener('click', () => {
        indice--;
        if (indice < 0) {
            alert("Primeiro Cliente do Cadastro");

        } else {
            codCliente.value = clientes[indice].codCliente;
            nomeCliente.value = clientes[indice].nomeCliente;
            dataCadCli.value = clientes[indice].dataCadCli;
        }

    })
}
export{listarCli};