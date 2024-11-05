function operator(num1, num2, operacao) {
    return operacao(num1, num2);
}
function soma(a, b) {
    return a + b;
}
function multi(a, b) {
    return a * b;
}
function div(a, b) {
    if (b === 0) {
        console.log("Erro: Divisão por zero");
        return null;
    }
    return a / b;
}

const num1 = parseFloat(prompt("Primeiro número:"));
const num2 = parseFloat(prompt("Segundo número:"));


const resulSoma = operator(num1, num2, soma);
console.log(`Soma: ${resulSoma}`);
const resulMulti = operator(num1, num2, multi);
console.log(`Multiplicação: ${resulMulti}`);
const resulDiv = operator(num1, num2, div);
if (resulDiv !== null) {
    console.log(`Divisão: ${resulDiv}`);
}