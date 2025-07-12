/**
 * The reduce() method applies the reducer function to each element of an array accumulating the results into a single value.
 * It is often used to perform calculations or aggregations an array elements and simplify the array into a single value.
 
// Example - 1
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((p, c) => {
    console.log(`Previous: ${p}`);
    console.log(`Current: ${c}`);
    return p + c;
},0);

console.log(sum);
*/

const peoples = [
  { name: "Narendra Modi", age: 70 },
  { name: "valmdir puthin", age: 60 },
  { name: "Trump", age: 64 },
];

const oldestAge = peoples.reduce((p, c) => (c.age > p ? c.age : p), 0);
console.log(oldestAge);
