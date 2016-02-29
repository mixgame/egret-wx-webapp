var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MixEmpty;
(function (MixEmpty) {
    /*
        滑动展示
        左右或上下滑动 展示内部信息

        2016-2-27 暂时只提供横向布局  未来需要竖向时 新加皮肤更改即可
        addEui 添加进来的元素 会自动将宽高设置与组件相同
     */
    var SlideGroup = (function (_super) {
        __extends(SlideGroup, _super);
        function SlideGroup(moveType) {
            if (moveType === void 0) { moveType = MixEmpty.SlideGroup.MOVETYPE_HOR; }
            _super.call(this);
            this.MoveType = moveType;
            this.skinName = "MixSkins.SlideGroupSkin";
            this.touchEnabled = true;
            this.showScroller.bounces = false;
            this.showScroller.throwSpeed = 0;
            this.scrollIndex = 0;
            this.showScroller.addEventListener(eui.UIEvent.CHANGE_START, this.onTOuchMoveStart, this);
            this.showScroller.addEventListener(eui.UIEvent.CHANGE, this.onTouchMoveing, this);
            this.showScroller.addEventListener(eui.UIEvent.CHANGE_END, this.onTouchMoveEnd, this);
        }
        SlideGroup.prototype.addEui = function (oneEui) {
            console.log("添加eui");
            oneEui.width = this.width;
            oneEui.height = this.height;
            this.showGroup.addChild(oneEui);
        };
        SlideGroup.prototype.removeEui = function () {
            this.showScroller.removeChildren();
        };
        SlideGroup.prototype.onTOuchMoveStart = function (event) {
            var scroll = event.target;
            if (this.MoveType === MixEmpty.SlideGroup.MOVETYPE_HOR) {
                this.posStart = scroll.viewport.scrollH;
            }
            else {
                this.posStart = scroll.viewport.scrollV;
            }
        };
        SlideGroup.prototype.onTouchMoveing = function (event) {
            var scroll = event.target;
            this.isMove = true;
        };
        SlideGroup.prototype.onTouchMoveEnd = function (event) {
            if (!this.isMove) {
                return;
            }
            this.isMove = false;
            var scroll = event.target;
            var endPos;
            if (this.MoveType === MixEmpty.SlideGroup.MOVETYPE_HOR) {
                endPos = scroll.viewport.scrollH;
            }
            else {
                endPos = scroll.viewport.scrollV;
            }
            if (endPos - this.posStart > 100) {
                this.scrollIndex++;
            }
            if (this.posStart - endPos > 100) {
                this.scrollIndex--;
            }
            if (this.MoveType === MixEmpty.SlideGroup.MOVETYPE_HOR) {
                egret.Tween.get(scroll.viewport).to({ scrollH: scroll.width * this.scrollIndex }, 200);
            }
            else {
                egret.Tween.get(scroll.viewport).to({ scrollV: scroll.height * this.scrollIndex }, 200);
            }
        };
        SlideGroup.MOVETYPE_HOR = "Hor";
        SlideGroup.MOVETYPE_VER = "Ver";
        return SlideGroup;
    })(eui.Scroller);
    MixEmpty.SlideGroup = SlideGroup;
})(MixEmpty || (MixEmpty = {}));
