function filterpares(numeros){
    return numeros.filter(function(numero){
        return numero % 2 === 0
    });
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const valorpar = filterpares(numeros)
console.log(valorpar)