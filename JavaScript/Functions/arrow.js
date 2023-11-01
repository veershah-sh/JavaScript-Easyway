const user = {
    username: "veer",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function myFun(){
//     let username = "veer"
//     console.log(this.username);
// }

// myFun()

// const myFun = function () {
//     let username = "veer"
//     console.log(this.username);
// }

const myFun =  () => {
    let username = "veer"
    console.log(this);
}


// myFun()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "veer"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()