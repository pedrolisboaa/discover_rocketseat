/*
    Function() constructor

    *expressao new
    *criar um novo objeto
    *this keywword

*/

function Person(name){
    this.name = name
    this.walk = function(){
        return `${this.name} esta andando!`
    }
}
const pedro = new Person("Pedro")
const juliana = new Person('Juliana')

console.log(pedro)
console.log(juliana)

console.log(pedro.walk())
console.log(juliana.walk())