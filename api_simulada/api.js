function APISimulad() {
    return new Promise((resolvido, rejeitado) => {
        setTimeout(() => {
            const sucesso = Math.random() >= 0.3;
    
            if (sucesso) {
                resolvido({ nome: "Mario", idade: 24 });
            } else {
                rejeitado("Falha ao obter os dados da API.");
            }
        }, 2000);
    });
}
async function buscarDadosDaAPI() {
    try {
        const resultado = await APISimulad();
        console.log("Dados recebidos com sucesso:", resultado);
    } catch (erro) {
        console.error("Ocorreu um erro:", erro);
    }
}
    
buscarDadosDaAPI();