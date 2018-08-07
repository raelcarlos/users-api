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
    var id = req.params.id;
    if (!id) {
        return res.sendStatus(412);
    }
    new dao().findById(parseInt(id), function(err, result) {
        if (err) {
            return res.sendStatus(400);
        }
        if (result) {
            console.log(result);
            return res.send(200, result);
        }
    });
});

router.get('/delete/:id', function(req, res) {
    var id = req.params.id;
    if (!id) {
        return res.sendStatus(412);
    }
    new dao().deleteById(parseInt(id), function(err) {
        if (err) {
            return res.sendStatus(400);
        }
        return res.status(200).send("Registro deletado.");
    });

});

module.exports = router;
