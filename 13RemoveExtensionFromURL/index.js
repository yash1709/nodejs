const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

// app.use(express.static(publicPath));

app.get("", (_, response) => {
    response.sendFile(`${publicPath}/index.html`);
});

app.get("/about", (_, response) => {
    response.sendFile(`${publicPath}/about.html`);
});

app.get("/help", (_, response) => {
    response.sendFile(`${publicPath}/help.html`);
});

app.get("*", (_, response) => {
    response.sendFile(`${publicPath}/pagenotfound.html`);
});


app.listen(5000);