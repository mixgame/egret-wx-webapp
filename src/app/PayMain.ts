//点击支付时传入的参数
interface PayConfig {
    itemId:number;
}
/*
 点击购买后 跳转到当前界面
 展示商品信息 等待用户付款
*/
class PayMain extends eui.Component {
    public constructor(){
        super();
    }
    
    public payBtn:eui.Button;
    public initPayShow(){
        this.skinName = "skins.PayShowSkin";
        this.payBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClickPayBtn,this);
    }
    
    private onClickPayBtn(){
        //微信支付开启
        //根据价格 名字 发起微信统一下单
    }
}