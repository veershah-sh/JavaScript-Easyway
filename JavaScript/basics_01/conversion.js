let score = false

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);  // number
// console.log(valueInNumber); // 0

// "11" -> Number("11") -> 11
// "1a" -> Number("1a") -> NaN

let number = Number("11a")

// if(typeof(number) == "number"){
//     if(number == "NaN"){
//         console.log("nan")
//     }
//     else{
//         console.log(number)
//     }
// }

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
// let booleanIsLoggedIn = Number(Boolean(isLoggedIn))
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "name" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);