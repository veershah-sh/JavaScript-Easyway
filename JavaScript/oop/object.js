function multiplyBy2(num){
  return num*2
}

multiplyBy2.power = 10

console.log(multiplyBy2(10))
console.log(multiplyBy2.power)
console.log(multiplyBy2.prototype)

function getProduct(name, price){
  this.name = name
  this.price = price
}

let mobile = new getProduct("mobile", 10000)
let laptop = new getProduct("laptop", 100000)

console.log(mobile)
console.log(laptop)

getProduct.prototype.increasePrice = function(){
  this.price += 1000
}

mobile.increasePrice()
laptop.increasePrice()

console.log(mobile)
console.log(laptop)
