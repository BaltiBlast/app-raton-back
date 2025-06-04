const { CustomerMapper } = require("../models/index.mapper");

const customerControllers = {
  addCustomer: async (req, res) => {
    try {
      const { customer_email, customer_name, customer_address, customer_phone } = req.body;
      const { street_number, street_name, postal_code, city, country } = customer_address;

      const userId = req.session.user._id;

      const customerData = {
        user_id: userId,
        customer_name: customer_name,
        customer_email: customer_email,
        customer_address: {
          street_number: street_number,
          street_name: street_name,
          postal_code: postal_code,
          city: city,
          country: country,
        },
        customer_phone: customer_phone,
      };

      const newCustomer = await CustomerMapper.addCustomer(customerData);
      res.status(201).json({ success: true, data: newCustomer });
    } catch (error) {
      console.error("❌ Erreur création customer:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  },

  getCustomers: (req, res) => {
    console.log("GET");
  },

  updateCustomer: (req, res) => {
    console.log("PUT");
  },

  deleteCustomer: (req, res) => {
    console.log("DELETE");
  },
};

module.exports = customerControllers;
