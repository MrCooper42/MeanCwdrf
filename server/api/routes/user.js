'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const User = require('../models/user.js').User;

const ctrlProfile = require('../controllers/profile.js');
const auth = jwt({
  secret: `${process.env.JWT_SECRET}`,
  userProperty: 'payload'
});

// TODO: Beef this up IF NOT ALLOWED REDIRECT!!! THIS SHOULD ALSO BE
// TODO: HANDLED THROUGH SERVER AND ANGULAR

router.post('/register', (req, res, next) => {

  // let createUser = () => {
  let newUser;
  User.findOne({ 'email': req.body.email }, (err, foundUser) => {
    let callbackUser = (callBackUser) => callBackUser;

    if (err) {
      console.log(err, "err")
      foundUser = true;
      // const reason = next(new Error(err));
      // TODO: Handle email error
    }
    if (foundUser) {
      foundUser = false;
      // const reason = new Error('User exists already')
      console.log("this user exists HANDLE THIS " + foundUser);
      // TODO: Handle email already exists
    } else {
      newUser = new User({
        email: req.body.email,
        name: req.body.name
      });
      newUser.setPassword(newUser, req.body.password);
      callbackUser(newUser);
    }
  }).then(foundUser => {
    console.log(foundUser, "newUser")

    if (!foundUser) {
      console.log("early exit, cannot createUser");
      return;
    }
    foundUser.save((err, result) => {
      if (err) {
        console.log("did something happen????????");
        return res.status(500).json({
          title: 'Bad things happened: ',
          error: err
        });
      }
      console.log(`Result of user created: ${result}`);
      res.status(201).json({
        message: 'User created',
        obj: result
      });
    });
  }).catch(
    //  TODO: Handle errors
  )
});


//     .then((result) => {
//   if (result) {
//     newUser = null;
//     // throw new Error("cannot have duplicate emails.");
//     return;
//     console.log(result, "THROW ERROR HERE")
//   }
//   if (!result) {
//     newUser = new User({
//       email: req.body.email,
//       name: req.body.name
//     });
//     newUser.setPassword(newUser, req.body.password);
//   }
// }).catch(err => console.log("err in create user. ====", err));
// };
//
// const saveUser = () => {
//   let createdUser = createUser();
//


// };
// saveUser();


router.post('/login', (req, res, next) => {
  User.findOne({
    email: req.body.email
  }, (err, user) => {
    if (err) {
      return res.status(500).json({
        title: 'Error in Login',
        error: err
      })
    }
    if (!user || !user.validPassword(req.body.password)) {
      return res.status(500).json({
        title: 'Login failed',
        error: {
          message: 'Invalid login credentials'
        }
      })
    }
    let token = user.generateJwt();
    console.log(user, "user signed in");
    // TODO: take this console log out
    res.status(200).cookie('token', token).json({
      message: 'Successfully logged in',
      token: token,
      userId: user._id
    })
  })
});

router.get('/profile', auth, ctrlProfile.profileRead);

module.exports = router;
