var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
    HomeMain.prototype.changeScroll = function (event) {
    };
    return HomeMain;
})(eui.Component);
