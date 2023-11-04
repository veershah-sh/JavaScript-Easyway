/*
for loop
    for in loop
    for of loop
while loop
do...while loop
*/

// 1. number based
// 2. condition based

// for(init; condition; inc/dec;){
    // logic
// }

const runForLoop = function(start,end,step){
    for(let i=start;i<=end;i+=step){
        console.log(i);
    }
}

runForLoop(21,30,2);

// while(condition){
//     logic;
// }

let nirmalOnBreak = false
let krishnaOnBreak = true

let key = 1
let num = 1

while(nirmalOnBreak){
    console.log('Krishna working...');
    break;
}
while(krishnaOnBreak){
    console.log('Nirmal working...');
    break;
}

// while(key){
//     if(num > 20){
//         key = 0
//         break;
//     }
//     console.log(num);
//     num++;
// }

// do{
    // logic
// }while(codition);

// do{
//     console.log(num);
//     num++;
// }while(num<20);

// for in -> object
let student = {
    name: "abc",
    age: 10,
    std: 6
}

for(let x in student){
    console.log(student[x]);
}

// for of -> array
let marks = [66,77,88]

for(let x of marks){
    console.log(marks[x]);
}

// returns index
for(let x in marks){
    console.log(x);
}

// returns value on index
for(let x in marks){
    console.log(marks[x]);
}


let students = {
    abc: {
        name: "abc",
        age: 10,
        std: 6
    }
}

let age = [[44,45,49],[88,77,90]]