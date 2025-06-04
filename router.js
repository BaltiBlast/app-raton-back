const express = require("express");
const router = express.Router();

// CONTROLLERS //
// User
const { createNewUser, deleteUserById, getUserById, updateUserById } = require("./controllers/user.controllers");

// Auth
const { login } = require("./controllers/auth.controllers");

// ROUTES //
// User
router.post("/user", createNewUser);
router.put("/user/:id", updateUserById);
router.delete("/user/:id", deleteUserById);
router.get("/user/:id", getUserById);

// Auth
router.post("/login", login);

module.exports = router;
