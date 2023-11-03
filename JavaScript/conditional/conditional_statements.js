/*
if
if...else
else if
nested if (if...else ladder)

switch...case
*/


// if...else
let age = 10

// if(age >= 18){ // true
//     console.log('You are able to vote');
// }
// // false
// else{
//     console.log('you are not able to vote');
// }


// else if
let a = 10, b = "10"
// a max
// b max
// same

// == -> check values
// === -> strict check -> value, data type

// if(a>b){
//     console.log(a);
// }
// else if(b>a){
//     console.log(b);
// }
// else if(a === b){
//     console.log('Both are equal');
// }
// else{
//     console.log('something else');
// }

// nested if

// withdraw money

// amt <= bal | amt 500 multiple

let bal = 10000
const withdrawMoney = function(amt) {
    if(amt<=bal){
        if(amt%500==0){
            console.log(`${amt} withdrawed.`);
        }
        else{
            console.log('only 500 notes are available');
        }
    }
    else{
        console.log('insufficient balance');
    }
}

withdrawMoney(5000);
withdrawMoney(50000);
withdrawMoney(5001);

const withdrawMoneyA = (amt) => {
    if(amt<=bal){
        if(amt%500==0){
            console.log(`${amt} withdrawed.`);
        }
        else{
            console.log('only 500 notes are available');
        }
    }
    else{
        console.log('insufficient balance');
    }
}

withdrawMoney(6000);

(
    function(amt) {
        if(amt<=bal){
            if(amt%500==0){
                console.log(`${amt} withdrawed.`);
            }
            else{
                console.log('only 500 notes are available');
            }
        }
        else{
            console.log('insufficient balance');
        }
    }
)(1000)

const printDay = (day) => {
    switch(day){
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        default:
            console.log('Invalid day');
            break;
    }
}

printDay(1)
printDay(2)
printDay(9)
