const express = require('express');
const router = express.Router();
const {get} = require('./userController');

router.get('/', get);

module.exports = router;
