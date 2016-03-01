var MixApp;
(function (MixApp) {
    /*
    mixapp 的登录类
    现阶段就单指微信的登录方式
     */
    var AppLogin = (function () {
        function AppLogin() {
        }
        var d = __define,c=AppLogin,p=c.prototype;
        p.getUrlFieldWord = function (field) {
            //获取全部地址
            var index;
            var url = window.location.search;
            url = url.slice(1);
            //去掉#后面部分
            index = url.indexOf("#");
            if (index > -1) {
                url = url.slice(0, index);
            }
            //以&符号做分割处理
            var arr = url.split("&");
            //查询数组内是否存在需要的field
            for (var i = 0; i < arr.length; i++) {
                index = arr[i].indexOf(field);
                if (index > -1) {
                    return arr[i].slice(index + field.length + 1);
                }
            }
            //都没有返回空字符
            return "";
        };
        p.checkUrl = function () {
            if (!MixApp.WebAppConfig.isWebLogin) {
                console.info("关闭了微信web登录");
                this.getWxJsSdkSign();
                this.loadAppRes();
                return;
            }
            //检查url中是否带有state和openid
            //以此判断用户是否通过微信登录
            var url = window.location.href;
            var index = url.indexOf("?");
            //有传递的参数code
            if (this.getUrlFieldWord("code") !== "") {
                console.log("已经认证加载 开始初始化js-sdk");
                MixApp.UserConfig.code = this.getUrlFieldWord("code");
                this.getWxJsSdkSign();
                this.loadAppRes();
            }
            else {
                console.log("没有code执行认证");
                this.wxAuthToken();
            }
        };
        //微信认证登录
        p.wxAuthToken = function () {
            //跳转到微信认证页面 请求登录
            console.log("跳转页面 请求微信认证");
            var url = "https://open.weixin.qq.com/connect/oauth2/authorize";
            url += "?appid=" + MixApp.WxConfig.AppId;
            var callBackUrl = window.location.href;
            var index = callBackUrl.indexOf("?");
            if (index > -1) {
                callBackUrl = callBackUrl.slice(0, index);
            }
            // console.log(callBackUrl);
            url += "&redirect_uri=" + encodeURIComponent(callBackUrl);
            url += "&response_type=code";
            url += "&scope=snsapi_userinfo";
            url += "&state=" + MixApp.WxConfig.CallBackStateStr;
            url += "#wechat_redirect";
            //打开微信认证网页
            window.location.href = url;
        };
        p.getWxJsSdkSign = function () {
            //初始化AV存储
            AV.initialize(MixApp.AvConfig.AppId, MixApp.AvConfig.AppKey);
            AV.setProduction(MixApp.AvConfig.IsOpenPro);
            //初始化AV统计
            MixApp.AvConfig.analytics = AV.analytics({
                appId: MixApp.AvConfig.AppId,
                appKey: MixApp.AvConfig.AppKey,
                version: MixApp.WebAppConfig.AppVer,
                channel: "weixin"
            });
            MixApp.AvConfig.analytics.send({ event: 'test-1', attr: { a1: 'a1', b2: 'b2' }, duration: 3000 }, function (result) {
                console.log(result);
            });
            //是否开启微信js
            if (!MixApp.WebAppConfig.isOpenJsSdk) {
                console.info("关闭了微信jssdk初始化");
                this.wxJsSdkComplete();
                return;
            }
            console.log("微信js-sdk开始初始化");
            var url = window.location.href;
            //1 请求自己的服务器获取签名
            var self = this;
            AV.Cloud.run('weixin-get-jsSdkSign', { url: url }, {
                success: function (data) {
                    self.onGetJsSdkSignComplete(data);
                },
                error: function (data) {
                    console.error("微信jssdk 签名获取失败", data);
                }
            });
        };
        p.onGetJsSdkSignComplete = function (data) {
            console.info("获得签名", data);
            //2 微信js-sdk初始化 成功后做标记
            var config = new BodyConfig();
            config.debug = MixApp.WxConfig.JsSdkIsOpenDebug;
            config.appId = MixApp.WxConfig.AppId;
            config.timestamp = data.timestamp;
            config.nonceStr = data.nonceStr;
            config.signature = data.sign;
            config.jsApiList = MixApp.WxConfig.JsApiList;
            wx.config(config);
            //3 成功后 执行login
            var that = this;
            wx.ready(function (res) {
                if (res.errMsg === "config:ok") {
                    that.wxJsSdkComplete();
                    return;
                }
                console.log("wx res::::", res);
            });
        };
        //微信js-sdk初始完成
        p.wxJsSdkComplete = function () {
            console.log("微信js-sdk初始成功");
            this.isGetWxJsSdkSign = true;
            this.login();
        };
        p.loadAppRes = function () {
            //1 设置监听器
            RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.loadAppResComplete, this);
            //2 加载需要的资源组
            console.log("开始加载app资源组");
            RES.loadGroup("app");
        };
        //app所需资源加载完成
        p.loadAppResComplete = function (event) {
            if (event.groupName === "app") {
                console.log("app资源加载成功");
                //1 加载完成 做标记
                this.isLoadAppRes = true;
                //2 移除监听器
                RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.loadAppResComplete, this);
                //3 执行login
                this.login();
            }
        };
        /*
        待js-sdk初始化 并 资源加载完毕后 登录app
        */
        p.login = function () {
            //判断 js-sdk与资源加载是否都已经完成
            //完成则进入app页面
            if (this.isLoadAppRes && this.isGetWxJsSdkSign) {
                console.log("登录app");
                //todo
                MixApp.AppMain.initLogin();
            }
        };
        return AppLogin;
    })();
    MixApp.AppLogin = AppLogin;
    egret.registerClass(AppLogin,'MixApp.AppLogin');
})(MixApp || (MixApp = {}));
