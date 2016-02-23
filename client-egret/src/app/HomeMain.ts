/*
 * app home类显示一切需要的ui
 */ 
class HomeMain extends eui.Component{
    public constructor(){
        super();
        this.skinName = "skins.HomeMainSkin";
        this.voucherScroll.bounces = false;
        this.voucherScroll.addEventListener(egret.Event.CHANGE,this.changeScroll,this);
    }
    
    public voucherScroll:eui.Scroller;
    public firstVoucher:Voucher.Single;
    
    private changeScroll(event:egret.Event){

    }
}