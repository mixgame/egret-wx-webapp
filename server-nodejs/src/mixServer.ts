/// <reference path="../typings/node/node.d.ts" />
import http = require('http');
import url = require('url');
import router = require("./router");

export function OpenServer(route:Function,handle:any) {
    function createServerComplete(request:http.IncomingMessage, response:http.ServerResponse){
        var postData = "";
        var pathname:string = url.parse(request.url).pathname;
        console.log("request for " + pathname + " received....");

        request.setEncoding("utf8");
        request.addListener("data", function(postDataChunk){
            postData += postDataChunk;
            console.log("传入的数据post : " + postDataChunk);
        });

        request.addListener("end",function(){
            route(handle,pathname,response,postData);
        });

    }

    http.createServer(createServerComplete).listen(8888);
}


