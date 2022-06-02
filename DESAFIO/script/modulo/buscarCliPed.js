import { clientes } from "./clientes.js";

const codCliPed = document.querySelector("#codCliPed");
const nomeCliPed = document.querySelector("#nomeCliPed");

function buscarCliPed(){
    codCliPed.addEventListener('keydown',(e)=>{
        if(e.key == "Tab"){
            nomeCliPed.value = clientes[codCliPed.value-1].nomeCliente;
        }
    })

}
export{buscarCliPed};