///<reference path="../server-node/typings/node/node.d.ts"/>
///<reference path="../server-node/typings/express/express.d.ts"/>
var express = require('express');
var app = express();
app.use(express.static('public'));
var wx = require('./api/wx');
app.use('/api/wx', wx);
app.get('/', function (req, res) {
    res.send('hello world!!!  nono');
});
app.listen(80, function () {
    console.log("server is open!");
});
