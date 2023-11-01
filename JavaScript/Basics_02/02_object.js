
// let age = new Number(20)
// console.log(age)
// const instaUser = {}

const instaUser = new Object()
instaUser.id = "123abc"
instaUser.name = "Sammy"
instaUser.isLoggedIn = false

// console.log(instaUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "veer",
            lastname: "shah"
        },
        userFatherFullName:{
            firstname: "f name",
            lastname: "shah"
        }
    }
}

// console.log(regularUser.fullname.userFatherFullName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "k@gmail.com"
    },
    {
        id: 3,
        email: "l@gmail.com"
    },
]

// users[1].email
// console.log(users[1].email);
// console.log(users[0].id);
// console.log(instaUser);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('isLoggedIn'));
if(instaUser.hasOwnProperty('isLoggedIn') == true){
    console.log("has data ", instaUser.isLoggedIn)
}
else{
    console.log("has no data")
}


const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "veer"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "veer",
//     "coursename": "javascript",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]