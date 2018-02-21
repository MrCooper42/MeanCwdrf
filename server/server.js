'use strict';

const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
const hbs = require('hbs');
const passport = require('passport');
const jwt = requre('express-jwt');
const mongoose = require('mongoose');

// TODO: setup mongoose conection
mongoose.connect('mongodb://localhost/myappdatabase', options).then(
  () => {
    // TODO: Handle success connection through promise / config options
  }, err => {
    // TODO: Handle connection error
  }
);

const api = require('./api/routes/api');
const db = require('./api/models/db');
const config = require('./api/config/passport');
const auth = jwt({
  // TODO: Save secret in properties file
  secret: 'My_Secret',
  userProperty: 'payload'
});

const app = express();

// view engine setup
app.set('view', path.join(__dirname, '../client/views'));
app.set('view engine', 'hbs');

// uncomment after placing your favorite favicon in client
// app.use(favicon(path.join(__dirname, '../client/src', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist')));

// sanitizer
app.use(expressSanitizer());

app.use(passport.initialize());
app.use('/api', api);

app.use('*', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.local.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ 'message': `${err.name} : ${err.message}` });
});

module.exports = app;
