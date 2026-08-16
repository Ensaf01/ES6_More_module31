const prodcts=[
    {id:1,name:"laptop",price:100},
    {id:2,name:"mobile",price:20},
    {id:3,name:"tablet",price:300},
    {id:4,name:"desktop",price:400},
    {id:5,name:"watch",price:10}
]
console.log("map use on array of object");
const productName=prodcts.map(product=>product.name);
console.log(productName); // ["laptop", "mobile", "tablet", "desktop", "watch"]

console.log("filter use on array of object");
const expensiveProducts=prodcts.filter(product=>product.price>30000);
console.log(expensiveProducts); // [{id:1,name:"laptop",price:50000},{id:4,name:"desktop",price:40000}]

// forEach use on array of object
console.log("forEach use on array of object");
const productNames=prodcts.forEach(product=>console.log(product.name)); // laptop mobile tablet desktop watch
// prodcts.forEach(product=>console.log(product.name)); // laptop mobile tablet desktop watch

// find use on array of object
console.log("find use on array of object");
const foundProduct=prodcts.find(product=>product.price>30000);
console.log(foundProduct); // {id:1,name:"laptop",price:50000} ,have 2 product but find return first element that satisfy the condition,if not match then return undefined

// reduce use on array of object
console.log("reduce use on array of object");
const totalPrice=prodcts.reduce((accumulator,product)=>accumulator+product.price,0);
console.log(totalPrice); // 100+20+300+400+10=830 ,we add all product price and return total price of all product