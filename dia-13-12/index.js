//retorna o índice de dois números que somados dão o resultado do número alvo
function numeroAlvo(numeros, alvo){
    const numeroSoma = alvo

    //buscar no array uma combinação de números
    //pra cada número do array, passar pelos outros números

    for (let index = 0; index < numeros.length; index++) {
        const numeroAtual = numeros[index];
        //número atual = 3
        for (let i = index + 1; i < numeros.length; i++) {
            const numeroComparado = numeros[i];
            if (numeroAtual + numeroComparado === numeroSoma){
                return [index, i]
            }           
        }
    }
}

console.log(numeroAlvo([4,2,6,9,5], 9))
//numero alvo = 7

//se um número for igual a 5 ou um número for igual a 2
//quando chamar a função eu passo o numero alvo e o array

//ver qual dos números somados vai dar 7
//só uma dupla chega no resultado