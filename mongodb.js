const { MongoClient } = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'e-comm';

async function dbConnect() {
    let result = await client.connect();
    let db = result.db(databaseName);
    return db.collection('products');
}

module.exports = dbConnect();