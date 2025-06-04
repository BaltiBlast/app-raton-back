const express = require("express");
const router = express.Router();

// CONTROLLERS //
// User
const { deleteUserById, getUserById, updateUserById } = require("./controllers/user.controllers");

// Auth
const { register, login, logout } = require("./controllers/auth.controllers");

// Customer
const { getCustomers, addCustomer, updateCustomer, deleteCustomer } = require("./controllers/customer.controllers");

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
router.get("/customers", getCustomers);
router.post("/customer", addCustomer);
router.put("/customer", updateCustomer);
router.delete("/customer", deleteCustomer);

module.exports = router;
