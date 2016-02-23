"use strict";
var Open = (function () {
    function Open() {
        console.log("这里哈哈");
        //http.createServer(this.open).listen(8888);
    }
    Open.prototype.open = function () {
        console.log("open");
    };
    return Open;
}());
exports.Open = Open;
var Close = (function () {
    function Close() {
        console.log("关闭了");
    }
    return Close;
}());
exports.Close = Close;
