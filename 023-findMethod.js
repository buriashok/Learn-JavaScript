/**
 * The find() method is another built-in array helper in JavaScript that allows you to find the first element in the array that matches a specific condition. It returns the values of the first element that satisfies the given testing function, or undefined if no element is found.
 */

const peoples = [
  { name: "Ashok", age: 21 },
  { name: "Janaki", age: 20 },
  { name: "Ashok", age: 20 },
  { name: "Sagar", age: 15 },
  { name: "Asok", age: 23 },
];

const res = peoples.find((people) => people.age === 20);
console.log(res);
