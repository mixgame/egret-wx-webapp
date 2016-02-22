/*
 点击购买后 跳转到当前界面
 展示商品信息 等待用户付款
*/
var PayMain = (function (_super) {
    __extends(PayMain, _super);
    function PayMain() {
        _super.call(this);
    }
    var d = __define,c=PayMain,p=c.prototype;
    p.initPayShow = function () {
        this.skinName = "skins.PayShowSkin";
        this.payBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickPayBtn, this);
    };
    p.onClickPayBtn = function () {
        //微信支付开启
        //根据价格 名字 发起微信统一下单
    };
    return PayMain;
})(eui.Component);
egret.registerClass(PayMain,'PayMain');
