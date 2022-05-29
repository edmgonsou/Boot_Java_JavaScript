window.onload = function () {

    const tabu = document.querySelector("#tabuada");
    const botao = document.querySelector("#calcular");
    const resp = document.querySelector("#resposta");


    botao.addEventListener('click', function () {
        let num = Number(tabu.value);
        resp.innerHTML = `TABUADA DO ${num}`;
        if (typeof (num === 'number') && num > 0 && num <= 10) {
            for (let i = 0; i <= 10; i++) {
                let tab = num * i;
                resp.innerHTML += `<br>${num} x ${i} = ${tab}`;
            }
        } else {
            resp.innerHTML = "Valor não aceito";
        }

    })

}