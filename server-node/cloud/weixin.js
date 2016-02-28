///<reference path=".././typings/node/node.d.ts"/>
///<reference path=".././typings/leancloud/av.d.ts"/>
var AV = require('leanengine');
var mix = require("./mix");
var jssign = require('./jssign');
//定时任务 获取token和ticket
AV.Cloud.define('timing-weixin-updateTokenTicket', function () {
    console.log("更新微信jssdk token与ticket");
    mix.wx.updateTokenAndTicker();
});
//获取微信jssdk签名
AV.Cloud.define('weixin-get-jsSdkSign', function (req, res) {
    console.log("传入数据", req.params);
    if (!req.params.url) {
        res.error('未传入url地址');
        return;
    }
    var obj = jssign.sign(mix.wx.jsTicket, req.params.url);
    obj['sign'] = mix.wx.cryptoSha1(jssign.raw(obj));
    //obj.jsapi_ticket = "";
    res.success(obj);
});
