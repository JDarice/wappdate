var express = require('express');
const { RequestTimeout } = require('http-errors');
var router = express.Router();
const messengerController = require('../controllers/messengerController');


/* GET users listing. */
router.get('/', messengerController.index);
router.get('/configuracoes', messengerController.settings);
router.get('/buscar', messengerController.newSearch);
router.post('/configuracoes/remetente', messengerController.createSentFrom);
router.put('/configuracoes/remetente/editar/?:id', messengerController.update);
// router.post('/criar', messengerController.create);
// router.get('/criar', messengerController.edit);
// router.get('/editar', function(req, res) {
//     res.redirect('/contatos');
//    });
// // router.get('/editar/?:id', contactsController.edit);
  
module.exports = router;
