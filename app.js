require('module-alias/register');

const express = require('express');
const cors = require('cors');
const compress = require('compression');
const helmet = require('helmet');
const config = require('config');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const routes = require('./src/apps');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// old configuration
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Enable CORS, security, compression, favicon and body parsing
app.use(cors());
app.use(helmet());
app.use(compress());
app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Host the public folder
// app.use('/', express.static(config.public));
app.use('/uploads', express.static(config.uploads));
app.use(express.static(path.join(__dirname, 'public')));

// API Version
app.use('/api/v1', routes);

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
