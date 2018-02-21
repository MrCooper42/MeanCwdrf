'use strict';

const User = require('../models/users.js').User;

const register = (req, res) => {
  console.log("Registering user: " + req.body.email);
  res.status(200);
  res.json({
    "message": "User registered: " + req.body.email
  });
};

const profileRead = (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({
      "message": "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(req.payload._id)
      // TODO: remove exec and add error handling for user not found etc
      .exec((err, user) => {
        // TODO: use promise here
        res.status(200).json(user)
      });
  }
};

module.exports = {
  register: register,
  profileRead: profileRead
};
