var express = require('express');
var router = express.Router();
var fs = require('fs');
var dao = require('../src/dao');


var user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
}

/* GET users listing. */
router.get('/', function(req, res) {
    new dao().findAll(function(err, result) {
        if (err) {
            return res.sendStatus(400);
        }
        if (result) {
            console.log(result);
            return res.send(200, result);
        }
    });
});

router.post('/add', function (req, res) {
    var new_user = req.body;
    new dao().save(new_user, function (err, result) {
        if (err) {
            return res.sendStatus(400);
        }
        if (result) {
            console.log(result);
            return res.send(200, result);
        }
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

router.get('/delete/:id', function(req, res) {
    fs.readFile('./users.json', 'utf-8', function(err, data) {
        data = JSON.parse(data);
        delete data["user" + req.params.id];
        console.log(data);
        res.end(JSON.stringify( data ));
    });
});

module.exports = router;
