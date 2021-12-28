const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");


class AuthenticationController {

    constructor() {
        
    }

    static configurePassport() {
        passport.use(new LocalStrategy(this.authenticateUser));
        passport.serializeUser((user, done) => done(null, user.id));
        passport.deserializeUser((id, done) => {
            User.findById(id, (err, user) => done(err, user))
        });
    }

    static async authenticateUser(username, password, done) {
        try {
            const user = await User.findOne({username: username});
            if (!user)
                return done(null, false, {message: "There is no such user registered."});
            const passwordMatchesHash = await bcrypt.compare(password, user.password);
            if (!passwordMatchesHash)
                return done(null, false, {message: "Wrong password."});
            return done(null, user);
        } catch (err) {
            err.stack;
        }
    }

    static userIsAuthenticated(req, res, next) {
        if (!req.isAuthenticated())
            return res.redirect("http://localhost:3000");
        next();
    }
}

module.exports = AuthenticationController;