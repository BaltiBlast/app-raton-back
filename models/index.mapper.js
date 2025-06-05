const mongoose = require("../configs/mongoDB");
const User = require("./user.mapper");
const Customer = require("./customer.mapper");
const Note = require("./note.mapper");

module.exports = {
  UserMapper: new User(mongoose),
  CustomerMapper: new Customer(mongoose),
  NoteMapper: new Note(mongoose),
};
