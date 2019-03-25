const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
// const db variable = mongoURI in folder config/keys
const db = require("./config/keys").mongoURI;

// connect to mongoDB
// if true, it does the promise of .then. if db is false, it catches the error
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport Middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

// const port = process.env.port  // DEPLOY TO HEROKU
const port = process.env.PORT || 5000;

// actually starts the program
app.listen(port, () => {
  console.log("Server running on port " + port);
});
