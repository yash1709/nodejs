
// How Node JS works ?
//     -> 1. call stack
//     -> 2. Node api
//     -> 3. Callback Queue
// Event Loop


console.log("Starting up");

setTimeout(() => {
    console.log("2 second log");
}, 2000);

setTimeout(() => {
    console.log("0 second log");
}, 0);

console.log("Finishing up");