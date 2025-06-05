const express = require("express");
const router = express.Router();

// CONTROLLERS //
// User
const { deleteUserById, getUserById, updateUserById } = require("./controllers/user.controllers");

// Auth
const { register, login, logout } = require("./controllers/auth.controllers");

// Customer
const { getCustomers, addCustomer, updateCustomer, deleteCustomer } = require("./controllers/customer.controllers");

// Note
const { addNote, updateNote, getUserNotes, deleteNote } = require("./controllers/note.controllers");

// ROUTES //
// User
router.get("/user", getUserById);
router.put("/user", updateUserById);
router.delete("/user", deleteUserById);

// Auth
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

// Customer
router.post("/customer", addCustomer);
router.put("/customer/:customerId", updateCustomer);
router.delete("/customer/:customerId", deleteCustomer);
router.get("/customers", getCustomers);

// Note
router.post("/note", addNote);
router.put("/note:noteId", updateNote);
router.delete("/note:noteId", deleteNote);
router.get("/notes", getUserNotes);

module.exports = router;
