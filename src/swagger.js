const swaggerAutogen = require("swagger-autogen");

const doc = {
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