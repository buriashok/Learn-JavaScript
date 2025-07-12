/* The filter() method is a built-in array method in JavaScript that allows you to create a new array containing elements that pass a certain condition.
*It provides a clean and concise way to filter out elements from an array based on a specified criteria.

// Example - 1 :
const songs = [
    { name: "Lucky You", duration: 4.34},
    { name: "Just like You", duration: 3.23},
    { name: "The Search", duration: 2.33},
    { name: "Old Town Road", duration: 1.43},
    { name: "The Box", duration: 5.23},
];

console.log(songs.filter(song => song.duration > 3));

// Task - 1
const ages = [32, 33, 16, 40];
function checkAdults(age) {
    return age>= 18;
}

const res = ages.filter(checkAdults);
console.log(res);
*/
const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
];

const result = words.filter(word => word.length > 6);
console.log(result);