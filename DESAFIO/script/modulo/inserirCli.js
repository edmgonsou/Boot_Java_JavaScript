import { clientes } from "./clientes.js";

function inserirCli(btnNovo, btnSalvar) {

    btnNovo.addEventListener('click', () => {
        codCliente.value = clientes.length + 1;
        nomeCliente.value = '';
        dataCadCli.value = new Date().toLocaleDateString();
    })

    btnSalvar.addEventListener('click', () => {
        clientes.push({
            codCliente: codCliente.value,
            nomeCliente: nomeCliente.value,
            dataCadCli: dataCadCli.value,
        })
        codCliente.value = clientes[0].codCliente;
        nomeCliente.value = clientes[0].nomeCliente;
        dataCadCli.value = clientes[0].dataCadCli;
        alert("Cliente inserido com sucesso");
    })

}
export { inserirCli };
