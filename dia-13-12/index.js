function numeroAlvo(numeros, alvo){
    const numeroSoma = alvo

    //buscar no array uma combinação de números
    //pra cada número do array, passar pelos outros números

    for (let index = 0; index < numeros.length; index++) {
        const numeroAtual = numeros[index];
        //primeiro número atual = 4
        for (let i = index + 1; i < numeros.length; i++) {
            const numeroComparado = numeros[i];
            if (numeroAtual + numeroComparado === numeroSoma){
                return [index, i]
            }           
        }
    }
}

console.log(numeroAlvo([4,2,6,9,5], 9))