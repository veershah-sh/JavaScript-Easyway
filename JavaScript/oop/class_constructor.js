//ES6

class Product{
    constructor(name, type, price){
        this.name = name
        this.type = type
        this.price = price
        this.speciality = "Developed by Veer & Co."
    }

    sayProduct(){
        console.log(this.name);
        console.log(this.type);
        console.log(this.price);
    }
}

let mobile = new Product("vPhone", "Electronics", 12000)
mobile.sayProduct()



// bts 

function Product(name, type, price){
    this.name = name
    this.type = type
    this.price = price
    this.speciality = "Developed by Veer & Co."
}

Product.prototype.sayProduct = function(){
    console.log(this.name);
    console.log(this.type);
    console.log(this.price);
}

let coffee = new Product("coffee", "food", 50)
coffee.sayProduct()