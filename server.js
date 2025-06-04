// NPM imports
const express = require("express");
require("dotenv").config();
const session = require("express-session");
const triggerAutoLogin = require("./middlewares/autoLogin");

// Local imports
const router = require("./router");

const { PORT, SESSION_SECRET_KEY, NODE_ENV } = process.env;
const server = express();

// JSON
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Session
server.use(
  session({
    secret: SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: NODE_ENV === "prod",
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    },
    name: "raton-session",
  })
);

server.use(router);

server.listen(PORT, () => {
  console.log(`The broche is turning on http://localhost:${PORT}`);
  triggerAutoLogin(PORT);
});
