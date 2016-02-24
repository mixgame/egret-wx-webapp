"use strict";
/// <reference path="../typings/node/node.d.ts" />
var http = require('http');
var url = require('url');
function OpenServer(route, handle) {
    function createServerComplete(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("request for " + pathname + " received....");
        request.setEncoding("utf8");
        request.addListener("data", function (postDataChunk) {
            postData += postDataChunk;
            console.log("传入的数据post : " + postDataChunk);
        });
        request.addListener("end", function () {
            route(handle, pathname, response, postData);
        });
    }
    http.createServer(createServerComplete).listen(8888);
}
exports.OpenServer = OpenServer;
