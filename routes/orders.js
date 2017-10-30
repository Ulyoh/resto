var i18n = require('../data/i18n');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('orders', {
    i18n: i18n,
    layout: 'orders.hbs'
  });
});

module.exports = router;
