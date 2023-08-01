// Middleware

const express = require('express');
const app = express();


const reqFilter = (request, response, next) => {
    // console.log("reqFilter");
    // next();
    if (!request.query.age) {
        response.send("Please provide age")
    }
    else if (request.query.age < 18) {
        response.send("You cannot access this page")
    }
    else {
        next();
    }
}

app.use(reqFilter);


app.get('/', (request, response) => {
    response.send("Welcome to Home Page");
});

app.get('/users', (request, response) => {
    response.send("Welcome to Users Page");
});

app.listen(5000);




// Middleware Types
// ->   Application-level middleware
// ->   Router-level middleware
// ->   Error-handling middleware
// ->   Built-in middleware
// ->   Third-party middleware