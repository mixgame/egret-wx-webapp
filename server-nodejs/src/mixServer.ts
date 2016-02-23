/// <reference path="../typings/node/node.d.ts" />
import http = require('http');

export class Open {
    public constructor(){
        console.log("这里哈哈");
        //http.createServer(this.open).listen(8888);
    }

    public open(){
        console.log("open");
    }
}

export class Close {
    public constructor(){
        console.log("关闭了");
    }
}
