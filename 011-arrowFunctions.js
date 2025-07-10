/*
  Arrow functions, also known as fat arrow functions, are a concise and shorter way to define functions in JavaScript.
  They were introduced in ECMAScript 6 (ES6) and provide a more compact syntax compared to traditional function expressions
 */

  // normal functions
//   function greet(username) {
//     return `Hello ${username}`;
//   }

//   console.log(greet("Iamashok"));

  // arrow functions
// greet = (username) => {
//     return `Hello ${username}`;
// };

// console.log(greet("I am Ashok"));
// const double = n => n*2;
// const double = (number) => {
//     return number*2;
// }
// console.log(double(2));

setTimeout(() => {
    console.log("Hello");
    setTimeout(() => {
    console.log("Hey");
    setTimeout(() => {
    console.log("Namaste");
    setTimeout(() => {
    console.log("Hi");
    setTimeout(() => {
    console.log("ashok kumar");
},2000);
},2000);
},2000);
},2000);
},2000);
