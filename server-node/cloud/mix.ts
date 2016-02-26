import request = require('request');
import AV = require('leanengine');
import crypto = require('crypto');
import querystring = require('querystring');

export class wx {
    static appid:string = "wx2b89597d2c9c105b";
    static appsecret:string = "078a6b5a2760387cd4574e1d01613f89";
    //以下不填写
    static jsToken:string = "";
    static jsTicket:string = "";
    static jsUpdateTime:number = 0;
    //获得随机字符串
    public static getJsSdkNonceStr(max:number):string{
        var str:string = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
        var arr:Array<string> = str.split("");
        var nonceStr:string = "";

        for(var i=0;i<max;i++){
            nonceStr += arr[Math.floor(Math.random()*arr.length)];
        }

        return nonceStr;
    }
    //sha1加密
    public static cryptoSha1(shaObj:any):string{
        var shaStr = querystring.stringify(shaObj);
        var shanum = crypto.createHash('sha1');
        shanum.update(shaStr);
        return shanum.digest('hex');
    }

    public static updateTokenAndTicker(){
        //获取token
        wx.updateJsSdkToken();
    }

    public static updateJsSdkToken(){
        var tokenUrl = "https://api.weixin.qq.com/cgi-bin/token?";
        tokenUrl += "&grant_type=client_credential";
        tokenUrl += "&appid=" + wx.appid;
        tokenUrl += "&secret=" + wx.appsecret;
        request(tokenUrl,function(error,res,body){
            if(!error && res.statusCode === 200){
                var obj = JSON.parse(body);
                wx.jsToken = obj.access_token;
                wx.updateJsSdkTicket();
            }
        });
    }

    public static updateJsSdkTicket(){
        var ticketUrl = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?";
        ticketUrl += "&type=jsapi";
        ticketUrl += "&access_token=" + wx.jsToken;
        request(ticketUrl,function(error,res,body){
            if(!error && res.statusCode === 200){
                var obj = JSON.parse(body);
                wx.jsTicket = obj.ticket;

                console.log("微信js sdk配置更新");
                console.log("新token：", wx.jsToken);
                console.log("新ticket：", wx.jsTicket);
            }
        });
    }
}