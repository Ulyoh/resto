var i18n = require('../data/i18n');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = { articles_related: i18n.articles_related[0], alerts_msg: i18n.alerts_msg };
  res.render('index', data);
});

module.exports = router;
