// promises
// async task
// DB call, crypto, network, file

// function, method, callback, handler, executor

// creating promise
let onePromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Promise one completed');
        resolve()
    }, 1000)
})

// consume promise
// then(), catch(), finally()

onePromise.then(() => {
    console.log("Promise consumed");
})


// promise two

new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = true
        if(!error){
            resolve()
        }
        else{
            reject()
        }
    },2000)
}).then(function(){
    console.log("successful task")
}).catch(function(){
    console.log("task declined")
})