module MixApp {
    /**
     * web app 基本信息
     */ 
    export class WebAppConfig {
        static AppName:string = "mix的测试app";
        // 不兼容时递加 . 兼容并增加功能时递加 . bug修复递加
        static AppVer:string = "0.0.1";
        
        //本地测试 跳过wx认证
        static LocalTest:boolean = false;
    }
	/** 
	 * wx相关的 的基本配置
	 */
	export class WxConfig {
    	static JsSdkIsOpenDebug:boolean = true;
		static AppId:string = "wx2b89597d2c9c105b";
		//网页授权认证返回state字符串
		static CallBackStateStr:string = "MixTestOk";
		//微信js-sdk签名计算地址
        static JsSdkSignUrl:string = "http://wx.mixgame.mobi/wx/json.php";
        //所需调用的js功能
        //http://mp.weixin.qq.com/wiki/11/74ad127cc054f6b80759c40f77ec03db.html#.E9.99.84.E5.BD.952-.E6.89.80.E6.9C.89JS.E6.8E.A5.E5.8F.A3.E5.88.97.E8.A1.A8
        static JsApiList: Array<string> = [
            'getLocation', //获取地理位置
            'chooseWXPay', //支付
            'showMenuItems', //显示按钮
            'onMenuShareTimeline',  //分享到朋友圈
            'onMenuShareAppMessage', //分享给朋友
            'onMenuShareQQ' //分享到qq
        ];
	}
	
	/**
	 * user 当前数据全局存储
	 */ 
	export class UserConfig {
	    static code:string;
	    static name:string;
	    static sex:string;
	}
	
	/* app后台数据本地配置信息
	 * 需要到 leancloud 的自行申请找号的建立应用
	 */ 
	export class AvConfig {
	    static AppId:string;
	}
}
