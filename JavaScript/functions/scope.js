//var c = 300

// {} -> scope


// let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER: ", a);
}
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "veer"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()
}

one()

// parent
// if (true) {
//     const username = "veer"
//     // child
//     if (username === "veer") {
//         const website = " youtube"
//         console.log(username + website);
//     }
//     // console.log(website);
// }
// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// we can call a function before its defination
console.log(addone(5))
function addone(num){
    return num + 1
}

// we cannot use variable before its defination
console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}

