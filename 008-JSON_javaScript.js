const person = {
  name: "Buri Ashok Kumar",
  age: 30,
  isSubcribed: true,
  hobbies: ["Reading", "swimming", "playing cricket"],
  address: {
    city: "vzm",
    mandal: "theralam",
  },
};
console.log(person);
console.log(typeof person);
// JSON.stringify() converts object to JSON
const jsonStringify = JSON.stringify(person);
console.log(jsonStringify);
console.log(typeof jsonStringify);
// JSON.parse() converts JSON to object
const parsedObject = JSON.parse(jsonStringify);
console.log(parsedObject);
console.log(typeof parsedObject);
