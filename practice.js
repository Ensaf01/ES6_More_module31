// task-1 : convert odd to even number

const numbers = [1, 3, 5, 7, 9];
const evenNumbers=numbers.map(x=>x+1);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// task-2 : convert all string to uppercase

const friends = ["Alice", "Bob", "Charlie", "David"];
const upperCaseFriends=friends.map(x=>x.toUpperCase());
console.log(upperCaseFriends); // ["ALICE", "BOB", "CHARLIE", "DAVID"]


//task-3 divide all numbers by 10

const numbers2 = [13, 20, 33, 40, 50];
const divisionByTen=numbers2.filter(x=>x%10==0);
console.log(divisionByTen); // [20, 40, 50]