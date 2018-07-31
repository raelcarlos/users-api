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

router.post('/addold', function (req, res) {
    fs.readFile( './users.json', 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["user4"] = user["user4"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
});

router.post('/add', function (req, res) {
    fs.readFile( './users.json', 'utf8', function (err, data) {
        data = JSON.parse( data );
        var new_user = req.body;
        data["user4"] = new_user;
        console.log( data );
        res.end( JSON.stringify(data));
    });
});

router.get('/delete/:id', function(req, res) {
    fs.readFile('./users.json', 'utf-8', function(err, data) {
        data = JSON.parse(data);
        delete data["user" + req.params.id];
        console.log(data);
        res.end(JSON.stringify( data ));
    });
});

module.exports = router;
