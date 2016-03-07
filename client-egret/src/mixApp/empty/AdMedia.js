var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        Object.defineProperty(AdMedia.prototype, "link", {
            get: function () {
                return this._link;
            },
            set: function (src) {
                this._link = src;
            },
            enumerable: true,
            configurable: true
        });
        AdMedia.prototype.loadImgSrc = function (src) {
            RES.getResByUrl(src, this.loadImgComplete, this);
        };
        AdMedia.prototype.loadImgComplete = function (data, url) {
            //console.log(data);
            this.source = data;
            //console.log("img:::",this.width, this.height);
        };
        AdMedia.prototype.onClick = function () {
            window.open(this._link);
        };
        return AdMedia;
    })(eui.Image);
    MixEmpty.AdMedia = AdMedia;
})(MixEmpty || (MixEmpty = {}));
