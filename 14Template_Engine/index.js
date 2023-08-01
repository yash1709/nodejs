const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.get("/profile", (_, response) => {
    const user = {
        name: 'Yash Baheti',
        email: 'yashbaheti2002@gmail.com',
        city: 'Hingoli'
    }
    response.render('profile', { user });
});


app.listen(5000);