const express = require("express");
const dotenv = require("dotenv").config();

const db = require("./db/connection");

const app = express();

db.Connection();

app.listen(process.env.PORT_SERVER, () => {
    console.log(`Server on http://localhost:${process.env.PORT_SERVER}/`);
});