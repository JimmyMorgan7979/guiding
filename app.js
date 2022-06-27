var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//const sqlite3 = require("sqlite3").verbose();

// Connection to SQlite Database
//const db_name = path.join(__dirname, "data", "apptest.db");
//const db = new sqlite3.Database(db_name, err => {
// if (err) {
//   return console.error(err.message);
// }
// console.log("Successful connection to the database 'apptest.db'");
//});
//change test

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs'); 
app.use(expressLayouts);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/static',express.static('public'))

//Routes for site
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


module.exports = app;
