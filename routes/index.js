var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test222',function(req,res,next){
  res.json({code:100233434340});
});

module.exports = router;
