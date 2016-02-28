class TestMain extends eui.Component{
    public constructor(){
        super();

        var empty:MixEmpty.SlideGroup = new MixEmpty.SlideGroup(MixEmpty.SlideGroup.MOVETYPE_HOR);
        this.addChild(empty);

        var rect:eui.Button = new eui.Button();
        rect.label = "11";
        empty.addEui(rect);

        var rect2:eui.Button = new eui.Button();
        rect2.label = "22";
        empty.addEui(rect2);

        var rect3:eui.Button = new eui.Button();
        rect3.label = "33";
        empty.addEui(rect3);
    }
}