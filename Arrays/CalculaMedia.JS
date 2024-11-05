let numeros = [10, 15, 20, 15]

let soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0)

let media = soma / numeros.length

console.log(media)