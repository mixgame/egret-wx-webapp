var Voucher;
(function (Voucher) {
    /**
     * 单个卡券 列表中使用
     * @author
     *
     */
    var Single = (function (_super) {
        __extends(Single, _super);
        function Single() {
            _super.call(this);
            this.skinName = "skins.VoucherSingleSkin";
        }
        var d = __define,c=Single,p=c.prototype;
        return Single;
    })(eui.Component);
    Voucher.Single = Single;
    egret.registerClass(Single,'Voucher.Single');
})(Voucher || (Voucher = {}));
