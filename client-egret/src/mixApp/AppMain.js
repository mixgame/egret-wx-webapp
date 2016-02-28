var MixApp;
(function (MixApp) {
    /**
     * mixapp 的界面主控类
     * 界面直接的切换和显示都统一调用此类
     */
    var AppMain = (function () {
        function AppMain() {
        }
        AppMain.initLogin = function () {
            AppMain.Main.removeChildren();
            AppMain.Main.touchEnabled = false;
            var test = new TestMain();
            AppMain.Main.addChild(test);
            return;
            console.log("code::", MixApp.UserConfig.code);
            AppMain.Home = new HomeMain();
            AppMain.Home.width = AppMain.Main.width;
            AppMain.Home.height = AppMain.Main.height;
            AppMain.Pay = new PayMain();
            AppMain.Pay.width = AppMain.Main.width;
            AppMain.Pay.height = AppMain.Main.height;
            AppMain.Notice = new NoticeMain();
            AppMain.Notice.width = AppMain.Main.width;
            AppMain.Notice.height = AppMain.Main.height;
            AppMain.Main.removeChildren();
            console.log("加入HomeMain页面");
            AppMain.Main.addChild(AppMain.Home);
        };
        AppMain.openPay = function () {
            AppMain.Home.touchChildren = false;
            AppMain.Main.removeChild(AppMain.Home);
            AppMain.Main.addChild(AppMain.Pay);
        };
        AppMain.closePay = function () {
            AppMain.Main.removeChild(AppMain.Pay);
            AppMain.Main.addChild(AppMain.Home);
            AppMain.Home.touchChildren = true;
        };
        AppMain.openNotice = function () {
            AppMain.Home.touchChildren = false;
            AppMain.Pay.touchChildren = false;
            AppMain.Main.addChild(AppMain.Notice);
        };
        AppMain.closeNotice = function () {
            AppMain.Main.removeChild(AppMain.Notice);
            AppMain.Home.touchChildren = true;
            AppMain.Pay.touchChildren = true;
        };
        return AppMain;
    })();
    MixApp.AppMain = AppMain;
})(MixApp || (MixApp = {}));
