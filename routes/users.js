var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile('./users.json', 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

module.exports = router;
