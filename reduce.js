// reduce applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single output value
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((first_parameter, second_parameter) => first_parameter + second_parameter, 0);
console.log(sum); // 15 


// two parameter -> first is callback(first_parameter, second_parameter) function and second is initial(0) value of accumulator

//first_parameter is accumulator and second_parameter is current value of array