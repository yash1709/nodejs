
const express = require('express');

const app = express();

app.get("", (request, response) => {
    response.send(`
    <h1>Welcome,to Home Page</h1> <a href= "/about"> Go to About Page </a>
    `);
});

app.get("/about", (request, response) => {
    response.send(`
        <input type="text" placeholder="Username..."  />
        <button> Click me </button>
        <a href= "/"> Go to Home Page </a>
    `);
});

app.get("/help", (request, response) => {
    response.send([
        {
            name: 'Yash Baheti',
            email: 'yashbaheti2002@gmail.com'
        },
        {
            name: 'Shera',
            email: 'shera2903@gmail.com'
        }
    ]);
});

app.listen(5000);