const romanNumbers = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

function convertNumbers(numbers){
    const separateNumbers = numbers.split('')
    console.log(separateNumbers)

    const valueNumbers = []
    let previousValue = 0

    separateNumbers.forEach(number => {
        let valor = romanNumbers[number]

        if(previousValue < valor){
            valueNumbers.push(valor)
        }else{
            valueNumbers.push(-valor)
        }

        previousValue = valor
    });

    let sum = 0

    valueNumbers.forEach(valueNumber => {
        sum += valueNumber
    });

    console.log({ valueNumbers })

    console.log(sum)
}

convertNumbers('XIV')
