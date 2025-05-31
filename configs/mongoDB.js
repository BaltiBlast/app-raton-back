const mongoose = require("mongoose");
require("dotenv").config();

const { MONGO_URL, NODE_ENV } = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    if (NODE_ENV === "dev") {
      console.log("✅ Connected to MongoDB with Mongoose !");
    }
  })
  .catch((error) => {
    console.error("❌ Connection to MongoDB failed:", error);
    process.exit(1);
  });

module.exports = mongoose;
