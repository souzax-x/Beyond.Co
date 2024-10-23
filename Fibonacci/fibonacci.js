function fibonacci(){

    let num = parseInt(prompt('Digite um valor'));

    if(num == 0){
        alert('-1')
        return
    }
    
    let numA = 0, numB = 1

    for(let i = 3; i <= num; i++){
        const numC = numA + numB
        numA = numB
        numB = numC
    }

        alert(numB);
}