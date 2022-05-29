window.onload = function () {

    //https://viacep.com.br/ws/${cep}/json/

    function resultadoCep(infCep){
        for(let campo in infCep){
            if(document.querySelector(`#${campo}`)){
                document.querySelector(`#${campo}`).value = infCep[campo];
            }
        }
    }

    let dadosCep = async function (cep) {

        let url = `https://viacep.com.br/ws/${cep}/json/`;
        
        try {
            let dadosFetch = await fetch(url);
            let dadosJson = await dadosFetch.json();
            resultadoCep(dadosJson);
        } catch (error) {
            alert(error);
        }
    }
    // dadosCep('87025646');

    const btnBuscar = document.querySelector("#buscarCep");
    const cxCep = document.querySelector("#numeroCep");

    btnBuscar.addEventListener('click', () => {
        dadosCep(cxCep.value);
    })
}
