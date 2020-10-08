var express = require('express');
const { RequestTimeout } = require('http-errors');
var router = express.Router();
const contactsController = require('../controllers/contactsController');


/* GET users listing. */
router.get('/', contactsController.index);
router.post('/criar', contactsController.create);
router.get('/criar', function(req, res) {
    res.redirect('/contatos');
   });
router.get('/editar', function(req, res) {
    res.redirect('/contatos');
   });
router.get('/buscar', contactsController.newSearch);
// router.get('/editar/?:id', contactsController.edit);
router.put('/editar/?:id', contactsController.update);
  
module.exports = router;
