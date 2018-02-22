'use strict';

const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const register = (req, res) => {
  let user = new User;

  user.name = req.body.name;
  user.email = req.body.email;

  user.setPassword(req.body.password);
  // TODO: check errors and validate form inputs and catching errors in save function
  user.save((err) => {
    let token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token": token
    });
  })
};

const login = (req, res) => {
  passport.authenticate('local', (err, user, info) => {
    let token;

    if (err) {
      res.status(404).json(err);
      return;
    }
    if (user) {
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token": token
      })
    } else {
      res.status(401).json(info);
    }
  })(req, res);
};

module.exports = {
  register: register,
  login: login
};
