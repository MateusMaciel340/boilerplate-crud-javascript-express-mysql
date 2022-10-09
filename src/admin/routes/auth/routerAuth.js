const express = require("express");
const routerAuth = express.Router();

const { controllerAuth } = require("../../controllers");

routerAuth.post("/login",
    controllerAuth.loginAuth
);

module.exports = routerAuth;