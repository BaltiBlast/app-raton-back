const http = require("http");
const postData = JSON.stringify(require("../login.json"));
require("dotenv").config();

const triggerAutoLogin = (port) => {
  if (process.env.NODE_ENV !== "dev") return;

  setTimeout(() => {
    const req = http.request(
      {
        hostname: "localhost",
        port,
        path: "/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": postData.length,
        },
      },
      (res) => {
        console.log(res.statusCode === 200 ? "✅ Auto-login OK" : "❌ Auto-login failed");
      }
    );

    req.on("error", () => console.log("❌ Auto-login error"));
    req.write(postData);
    req.end();
  }, 2000);
};

module.exports = triggerAutoLogin;
