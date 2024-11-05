async function somarComDelay(n1,n2){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n1 + n2);
},1000);
});
}
somarComDelay(2, 3)
.then((resultado) => {
    console.log("Primeira soma:", resultado); 
    return somarComDelay(resultado, 5); 
})
.then((resultadoFinal) => {
    console.log("Resultado final:", resultadoFinal); 
})
.catch((err) => {
    console.error("Erro:", err);
});