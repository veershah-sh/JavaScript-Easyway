const user = {
    username: "veer",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
    
}

// console.log(this); // passes empty object {}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// function myFun(){
//     let username = "veer"
//     console.log(username); // valid
//     console.log(this.username); // invalid
// }

// myFun()

// const myFun = function (args) {
//     let username = "veer"
//     console.log(this.username);
// }

// const myFun = (age) => {
//     let username = "veer"
//     console.log(username);
//     console.log(age);
// }
// myFun(12)

// = () => {} 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(12,13));


// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  {a:1}

// () => ()
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "veer"})
console.log(addTwo(12,10));


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()