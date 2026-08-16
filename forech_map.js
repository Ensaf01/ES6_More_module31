// map work on all elements of array and object and return new array with modified values
// forEach work on all elements of array and object but does not return new array with modified values

const numbers = [1, 2, 3, 4, 5];
const result = numbers.forEach(n => n * 2);
/*const result = numbers.forEach(n => {
 block of code
});*/
console.log(result); // undefined ,because forEach does not return new array with modified values