// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const student = {
    name: "nirmal",
    course: "web development",
    duration: 4,
    // duration_in: "M"
    // in months
    fee: 10000,
    isComplited: false,
    topics: ["html","css","js"],
    modules: {
        uiux: ["figma", "xd"],
        frontend: ["html","css","js"],
        backend: ["php", "mysql"]
    }
}

const student1 = {
    name: "krishna",
    course: "web development",
    duration: 4,
    // duration_in: "M"
    // in months
    fee: 10000,
    isComplited: false,
    topics: ["html","css","js"],
    modules: {
        uiux: ["figma", "xd"],
        frontend: ["html","css","js"],
        backend: ["php", "mysql"]
    },
    // sayMyName: function(){

    // },
}

// console.log(student["modules"])

student["duration"] = 6
// console.log(student["duration"])

student.topics[2] = "javascript"
// console.log(student.topics[2])
// console.log(student.topics)

student.modules.frontend[2] = "javascript"
// console.log(student.modules)

student["contact"] = "9874563210"
// console.log(student)

student1.duration = 8
console.log(student1.duration)

// Object.freeze(student1)

student.sayMyName = function(){
    console.log(`Hello JS user, ${this.name}`);
} 

student.sayMyName();



const JsUser = {
    name: "veer",
    "full name": "veer shah",
    [mySym]: "mykey1",
    age: 18,
    location: "gujarat",
    email: "veer@google.com",
    isLoggedIn: false,
    subscription: "gold",
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "veer@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "veer@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());