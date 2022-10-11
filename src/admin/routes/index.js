const express = require("express");
const routerAdmin = express.Router();

const routerUser = require("./user/routerUser");
const routerAuth = require("./auth/routerAuth");

routerAdmin.use(/* #swagger.tags = ['Auth']*/ routerAuth);
routerAdmin.use(
    /* #swagger.tags = ['Users']*/
    /* #swagger.security = [{
        "apiKeyAuth": []
    }] */
    routerUser
);

module.exports = routerAdmin;