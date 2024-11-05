function search() {
    return new Promise((resolve, reject) => {        
       
      setTimeout(() => {
        const sucesso = true;
 
          if (sucesso) {
            resolve("Usuário encontrado: ${nome}");
          } else {
            reject("Erro: 404 - Usuário não encontrado");
          }
        }, 2000);
      });
    } 
     var nome = "Arthur";
search()

.then(usuario => {
  console.log(usuario);
}).catch(erro => {
        console.error(erro);
});