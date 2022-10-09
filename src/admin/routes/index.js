const express = require("express");
const routerAdmin = express.Router();

const routerUser = require("./user/routerUser");

routerAdmin.use(/* #swagger.tags = ['Users']*/ routerUser);

module.exports = routerAdmin;