const months = {
    Jan: '01',
    Fev: '02',
    Mar: '03',
    Abr: '04',
    Mai: '05',
    Jun: '06',
    Jul: '07',
    Ago: '08',
    Set: '09',
    Out: '10',
    Nov: '11',
    Dez: '12'
}

function carteiraMotorista(motorista) {
    let numero = []

    // PRIMEIROS 5 CARACTERES DO ÚLTIMO NOME
    if (motorista[2].length >= 5) {
        for (let i = 0; i < 5; i++) {
            numero.push(motorista[2][i])
        }
    } else {
        for (let i = 0; i < 5; i++) {
            if (motorista[2][i] === undefined) {
                numero.push(9)
            } else {
                numero.push(motorista[2][i])
            }
        }
    }

    // DÍGITO DA DA DÉCADA DE NASCIMENTO
    let year = motorista[3].split('-')
    separateYear = year[2].charAt(2)
    numero.push(separateYear)

    let birthday = motorista[3].split('-')
    separateMonth = birthday[1]

    // MÊS DE NASCIMENTO (SE FOR MULHER INCREMENTA 5 NA FRENTE)
    if (motorista[4] === "F") {
        let month = months[separateMonth]

        if (month.length === 2) {

            let firstNumber = parseInt(month.charAt(0))
            firstNumber += 5

            let finalMonth = firstNumber + month.charAt(1)

            numero.push(finalMonth)
        } else {

            month = [month]

            month.unshift('5')

            let finalMonth = ''

            month.forEach(numbers => {
                finalMonth += numbers
            });

            numero.push(finalMonth)
        }
    } else {
        let month = months[separateMonth]
        numero.push(month)
    }

    // DATA DE NASCIMENTO
    let separateDate = birthday[0]
    numero.push(separateDate)

    // ÚLTIMO DÍGITO DO ANO DE NASCIMENTO
    let lastNumberYear = year[2].charAt(3)
    numero.push(lastNumberYear)

    // PRIMEIRA LETRA DO NOME E DO NOME DO MEIO (PREENCHER COM 9 SE NÃO TIVER NOME DO MEIO)
    for (let i = 0; i < 1; i++) {
        numero.push(motorista[0][i])
    }

    if(motorista[1].length === 0){
        numero.push(9)
    } else {
        for (let i = 0; i < 1; i++) {
            numero.push(motorista[1][i])
        }
    }

    // NÚMERO 9
    numero.push(9)
    // AA
    numero.push('AA')


    // CONTA FINAL DO NÚMERO
    let numeroFinal = ''

    numero.forEach(element => {
        numeroFinal += element
    });

    console.log(numeroFinal)
}

carteiraMotorista(["Johanna", "", "Gibs", "13-Dez-1981", "F"])