var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ddd', function(req, res, next) {
    res.render('index', { title: 'Expressdddddd' });
});


router.get('/test', function(req, res, next) {
    res.render('test', { title: 'test' });
});




module.exports = router;
