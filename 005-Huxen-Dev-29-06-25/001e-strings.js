// Strings in JavaScript
// Strings are used to represent text data in JavaScript.
// They can be created using single quotes, double quotes, or backticks (template literals).

let s1 = "   apple  ";
let s2 = "orange";
let s3 = `grapes`;
console.log(s1, s2, s3);
console.log(s1 + s2); // string concatination

//concatination
let mixedFruit = s1.concat(s2);
console.log(mixedFruit);

// Append
s1 += " Something else";
console.log(s1);

// Length
console.log(s1.length);

//cases
console.log(s1.toLowerCase());
console.log(s1.toUpperCase());

// Slice
console.log(s1.slice(0, 2));

// split & join
console.log(s1.split("").join("-"));

// Includes
console.log(s1.includes("p"));

// trim
console.log(s1.trim());

//backticks
let desc = `this is some random
Text
`;
console.log(desc);

let firstName = "Buri";
let lastName = "Ashok Kumar";
// let fullName = `${firstName} ${lastName} is studing in LPU.`;
console.log(fullName);

//task
let favActorFirstName = "pawan kalyan";
let favActorLastName = " konedala";
let fullName = favActorFirstName.concat(favActorLastName);
let upperCase = fullName.toUpperCase();
let message = `My favorite Actor Is ${upperCase} . He is current A.P deputy cheif minister.`;
message += `his best show is silicon Valley`;
console.log(message);
