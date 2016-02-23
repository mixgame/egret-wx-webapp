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
    var d = __define,c=NoticeMain,p=c.prototype;
    p.onClickCloseBtn = function () {
        MixApp.AppMain.closeNotice();
    };
    return NoticeMain;
})(eui.Component);
egret.registerClass(NoticeMain,'NoticeMain');
