window.onload = function () {

    const usuario = document.querySelector("#user");
    const senha = document.querySelector("#pws");
    const botao = document.querySelector("#btn");

    function validar(dados) {

        for (let us of dados) {

            if (usuario.value == us.user) {
                if (senha.value == us.pws) {
                    location.replace("./painel.html");
                } else {
                    alert("Usuário ou senha inválida");
                }
            }
        }

    }

    let users = async function () {

        let caminho = `./usuarClienProd/usuario.json`;

        try {
            let dadosUsu = await fetch(caminho);
            let dadosJson = await dadosUsu.json();
            validar(dadosJson.users);
        }
        catch (error) {
            alert(error);
        }
    }
    botao.addEventListener('click', () => {

        users();

    })
}
