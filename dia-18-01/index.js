function carteiraMotorista(motorista){
    let numeroFinal = []

    if(motorista[0].length >= 5){
        for (let i = 0; i < 5; i++) {
            numeroFinal.push(motorista[0][i])
        }
    } else {
        for (let i = 0; i < 5; i++) {
            numeroFinal.push(motorista[0][i])
        }
    }

    let sum = ''

    numeroFinal.forEach(element => {
        console.log(element)
        sum += element
    });

    console.log(sum)
}

carteiraMotorista(["Giovanna", "Freitas", "Araujo", "04-Abr-2002", "F"])