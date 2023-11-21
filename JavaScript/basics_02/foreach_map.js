// map filter reduce
// using with arrays

let numbers = [1,2,3,4,5,6,7]

// forEach
// method which do not return any value

// numbers.forEach(function(number) {
//     console.log(number);
// })

// let newNum = numbers.forEach((number) => {
//     console.log(number);
//     return number
// })
// console.log(newNum)
// numbers.forEach((number) => console.log(number))

// map
// method which return value

let num = numbers.map((number) => {
    console.log(number);
    return number
})

numbers.map(() => {})
numbers.forEach(() => {})

console.log(num);