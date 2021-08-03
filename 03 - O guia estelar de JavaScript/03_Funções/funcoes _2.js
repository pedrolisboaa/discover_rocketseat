// function expression
// function anonymous
const sum = function(number1, number2){
    return number1 + number2
}

let number1 = 75
let number2 = 102.12
console.log(sum(number1, number2) /* argumentos - arguments*/ )
console.log(`${number1} + ${number2} = ${sum(number1, number2)}`)

//Maneira lúdica
function makeJuice(fruit1, fruit2){
    return fruit1 + fruit2
}

const copo = makeJuice('apple', 'mellon')
console.log(copo)