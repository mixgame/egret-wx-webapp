"use strict";
/*
  服务器 路由
 */
function Route(handle, pathname, response, postData) {
    console.log("路由器获得的地址：" + pathname);
    console.log("最终获得post", postData);
    if (typeof handle[pathname] === "function") {
        handle[pathname](response);
    }
    else {
        console.log("没找到这个地址 " + pathname);
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("404 Not found");
        response.end();
    }
}
exports.Route = Route;
