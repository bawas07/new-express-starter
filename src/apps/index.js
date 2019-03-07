// you can add auth on helpers folder and use it as a middleware
// example: 
// v1.use('/me', auth, me);
// const { auth } = require('@helpers');
const express = require('express');

const user = require('./user/userRouter');

// Declare API Route and API Version
const v1 = express.Router();

v1.use('/user', user);
v1.get('/', (req, res) => {
    res.send('This is an api v1');
});

module.exports = v1;
