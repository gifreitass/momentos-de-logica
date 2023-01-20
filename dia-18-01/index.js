const months = {
    Jan: 01,
    Fev: 02,
    Mar: 03,
    Abr: 04,
    Mai: 05,
    Jun: 06,
    Jul: 07,
    Ago: 08,
    Set: 09,
    Out: 10,
    Nov: 11,
    Dez: 12
}

function carteiraMotorista(motorista){
    let numero = []

    if(motorista[2].length >= 5){
        for (let i = 0; i < 5; i++) {
            numero.push(motorista[2][i])
        }
    } else {
        for (let i = 0; i < 5; i++) {
            if(motorista[2][i] === undefined){
                numero.push(9)
            } else {
                numero.push(motorista[2][i])
            }          
        }
    }

    let separateYear = motorista[3].split('-')
    separateYear = separateYear[2].charAt(2)
    numero.push(separateYear)

    let separateMonth = motorista[3].split('-')
    separateMonth = separateMonth[1]
    console.log(separateMonth)

    // months.forEach(month => {
    //     console.log(month)
    // });

    let numeroFinal = ''

    numero.forEach(element => {
        console.log(element)
        numeroFinal += element
    });

    console.log(numeroFinal)
}

carteiraMotorista(["Giovanna", "Freitas", "Araujo", "04-Abr-1987", "F"])