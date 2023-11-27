// forEach, map, filter, reduce

let  marks = [10,20,30,40,50,60]
let  nums = [343,55,34,22,68]

// marks.forEach(function (mark){
//     mark = mark + 5
//     // mark += 5
//     console.log(mark);
// })

// nums.forEach((num) => {
//     if(num%2 == 0){
//         console.log(`${num} is even`)
//     }
//     else{
//         console.log(`${num} is odd`)
//     }
// })

let items = [
    {
        name: "Burger",
        price: 199,
        type: "non-veg",
        taste: "Spicy"
    },
    {
        name: "Pizza",
        price: 299,
        type: "veg",
        taste: "Spicy"
    },
    {
        name: "Pasta",
        price: 99,
        type: "non-veg",
        taste: "Sweet"
    },
    {
        name: "Maggi",
        price: 59,
        type: "veg",
        taste: "Medium"
    },
    {
        name: "GBC",
        price: 95,
        type: "veg",
        taste: "Medium"
    }
]

// items.forEach((item) => {
//     if(item.type === "veg"){
//         console.log(item);
//     }
// })


// let num = nums.forEach((num) => {
//     console.log(num)
//     return num
// })

// console.log(num)

// map

let item = items.map((i) => {
    if(i.type === "veg"){
        // console.log(item);
        return i
    }
})
// console.log(item);
// total -> m1,m2,m3
// per -> total/3


// filter

let itemsFilter = items.filter((item) => item.type === "veg" && item.taste !== "Spicy" && item.price <= 80)
// console.log(itemsFilter);

let cloth_items = [
    {
        type: "Shirt",
        size: "s",
        fashion: "M",
        brand: "Denim",
        price: 2999
    },
    {
        type: "Tshirt",
        size: "m",
        fashion: "F",
        brand: "DG",
        price: 1888
    },
    {
        type: "Pent",
        size: "xl",
        fashion: "F",
        brand: "Denim",
        price: 3888
    },
    {
        type: "Shorts",
        size: "s",
        fashion: "M",
        brand: "UM",
        price: 1555
    }
]

let clothFilter = cloth_items.filter((ci) => ci.size === "s")
                            .filter((ci) => ci.brand === "Denim")

// console.log(clothFilter);

let item1 = items.map((item) => {return item})
            .filter((item) => item.type === "veg")
console.log(item1)