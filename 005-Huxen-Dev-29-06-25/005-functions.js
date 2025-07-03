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
// function product(x, y) {
//     return x * y;
// }

// const result = product(20, 30);
// console.log(result);

// Function Expression
// const greetings = function user(username) {
//     console.log(`Hello ${username}`);
// }

// greetings("Buri Ashok Kumar");

// callBack Functions
// when we provide a function as an argument to other function
// that function is known as callback function.

//Example - 1
// function showCallFun(fn) {
//     let value = 10;
//     fn(value);
// }

// showCallFun( function (value){
//     console.log(value);
// })

//Example - 2
function greet(name, cb) {
    console.log(`Hello ${name}`);
    cb();
}

// function cb() {
//     console.log("I am callback fuction.");
// }

// greet("Buri Ashok Kumar", cb);

//or 

greet("Buri Ashok Kumar", function cb() {
    console.log("I am callback fuction.");
});
