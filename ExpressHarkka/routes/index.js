var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET registration page */
router.get('/register', function(req, res) {
  res.render('register', {});
});

router.get('/addContact', function(req, res) {
    res.render('newcontact', {});
});


module.exports = router;
