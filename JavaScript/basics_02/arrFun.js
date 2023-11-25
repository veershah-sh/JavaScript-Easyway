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

items.forEach((item) => {
    if(item.type === "veg"){
        console.log(item);
    }
})