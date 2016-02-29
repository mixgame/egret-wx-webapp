var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var User;
(function (User) {
    /**
     * 用户信息显示类
     * @author
     *
     */
    var Small = (function (_super) {
        __extends(Small, _super);
        function Small() {
            _super.call(this);
            this.skinName = "skin.UserSmallSkin";
        }
        return Small;
    })(eui.Component);
    User.Small = Small;
})(User || (User = {}));
