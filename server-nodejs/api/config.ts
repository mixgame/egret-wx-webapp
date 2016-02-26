//微信的配置
export class wx {
    static appid:string = "wx2b89597d2c9c105b";
    static appsecret:string = "078a6b5a2760387cd4574e1d01613f89";

    static tokenStr:string = "";
    static ticketStr:string = "";
    static updateTime:number = 0;

    static weixinApiUrl:any = {
        hostname:"https://api.weixin.qq.com",
        token:"/cgi-bin/token?",
        jsticket:"/cgi-bin/ticket/getticket?"
    };
}

//leancloud的配置
export class av {

}