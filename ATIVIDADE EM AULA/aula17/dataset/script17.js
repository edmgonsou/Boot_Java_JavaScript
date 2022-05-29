window.onload = function(){

    const btnBuscar = document.querySelector("#btnBuscar");
    const txtNomeCli = document.querySelector("#nomeCliente");

    btnBuscar.addEventListener('click', function(){
        let datasetCliente = txtNomeCli.dataset.codigo;
        let datasetStatus = txtNomeCli.dataset.statuscli;
        console.log(datasetCliente);
        console.log(datasetStatus);
    })

}