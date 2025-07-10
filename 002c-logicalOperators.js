

for (let i=1; i <= 10; i++) {
    console.log(i);
}

// logical operators 
const a = true;
const b= false;
const c = 4;

console.log(c > 2 && c < 2); // false

console.log(a || b);

console.log(!a);

let password = "huxn-webdev";

if(password.length >= 8 && password.includes("web")) {
    console.log("Valid Password");
}else{
    console.log("Invalid Password");
}