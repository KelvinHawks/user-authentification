const express = require("express");
const { registerUser, login } = require("../controllers/userControllers");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);

module.exports = { router };
