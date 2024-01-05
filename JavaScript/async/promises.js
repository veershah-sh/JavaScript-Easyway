// promises
// async task
// DB call, crypto, network, file

// function, method, callback, handler, executor

// creating promise
// let DBCall = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("promise executed...")
//         resolve()
//     },2000)
// })

// DBCall.then(function(){
//     console.log("promise resolved...");
// })

let Challenge = new Promise(function(resolve,reject){
    let error = false
    if(!error){
        resolve()
    }
    else{
        reject("Challenge not accepted.")
    }
})

// Challenge
// .then(() => {
//     console.log("Challenge Accepted!");
// })
// .catch((error) => {
//     console.log(`Error: ${error}`);
// })


let GetUser = new Promise(function(resolve,reject){
    let error = false
    if(!error){
        resolve({username: "abc", password:"abc123"})
    }
    else{
        reject("Query not executed.")
    }
})

function matchUserData(username){
    if(username === "abc"){
        console.log(`${username} verified`);
    }
}
GetUser.then(function(user){
    return user.username
})
.then(matchUserData)
.catch(function(error){
    console.log(`Error: ${error}`);
})
.finally(function(){
    console.log("Promise executed...");
})

// creating promise
// let onePromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Promise one completed');
//         resolve()
//     }, 1000)
// })

// consume promise
// then(), catch(), finally()

// onePromise.then(() => {
//     console.log("Promise consumed");
// })

// promise two
// new Promise((resolve, reject) => {
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     },2000)
// }).then(function(){
//     console.log("successful task")
// }).catch(function(){
//     console.log("task declined")
// })


// let promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username:"abc123", password:"12345"})
//         }
//         else{
//             reject("ERROR: The promise request failed!")
//         }
//     },2000)
// })


// thenables
// promiseThree.then(function(userData){
//     console.log(userData);
//     return userData.username
// }).then(function(unmae){
//     console.log(unmae);
// }).catch(function(err){
//     console.log(err);
// }).finally(function(){
//     console.log("Promise executed successfully with resolve or reject")
// })