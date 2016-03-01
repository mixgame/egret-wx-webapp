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
        var d = __define,c=SlideGroup,p=c.prototype;
        p.addEui = function (oneEui) {
            console.log("添加eui");
            oneEui.width = this.width;
            oneEui.height = this.height;
            this.showGroup.addChild(oneEui);
        };
        p.removeEui = function () {
            this.showScroller.removeChildren();
        };
        p.onTOuchMoveStart = function (event) {
            var scroll = event.target;
            if (this.MoveType === MixEmpty.SlideGroup.MOVETYPE_HOR) {
                this.posStart = scroll.viewport.scrollH;
            }
            else {
                this.posStart = scroll.viewport.scrollV;
            }
        };
        p.onTouchMoveing = function (event) {
            var scroll = event.target;
            this.isMove = true;
        };
        p.onTouchMoveEnd = function (event) {
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
    egret.registerClass(SlideGroup,'MixEmpty.SlideGroup');
})(MixEmpty || (MixEmpty = {}));
