const { UserMapper } = require("../models/index.mapper");

const authControllers = {
  login: async (req, res) => {
    try {
      const { user_email, password } = req.body;
      const user = await UserMapper.findUserByEmail(user_email);
      const isPasswordMatch = password === user.password;

      if (!isPasswordMatch) {
        res.send({ message: "MDP pas bon" });
      }

      req.session.user = { ...user };
      res.send({ message: "data ok", user });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = authControllers;
