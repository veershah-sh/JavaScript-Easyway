
// function without argument & return value
function mySelf(){
    console.log('My name is veer')
    console.log('I am teaching JS')
    console.log('We are learning MERN Stack Development')
}
// mySelf()


// function with argument & without return value
function isEligible(age){
    if(age >= 18){
        console.log(`${age} You are eligible to vote.`);
    }
    else{
        console.log(`${age} You are not eligible to vote.`);
    }
}

// isEligible(41)
// isEligible(11)


// function without argument & with return value
function arrTotal(){
    let nums = [12,45,75,85,44]
    let total = 0

    for(let i=0; i<5; i++){
        total += nums[i]
    }

    return total
}

// console.log(arrTotal())

// function with argument & return value
function printDayName(day){
        if(day===1){
            return "Monday"
        }
        else if(day===2){
            return "Tuesday"
        }
        else if(day===3){
            return "Wednesday"
        }
        else{
            return "Invalid Day"
        }
}

// console.log(printDayName(2))
// console.log(printDayName(1))
// console.log(printDayName(9))
// console.log(printDayName(-99))

let total = function findTotal(){
    return 10 + 20
}
// console.log(total());


function calculateCartPrice(n1,n2,...num1){ 
    //... - rest
    console.log(n1);
    console.log(n2);
    return num1
}
// console.log(calculateCartPrice(200,5000,6777,6666,7654))

let instaUser = {
    uid: "User123",
    password: "12345"
}

function isValidUser(user){
    if(user.uid === "User123" && user.password === "12345"){
        console.log(`${user.uid} is valid user`);
    }
    else{
        console.log(`${user.uid} is not a valid user`);
    }
}

// isValidUser(instaUser)
// isValidUser({
//     uid: "User123",
//     password: "12345"
// })

function newArrTotal(values){
    let total = 0

    for(let i=0; i<values.length; i++){
        total += values[i]
    }

    return total
}

let myArr = [14,125,14,12,47,88]
console.log(newArrTotal(myArr))