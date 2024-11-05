function mapnames() {
    const pessoas = [];
    while (true) {
        let nome = prompt("NOME (ou '-1' para encerrar):");
        if (nome == '-1') {
            break; 
        }
        let idade = parseInt(prompt("IDADE: "));
        
        pessoas.push({ nome: nome, idade: idade });
    }

    const pessoasM = pessoas.map(pessoa => pessoa.nome.toUpperCase());
    console.log(pessoasM);
}