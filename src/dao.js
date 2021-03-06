var mongo = require('mongodb');
var mongo_client = mongo.MongoClient;
var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/local';

class dao {
    
    findAll(callback) {
        mongo_client.connect(url, function(err, db) {
            if (err) {
                console.log('Unable to connect do MongoDb Server. Error:', err);
                callback(err);
            } else {
                db.collection('users').find().toArray(function (err, result) {
                    if (err) {
                        console.log(err);
                        db.close();
                        return callback(err);
                    }
                    if (result) {
                        db.close();
                        return callback(err, result);
                    }
                    db.close();
                });
            }
        });
    }

    findById(id, callback) {
        mongo_client.connect(url, function(err, db) {
            if (err) {
                console.log('Unable to connect do MongoDb Server. Error:', err);
                callback(err);
            } else {
                db.collection('users').find({"user.id" : id}).toArray(function (err, result) {
                    if (err) {
                        console.log(err);
                        db.close();
                        return callback(err);
                    }
                    if (result) {
                        db.close();
                        return callback(err, result);
                    }
                    db.close();
                });
            }
        });
    }

    save(user, callback) {
        mongo_client.connect(url, function(err, db) {
            if (err) {
                console.log('Unable to connect do MongoDb Server. Error:', err);
                callback(err);
            } else {
                db.collection('users').insert(user, function (err, result) {
                    if (err) {
                        console.log(err);
                        db.close();
                        return callback(err);
                    }
                    if (result) {
                        db.close();
                        return callback(err, result);
                    }
                    db.close();
                });
            }
        });
    }

    deleteById(id, callback) {
        mongo_client.connect(url, function(err, db) {
            if (err) {
                console.log('Unable to connect do MongoDb Server. Error:', err);
                callback(err);
            } else {
                db.collection('users').deleteOne({"user.id" : id}, function (err) {
                    if (err) {
                        console.log(err);
                        db.close();
                        return callback(err);
                    }
                    db.close();
                    return callback(err);
                });
            }
        });
    }
}

module.exports = dao;