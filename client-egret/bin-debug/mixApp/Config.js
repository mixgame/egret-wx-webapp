var MixApp;
(function (MixApp) {
    /**
     * web app 基本信息
     */
    var WebAppConfig = (function () {
        function WebAppConfig() {
        }
        WebAppConfig.AppName = "mix的测试app";
        // 不兼容版本递加 . 兼容并增加功能版本递加 . bug修复递加
        WebAppConfig.AppVer = "0.0.1";
        //是否做网页登录
        WebAppConfig.isWebLogin = false;
        //是否开启微信js
        WebAppConfig.isOpenJsSdk = false;
        return WebAppConfig;
    })();
    MixApp.WebAppConfig = WebAppConfig;
    /**
     * wx相关的 的基本配置
     */
    var WxConfig = (function () {
        function WxConfig() {
        }
        WxConfig.JsSdkIsOpenDebug = true;
        WxConfig.AppId = "wx2b89597d2c9c105b";
        //网页授权认证返回state字符串
        WxConfig.CallBackStateStr = "MixTestOk";
        //所需调用的js功能
        //http://mp.weixin.qq.com/wiki/11/74ad127cc054f6b80759c40f77ec03db.html#.E9.99.84.E5.BD.952-.E6.89.80.E6.9C.89JS.E6.8E.A5.E5.8F.A3.E5.88.97.E8.A1.A8
        WxConfig.JsApiList = [
            'getLocation',
            'chooseWXPay',
            'showMenuItems',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ' //分享到qq
        ];
        return WxConfig;
    })();
    MixApp.WxConfig = WxConfig;
    /**
     * user 当前数据全局存储
     */
    var UserConfig = (function () {
        function UserConfig() {
        }
        return UserConfig;
    })();
    MixApp.UserConfig = UserConfig;
    /* app后台数据本地配置信息
     * 需要到 leancloud 的自行申请找号的建立应用
     */
    var AvConfig = (function () {
        function AvConfig() {
        }
        AvConfig.IsOpenPro = false; //是否开启生产环境 即正式版
        AvConfig.AppId = "nvgLctz1xnvxqF7kNXJ8PVxA-gzGzoHsz";
        AvConfig.AppKey = "o9KgsC5CUhbLSyfNiXLkr96B";
        return AvConfig;
    })();
    MixApp.AvConfig = AvConfig;
})(MixApp || (MixApp = {}));
