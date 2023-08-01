const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.get("/profile", (_, response) => {
    const user = {
        name: 'Yash Baheti',
        email: 'yashbaheti2002@gmail.com',
        country: 'INDIA',
        skills: ['c', 'php', 'web', 'java', 'node']
    }
    response.render('profile', { user });
});

app.get("/login", (_, response) => {
    response.render('login');
});

app.get("/header", (_, response) => {
    response.render('header');
});


app.listen(5000);