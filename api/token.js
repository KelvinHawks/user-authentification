const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "jwtkey", { expiresIn: 600 });
};

module.exports = { generateToken };
