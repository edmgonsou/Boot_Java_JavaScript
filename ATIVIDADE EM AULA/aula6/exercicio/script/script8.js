let num1 = prompt("Insira o primeiro número");
let num2 = prompt("Insira o segundo número");
let msg = '';

function verifMaior(a, b) {
    if (a >= b) {
        if (a == b) {
            msg = a + " igual a " + b;
        } else {
            msg = a + " maior que " + b;
        }
    } else {
        msg = a + " menor que " + b;
    }
    console.log(msg);
}
verifMaior(num1, num2);