const express = require("express");
const router = express.Router();

// CONTROLLERS //
// User
const { createNewUser, deleteUserById, getUserById } = require("./controllers/user.controllers");

// ROUTES //
// User
router.post("/user", createNewUser);
router.delete("/user/:id", deleteUserById);
router.get("/user/:id", getUserById);

module.exports = router;
