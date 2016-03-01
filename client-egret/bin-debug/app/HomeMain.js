/*
 * app home类显示一切需要的ui
 */
var HomeMain = (function (_super) {
    __extends(HomeMain, _super);
    function HomeMain() {
        _super.call(this);
        this.skinName = "skins.HomeMainSkin";
        this.voucherScroll.bounces = false;
        this.voucherScroll.addEventListener(egret.Event.CHANGE, this.changeScroll, this);
    }
    var d = __define,c=HomeMain,p=c.prototype;
    p.changeScroll = function (event) {
    };
    return HomeMain;
})(eui.Component);
egret.registerClass(HomeMain,'HomeMain');
