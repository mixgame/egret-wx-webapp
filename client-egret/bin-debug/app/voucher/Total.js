var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Voucher;
(function (Voucher) {
    /**
     * 卡券详情 全局唯一显示
     * @author
     *
     */
    var Total = (function (_super) {
        __extends(Total, _super);
        function Total() {
            _super.call(this);
        }
        return Total;
    })(eui.Component);
    Voucher.Total = Total;
})(Voucher || (Voucher = {}));
