require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index.route');
var userRouter = require('./routes/user.route');
var authRouter = require('./routes/auth.route');
var roleRouter = require('./routes/role.route');

var app = express();

app.use(function(req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    res.header(
        "Access-Control-Allow-Methods", "*"
    );
    res.header(
        "Access-Control-Allow-Origin", "*"
    );
    next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', userRouter);
app.use('/', authRouter);
app.use('/', roleRouter);

module.exports = app;
