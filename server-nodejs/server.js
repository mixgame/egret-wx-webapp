/// <reference path="../typings/express/express.d.ts" />
var express = require('express');
var app = express();
var admin = express();
admin.get('/', function (req, res, next) {
    console.log(admin.mountpath);
    res.send('admin homepage');
});
app.use('/admin', admin);
app.use(express.static(__dirname + "/public"));
console.log("dir:" + __dirname);
app.listen(3000);
