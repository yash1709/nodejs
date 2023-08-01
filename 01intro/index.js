const app = require('./app');
const fs = require('fs');

// var x = 20;
// let y = 30;
// const z = 40;
// console.log(x + y + z);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log(app);
// console.log(app.z());


/*

const arr = [2, 4, 8, 1, 3, 7, 3, 9];

arr.filter((item) => {
    console.log(item)
})

let result = arr.filter((item) => {
    // return item === 3;
    return item > 4;
})
console.warn(result);

*/



// *** Core Module in Node JS 
console.log("Yash Baheti");
fs.writeFileSync("hello.txt", "Yash Baheti");
fs.writeFileSync("hello2.txt", "Computer Science and Engineering");
console.log("->>>", __dirname);
console.log("->>>", __filename);

