const CoreMapper = require("./core.mapper");
const userSchema = require("../schemas/user.schema");

class UserMapper extends CoreMapper {
  async createUser(userData) {
    const User = this.mongoose.model("users", userSchema);
    const newUser = new User(userData);
    return await newUser.save();
  }
}

module.exports = UserMapper;
