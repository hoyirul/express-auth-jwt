var express = require('express');
var router = express.Router();
var authController = require('./../controllers/api/auth.controller');

/* GET home page. */
router.get('/auth', authController.index);

module.exports = router;
