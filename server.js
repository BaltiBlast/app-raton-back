// NPM imports
const express = require("express");
require("dotenv").config();

// Local imports
const router = require("./router");

const { PORT } = process.env;
const server = express();
server.use(router);

server.listen(PORT, () => {
  console.log(`The broche is turning on http://localhost:${PORT}`);
});
