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
const person = {
  name: "john doe",
  age: 20,
  country: "USA",
};

function printPersonInfo({name, age, country}) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Country: ${country}`);
}

printPersonInfo(person);
