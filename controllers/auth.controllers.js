const { UserMapper } = require("../models/index.mapper");
const bcrypt = require("bcrypt");

const authControllers = {
  // ----------------------------------------------------------------------------------------------------- //
  // Add new user to DB
  register: async (req, res) => {
    try {
      const { user_email, password, user_firstname, user_lastname, user_address, user_phone } = req.body;
      const { street_number, street_name, postal_code, city, country } = user_address;

      const hashedPassword = await bcrypt.hash(password, 10);

      const userData = {
        user_email: user_email,
        password: hashedPassword,
        user_firstname: user_firstname,
        user_lastname: user_lastname,
        user_address: {
          street_number: street_number,
          street_name: street_name,
          postal_code: postal_code,
          city: city,
          country: country,
        },
        user_phone: user_phone,
      };

      const newUser = await UserMapper.createUser(userData);
      res.status(201).json({ success: true, data: newUser });
    } catch (error) {
      console.error("❌ Erreur création utilisateur:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  },

  // ----------------------------------------------------------------------------------------------------- //
  // Log user already register
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await UserMapper.findUserByEmail(email);

      const hashedPassword = user.password;
      const isPasswordMatch = await bcrypt.compare(password, hashedPassword);

      if (!isPasswordMatch) {
        return res.status(500).json({ success: false, message: "Informations invalides" });
      }

      const userData = {
        _id: user._id,
        email: user.email,
        user_firstname: user.user_firstname,
        user_lastname: user.user_lastname,
        user_phone: user.user_phone,
        user_address: user.user_address,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };

      req.session.user = userData;
      res.status(200).json({ success: true, message: "Utilisateur connecté", user: userData });
    } catch (error) {
      console.error("❌ Erreur connexion utilisateur:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  },

  // ----------------------------------------------------------------------------------------------------- //
  // Destroy current session (logout user)
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
