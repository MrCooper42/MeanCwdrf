'use strict';

const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  hash: {
    type: String,
    default: "test"
  },
  salt: {
    type: String,
    default: "test"
  }
});

userSchema.methods.setPassword = (user, password) => {
  user.salt = crypto.randomBytes(256).toString('hex');
  user.hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = (user, password) => {
  console.log(password, "ValidPassword errors password");
  console.log(this.salt, "ValidPassword errors salt");
  console.log(typeof this.salt, "ValidPassword errors salt type");
  let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  console.log(hash, "ValidPassword errors hash");
  return this.hash === hash;
};

userSchema.methods.generateJwt = () => {
  let expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000, 10),
  }, 'My_Secret')
  // TODO: Change this over to a properties file
};

const User = mongoose.model('User', userSchema);

module.exports = {
  User: User
};
