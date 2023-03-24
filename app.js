/* eslint-disable no-console */
/* eslint-disable import/newline-after-import */
require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const session = require("express-session");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client/build")));

const memoryStore = new session.MemoryStore();
app.use(
  session({
    secret: "somesecret",
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
  })
);

// setting the path of the router file to variable so that we can use all the routes from it.
const router = require("./routes/router.js");

// this will set/use our api to initial path of /api.
app.use("/api", router);

app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: "./client/build" });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// use 2000 port no. for server.
const port = process.env.PORT || 2000;

// start the server.
app.listen(port, () => {
  console.log("Server Started at ", port);
});

/**
 * Expose
 */
module.exports = app;