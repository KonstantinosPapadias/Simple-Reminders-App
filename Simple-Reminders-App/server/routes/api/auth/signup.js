const express = require("express");
const {postSignup} = require("../../../controllers/signupController");
const router = express.Router();

router
    .post("/", postSignup);

module.exports = router;