var TestMain = (function (_super) {
    __extends(TestMain, _super);
    function TestMain() {
        _super.call(this);
        var img = new MixEmpty.AdMedia();
        img.link = "http://img30.360buyimg.com/ads/jfs/t2077/145/2223700253/19819/c26c8593/56d0289dNce1d8140.jpg";
        img.loadImgSrc("http://img30.360buyimg.com/ads/jfs/t2077/145/2223700253/19819/c26c8593/56d0289dNce1d8140.jpg");
        this.addChild(img);
    }
    var d = __define,c=TestMain,p=c.prototype;
    return TestMain;
})(eui.Component);
egret.registerClass(TestMain,'TestMain');
