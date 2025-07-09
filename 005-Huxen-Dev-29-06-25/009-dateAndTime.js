// we can values to Date() constructor
// year,month,day, hour, minutes, seconds, miliseconds
// const currentDate = new Date(2024, 6, 24, 18, 30, 34, 0);
// console.log(currentDate);

// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDay();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const milliseconds = date.getMilliseconds();

// console.log(`year : ${year}`);
// console.log(`month : ${month}`);
// console.log(`day : ${day}`);
// console.log(`hours : ${hours}`);
// console.log(`minutes : ${minutes}`);
// console.log(`milliseconds : ${milliseconds}`);

// const date = new Date();
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toLocaleString());

// date.setDate(date.getDate() - 1)
// date.setDate(date.getDate() + 1)
// console.log(date);

//setIntervel
// setInterval( () => console.log(`This function will be execute every 2 seconds`),2000
// );

//setTimeOut
// setTimeout( function () {
//     console.log(`this function will run after 3 seconds`);
// },3000);

//clearInterval();

const intervalId = setInterval(function () {
    console.log(`This function is being executed at the interval`);
}, 1000);

// Stop the interval after 10 seconds

setTimeout(function () {
    clearInterval(intervalId);
    console.log(`Interval Stopped`);
}, 10000);