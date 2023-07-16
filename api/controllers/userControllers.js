const { User } = require("../models/user");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../token");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(401).json({ message: "User arleady exist!" });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    if (hashedPassword) {
      const newUser = await new User({
        username,
        email,
        password: hashedPassword,
      });
      await newUser.save();
      res
        .status(200)
        .json({
          _id: newUser._id,
          username: newUser.username,
          email: newUser.email,
        });
    }
  }
};

// LOGIN
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    const hashedPassword = user.password;

    const comparedPassword = await bcrypt.compare(password, hashedPassword);
    if (comparedPassword) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: "Incorrect password!" });
    }
  } else {
    res.status(400).json({ message: "User does not exist!" });
  }
};

module.exports = { registerUser, login };
