import domFile = require("./../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import eventFile = require("./../../../01core/Event");
import alinkFile = require("./../../../05tool/ALink");
import ALink = alinkFile.ui.ALinkReact;

import kvFile = require("./../../07data/Kv");

import headListMenuFile = require("./component/headListMenu");
import headListMenu = headListMenuFile.headListMenu.headListMenuReact;
import headListMenuVm = headListMenuFile.headListMenu.headListMenuVm;

export module hdzTestPage {
    export class hdzTestPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class hdzTestPageReact extends basewedPageFile.Web.BaseWebPageReact<hdzTestPageProps, hdzTestPageStates, hdzTestPageAction> implements domCore.IReact {

        public state = new hdzTestPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="acsMarginT3 acsPadding3">
                <div>
                    <ALink  Vm={new alinkFile.ui.ALinkVm(false, { ClassName: "button large" }) } href="$ATAWPLATFORMPAGE$" children={null}>新版大平台（需要添加版本号) </ALink>
                </div>
                <div onClick={() => { this.fun_ItemClick()}}>
                    <ALink Vm={new alinkFile.ui.ALinkVm(false, { ClassName: "button large" }) } href="" children={null}>头部导航列表组件</ALink>
                    <div className={"acsMarginB1" + (this.props.Vm.IsItemShow?"":" hide")}>{this.props.Vm.HeadListMenuObj.intoDom()}</div>
                </div>

                <h4>配置报表自定义列</h4>
                {this._initCols()}
            </div>;
        }

        public _initCols(): React.ReactElement<any> {
            return <div className="m-t-md">
                <div className="m-t">
                    <h5>全部</h5>
                    <ul className="ACT-USERABLE Hm-custom-col clearfix">
                        <li className="Hz-checked">标题</li>
                        <li className="Hz-checked">当前步骤</li>
                        <li>创建人</li>
                        <li className="Hz-checked">申请人</li>
                        <li className="Hz-checked">最后修改时间</li>
                        <li>是否完成</li>
                        <li>应用到工作流</li>
                    </ul>
                </div>
                <div className="m-t">
                    <h5>当前字段</h5>
                    <ul className="ACT-CURRENT Hm-custom-col">
                        <li>标题</li>
                        <li className={(this.props.Vm.IsLeft ? " Ha-translate-xy " : "") + (this.props.Vm.IsRight ? " Ha-translate-x-r" : " ") } >当前步骤</li>
                        <li className={(this.props.Vm.IsLeft ? "Ha-translate-x " : " ") + (this.props.Vm.IsRight ? "Ha-translate-x-r" : "") }>
                            <i className="fa fa-chevron-left" onClick={() => { this.fun_RightToLeft() } }></i> 申请人<i className="fa fa-chevron-right" onClick={() => { this.fun_LeftToRight() } }></i>
                        </li>
                        <li>最后修改时间</li>
                    </ul>
                </div>
            </div>
        }

        private fun_UserableClick() {

        }

        public fun_RightToLeft() {
            //var x = -50;
           // var _this = $(this);
            // _this.parent().css("transform","translateX(-50px)");
            this.props.Vm.IsLeft = true;
            this.forceUpdate();
        }

        public fun_LeftToRight() {
            //var x = -50;
            // var _this = $(this);
            // _this.parent().css("transform","translateX(-50px)");
            this.props.Vm.IsRight = true;
            this.forceUpdate();
        }

        private fun_ItemClick() {
            this.props.Vm.IsItemShow = !this.props.Vm.IsItemShow;
            this.forceUpdate();
        }


    }
    export interface IhdzTestPageConfig {
        

    }
    export class hdzTestPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = hdzTestPageReact;

        public HeadListMenuObj: headListMenuVm = new headListMenuVm();

        public IsItemShow: boolean = false;

        public IsLeft: boolean = false;
        public IsRight: boolean;

      //  public UsableItemList: Array<kvFile.data.KVS> = new Array<kvFile.data.KVS>();

     //   public CurrentItemList: Array<kvFile.data.KVS> = new Array<kvFile.data.KVS>();

        //public static Test(num?: number): hdzTestPageVm {
        //    var bean = new ListboxVm();

        //    if (num == undefined) {
        //        num = 7
        //    }
        //    //给元素添加
        //    for (var i = 0; i <= num; i++) {
        //        bean.ItemList = bean.ItemList.concat(
        //            { Value: i.toString(), Text: "选项 " + i, Select: false }
        //        );
        //    }

        //    return bean;
        //}



        public constructor(config?: IhdzTestPageConfig) {
            super();

        }

    }
    export class hdzTestPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class hdzTestPageProps extends basewedPageFile.Web.BaseWebPageProps<hdzTestPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("HDZTESTPAGE", basewedPageFile.Web.BaseWebPageVm, hdzTestPageVm);

}

