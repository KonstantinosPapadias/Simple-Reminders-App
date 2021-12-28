const bcrypt = require("bcrypt");
const User = require("../models/User");

async function postSignup(req, res) {
    try {
        const {username, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, saltRounds=10);
        const newUser = User({
            username: username,
            password: hashedPassword,
            articles: []
        });
        await newUser.save();
        req.login(newUser,(err) => res.redirect("http://localhost:3000"));
    } catch (err) {
        err.stack;
    }
}

module.exports = {
    postSignup
};