const swaggerAutogen = require("swagger-autogen");

const outputFile = "./swagger/swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles);