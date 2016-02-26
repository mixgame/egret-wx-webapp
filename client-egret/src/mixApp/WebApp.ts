module MixApp {
    export class WebApp{
        private getUrlFieldWord(field:string):string{
            //获取全部地址
            var index:number;
            var url:string = window.location.search;
            url = url.slice(1);
            //去掉#后面部分
            index = url.indexOf("#");
            if(index > -1){
                url = url.slice(0,index);    
            }
            //以&符号做分割处理
            var arr:Array<string> = url.split("&");
            //查询数组内是否存在需要的field
            for(var i=0;i<arr.length;i++){
                index = arr[i].indexOf(field);
                if(index > -1){
                    return arr[i].slice(index+field.length+1);
                }
            }
            //都没有返回空字符
            return "";
        }
        
        public checkUrl(){
            if(!MixApp.WebAppConfig.isWebLogin){
                this.getWxJsSdkSign();
                this.loadAppRes();
                return
            }
            //检查url中是否带有state和openid
            //以此判断用户是否通过微信登录
            var url:string = window.location.href;
            var index:number = url.indexOf("?");
            //有传递的参数code
            if(this.getUrlFieldWord("code") !== ""){
                console.log("已经认证加载 开始初始化js-sdk");
                MixApp.UserConfig.code = this.getUrlFieldWord("code");
                this.getWxJsSdkSign();
                this.loadAppRes();
            }else{
                console.log("没有code执行认证");
                this.wxAuthToken();
            }
        }
        
        //微信认证登录
        private wxAuthToken(){
            //跳转到微信认证页面 请求登录
            console.log("跳转页面 请求微信认证");
            var url: string = "https://open.weixin.qq.com/connect/oauth2/authorize";
            url += "?appid=" + MixApp.WxConfig.AppId;
            var callBackUrl:string = window.location.href;
            var index:number = callBackUrl.indexOf("?");
            if(index > -1){
                callBackUrl = callBackUrl.slice(0,index);
            }
            // console.log(callBackUrl);
            url += "&redirect_uri=" + encodeURIComponent(callBackUrl);
            url += "&response_type=code";
            url += "&scope=snsapi_userinfo";
            url += "&state=" + MixApp.WxConfig.CallBackStateStr;
            url += "#wechat_redirect";
            
            //打开微信认证网页
            window.location.href = url;
        }
        
        private isGetWxJsSdkSign:boolean;
        private getWxJsSdkSign(){
            AV.initialize(MixApp.AvConfig.AppId,MixApp.AvConfig.AppKey);
            AV.setProduction(MixApp.AvConfig.IsOpenPro);
            console.log("微信js-sdk开始初始化");
            var url:string = encodeURIComponent(window.location.href);
            //1 请求自己的服务器获取签名
            var self = this;
            AV.Cloud.run('weixin-get-jsSdkSign',{url:url},{
                success: function(data){
                    self.onGetJsSdkSignComplete(data);
                },
                error: function(data){
                    console.error("微信jssdk 签名获取失败",data);
                }
            });
        }
        
        private onGetJsSdkSignComplete(result){
            console.info("获得签名",result);
            var data = JSON.parse(result.result);
            //2 微信js-sdk初始化 成功后做标记
            var config:BodyConfig = new BodyConfig();
            config.debug = MixApp.WxConfig.JsSdkIsOpenDebug;
            config.appId = MixApp.WxConfig.AppId;
            config.timestamp = data.timestamp;
            config.nonceStr = data.noncestr;
            config.signature = data.signature;
            config.jsApiList = MixApp.WxConfig.JsApiList;
            wx.config(config);
            //3 成功后 执行login
            var that = this;
            wx.ready(function(res){
                if(res.errMsg === "config:ok"){
                    that.wxJsSdkComplete();  
                }
            });
        }
        
        //微信js-sdk初始完成
        private wxJsSdkComplete(){
            console.log("微信js-sdk初始成功");
            this.isGetWxJsSdkSign = true;
            this.login();
        }
        
        private isLoadAppRes:boolean;
        private loadAppRes(){
            //1 设置监听器
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.loadAppResComplete,this);
            //2 加载需要的资源组
            RES.loadGroup("app");
            console.log("开始加载app资源组");
        }
        
        //app所需资源加载完成
        private loadAppResComplete(event:RES.ResourceEvent){
            if(event.groupName === "app"){
                 console.log("app资源加载成功");
            //1 加载完成 做标记
            this.isLoadAppRes = true;
            //2 移除监听器
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.loadAppResComplete,this);
            //3 执行login
            this.login();
            }
        }
        /*
        待js-sdk初始化 并 资源加载完毕后 登录app
        */
        public login(){
            //判断 js-sdk与资源加载是否都已经完成
            //完成则进入app页面
            if(this.isLoadAppRes && this.isGetWxJsSdkSign){
                console.log("登录app");
                //todo
                MixApp.AppMain.initLogin();
            }
        }
    }
}