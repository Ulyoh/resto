var i18n = require('../data/i18n');
var express = require('express');
var router = express.Router();

var max_id = i18n.articles_related.length - 1;
/* GET home page. */

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  if ((id > -1) && (id <= max_id)) {
    indexFn(id, res);
  } else {
    indexFn(0, res);
  }
});

router.get('/', function(req, res, next) {
  indexFn(0, res);
});

function indexFn(list_nbr, res) {
  var data = {
    articles_related: i18n.articles_related[list_nbr],
    alerts_msg: i18n.alerts_msg
  };
  res.render('index', data);
}

module.exports = router;
