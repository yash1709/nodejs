const fs = require('fs');

// fs.writeFileSync('apple.txt', 'This is a apple file');
const path = require('path');
const dirpath = path.join(__dirname, 'files');
// console.warn(dirpath);

// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(dirpath + "/hello" + i + ".txt", "A simple txt file");
// }

// fs.readdir(dirpath, (error, files) => {
//     console.warn(files);
// })

fs.readdir(dirpath, (error, files) => {
    files.forEach((item) => {
        console.log(item);
    })
})