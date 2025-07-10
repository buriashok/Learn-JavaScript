// destructuring allows us to "unpack" values from data-structures (Arrays, objects) intoseperate distinct variables.

// const foo = ['one', 'two', 'three'];
// console.log(foo[0]);
// console.log(foo[1]);
// console.log(foo[2]);

// const [one, two, three] = foo;// we can give any names insted of one, two, three & we can pass more variables than the elements in the array.

// console.log(one);
// console.log(two);
// console.log(three);

// let a,b;
// [a = 5, b = 8] = ["one", "two"];
// console.log(a,", ", b);

// function f(){
//     return [1,2];
// }

// let a, b;
// [a, b] =f();
// console.log(a);
// console.log(b);

//ignoreing the return values
// function f() {
//     return [1,2,3];
// }

// const [a, , b] =f();
// console.log(a);
// console.log(b);

//Assigning the rest of an array to a variable

// const [a, ...b] = ["one", "two", "three", true, 12, ["one"]];
// console.log(b);

//task
// const colors = ["red", "green", "blue", "yellow", "orange"];

// const [color1, color2, color3] = colors;
// console.log(color1, color2, color3);

// In object destructuring order doesn't matter but the name does matter.

// const student = {name: "huxn", position: "First", rollNo: 27};

// const {name, position} = student;
// console.log(name);
// console.log(position);

//renaming
// const num = { x: 100, y: 200};
// const { x: new1, y: new2} = num;

// console.log(new1);
// console.log(new2);

// Object destructing and rest operator
// let {a,b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500};
// console.log(a);
// console.log(b);
// console.log(rest);

// function desctruing in JavaScript
// const person = {
//   name: "john doe",
//   age: 20,
//   country: "USA",
// };

// function printPersonInfo({name, age, country}) {
//   console.log(`Name: ${name}`);
//   console.log(`Age: ${age}`);
//   console.log(`Country: ${country}`);
// }

// printPersonInfo(person);

// let options = {
//   title: "My Menu",
//   items: ["item1", "item2"],
// };

// function showMenu({
//   title = "UNtitled",
//   width: w = 100,
//   height: h = 200,
//   items: [item1, item2]= [item1, item2],
// }){
//   console.log(`${title} - ${w}x ${h} `);
//   console.log(item1);
//   console.log(item2);
// }

// showMenu(options);

// Nested destructuring
// const songs = [
//   { name: "lucky you", singer: "Joyner", duration: "3:45" },
//   { name: "Godzilla", singer: "Eminem", duration: "4:30" },
//   { name: "Rap God", singer: "Eminem", duration: "6:00" },  
//   { name: "Lose Yourself", singer: "Eminem", duration: "5:20" },  
// ];

// const [,,, {singer: s }] = songs;
// console.log(s);

// destructure mixing.
const data = {
  user: {
    id: 123,
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
      city: "New York",
      country: "USA",
    },
    hobbies: ["Reading", "Painting", "Cooking"],
    scores: {
      math: 95,
      science: 88,
      history: 75,
    },
  },
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
  ],
  settings: {
    darkMode: true,
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    language: "English",
  },
};

// Extracting data using object destructuring
const {
  user: {
    name,
    age,
    address: { city, country },
    hobbies,
    scores: { math, science, history },
    email,
  },
  products: [product1, product2, product3],
  settings: {
    darkMode,
    notifications: {
      email: emailNotifications,
      sms: smsNotifications,
      push: pushNotifications,
    },
    language,
  },
} = data;

// Logging the extracted data using template literals
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Address: ${city}, ${country}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Math Score: ${math}`);
console.log(`Science Score: ${science}`);
console.log(`History Score: ${history}`);
console.log(`Product 1: ${product1.name} - $${product1.price}`);
console.log(`Product 2: ${product2.name} - $${product2.price}`);
console.log(`Product 3: ${product3.name} - $${product3.price}`);
console.log(`Dark Mode: ${darkMode}`);
console.log(`Email Notifications: ${emailNotifications}`);
console.log(`SMS Notifications: ${smsNotifications}`);
console.log(`Push Notifications: ${pushNotifications}`);
console.log(`Language: ${language}`);
