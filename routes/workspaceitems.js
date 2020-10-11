var express = require('express');
var router = express.Router();
const workspaceitemsController = require('../controllers/workspaceitemController');

router.get('/',workspaceitemsController.index);

module.exports = router;