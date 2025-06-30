// code - 1
/*
console.log("Hello World");
console.log({name: "Ashok"});
console.warn("This is a Warning");
console.table({name:"Ashok", age :"20"});
console.clear();
console.log("hi this is ashok");
*/

// code - 2
/*
// variables
// declare 
let name;
name ="Ashok";
console.log(name); //undefine because we not given any value
//task
let whatDoYouWannaBecomeInYourLife ="programmer";
let gender = "male";
let twitterHandle ="ashok441";
console.log(`${name}, ${whatDoYouWannaBecomeInYourLife}, ${gender}, ${twitterHandle}`);
console.log(name,",",whatDoYouWannaBecomeInYourLife,",",gender,",",twitterHandle);
*/

// code - 3
/*
// primitive data types
// 1.number
let num = 10.03;
console.log(typeof num);

// basic math
let counter =10;
counter++;
counter--;
console.log(counter);
//task
let firstFavNum = 11;
let secondFavNum = 5;
console.log(firstFavNum + secondFavNum);
console.log(firstFavNum - secondFavNum);
console.log(firstFavNum * secondFavNum);
console.log(firstFavNum / secondFavNum);
console.log(firstFavNum**5);
*/

// code - 4
/*
// Boolean data types --> true or false
let isTrue = true;
console.log(isTrue);

let num1 =12;
console.log(num1 + undefined);// NaN --> Not a Number

// task
let isTsProgrammingLanguage = true;
let isTsHard = false;
let favNumb = 5;
console.log(isTsProgrammingLanguage);
console.log(isTsHard);
console.log(favNumb);
console.log( favNumb + undefined );
*/

// code - 5
/*
Comparison Operators
1. Relational Operators
> Greater than
< Less than 
>= Greater than or equal to
<= Less than or equal to

2. Equality Operators
=== strict equality (type + value)
!=== strict non-equality operators (type + value)
== loose equality operator (value)
!= loose not equality operator (value)

console.log(10 === "10");
console.log(10 == "10");
 //task
let firstFavNumb = 5;
let secondFavNumb = 11;
console.log(firstFavNumb > secondFavNumb);
console.log(firstFavNumb < secondFavNumb);
console.log(firstFavNumb >= secondFavNumb);
console.log(firstFavNumb <= secondFavNumb);
console.log(firstFavNumb === secondFavNumb);
console.log(firstFavNumb == secondFavNumb);
console.log(firstFavNumb != secondFavNumb);
*/

// code - 6
/*
// Strings
let s1 = "   apple  ";
let s2 = 'orange';
let s3 = `grapes`;
console.log(s1,s2,s3);
console.log(s1+s2);// string concatination

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
console.log(s1.slice(0,2));

// split & join
console.log(s1.split("").join("-"));

// Includes
console.log(s1.includes("p"));

// trim
console.log(s1.trim());

//backticks
let desc =`this is some random
Text
`;
console.log(desc);

let firstName = "Buri";
let lastName = "Ashok Kumar";
let fullName = `${firstName} ${lastName} is studing in LPU.`
console.log(fullName);

//task
let favActorFirstName = "pawan kalyan";
let favActorLastName = " konedala";
let fullName = favActorFirstName.concat(favActorLastName);
let upperCase = fullName.toUpperCase();
let message = `My favorite Actor Is ${upperCase } . He is current A.P deputy cheif minister.`;
message += `his best show is silicon Valley`;
console.log(message);
*/
