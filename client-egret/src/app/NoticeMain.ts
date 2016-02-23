/**
 *
 * @author 
 * 全局公告类
 * 全局唯一 需要时设置弹出
 */
class NoticeMain extends eui.Component{
	public constructor() {
    	super();
        this.skinName = "skins.NoticeMainSkin";
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClickCloseBtn,this);
	}
	
    public closeBtn:eui.Button;
    
    private onClickCloseBtn(){
        MixApp.AppMain.closeNotice();
    }
}
