const userControllers = {
  createNewUser: async (req, res) => {
    const userData = req.body;
    console.log("REQ.BODY", userData);

    try {
    } catch (error) {
      console.log("[ERROR - POST] createNewUser :", error);
    }
  },
};

module.exports = userControllers;
