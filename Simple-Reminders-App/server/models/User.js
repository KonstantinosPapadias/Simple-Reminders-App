const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
    text: {type: String, require: true}
});

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    reminders: [reminderSchema]
}, {minimize: false});

const User = mongoose.model("User", userSchema);

module.exports = User;