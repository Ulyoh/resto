var express = require('express');
var router = express.Router();
var data = require('../data/test_orders.js')

router.get('/', function(req, res, next) {
  res.render('orders', data);
});

module.exports = router;
