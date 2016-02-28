var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
    return TestMain;
})(eui.Component);
