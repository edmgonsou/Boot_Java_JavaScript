window.onload = function(){

    let veiculos = ["Ônibus","Motocicleta","Patinete"];

    const transporte = document.querySelector("#transporte");
    const botao = document.querySelector("#criar");
    
    botao.addEventListener('click', ()=>{       

        for (let lista of veiculos){
            let criarli = document.createElement('li');
            transporte.appendChild(criarli).textContent = lista;
        }

    })

}