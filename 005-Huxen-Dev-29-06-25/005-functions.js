// declaration of the function
// function greet() {
//     console.log("welcome to the functions...");
// }

// greet();

// parameter functions
// function sayHello (name) {
//     console.log(`Hello ${name}`);
// }

// sayHello("Buri Ashok Kumar");

// return functions
// function add ( x, y) {
//     return x + y;
// }

// const  res = add( 10, 20 );
// console.log(res);

// Function Declaration
function product(x, y) {
    return x * y;
}

const result = product(20, 30);
console.log(result);

// Function Expression
const greetings = function user(username) {
    console.log(`Hello ${username}`);
}

greetings("Buri Ashok Kumar");