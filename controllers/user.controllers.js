const { UserMapper } = require("../models/index.mapper");

const userControllers = {
  createNewUser: async (req, res) => {
    try {
      const userData = req.body;

      const newUser = await UserMapper.createUser(userData);
      res.status(201).json({ success: true, data: newUser });
    } catch (error) {
      console.error("❌ Erreur création utilisateur:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  },
};

module.exports = userControllers;
