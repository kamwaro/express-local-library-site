var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with  resourcesssss');
});

router.get('/users/cool', function (req, res, next) {
  res.send('Hello we learnt something new!!');
});

module.exports = router;
