///<reference path="../../server-node/typings/node/node.d.ts"/>
///<reference path="../../server-node/typings/express/express.d.ts"/>

import express = require('express');
import querystring = require('querystring');
import url = require('url');

import mix = require('./mix');
var mixWx = new mix.wx();

var router:express.IRouter = express.Router();

router.get('/js-sign', function (req,res,next) {
    var params = url.parse(req.url,true);
    mixWx.getJsSign(res,params,next);
});

module.exports = router;
