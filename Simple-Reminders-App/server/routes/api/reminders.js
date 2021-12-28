const express = require("express");
const AuthenticationController = require("../../controllers/authenticationController");
const {
    getReminders,
    getReminder,
    postReminder,
    updateReminder,
    deleteAllReminders,
    deleteReminder
} = require("../../controllers/remindersController");

const router = express.Router(); 

router
    .get("/", AuthenticationController.userIsAuthenticated, getReminders)
    .get("/:reminderId", AuthenticationController.userIsAuthenticated, getReminder)
    .post("/", AuthenticationController.userIsAuthenticated, postReminder)
    .put("/:reminderId", AuthenticationController.userIsAuthenticated, updateReminder)
    .delete("/", AuthenticationController.userIsAuthenticated, deleteAllReminders)
    .delete("/:reminderId", AuthenticationController.userIsAuthenticated, deleteReminder);

module.exports = router;