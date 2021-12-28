const express = require("express");
const passport = require("passport");

const router = express.Router();
const redirectUrl = "http://localhost:3000/";


router
    .post("/", passport.authenticate("local", {successRedirect: redirectUrl, failureRedirect: redirectUrl}));

module.exports = router;