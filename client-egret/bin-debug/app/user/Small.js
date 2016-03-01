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
        var d = __define,c=Small,p=c.prototype;
        return Small;
    })(eui.Component);
    User.Small = Small;
    egret.registerClass(Small,'User.Small');
})(User || (User = {}));
