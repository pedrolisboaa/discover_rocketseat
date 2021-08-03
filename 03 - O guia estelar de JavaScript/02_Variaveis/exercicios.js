// 1 

let weight

// 2 
console.log(weight === undefined)

weight = 130

//3

let myName = 'Pedro'
let age = 28
let starts = 4.75
let isSubscribed = true;

console.log(myName, age, starts, isSubscribed)

//4

let students = {
    studentsName: 'Pedro',
    age: 28,
    starts: 4.75,
    isSubscribed: true
}
console.log(typeof students)
console.log(students.studentsName)
console.log(`${students.studentsName} tem ${students.age} e pesa ${weight}Kg`)

//5

let newStudents= []
console.log(typeof newStudents)

//6

newStudents = [students]
console.log(newStudents)

//7 
console.log(newStudents[0])

//8 

let studentsTwo = {
    myName: 'Juliana',
    age: 24,
    starts: 5,
    isSubscribed: false
}

newStudents[1] = studentsTwo
console.log(newStudents)
