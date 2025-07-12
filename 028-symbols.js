/**
 * Symbol is a unique and immutable primitive data type introduced in ECMAScript 6 (ES6). A symbol is often used as an identifier for object properties to avoid potential naming conflicts.
 * Unlike strings or numbers, symbols are guarnteed to be unique. When you create a symbol, it is unique and cannot be recreated or changed. This uniqueness ensures that symbols will not collide with other property names, even if they have the same string representation.
 */

const mySymbol = Symbol();
// console.log(mySymbol);
// console.log(typeof mySymbol);

// Comparing Symbols
const mySymbol2 = Symbol("name");
const mySymbol3 = Symbol("name");

// console.log(mySymbol2 === mySymbol3);
const obj = {};
obj[mySymbol2] = "Value 1";
obj[mySymbol3] = "Value 2";

console.log(obj);
