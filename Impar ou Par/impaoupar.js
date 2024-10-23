function verificarParOuImpar() {

        let num = parseInt(prompt('Digite um valor:'))

    if(num %2 == 0){
        msg = ("O número " + num + " é par.")
    }else{
        msg = ("O número " + num + " é impar.")
    }

    alert(msg);
}
