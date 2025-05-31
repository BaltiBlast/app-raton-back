const express = require("express");
const router = express.Router();

router.get("/", () => {
  console.log("Router ok ");
});

module.exports = router;
