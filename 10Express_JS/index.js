
const express = require('express');

const app = express();

app.get("", (request, response) => {
    // console.log("data sent by browser", request.query)
    console.log("data sent by browser ->>>", request.query.name)
    response.send("Welcome ," + request.query.name);
});

app.get("/about", (request, response) => {
    response.send('Hello , this is About Page');
});

app.get("/help", (request, response) => {
    response.send('Hello , this is Help Page');
});

app.listen(5000);