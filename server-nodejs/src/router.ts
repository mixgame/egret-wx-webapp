/*
  服务器 路由
 */
export function Route(handle:Array<Function>,pathname:string,response,postData:string){
    console.log("路由器获得的地址：" + pathname);
    console.log("最终获得post", postData);

    if(typeof handle[pathname] === "function"){
        handle[pathname](response);
    }else{
        console.log("没找到这个地址 " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

