window.onload = function () {

    var aClientes = document.querySelector("#clientes");
    var aProdutos = document.querySelector("#produtos");
    var aPedidos = document.querySelector("#pedidos");
    
    aClientes.addEventListener('click', () => {           
        document.getElementById("cli").style.display = "block";
        document.getElementById("prod").style.display = "none";
        document.getElementById("ped").style.display = "none"; 
    })
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

}