function filterpar() {
    const nums = [];
    while (true) {
        let userNums = parseFloat(prompt("Digite as notas (ou '-1' para encerrar):"));
        if (userNums === -1) {
            break;
        }
    nums.push(userNums);
}
    const pares = nums.filter(num => num % 2 === 0);
    console.log(pares);
}