let i = 0

let maiorValorAtual = 0

for(i = 0; i < 3; i++){
    var modeloCarro = prompt('Qual é o modelo do seu carro?')
    var anoCarro = parseInt(prompt('Qual é o ano do carro?'))
    var valorCarro = parseInt(prompt('Qual é o valor do seu carro?'))
    if(valorCarro > maiorValorAtual){
        maiorValorAtual = valorCarro
    }
}

console.log(maiorValorAtual)