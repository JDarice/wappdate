var express = require('express');
var router = express.Router();
const contactsController = require('../controllers/contactsController');


/* GET users listing. */
router.get('/', contactsController.index);
router.post('/criar', contactsController.create);
router.get('/criar', function(req, res) {
    res.redirect('/contatos');
   });
router.get('/buscar', contactsController.newSearch);
  
module.exports = router;
