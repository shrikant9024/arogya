const express = require("express");
const { handleSignup, handleLogin } = require("../controller/user");
const { validateToken } = require("../jwt");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("server");
});
router.get("/login", validateToken, (req, res) => {
  res.send("login");
});

router.post("/signup", handleSignup);
router.post("/login", handleLogin);

module.exports = router;
