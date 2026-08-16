// filter creates a new array and selects elements based on condition and returns new array with selected elements
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(n => n > 2 );
//const evenNumbers = numbers.filter(n => n > 2% 2 === 0 );
console.log(evenNumbers); // [3, 4, 5]

const friends = ["Alice", "Bob", "Charlie", "David"];
const adults = friends.filter(person => person.length >= 4);
console.log(adults); // ["Alice", "Charlie", "David"]