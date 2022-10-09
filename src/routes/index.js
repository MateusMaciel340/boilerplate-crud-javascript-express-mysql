const express = require("express");
const router = express.Router();

const routerAdmin = require("../admin/routes");

router.use(routerAdmin);

module.exports = router;