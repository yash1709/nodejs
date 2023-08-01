const { response } = require('express');
const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.get('/', async (request, response) => {
    let data = await dbConnect();
    data = await data.find.toArray();
    console.log(data);
    response.send({ name: 'Yashhh' });
});

app.listen(5000);