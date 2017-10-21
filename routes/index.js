var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
  {
    boissons:[
      {
        title: 'Apéritifs',
        articles: [{title: 'martini'}, {title:'porto'}]
      },
      {title: 'Vins'},
      {title: 'Sans Alcool'}
    ]
  });
});

module.exports = router;
