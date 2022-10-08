const Sequelize = require("sequelize");

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_CONFIG = {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
};

let db = {};

try{
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
}catch(error){
    console.error("Error connecting to the database!");
}

async function Connection(){
    try{
        await db.authenticate();
        console.log("Success in your authentication to the database!");
    }catch(error){
        console.error("Error in your authentication with the database!");
    }
}

Object.assign(db, {
    Connection
});

module.exports = db;