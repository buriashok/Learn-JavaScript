/**
 * The "for...in" loop is used to iterate over the enumerable properties of an object.
 * It is important to note that it iterates over all enumerable properties, including those inherited from the object's prototype chain.
 * It is generally used for objects, not arrays, as it does not guarantee the order of iteration.
 * For arrays, it is better to use a "for...of" loop or a traditional for loop.
*/

let person = {
    name : "John",
    age : 19,
    gender : "male",
};

for(let keys in person) {
    console.log(keys,person[keys]);
}
