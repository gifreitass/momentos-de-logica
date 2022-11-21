let maiorValorAtual = 0
let modeloMaiorValor = ''
let anoMaiorValor = 0

let menorValorAtual = Infinity
let modeloMenorValor = ''
let anoMenorValor = 0

const array = []

for (let i = 0; i < 3; i++) {
    var modeloCarro = prompt('Qual é o modelo do seu carro?')
    var anoCarro = parseInt(prompt('Qual é o ano do carro?'))
    var valorCarro = parseInt(prompt('Qual é o valor do seu carro?'))
    if (valorCarro > maiorValorAtual) {
        maiorValorAtual = valorCarro
        modeloMaiorValor = modeloCarro
        anoMaiorValor = anoCarro
    }
    if (valorCarro < menorValorAtual) {
        menorValorAtual = valorCarro
        modeloMenorValor = modeloCarro
        anoMenorValor = anoCarro
    }
    array.push(valorCarro)
}

let soma = 0

for (let i = 0; i < array.length; i++) {
    soma += array[i]
}

let valorMedio = Math.floor(soma / 3)

console.log(`Carro mais caro: ${modeloMaiorValor}, ${anoMaiorValor}, R$${maiorValorAtual}`)
console.log(`Carro mais barato: ${modeloMenorValor}, ${anoMenorValor}, R$${menorValorAtual}`)
console.log(`O valor médio dos carros é R$${valorMedio}`)