/*
 * 静态链接广告展示
 *
 */
var MixEmpty;
(function (MixEmpty) {
    var AdMedia = (function (_super) {
        __extends(AdMedia, _super);
        function AdMedia() {
            _super.call(this);
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        }
        var d = __define,c=AdMedia,p=c.prototype;
        d(p, "link"
            ,function () {
                return this._link;
            }
            ,function (src) {
                this._link = src;
            }
        );
        p.loadImgSrc = function (src) {
            RES.getResByUrl(src, this.loadImgComplete, this);
        };
        p.loadImgComplete = function (data, url) {
            //console.log(data);
            this.source = data;
            //console.log("img:::",this.width, this.height);
        };
        p.onClick = function () {
            window.open(this._link);
        };
        return AdMedia;
    })(eui.Image);
    MixEmpty.AdMedia = AdMedia;
    egret.registerClass(AdMedia,'MixEmpty.AdMedia');
})(MixEmpty || (MixEmpty = {}));
