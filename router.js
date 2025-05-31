const express = require("express");
const router = express.Router();

// CONTROLLERS //
// User
const { createNewUser } = require("./controllers/user.controllers");

router.post("/user", createNewUser);

module.exports = router;
