var articles = require('../data/articles');
var i18n = require('../data/i18n');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = { articles: articles[0].articles_groups, text: articles[0], i18n: i18n };
  res.render('index', data);
});

module.exports = router;
