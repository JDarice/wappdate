var express = require('express');
var router = express.Router();
const dashboardController = require('../controllers/dashboardController');

/* GET home page. */
router.get('/', dashboardController.index);

module.exports = router;