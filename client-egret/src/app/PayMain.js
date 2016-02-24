var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
 点击购买后 跳转到当前界面
 展示商品信息 等待用户付款
*/
var PayMain = (function (_super) {
    __extends(PayMain, _super);
    function PayMain() {
        _super.call(this);
    }
    PayMain.prototype.initPayShow = function () {
        this.skinName = "skins.PayShowSkin";
        this.payBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickPayBtn, this);
    };
    PayMain.prototype.onClickPayBtn = function () {
        //微信支付开启
        //根据价格 名字 发起微信统一下单
    };
    return PayMain;
})(eui.Component);
