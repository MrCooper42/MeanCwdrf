'use strict';
// Strengthen this area.
const mongoose = require('mongoose');
const User = require('./users.js').User;

mongoose.connect('mongodb://localhost/');

console.log('we are connected');

module.exports = {
  User: User
};
