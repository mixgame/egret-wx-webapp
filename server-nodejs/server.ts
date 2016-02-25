/// <reference path="../typings/express/express.d.ts" />
import express = require('express');
var app = express();
var admin = express();

admin.get('/', function (req:express.Request,res:express.Response,next:express.NextFunction) {
    console.log(admin.mountpath);
    res.send('admin homepage');
});

app.use('/admin',admin);

app.use(express.static(__dirname+"/public"));
console.log("dir:"+__dirname);

app.listen(3000);