function sayMyName(){
    console.log("V");
    console.log("E");
    console.log("E");
    console.log("R");
}

// sayMyName()

// function addTwoNumbers(number1, number2){  // parameters
//     console.log(number1 + number2)
// }

// const result = addTwoNumbers(3, 5) // argument

// console.log(result);
// console.log(addTwoNumbers(3, 5));
// console.log(addTwoNumbers(3, "5"));
// console.log(addTwoNumbers(3, "q"));

// electron js


function addTwoNumbers(number1, number2){
    console.log(number1+number2)
    let result = number1 + number2
    return result

    // nothing will execute after return 

    // return number1 + number2
    // return
}

// console.log(addTwoNumbers(30, 50));


function loginUserMessage(username="none"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage("veer"))


function calculateCartPrice(val1,val2,...num1){ //... - rest
    console.log(val1,val2);
    return num1
}

// console.log(calculateCartPrice(200,5000,6777,6666,7654))

// const user = {
//     username: "veer",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));