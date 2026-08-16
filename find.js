// find returns the first element in the array that satisfies the provided testing function
const numbers = [1, 2, 3, 4, 5];
const found = numbers.find(n => n > 2);
console.log(found); // 3    ,have 3,4,5 but find return first element that satisfy the condition,if not match then return undefined