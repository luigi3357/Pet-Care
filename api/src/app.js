const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");

var session = require('express-session');
var SQLiteStore = require('connect-sqlite3')(session);
var session = require('express-session');
var passport = require('passport');

require("./db.js");

const server = express();

server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use("/uploads", express.static("uploadedImages")); //me genera una carpeta static(con acceso desde el navegador)
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "exp://192.168.65.104:19000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  // store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
}));
server.use(passport.authenticate('session'));

server.use("/", routes);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
