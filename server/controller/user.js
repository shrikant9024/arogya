const User = require("../models/user");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const { createToken } = require("../jwt");

async function handleSignup(req, res) {
  try {
    const { email, name, password, aadhaar } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const result = await User.create({
      email,
      name,
      aadhaar,
      password: hashedPassword,
    });

    return res.status(201).json({ msg: "User registration successful" });
  } catch (error) {
    console.error("Error while signing up:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function handleLogin(req, res) {
  const { email, password } = req.body;
  const loginuser = await User.findOne({ email: email });

  if (!loginuser) res.status(400).send("User does not exist");
  const dbpassword = loginuser.password;
  bcrypt.compare(password, dbpassword).then((match) => {
    if (!match) {
      res.status(401).json({ error: "wrong password" });
    }
  });

  const accesstoken = createToken(User);
  res.cookie("jwt", accesstoken, {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });
  return res.status(200).json({ message: "login successfull" });
}

module.exports = { handleLogin, handleSignup };
