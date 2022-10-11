const express = require("express");
const routerUser = express.Router();

const { controllerUser } = require("../../controllers");
const acess = require("../../../middlewares/acess");

routerUser.get("/listingUser",
    acess, controllerUser.listingUser
);

routerUser.get("/searchingUser/:id",
    acess, controllerUser.searchingUser
);

routerUser.post("/addingUser",
    acess, controllerUser.addingUser
);

routerUser.put("/updatedUser/:id",
    acess, controllerUser.updatedUser
);

routerUser.delete("/removeUser/:id",
    acess, controllerUser.removeUser
);

module.exports = routerUser;