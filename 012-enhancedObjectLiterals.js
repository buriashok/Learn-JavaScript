/**
 * Enhanced object literals, introduced in ECMAScript 6 (ES6), are a set of enhancements to the syntax for defining objects in JavaScript. 
 * These enhancements make it more convenient and concise to define object properties and methods
 */

// function user(name, age, work) {
//     return {
//         name: name,
//         age: age,
//         work: work,
//     };
// }

//we can remove either value or key in the object.

// function user(name, age, work) {
//     return {
//         name,
//         age,
//         work,
//         intro() {
//             console.log(`My name is ${name} & I'm ${age} years old & I'm a ${work}`);
//         },
//     };
// }

// const huxn = user("Huxn", 19, "Programmer");
// const ashok = user("Buri Ashok Kumar", 20, "designer");

// console.log(huxn.intro());
// console.log(ashok);

//task
//REFACTOR ES5 CODE TO ES6 (Enhanced Object Literals)
// ES5 code

// const a = 1;
// const b = 2;
// const c = 3;

// const obj = { a, b, c };

// console.log(obj);

const lib = {
    sum(a, b){
        return a + b;
    },
    mult(a, b){
        return a * b;
    },
};

console.log(lib.sum(2,3));
console.log(lib.mult(2,3));
