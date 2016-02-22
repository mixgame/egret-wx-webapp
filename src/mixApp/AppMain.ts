module MixApp {
    /**
     * web app的主控制类
     */ 
    export class AppMain {
        static Main:Main;           //总ui层
        static Home:HomeMain;       //app主要显示层
        static Pay:PayMain;         //支付界面 覆盖在home上面
        static Loading:LoadingUI;   //缓冲读取界面 覆盖在pay上面
        static Notice:NoticeMain;   //全局通知层
        
        static initLogin(){
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
        }
        
        static openPay(){
            AppMain.Home.touchChildren = false;
            AppMain.Main.removeChild(AppMain.Home);
            AppMain.Main.addChild(AppMain.Pay);
        }
        
        static closePay(){
            AppMain.Main.removeChild(AppMain.Pay);
            AppMain.Main.addChild(AppMain.Home);
            AppMain.Home.touchChildren = true;
        }
        
        static openNotice(){
            AppMain.Home.touchChildren = false;
            AppMain.Pay.touchChildren = false;
            AppMain.Main.addChild(AppMain.Notice);
        }
        static closeNotice(){
            AppMain.Main.removeChild(AppMain.Notice);
            AppMain.Home.touchChildren = true;
            AppMain.Pay.touchChildren = true;
        }
    }
}