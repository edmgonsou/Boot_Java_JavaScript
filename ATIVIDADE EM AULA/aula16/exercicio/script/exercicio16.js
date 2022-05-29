window.onload = function(){

    const num1 = document.querySelector("#valor1");
    const num2 = document.querySelector("#valor2");
    const result = document.querySelector("#resultado");

    num2.addEventListener('blur',function(){
        result.value = Number(num1.value) + Number(num2.value);
    })

}