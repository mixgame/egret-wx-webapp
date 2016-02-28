var TestMain = (function (_super) {
    __extends(TestMain, _super);
    function TestMain() {
        _super.call(this);
        var empty = new MixEmpty.SlideGroup(MixEmpty.SlideGroup.MOVETYPE_HOR);
        this.addChild(empty);
        var rect = new eui.Button();
        rect.label = "11";
        empty.addEui(rect);
        var rect2 = new eui.Button();
        rect2.label = "22";
        empty.addEui(rect2);
        var rect3 = new eui.Button();
        rect3.label = "33";
        empty.addEui(rect3);
    }
    var d = __define,c=TestMain,p=c.prototype;
    return TestMain;
})(eui.Component);
egret.registerClass(TestMain,'TestMain');
