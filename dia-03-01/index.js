//I = 1
//V = 5
//X = 10
//L = 50
//C = 100
//D = 500
//M = 1000

function numerosRomanos(numero){
    const numbers = numero.split('')
    console.log(numbers)

    numbers.forEach(number => {
        let numeroAtual = 0
        if(number === 'I'){
            numeroAtual += 1
        }
        if(number === 'V'){
            numeroAtual += 5
        }
        console.log(numeroAtual)
    });
}

numerosRomanos('VVI')

//percorrer array de strings e dar um valor para cada letra 