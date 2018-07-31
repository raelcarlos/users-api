var express = require('express');
var router = express.Router();
var fs = require('fs');

var user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    fs.readFile('./users.json', 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

router.post('/add', function (req, res) {
    fs.readFile( './users.json', 'utf8', function (err, data) {
        data = JSON.parse( data );
        var new_user = req.body;
        data["user4"] = new_user;
        console.log( data );
        res.end( JSON.stringify(data));
        res.end();
    });
});

router.get('/:id', function(req, res) {
    fs.readFile('./users.json', 'utf8', function (err, data) {
        data = JSON.parse(data);
        var user = data["user" + req.params.id];
        console.log(user);
        res.end(JSON.stringify(user));
    });
});

module.exports = router;
