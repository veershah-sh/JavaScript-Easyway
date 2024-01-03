let product = "      Tea        "
let price  = 15

Object.prototype.originalString = function(){
    console.log(this);
    return this.trim().length
}

Array.prototype.print = function(){
    console.log(this);
}

// console.log(product.originalString())
// console.log([1,2,3].print())


// inheritance
const employee = {
    name: "abc",
    role: "coder"
}

const Coder = {
    writeCode: true
}

const ITSupport = {
    giveUpdates: "IT Updates",
    departmentAccess: true
}

const BackOffice = {
    ITDept: false,
    __proto__: ITSupport
}

// Coder.__proto__ = employee

console.log(BackOffice.departmentAccess);
console.log(BackOffice.giveUpdates);


// mordern way
Object.setPrototypeOf(Coder, employee)
console.log(Coder.name, Coder.role);
