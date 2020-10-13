var express = require('express');
const { RequestTimeout } = require('http-errors');
var router = express.Router();
const messengerController = require('../controllers/messengerController');


router.get('/', messengerController.templates);

router.get('/configuracoes', messengerController.settings);
router.get('/configuracoes/remetente/buscar', messengerController.newSearchSender);
router.post('/configuracoes/remetente/criar', messengerController.createSentFrom);
router.put('/configuracoes/remetente/editar/?:id', messengerController.update);
router.post('/configuracoes/templates/criar', messengerController.createTemplatesFromSettings);

router.get('/templates', messengerController.templates);
router.get('/templates/buscar', messengerController.newSearchTemplates);
router.post('/templates/criar', messengerController.createTemplates);
router.put('/templates/editar/?:id', messengerController.updateTemplates);
  
module.exports = router;