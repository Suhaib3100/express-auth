const jwt = require("jsonwebtoken");

const generateToken = (username) => {
  return jwt.sign({ username }, "SuhaibKing", { expiresIn: "1h" });
};

module.exports = generateToken;
