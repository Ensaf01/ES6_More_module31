const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

console.log("another example of array map method");
function double(n) {
    return n * 2;
}

const numbers2 = [1, 2, 3, 4, 5];
const doubled2 = numbers2.map(double);
console.log(doubled2); // [2, 4, 6, 8, 10]


//
console.log("another example of array and object map method");
const friends = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

const names = friends.map(friend => friend.name[1]);// 2nd character show
//const names = friends.map(friend => friend.name);//name show
console.log(names); // ["l", "o", "h"]