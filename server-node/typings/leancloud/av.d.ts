declare module AV {
    interface cbFunc {
        success?:Function;
        error?:Function;
    }
    /*
    @isProduction 是否使用 生产环境 (发布版) 默认true
     */
    function setProduction(isProduction:boolean);

    function initialize(id:string, key:string);

    /*
     * @class AV.Cloud 云代码
     */
    class Cloud {
        static define(str:string,func:Function);
        static run(str:string,protoProps:any,func:AV.cbFunc);
    }

    class User {
        set(key:string,str:string);
        signUp(pro:any,func:AV.cbFunc);
        static logIn(id:string,pw:string,func:AV.cbFunc);
        save(saveObj:any,func?:AV.cbFunc);
    }

    /**
     * @class AV.Object 数据对象
     */
    class Object {
        /*
         @className 数据表的名字
         @anyClass  继承后的类方法和变量
         */
        static extend(className:string,protoProps?:any,classProps?:any);

        static new(className:string);

        /**
         * 保存到云端数据库
         */
        save(saveObj:any,func?:AV.cbFunc);

        /**
         * 获取数据的属性值
         * @param name 属性名
         */
        get(name:string);

        /**
         * 设置数据的属性值
         * @param name 属性名
         * @param type 数据类型
         */
        set(name:string,type:any);
    }

    class Query {
        constructor(obj:AV.Object);

        /*
        大于 某值
         */
        greaterThan(key:string,index:number);

        get(objId:string,func?:AV.cbFunc);

        //指定查找 key == str 的数据
        equalTo(key:string,str:any);

        //设置最大查找数量  默认100
        limit(num:number);

        //设置需要跳过的前置数量
        skip(num:number);

        //计算 符合条件的数据 总数量
        count(sucFunc?:any,errFunc?:any);

        //只查找第一条
        first(sucFunc?:any,errFunc?:any);

        //查找
        find(sucFunc?:any,errFunc?:any);

        //1参数在前置方法成功时执行 2参数在失败时执行
        then(sucFunc:Function,errFunc?:Function);

        //Promise 成功时
        done(func:Function);

        //Promise 失败时
        fail(func:Function);

        //Promise 无论成功失败 都执行
        always(func:Function);
    }

    interface pushInit {
        appId:string;
        appKey:string;
    }
    interface pushSend {
        channels:Array<string>;
        data:any;
    }

    function push(pro:pushInit):any;

    class avPush {
        //开启链接
        open(func:Function);

        //发送
        send(pre:pushSend,func:Function);

        //监听事件
        on(name:string,func:Function);

        //快捷消息事件
        receive(func:Function);

        //关注新频道
        subscribe(channels:Array<string>,func:Function);

        //取消关注
        unsubscribe(channels:Array<string>,func:Function);

    }
}