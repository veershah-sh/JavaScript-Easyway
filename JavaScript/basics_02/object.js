
// [1,2,3]

// {
//     key: value
// }

// no need to maintain order
// object: Numbers, String, boolean, null, undefined, array, object

const erno = Symbol("P01")

const myStudent = {
    name: "Devanshu",
    course: "MERN Stack Development",
    duration: 4,
    fee: 20000,
    skills: ["frontend", "backend", "database"],
    joiningDate: "12/10/2023",
    modules: {
        frontEnd: ["HTML", "CSS", "JS", "React"],
        backEnd: ["Express JS", "Node JS", "Mongoose"],
        dataBase: ["mongoDB"]
    },
    isCompleted: false,
    [erno]: {
        institute: "Prayosha",
        rno: 1
    }
}

// console.log(myStudent.name)
// console.log(myStudent["skills"][1])
// console.log(myStudent.modules.backEnd[1])
// console.log(myStudent.modules.dataBase[0])

function getDate(){
    console.log(`Joining Date: ${myStudent.joiningDate}`);
}

// getDate()

// Object.freeze(myStudent)

myStudent.name = "Devanshu Dave"
console.log(myStudent.name)

myStudent.timing = "6PM - 7 PM"
console.log(myStudent)

myStudent.sayMyName = function() {
    console.log(`My name is ${this.name}`);
}

console.log(myStudent.sayMyName())