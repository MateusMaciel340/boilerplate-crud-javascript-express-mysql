const express = require("express");
const routerUser = express.Router();

const { controllerUser } = require("../../controllers");

routerUser.get("/listingUser",
    controllerUser.listingUser
);

routerUser.get("/searchingUser/:id",
    controllerUser.searchingUser
);

module.exports = routerUser;