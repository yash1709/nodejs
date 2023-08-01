// Route-level Middleware

const express = require('express');
const reqFilter = require('./middleware');
const app = express();
const route = express.Router();


// app.use(reqFilter);
route.use(reqFilter);


app.get('/', (request, response) => {
    response.send("Welcome to Home Page");
});

app.get('/users', (request, response) => {
    response.send("Welcome to Users Page");
});

route.get('/about', (request, response) => {
    response.send("Welcome to About Page");
});

route.get('/contact', (request, response) => {
    response.send("Welcome to Contact Page");
});

app.use('/', route);

app.listen(5000);