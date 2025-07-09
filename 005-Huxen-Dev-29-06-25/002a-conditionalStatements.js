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
