var express = require('express');
var router = express.Router();
const loginController = require('../controllers/loginController');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', loginController.index);
router.post('/login', loginController.login);
router.get('/register', loginController.register);
router.post('/register', loginController.store);

module.exports = router;
