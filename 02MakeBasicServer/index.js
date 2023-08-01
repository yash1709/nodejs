// >>>>> STEP 1
const http = require('http');  

// >>>>> STEP 2
http.createServer((request, response) => {
    response.write("<h1>Hello , This is Yash Baheti</h1>");
    response.end();
}).listen(4500);


// >>>>> STEP 3 --- ctrl + s Save the Code

// >>>>> STEP 4 --- Create new Terminal

// >>>>> STEP 5 --- Browse on chrome ( localhost:4500 )

    
    

// function dataControl(request, response) {
//     response.write("<h1>Hello , This is Yash Baheti</h1>");
//     response.end();
// }

// http.createServer(dataControl).listen(4500); 