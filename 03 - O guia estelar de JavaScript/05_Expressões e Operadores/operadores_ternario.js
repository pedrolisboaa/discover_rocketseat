// Operador Condicional (Ternário)

//Dependendo da condição, nós receberemos valores diferentes.

//Condição então valor 1 se não valor 2
// condition ? value1 : value2

//Exemplo
let pao = false
let queijo = false

const bomCafeDaManha = pao && queijo ? "Café top" : "Café paia"
const outroCafeDaManha = pao || queijo ? "Café top!" : "Café paia!"

console.log(bomCafeDaManha)
console.log(outroCafeDaManha)