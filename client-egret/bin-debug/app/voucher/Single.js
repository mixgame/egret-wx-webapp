var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        return Single;
    })(eui.Component);
    Voucher.Single = Single;
})(Voucher || (Voucher = {}));
