/*
 * 静态链接广告展示
 *
 */
module MixEmpty{
    export class AdMedia extends eui.Image {
        public constructor(){
            super();

            this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
        }

        private _link:string;

        public get link():string{
            return this._link;
        }

        public set link(src:string){
            this._link = src;
        }

        public loadImgSrc(src:string){
            RES.getResByUrl(src,this.loadImgComplete,this);
        }

        private loadImgComplete(data,url){
            //console.log(data);
            this.source = <egret.Texture> data;
            //console.log("img:::",this.width, this.height);
        }

        private onClick(){
            window.open(this._link);
        }
    }
}