const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// creates array inside array
// changes original array

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// returns new array
const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// Spread Operator (...)
let myNums = [0,1,2,3]
const all_new_heros = [...marvel_heros, ...dc_heros, ...myNums]

// console.log(all_new_heros);

const another_array = 
[1, 2, 3, 
    [4, 5, 6],
     7, 
     [6, 7,
        [4, 5]
    ]
]
// [1,2,3,4,5,6,7,6,7,4,5]

// returns new array
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);
// console.log(another_array);



// console.log(Array.isArray("veer")) // false
// console.log(Array.isArray([1,2,3,4,5,6,7,6,7,4,5])) // true

// console.log(Array.from("veer")) // [ 'v', 'e', 'e', 'r' ]
// console.log(Array.from(23)) // []
// console.log(Array.from(true)) // []
// console.log(Array.from({name: "veer"})) // interesting // []

let score1 = 100
let score2 = 200
let score3 = 300

// i want to create an array "of" s1, s2, s3
console.log(Array.of(score1, score2, score3));