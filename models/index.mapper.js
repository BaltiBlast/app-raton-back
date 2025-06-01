const mongoose = require("../configs/mongoDB");
const User = require("./user.mapper");
const Customer = require("./customer.mapper");

module.exports = {
  UserMapper: new User(mongoose),
  CustomerMapper: new Customer(mongoose),
};
