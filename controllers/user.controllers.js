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

  deleteUserById: async (req, res) => {
    try {
      const userId = req.params.id;
      const deleteUser = await UserMapper.deleteUserById(userId);
      res.status(201).json({ success: true, data: deleteUser });
    } catch (error) {
      console.error("❌ Erreur suppréssion utilisateur:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await UserMapper.findUserById(userId);
      res.status(201).json({ success: true, data: user });
    } catch (error) {
      console.error("❌ Erreur récupération utilisateur:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  },

  updateUserById: async (req, res) => {
    try {
      const userId = req.params.id;

      const updateUserData = { ...req.body };

      delete updateUserData.user_email;
      delete updateUserData.password;
      delete updateUserData._id;
      delete updateUserData.createdAt;
      delete updateUserData.updatedAt;

      const updateUser = await UserMapper.updateUserById(userId, updateUserData);

      res.status(200).json({
        success: true,
        data: updateUser.toJSON(),
      });
    } catch (error) {
      console.error("❌ Erreur MAJ utilisateur:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  },
};

module.exports = userControllers;
