const { sign, verify } = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const secret = "asdqr1#$!#Rn@";
const createToken = (user) => {
  const accesstoken = sign(
    {
      email: user.email,
      password: user.password,
      name: user.name,
      aadhaar: user.aadhaar,
    },
    secret
  );

  return accesstoken;
};

const validateToken = (req, res, next) => {
  const accesstoken = req.cookies.jwt;
  if (!accesstoken)
    res.status(400).json({ error: "user is not authenticated" });
  try {
    const validtoken = verify(accesstoken, secret);
    if (validtoken) req.authenticated = true;
    return next();
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

module.exports = { createToken, validateToken };
