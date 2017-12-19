var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/list', function(req, res, next) {
  // const employees = [];
  // employees.push({id:1,name:"Jhon"});
  // employees.push({id:2,name:"White"});
  // res.json(employees);
  res.json({code: 2000});
  //res.render('index', { title: 'Express' });
});

module.exports = router;
