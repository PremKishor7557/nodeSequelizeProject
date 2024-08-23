var express = require('express');
var userCtrl = require('../controllers/userController')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user', function (req, res){
  res.send('Hello World')
})

router.get('/register', (req, res)=>{
  res.render('adduser');
});

router.get('/regis', userCtrl.addUser)
module.exports = router;
