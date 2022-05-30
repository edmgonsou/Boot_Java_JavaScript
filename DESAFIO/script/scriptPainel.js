import { clientes } from "./modulo/clientes.js";

window.onload = function () {

    const aClientes = document.querySelector("#clientes");
    const aProdutos = document.querySelector("#produtos");
    const aPedidos = document.querySelector("#pedidos");

    const fecharCli = document.querySelector("#btnFechCli");
    const fecharProd = document.querySelector("#btnFechProd");
    const fecharPed = document.querySelector("#btnFechPed");

    aClientes.addEventListener('click', () => {
        document.getElementById("cli").style.display = "block";
        document.getElementById("prod").style.display = "none";
        document.getElementById("ped").style.display = "none";

        function cliente() {
            const avanca = document.querySelector("#btnAvanc");
            const codCliente = document.querySelector("#codCliente");
            const nomeCliente = document.querySelector("#nomeCliente");
            const dataCadCli = document.querySelector("#dataCadCli");

            codCliente.value = clientes[0].codCliente;
            nomeCliente.value = clientes[0].nomeCliente;
            dataCadCli.value = clientes[0].dataCadCli;            
               
            for (let cli of clientes) {
                avanca.addEventListener('click', () => {
                    for (let regist in cli) {
                        console.log(cli)

                        if (document.querySelector(`#${regist}`)) {
                            document.querySelector(`#${regist}`).value = cli[regist];

                        }


                    }
                })
            }
        }
        cliente();
    });
    aProdutos.addEventListener('click', () => {
        document.getElementById("cli").style.display = "none";
        document.getElementById("prod").style.display = "block";
        document.getElementById("ped").style.display = "none";
    })
    aPedidos.addEventListener('click', () => {
        document.getElementById("cli").style.display = "none";
        document.getElementById("prod").style.display = "none";
        document.getElementById("ped").style.display = "block";
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
