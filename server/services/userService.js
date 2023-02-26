const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const secret = "nodejsisthebest";
const tokenBlacklist = new Set();

function createToken(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    username: user.username,
  };

  return {
    _id: user._id,
    email: user.email,
    username: user.username,
    accessToken: jwt.sign(payload, secret),
  };
}

function parseToken(token) {
  if (tokenBlacklist.has(token)) {
    throw new Error("Token is blacklisted");
  }

  return jwt.verify(token, secret);
}

async function register(username, email, password) {
  const existingEmail = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });
  const existingUsername = await User.findOne({ username }).collation({
    locale: "en",
    strength: 2,
  });
  if (existingEmail) {
    throw new Error("Email is taken");
  }
  if (existingUsername) {
    throw new Error("Username is taken");
  }

  const user = await User.create({
    username,
    email,
    hashedPassword: await bcrypt.hash(password, 10),
  });

  return createToken(user);
}

async function login(email, password) {
  const user = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });
  if (!user) {
    throw new Error("Incorrect email or password");
  }

  const match = await bcrypt.compare(password, user.hashedPassword);
  if (!match) {
    throw new Error("Incorrect email or password");
  }

  return createToken(user);
}

async function logout(token) {
  tokenBlacklist.add(token);
}

module.exports = {
  register,
  login,
  logout,
  parseToken,
};
