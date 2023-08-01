// MongoDB :-
// ->   MongoDB is a No SQL database.
// ->   The data is stored in collection.
// ->   Collection don't have row and columns.
// ->   Data is stored in the form of object.

const dbConnection = require('../mongodb');



// async function getData() {
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('products');
//     let data = await collection.find({}).toArray();
//     console.log(data);
// }

// getData();

async function dbConnection() {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
}

// dbConnect().then((response) => {
//     response.find().toArray().then((data) => {
//         console.warn(data);
//     });
// });
// console.warn(dbConnect);

const main = async () => {
    // console.log("Main function called...");
    let data = await dbConnection();
    data = await data.find().toArray();
    console.warn(data);
}

main();