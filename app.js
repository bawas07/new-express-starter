require('module-alias/register');

const express = require('express');
const cors = require('cors');
const compress = require('compression');
const helmet = require('helmet');
const config = require('config');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const rateLimit = require('express-rate-limit');

const routes = require('./src/apps');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const apiLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100
});
// app.use("/api/", apiLimiter)
// old configuration
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Enable CORS, security, compression, favicon and body parsing
app.enable('trust proxy');
app.use(cors());
app.use(helmet());
app.use(compress());
// app.use(logger('combined'));

// const green = '\033[0;32m'; 
// const noCollor = '\033[0m'; 

const green = '\x1b[32m'; 
const noCollor = '\x1b[0m'; 

// app.use(logger(`:date[web] ${green}:method${noCollor} :status :url :response-time ms`));
app.use(logger(`:date[web] - ${green}info: :method :status :url :response-time ms${noCollor}`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Host the public folder
// app.use('/', express.static(config.public));
app.use('/uploads', apiLimiter, express.static(config.uploads));
app.use(express.static(path.join(__dirname, 'public')));

// API Version
app.use('/api/v1', apiLimiter, routes);

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

module.exports = app;
