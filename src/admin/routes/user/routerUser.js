const express = require("express");
const routerUser = express.Router();

const { controllerUser } = require("../../controllers");

routerUser.get("/listingUser",
    controllerUser.listingUser
);

module.exports = routerUser;