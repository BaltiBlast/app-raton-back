const express = require("express");
const router = express.Router();

// CONTROLLERS //
// User
const { createNewUser, deleteUserById } = require("./controllers/user.controllers");

router.post("/user", createNewUser);
router.delete("/user/:id", deleteUserById);

module.exports = router;
