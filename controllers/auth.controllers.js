const { UserMapper } = require("../models/index.mapper");

const authControllers = {
  register: async (req, res) => {
    try {
      const userData = req.body;
      const newUser = await UserMapper.createUser(userData);
      res.status(201).json({ success: true, data: newUser });
    } catch (error) {
      console.error("❌ Erreur création utilisateur:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { user_email, password } = req.body;
      const user = await UserMapper.findUserByEmail(user_email);
      const isPasswordMatch = password === user.password;

      if (!isPasswordMatch) {
        res.status(500).json({ success: false, message: "Les identifiants ne sont bons" });
      }

      req.session.user = user;
      res.status(200).json({ success: true, message: "Utilisateur connecté", user });
    } catch (error) {
      console.error("❌ Erreur connexion utilisateur:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  },

  logout: (req, res) => {
    try {
      req.session.destroy();
      res.status(200).json({ success: true, message: "Utilisateur déconnecté" });
    } catch (error) {
      console.error("❌ Erreur deconnexion utilisateur:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  },
};

module.exports = authControllers;
