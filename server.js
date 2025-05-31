const express = require("express");
require("dotenv").config();
const server = express();

const { PORT } = process.env;

server.listen(PORT, () => {
  console.log(`The broche is turning on http://localhost:${PORT}`);
});
