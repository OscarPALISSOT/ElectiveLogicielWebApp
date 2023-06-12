const express = require('express');
//import prisma from "./prisma" // importing the prisma instance we created.

const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index.ts');
//const usersRouter = require('./routes/users');
//const authRouter = require('./routes/auth');

const app = express()


app.use(express.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
//app.use('/authentification', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
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