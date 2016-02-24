var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 * @author
 * 全局公告类
 * 全局唯一 需要时设置弹出
 */
var NoticeMain = (function (_super) {
    __extends(NoticeMain, _super);
    function NoticeMain() {
        _super.call(this);
        this.skinName = "skins.NoticeMainSkin";
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickCloseBtn, this);
    }
    NoticeMain.prototype.onClickCloseBtn = function () {
        MixApp.AppMain.closeNotice();
    };
    return NoticeMain;
})(eui.Component);
