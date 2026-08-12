// data access layer for chain data
console.log("Chain data access layer initialized");
const data=[{ id: 1, name: "Chain 1" }];

console.log(data[0].name);// karon data akta arrray ,and array er moddhe object ase tai, data[0] dile first object ta pabo, then tar name property access korte hobe.array modhe 1 ta element ba object ase.

const data2=[{ id: 1, name: "Chain 1" }, { id: 2, name: "Chain 2" }];

console.log(data2[1].name);// karon data2 akta arrray ,and array er moddhe object ase tai data2[1] dile second object ta pabo, then tar name property access korte hobe.array modhe 2 ta element ba object ase.


// nested object
const products = {
    country: "USA",
    items: [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" }
    ]
}

console.log(products.items[0].name);// karon products.items akta array, and array er moddhe object ase tai products.items[0] dile first object ta pabo, then tar name property access korte hobe.array modhe 2 ta element ba object ase.

const products2 = {
    country: "USA",
    items: {
        "1": {
             id: 1, name: "Product 1" 
            },
        "2": {
             id: 2, name: "Product 2"
             },
        city: {
            name: "New York",
            population: 8000000,
            address: {
                street: "5th Avenue",
                number: 123
        }
    }
}
}

console.log(products2.items.city.address?.street);// karon products2.items.city.address akta object, and tar moddhe street property ase tai products2.items.city.address.street dile street property access korte parbo.

//? optional chaining operator use kora hoise, jodi address property na thake tahole undefined return korbe, and error dibe na.