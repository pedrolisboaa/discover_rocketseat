// Manipulando Arrays

let techs = ["HTML", "CSS", "JS"]

//Adicionar um item no final
techs.push("BOOTSTRAP")
console.log(techs)

//Adicionar no começo
techs.unshift("Lógica")
console.log(techs)

//Remover do final
techs.pop()
console.log(techs)

//Remover do começo
techs.shift()
console.log(techs)

//Pegar somente uns elementos do array
console.log(techs.slice(1, 3))

//Remover 1 um   mais items em qualquer posição do array
techs.splice(1, 2)
console.log(techs) 

techs.push("node js")
techs.push("sql")
techs.push("POO")
//Encontrar a posição de um elemento no array
console.log(techs)
let index = techs.indexOf("POO")
console.log(index)

techs.splice(index, 1)
console.log(techs)



