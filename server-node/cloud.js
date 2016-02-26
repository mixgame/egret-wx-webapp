///<reference path="./typings/node/node.d.ts"/>
///<reference path="./typings/leancloud/av.d.ts"/>
var AV = require('leanengine');
//微信相关的云函数
var weixin = require('./cloud/weixin');
//每次启动 执行一次 token和ticket
AV.Cloud.run('timing-weixin-updateTokenTicket', {}, {
    success: function () {
        console.log('执行：更新微信jssdk token与ticket');
    },
    error: function () {
        console.error('执行：更新微信jssdk token与ticket');
    }
});
module.exports = AV.Cloud;
