/*The map() method creates a new array populated with result of calling a provided function on every in the calling arrray.

Example - 1:
let numbers = [1, 2, 3, 4, 5];

let double = numbers.map((num) => num * 2);
console.log(numbers);
console.log(double);


// Example - 2 :
let  peoples = [
    {firstName: "Macom", lastName: "Reynolds"},
    {firstName: "sai babu", lastName: "mudasala"},
    {firstName: "leela krishna", lastName: "gedda"},
]

const results = peoples.map(person => {
    return [person.firstName, person.lastName]
});

console.log(results);
*/

// Task - 1 :
const numbers = [65, 34, 56, 78];
function myFunction(num){
    return num*10;
}

const newArr = numbers.map(myFunction);
console.log(newArr);