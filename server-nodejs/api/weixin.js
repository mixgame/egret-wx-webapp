var https = require('https');
var querystring = require('querystring');
var crypto = require('crypto');
class Server {
    static resSendJsSign(req, res, next) {
    }
    static intoServer(req, res, next) {
        var params = serUrl.parse(req.url, true).query;
        //有code的情况下 返回js签名
        if (req.method === "GET" && params['type'] === "jsSign") {
            Server.getJsSdkSign(req, res);
        }
        next();
    }
    static isRefresh(resFunc) {
        //判断token是否超时
        var time = new Date().getTime();
        if (time - Config.webTokenTime < 7200 * 1000) {
            //不用刷新
            return false;
        }
        //需要刷新 请等待
        Server.getToken(resFunc);
        return true;
    }
    static getToken(resFunc) {
        var content = querystring.stringify({
            grant_type: 'client_credential',
            appid: Config.appid,
            secret: Config.appsecret
        });
        var toUrl = Config.weixinApiUrl.hostname + Config.weixinApiUrl.token + content;
        https.get(toUrl, function (tokenRes) {
            var datas = [];
            var size = 0;
            tokenRes.on('data', function (data) {
                datas.push(data);
                size += data.length;
            });
            tokenRes.on('end', function () {
                var buff = Buffer.concat(datas, size);
                var result = buff.toString();
                var token = JSON.parse(result);
                Config.webTokenStr = token.access_token;
                Config.webTokenTime = new Date().getTime();
                Server.getJsTicket(resFunc);
            });
        });
    }
    static getJsTicket(resFun) {
        var content = querystring.stringify({
            access_token: Config.webTokenStr,
            type: 'jsapi'
        });
        var toUrl = Config.weixinApiUrl.hostname + Config.weixinApiUrl.jsticket + content;
        https.get(toUrl, function (tokenRes) {
            var datas = [];
            var size = 0;
            tokenRes.on('data', function (data) {
                datas.push(data);
                size += data.length;
            });
            tokenRes.on('end', function () {
                var buff = Buffer.concat(datas, size);
                var result = buff.toString();
                var token = JSON.parse(result);
                Config.jsapiTicketStr = token.ticket;
                Config.jsapiTicketTime = new Date().getTime();
                Server.getJsSdkSign(resFun);
            });
        });
    }
    static getJsSdkSign(req, res) {
        //签名
        if (Server.isRefresh(res)) {
            var par = {
                timestamp: new Date().getTime(),
                noncestr: "oqfoqhoh131b1gb",
                url: 'http://' + req.hostname + req.originalUrl,
                jsapi_ticket: Config.jsapiTicketStr
            };
            var opt = {};
            var arr1 = ['timestamp', 'noncestr', 'url', 'jsapi_ticket'];
            var arr2 = arr1.sort();
            for (var i = 0; i < arr2.length; i++) {
                opt[arr2[i]] = par[arr2[i]];
            }
            var sign = querystring.stringify(opt);
            var shanum = crypto.createHash('sha1');
            shanum.update(sign);
            var d = shanum.digest('hex');
            res.writeHead(200, { "Content-Type": "text/json" });
            res.write(sign);
            res.end();
        }
    }
}
exports.Server = Server;
