let asyncPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"abc123", password:"12345"})
        }
        else{
            reject("ERROR: The promise request failed!")
        }
    },2000)
})

async function consumePromise(){
    try{
        // then
        let response = await asyncPromise
        console.log(response)
    }
    catch(error){
        // catch
        console.log(error)
    }
}

consumePromise()