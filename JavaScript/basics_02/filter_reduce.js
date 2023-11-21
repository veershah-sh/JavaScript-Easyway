// filter reduce

// filter

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

// let userChoice = cloth_items.filter((item) => item.size === "s")

// userChoice = cloth_items.filter((item) => 
//     item.fashion === "F" && item.brand === "Denim"
// )

// userChoice = cloth_items.filter((item) => {
//     return item.price <= 3000
// }).filter((item) => item.fashion == "M")

// console.log(userChoice);

// [
//     {
//         design: ["mordern", "minimal"], 
//         price: ["free"]
//     }
// ]


// reduce

// let total_amt = cloth_items.reduce((total, item) => {
//     return total+item.price
// },0)

let total_amt = cloth_items
        .filter((item) => item.fashion === "M")
        .reduce((total, item) => total+item.price,0)
console.log(total_amt);