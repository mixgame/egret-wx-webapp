var request = require('request');
var crypto = require('crypto');
var wx = (function () {
    function wx() {
    }
    //获得随机字符串
    wx.getJsSdkNonceStr = function (max) {
        var str = "1234567890qwertyuiopasdfghjklzxcvbnm";
        var arr = str.split("");
        var nonceStr = "";
        for (var i = 0; i < max; i++) {
            nonceStr += arr[Math.floor(Math.random() * arr.length)];
        }
        return nonceStr;
    };
    //sha1加密
    wx.cryptoSha1 = function (shaStr) {
        var shanum = crypto.createHash('sha1');
        shanum.update(shaStr);
        return shanum.digest('hex');
    };
    wx.updateTokenAndTicker = function () {
        //获取token
        wx.updateJsSdkToken();
    };
    wx.updateJsSdkToken = function () {
        var tokenUrl = "https://api.weixin.qq.com/cgi-bin/token?";
        tokenUrl += "&grant_type=client_credential";
        tokenUrl += "&appid=" + wx.appid;
        tokenUrl += "&secret=" + wx.appsecret;
        request(tokenUrl, function (error, res, body) {
            if (!error && res.statusCode === 200) {
                var obj = JSON.parse(body);
                wx.jsToken = obj.access_token;
                wx.updateJsSdkTicket();
            }
        });
    };
    wx.updateJsSdkTicket = function () {
        var ticketUrl = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?";
        ticketUrl += "&type=jsapi";
        ticketUrl += "&access_token=" + wx.jsToken;
        request(ticketUrl, function (error, res, body) {
            if (!error && res.statusCode === 200) {
                var obj = JSON.parse(body);
                wx.jsTicket = obj.ticket;
                console.log("微信js sdk配置更新");
                console.log("新token：", wx.jsToken);
                console.log("新ticket：", wx.jsTicket);
            }
        });
    };
    wx.appid = "wx2b89597d2c9c105b";
    wx.appsecret = "078a6b5a2760387cd4574e1d01613f89";
    //以下不填写
    wx.jsToken = "";
    wx.jsTicket = "";
    wx.jsUpdateTime = 0;
    return wx;
})();
exports.wx = wx;
