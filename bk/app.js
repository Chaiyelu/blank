var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var expressJwt = require('express-jwt');
var bodyParser = require('body-parser');
var config = require('./config/config.json');

var index = require('./routes/index');
var users = require('./routes/users');
var seller = require('./routes/seller');
var auth = require('./routes/auth');
var tag = require('./routes/tag');
var food_categories = require('./routes/food_categories');
var food_ratings = require('./routes/food_ratings');
var cors = require('cors');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(expressJwt({ secret: config.secret }).unless({ path: ["/auth", "/seller"] }));

app.use('/', index);
app.use('/users', users);
app.use('/seller', seller);
app.use('/tag', tag);
app.use('/food_categories', food_categories);
app.use('/food_ratings', food_ratings);
app.use('/auth', auth);


app.use(function(err, req, res, next) {
    if (err.name === "UnauthorizedError") {
        res.status(401).send("invalid token");
    }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;