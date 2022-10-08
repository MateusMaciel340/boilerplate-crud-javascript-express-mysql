const express = require("express");
const dotenv = require("dotenv").config();

const db = require("./db/connection");
const router = require("./routes");
const swaggerFile = require("./swagger/swagger.json");

const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");

const app = express();

app.use(
    bodyParser.urlencoded({ extended: false }), router
);

app.use(
    "/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile)
);

db.Connection();

app.listen(process.env.PORT_SERVER, () => {
    console.log(`Server on http://localhost:${process.env.PORT_SERVER}/`);
});