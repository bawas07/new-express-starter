// const { auth } = require('@helpers');
const express = require('express');

const user = require('./user/userRouter');

// Declare API Route and API Version
const v1 = express.Router();

v1.use('/user', user);
v1.get('/', (req, res) => {
    res.send('This is an api v1');
});
// v1.use('/register', register);
// v1.use('/login', login);
// v1.use('/users', auth, users);
// v1.use('/me', auth, me);
// v1.use('/banks', auth, bankData);
// v1.use('/digital-assets', auth, digitalAsset);
// v1.use('/feedbacks', auth, feedback);
// v1.use('/promos', promo);
// v1.use('/forgot-password', forgotPassword);
// v1.use('/companies', auth, companies);
// v1.use('/members', auth, members);
// v1.use('/refresh-token', refreshToken);
// v1.use('/gd-data', auth, gdData);
// v1.use('/presences', auth, presences);
// v1.use('/schedules', auth, schedules);
// v1.use('/admin', adminLogin);

module.exports = v1;
