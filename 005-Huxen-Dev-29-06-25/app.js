// code - 7 (Type Conversion)
/*
// convert string to number
let money = "50";
money = parseInt(money);
money = +money;
money = Number(money);
console.log(money);
console.log(typeof money);

// convert number to string
let rupee = 90;
rupee = rupee.toString();
console.log(rupee);
console.log(typeof rupee);

// string to decimal
let oilCost = '120.56';
oilCost = parseFloat(oilCost);
console.log(oilCost);
console.log(typeof oilCost);
*/

// code - 8 (conditional statements)
/*
let a = 10;
let b = 20;
if( a > b){
    console.log("a is greater than b");
}else if ( a < b){
    console.log("a is less then b");
}else{
    console.log('a is equal to b');
}

let time = 10;
let greetings;
console.log(greetings);// undefined
if(time < 10){
    greetings = "Good Morning";
    console.log(greetings);
}else if(time < 20){
    greetings = "Good Day";
    console.log(greetings);
}else{
    greetings = "Good Evening"
    console.log(greetings);
}

//task
let password;
if(password === 8){
    console.log("Welcome");
}else if(password <= 8){
    console.log("Password is too short");
}else if( password >= 8){
    console.log("Too Long Password");
}else{
    console.log("Please provide a password.");
}
*/

// code - 9 (switch statements)
/*
let x = 0;
let text;
switch (x) {
    case 0 :
        text = "off";
        console.log(text);
        break;
    case 1 :
        text = "on";
        console.log(text);
        break;
    default:
        text = "no value found";
        console.log(text);
}

let day ="saturday";
switch(day) {
    case "monday" :
        console.log("Today is monday");
        break;
    case "tuesday" :
        console.log("Today is tuesday");
        break;
    case "wednesday" :
        console.log("Today is wednesday");
        break;
    case "thrusday" :
        console.log("Today is thrusday");
        break;
    case "friday" :
        console.log("Today is friday");
        break;
    case "saturday" :
        console.log("Today is saturday");
        break;
    default:
        console.log("I don't know which day is today");
}

//task
let fruit = "Apple";
switch (fruit) {
    case "Banana" :
        console.log("Banana is good!");
        break;
    case "Orange" :
        console.log("I am not a fan of orange.");
        break;
    case "Apple" :
        console.log("How you like them apples?");
        break;
    default:
        console.log("I have never heard of that fruit");
}
*/

// code - 10 (Loops)
