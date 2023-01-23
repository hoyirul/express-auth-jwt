var express = require('express');
var router = express.Router();
var roleController = require('./../controllers/api/role.controller');

/* GET home page. */
router.get('/roles', roleController.index);

module.exports = router;
