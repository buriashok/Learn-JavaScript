// rest parameter
// The rest parameter syntax allows a function to accept an indefinite number of arguments
//as an array, providing a way to represent variadic functions in JavaScript.
// function user(x, ...userData) {
//     console.log(x);
//     console.log(userData);
// }

// user("Ashok", 19, "programminig", "football");

// function person(firstName, lastName, ...hobbies){
//     console.log("First Name: ", firstName);
//     console.log("Last Name: ", lastName);
//     console.log("Hobbies: ", hobbies);
// }

// person("ashok kumar", "webDev", "programming", "football", "singer");

// Create a function which will take unlimited amount of parameters & log all of that params to that params to the console.

function variable(...params){
    console.log(paras);
}

console.log("huxn", "wwebDev", 19, 20, ["one"]);