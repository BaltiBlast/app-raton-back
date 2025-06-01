const mongoose = require("../configs/mongoDB");
const User = require("./user.mapper");

module.exports = {
  UserMapper: new User(mongoose),
};
