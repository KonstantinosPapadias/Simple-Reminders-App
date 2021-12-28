const express = require("express");
const {signout} = require("../../../controllers/signoutController");
const router = express.Router();

router
    .get("/", signout);

module.exports = router;