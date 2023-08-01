const dbConnect = require('../mongodb');

const deleteData = async () => {
    // console.log("Function called");
    let data = await dbConnect();
    // let result = await data.deleteOne({ name: 'max pro 7' })
    let result = await data.deleteMany({ name: 'max 7' })
    console.warn(result);

    if (result.acknowledged) {
        console.log("Record deleted");
    }
}

deleteData();