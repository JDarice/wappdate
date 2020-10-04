var express = require('express');
var router = express.Router();
const contactsController = require('../controllers/contactsController');


/* GET users listing. */
router.get('/', contactsController.index);

module.exports = router;
