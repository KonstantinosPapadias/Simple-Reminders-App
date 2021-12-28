require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const AuthenticationController = require("./controllers/authenticationController");
const authenticatedRouter = require("./routes/api/auth/authenticated");
const remindersRouter = require("./routes/api/reminders");
const signinRouter = require("./routes/api/auth/signin");
const signoutRouter = require("./routes/api/auth/signout");
const signupRouter = require("./routes/api/auth/signup");

const app = express();

mongoose.connect(process.env.DATABASE_URL);
mongoose.connection
    .on("error", (error) => console.log(error))
    .once("open", () => console.log("Connected to database."));

app
    .use(express.urlencoded({extended: true}))
    .use(express.json());


app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
  }));

app
    .use(session(
        {
            secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized: false
        }
    ))
    .use(passport.initialize())
    .use(passport.session());
AuthenticationController.configurePassport();

app
    .use("/api/auth/authenticated", authenticatedRouter)
    .use("/api/reminders", remindersRouter)
    .use("/api/auth/signin", signinRouter)
    .use("/api/auth/signout", signoutRouter)
    .use("/api/auth/signup", signupRouter)

app.listen(process.env.PORT, () => console.log(`Server up and running on port ${process.env.PORT}...`));