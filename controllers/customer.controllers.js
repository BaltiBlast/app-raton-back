const customerControllers = {
  getCustomers: (req, res) => {
    console.log("GET");
  },

  addCustomer: (req, res) => {
    console.log("POST");
  },

  updateCustomer: (req, res) => {
    console.log("PUT");
  },

  deleteCustomer: (req, res) => {
    console.log("DELETE");
  },
};

module.exports = customerControllers;
