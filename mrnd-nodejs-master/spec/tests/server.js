var express = require('express');
//var app = express();
var app = require('C:/Users/kalpana/Desktop/mrnd-nodejs-master/src/contacts/app');
var bodyParser = require('body-parser');
/*
app.use(bodyParser());

app.get('/', function (req, res) {
    //console.log(req);
    var html = '<form action="/" method="post">' +
               'Enter your name:' +
               '<input type="text" name="userName" placeholder="..." />' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';
    res.send(html);
});

app.post('/', function (req, res) {

    var name;

    name = req.body.userName;

    var html = '<html><head>' + name + '</head></html>';

    res.send(html);

});*/



var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;



MongoClient.connect('mongodb://localhost:27017/test', function (err, db) {
    if (err) //throw err;
    {
        console.log(err);
        done();
    }

    var collection = db.collection('test_insert');
    collection.insert({ a: 2 }, function (err, docs) {
        collection.count(function (err, count) {
            console.log(format("count = %s", count));
            db.close();
        });
    });
});






/*


var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});



console.log("test");



*/




