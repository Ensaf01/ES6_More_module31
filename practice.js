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


//task-4 : find use
const findDivisibleByTen=numbers2.find(x=>x%10==0);
console.log(findDivisibleByTen); // 20 ,have 20,40,50 but find return first element that satisfy the condition,if not match then return undefined

//task-5 : find the senior position people from array of object use filter
console.log("find the senior position people from array of object use filter\n")
const instructor=[
    {name:'ensaf',age:20,position:'senior'},
    {name:'rok',age:24,position:'junior'},
    {name:'dhok',age:25,position:'senior'}
]

const seniorPostion=instructor.filter(x=>x.position =="senior");
console.log(seniorPostion);

// task -6
console.log("sum of age use reduce task 6");
const sumOfAge=instructor.reduce((accu,curent)=>accu+curent.age,0);
console.log(sumOfAge);