///<reference path=".././typings/node/node.d.ts"/>
///<reference path=".././typings/leancloud/av.d.ts"/>
import AV = require('leanengine');
import mix = require("./mix");

//定时任务 获取token和ticket
AV.Cloud.define('timing-weixin-updateTokenTicket', function () {
    console.log("更新微信jssdk token与ticket");
    mix.wx.updateTokenAndTicker();
});


//获取微信jssdk签名
AV.Cloud.define('weixin-get-jsSdkSign', function (req,res) {
    console.log("传入数据",req.params);
    if(!req.params.url){
        res.error('未传入url地址');
        return
    }

    var obj = {
        noncestr : mix.wx.getJsSdkNonceStr(16),
        jsapi_ticket : mix.wx.jsTicket,
        timestamp : new Date().getTime(),
        url : req.params.url
    };
    var data = {};
    var arr1 = ['timestamp','noncestr','url','jsapi_ticket'];
    var arr2 = arr1.sort();
    for(var i=0;i<arr2.length;i++){
        data[arr2[i]] = obj[arr2[i]];
    }

    obj['sign'] = mix.wx.cryptoSha1(data);
    obj.jsapi_ticket = "";
    res.success(obj);
});