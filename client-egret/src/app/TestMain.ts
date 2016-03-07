class TestMain extends eui.Component{
    public constructor(){
        super();

        var img:MixEmpty.AdMedia = new MixEmpty.AdMedia();
        img.link = "http://img30.360buyimg.com/ads/jfs/t2077/145/2223700253/19819/c26c8593/56d0289dNce1d8140.jpg";
        img.loadImgSrc("http://img30.360buyimg.com/ads/jfs/t2077/145/2223700253/19819/c26c8593/56d0289dNce1d8140.jpg");
        this.addChild(img);
    }
}