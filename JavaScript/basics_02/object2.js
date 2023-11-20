let Student = new Object()

Student.name = "Devanshu"
Student.class = "FY"
Student.rno = 1

Student.marks = {
    python: 50,
    JS: 70
}
// console.log(Student);

// returns array of keys
// console.log(Object.keys(Student));

// returns array of values
// console.log(Object.values(Student));

// returns array of key & values in form of array
// console.log(Object.entries(Student));

// hasOwnProperty()
let check = Student.hasOwnProperty('rno')
// if(check == true){
//     console.log("Student enrolled!")
// }
// else{
//     console.log("Student can not enroll!")
// }
// console.log(check);

// destructuring objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);
// console.log(obj1);

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


let userEmail = [
    {
        id: 1,
        email: "a@google.com"
    },
    {
        id: 2,
        email: "b@google.com"
    }
]

// console.log(userEmail[1].email);

const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "veer"
}

// course.courseInstructor

// rename any key
const {courseInstructor: instructor} = course

// throws error
// console.log(courseInstructor);

// prints name
console.log(instructor);