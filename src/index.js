module.exports = function toReadable(number) {

    let numbers_1to19 = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ]

    let number_20to90 = [
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ]

    if (number >= 0 && number <= 19) {
        return numbers_1to19[number]
    } else if (number % 10 === 0 && (number < 100) && number !== 10) {
        let index = number / 10
        return number_20to90[index - 2]
    } else if (number >= 100 || (number < 100 && number >= 21)) {
        let numberArray = String(number).split('')
        let numberToStr = []
        let newNumber
        for (let i = 0; i < numberArray.length; i++) {
            if (numberArray.length === 3) {
                if (i === 0) {
                    newNumber = Number(numberArray[i])
                    let hundredNumber = `${numbers_1to19[newNumber]} hundred`
                    numberToStr.push(hundredNumber)
                }
                if (i === 1 && numberArray[i] != 0) {
                    if (Number(numberArray[i]) == 1 && Number(numberArray[i + 1]) != 0) {
                        i += 1
                        newNumber = Number(numberArray[i]) + 10
                        newNumber = ` ${numbers_1to19[newNumber]}`
                        numberToStr.push(newNumber)
                    } else if (Number(numberArray[i]) == 1 && Number(numberArray[i + 1]) == 0) {
                        newNumber = ' ten'
                        numberToStr.push(newNumber)
                    } else {
                        let index = Number(numberArray[i])
                        newNumber = number_20to90[index - 2]
                        numberToStr.push(` ${newNumber}`)
                    }


                }
                if (i === 2 && numberArray[i] != 0 && numberArray[i - 1] != 1) {
                    newNumber = Number(numberArray[i])
                    newNumber = ` ${numbers_1to19[newNumber]}`
                    numberToStr.push(newNumber)
                }

            } else {
                if (i === 0) {
                    let index = Number(numberArray[i])
                    newNumber = number_20to90[index - 2]
                    numberToStr.push(`${newNumber} `)
                } else {
                    console.log('here');
                    newNumber = Number(numberArray[i])
                    newNumber = `${numbers_1to19[newNumber]}`
                    numberToStr.push(newNumber)
                }
            }
        }
        return numberToStr.join('')
    }

}