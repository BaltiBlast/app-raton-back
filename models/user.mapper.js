const CoreMapper = require("./core.mapper");
const userSchema = require("../schemas/user/createUser.schema");

class UserMapper extends CoreMapper {
  user = this.mongoose.model("User", userSchema);

  async createUser(userData) {
    const newUser = new this.user(userData);
    return await newUser.save();
  }

  async deleteUserById(userId) {
    return await this.user.findByIdAndDelete(userId);
  }

  async findUserById(userId) {
    return await this.user.findById(userId);
  }
}

module.exports = UserMapper;
