const express = require("express");

const router = express.Router();

router
    .get("/", (req, res) => res.send({"authenticated": req.isAuthenticated()}))
    
module.exports = router;