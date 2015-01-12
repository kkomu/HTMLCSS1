var express = require('express');
var router = express.Router();

var data = {
    title: 'My First app',
    name: 'Kyo Komu',
    courses: ['Oulu Web','Game programming','Qt for S60'],
    participants: 23
}

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', data);
});

module.exports = router;
