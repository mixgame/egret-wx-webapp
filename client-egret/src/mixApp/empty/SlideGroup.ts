module MixEmpty {
    /*
        滑动展示
        左右或上下滑动 展示内部信息

        2016-2-27 暂时只提供横向布局  未来需要竖向时 新加皮肤更改即可
        addEui 添加进来的元素 会自动将宽高设置与组件相同
     */
    export class SlideGroup extends eui.Scroller{
        public static MOVETYPE_HOR:string = "Hor";
        public static MOVETYPE_VER:string = "Ver";
        public MoveType:string;
        public scrollIndex:number;
        public posStart:number;
        public isMove:boolean;

        public showScroller:eui.Scroller;
        public showGroup:eui.Group;
        public constructor(moveType:string = MixEmpty.SlideGroup.MOVETYPE_HOR){
            super();
            this.MoveType = moveType;
            this.skinName = "MixSkins.SlideGroupSkin";
            this.touchEnabled = true;
            this.showScroller.bounces = false;
            this.showScroller.throwSpeed = 0;
            this.scrollIndex = 0;

            this.showScroller.addEventListener(eui.UIEvent.CHANGE_START,this.onTOuchMoveStart,this);
            this.showScroller.addEventListener(eui.UIEvent.CHANGE,this.onTouchMoveing,this);
            this.showScroller.addEventListener(eui.UIEvent.CHANGE_END,this.onTouchMoveEnd,this);
        }

        public addEui(oneEui:egret.DisplayObject){
            console.log("添加eui");
            oneEui.width = this.width;
            oneEui.height = this.height;
            this.showGroup.addChild(oneEui);
        }

        public removeEui(){
            this.showScroller.removeChildren();
        }

        private onTOuchMoveStart(event:egret.Event){
            var scroll = <eui.Scroller> event.target;
            if(this.MoveType === MixEmpty.SlideGroup.MOVETYPE_HOR){
                this.posStart = scroll.viewport.scrollH;
            }else {
                this.posStart = scroll.viewport.scrollV;
            }
        }

        private onTouchMoveing(event:egret.Event){
            var scroll = <eui.Scroller> event.target;
            this.isMove = true;
        }

        private onTouchMoveEnd(event:egret.Event){
            if(!this.isMove){
                return
            }

            this.isMove = false;
            var scroll = <eui.Scroller> event.target;
            var endPos:number;
            if(this.MoveType === MixEmpty.SlideGroup.MOVETYPE_HOR){
                endPos = scroll.viewport.scrollH;
            }else {
                endPos = scroll.viewport.scrollV;
            }

            if(endPos - this.posStart > 100){
                this.scrollIndex ++;
            }

            if(this.posStart - endPos > 100){
                this.scrollIndex --;
            }

            if(this.MoveType === MixEmpty.SlideGroup.MOVETYPE_HOR){
                egret.Tween.get(scroll.viewport).to({scrollH:scroll.width * this.scrollIndex},200);
            }else {
                egret.Tween.get(scroll.viewport).to({scrollV:scroll.height * this.scrollIndex},200);
            }
        }
    }
}