import domFile = require("./../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");

export module NewButtonPage {
    export class NewButtonPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class NewButtonPageReact extends basewedPageFile.Web.BaseWebPageReact<NewButtonPageProps, NewButtonPageStates, NewButtonPageAction> implements domCore.IReact {

        public state = new NewButtonPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                <h4>新增</h4>
                <ul className="acs-tabs-title">
                    <li className={"Hu-pointer" + (this.props.Vm.TabCurrentIndex == 0 ? " active" : " ") } onClick={() => { this.fun_TabsClick(0) } }>添加子节点</li>
                    <li className={"Hu-pointer" + (this.props.Vm.TabCurrentIndex == 1 ? " active" : " ") } onClick={() => { this.fun_TabsClick(1) } }>添加按钮</li>
                </ul>
                <div className="acs-tabs-content">
                    <div className={(this.props.Vm.TabCurrentIndex == 0 ? " " : " hide ") }>
                        <div className="acs-form clearfix">
                            <div className="col-lg-6 col-sm-12 columns">
                                <div className="Hu-label"><label className="required" >节点名称：</label></div>
                                <div className="Hu-input"><input type="text" placeholder="请输入..."/></div>
                            </div>
                        </div>
                        <div className="text-center acsMarginT3"><a className="button"  >确定</a></div>
                    </div>
                    <div className={(this.props.Vm.TabCurrentIndex == 1 ? " " : " hide ") }>
                        <div className="acs-form clearfix">
                            <div className="col-lg-6 col-sm-12 columns">
                                <div className="Hu-label"><label className="required" >按钮名称：</label></div>
                                <div className="Hu-input"><input type="text" placeholder="请输入..."/></div>
                            </div>
                        </div>
                        <div className="text-center acsMarginT3"><a className="button"  >确定</a></div>
                    </div>
                </div>
                
            </div>;
        }

        //public fun_Send() {
        //    this.props.Vm.AddButton();
        //}

        private fun_TabsClick(index) {
            this.props.Vm.TabCurrentIndex = index;
            this.forceUpdate();
        }


    }
    export class NewButtonPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = NewButtonPageReact;

        public TabCurrentIndex = 0;


        //public AddButton() {
        //    this.SendPageActor({ ToPanelName: "", ToModuleName: "RIGHTPAGE" }, { MenuName: this.MenuName });
        //    this.closePage();
        //}

    }
    export class NewButtonPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class NewButtonPageProps extends basewedPageFile.Web.BaseWebPageProps<NewButtonPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NEWBUTTONPAGE", basewedPageFile.Web.BaseWebPageVm, NewButtonPageVm);

}

