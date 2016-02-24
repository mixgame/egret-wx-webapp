/// <reference path="../typings/node/node.d.ts" />
import exec = require("child_process");

export function start(response){
    console.log("执行start");

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

}

export function upload(response){
    console.log("执行upload");
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("helle up");
    response.end();
}