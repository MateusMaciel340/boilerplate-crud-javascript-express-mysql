const swaggerAutogen = require("swagger-autogen");
const dotenv = require("dotenv").config();

const doc = {
  info: {
    version: "1.0.0",
    title: "Boilerplate Crud JavaScript Express + MySQL",
    description: "Development of a backend application for (list, add, remove and update user data) + JWT authentication."
  },
  host: `localhost:${process.env.PORT_SERVER}`,
  schemes: ["http", "https"],
  securityDefinitions: {
    apiKeyAuth: {
      type: "apiKey",
      in: "header",       // can be "header", "query" or "cookie"
      name: "Authorization",  // name of the header, query parameter or cookie
    }
  },
};

const outputFile = "./swagger/swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);