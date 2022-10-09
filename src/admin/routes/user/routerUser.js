const express = require("express");
const routerUser = express.Router();

const { controllerUser } = require("../../controllers");

routerUser.get("/listingUser",
    controllerUser.listingUser
);

routerUser.get("/searchingUser/:id",
    controllerUser.searchingUser
);

routerUser.post("/addingUser",
    controllerUser.addingUser
);

routerUser.put("/updatedUser/:id",
    controllerUser.updatedUser
);

routerUser.delete("/removeUser/:id",
    controllerUser.removeUser
);

module.exports = routerUser;