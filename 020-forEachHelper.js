/*
* ForEach Helper
* When we call the forEach helper we pass in anonymous callback function,
* This function gets called one time for every element in the array 
* WHatever is inside the function that logic happens
*/

// Example - 1
// const colors = [ "teal", "blue", "red", "green"];
// colors.forEach((color) => console.log(color));

// Example - 2
// const words = [ "hello", "bird", "table", "football", "pipe", "code"];

// const capWords = words.forEach( (word, index, arr) => {
//     arr[index] = word[0].toUpperCase() + word.substring(1);
// });
// console.log(words);

// Task
const numbers = [ 1,2,3,4,5,6,7,8,,9,0];
let sum = 0;
function adder(number) {
    sum += number
}

numbers.forEach(adder);

console.log(sum);