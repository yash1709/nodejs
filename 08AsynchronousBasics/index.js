// Asynchronnous and Synchronous
// In Synchronous operations ,tasks are performed one at a time
// ->  Users...     Products...     Cities...

const { rejects } = require("assert");
const { resolve } = require("path");

// In Asynchronous , Second task do not wait to finish first task
// ->  Users...
//          Products...
//                  Cities...



// Synchronous
// console.log("Start Execution...");

// console.log("Logic Execution...");

// console.log("Complete Execution...");



// Asynchronous
// console.log("Start Execution...");

// setTimeout(() => {
//     console.log("Logic Execution...");
// }, 2000)

// console.log("Complete Execution...");



// let a = 10;
// let b = 20;

// setTimeout(() => {
//     b = 20;
// }, 2000)

// console.log(a + b);



// *** Handle Asynchronous Data in NODE JS
let a = 20;
let b = 0;

let waitingData = new Promise((resolve, rejects) => {
    setTimeout(() => {
        resolve(30)
    }, 2000)
})

waitingData.then((data) => {
    b = data;
    console.log(a + b);
})