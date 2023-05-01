const {MongoClient} = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const insertToDB = async(data)=>{
    try {
        await client.connect();
        const database = client.db("Human_Resource2");
        const collection = database.collection("employee");
        const dbResponse = await collection.insertMany(data);
        await client.close();
        return dbResponse;
    } catch (error) {
        console.log("error occurred while performing db operation", error.message);
        return error.message;
    }
}

const getAllInDB = async ()=>{
    try {
        await client.connect();
        const database = client.db("Human_Resource2");
        const collection = database.collection("employee");
        const dbResponse = await collection.find().toArray();
        await client.close();
        return dbResponse;
    } catch (error) {
        console.log("Error occurred while performing db operation", error.message);
        return error.message;
    }
}

const getSalaryInDB = async (query)=>{
    try {
        await client.connect();
        const database = client.db("Human_Resource2");
        const collection = database.collection("employee");
        const dbResponse = await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    } catch (error) {
        console.log("Error occurred while performing db operation", error.message);
        return error.message;
    }
}

const getExpInDB = async (query) =>{
    try {
        await client.connect();
        const database = client.db("Human_Resource2");
        const collection = database.collection("employee");
        const dbResponse = await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    } catch (error) {
        console.log("error occurred while performing db operation", error.message);
        return error.message;
    }
}

const getGradExpInDB = async(query)=>{
    try {
        await client.connect();
        const database = client.db("Human_Resource2");
        const collection = database.collection("employee");
        const dbResponse = await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    } catch (error) {
        console.log("Error occurred while performing db operation", error.message);
        return error.message;
    }
}

const updateInDB = async(filter, updateValue)=>{
    try {
        await client.connect();
        const database = client.db("Human_Resource2");
        const collection = database.collection("employee");
        const dbResponse = await collection.updateMany(filter, updateValue);
        await client.close();
        return dbResponse;
    } catch (error) {
        console.log("Error occurred while performing db operations", error.message);
        return error.message;
    }
}

const deleteInDB = async(query)=>{
    try {
        await client.connect();
        const database = client.db("Human_Resource2");
        const collection = database.collection("employee");
        const dbResponse = await collection.deleteMany(query);
        await client.close();
        return dbResponse;
    } catch (error) {
        console.log("Error occurred while performing db operation", error.message);
        return error.message;
    }
}

module.exports = {
    insertToDB,
    getAllInDB,
    getSalaryInDB,
    getExpInDB,
    getGradExpInDB,
    updateInDB,
    deleteInDB
}