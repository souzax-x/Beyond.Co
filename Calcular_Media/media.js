function calcularMedia() {
    const nums = [];
    while (true) {
        let notas = parseFloat(prompt("Digite as notas (ou '-1' para encerrar):"));
        if (notas === -1) {
            break;
        }
    nums.push(notas);
}
    const soma = nums.reduce((acumulador, num) => acumulador + num, 0);
    const media = soma / nums.length;
    console.log(media);
}