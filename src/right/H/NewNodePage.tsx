import domFile = require("./../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");

export module NewNodePage {
    export class NewNodePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class NewNodePageReact extends basewedPageFile.Web.BaseWebPageReact<NewNodePageProps, NewNodePageStates, NewNodePageAction> implements domCore.IReact {

        public state = new NewNodePageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                <h4>新增树节点</h4>
                <div className="acs-form clearfix">
                    <div className="large-6 small-12 columns">
                        <div className="Hu-label"><label className="right required" >节点名称：</label></div>
                        <div className="Hu-input"><input type="text" value={this.props.Vm.MenuName} onChange={(e) => { this.fun_menuName_onchange(e) } } placeholder="请输入..."/></div>
                    </div>
                </div>
                <div className="text-center acsMarginT3"><a className="button" onClick={() => {this.fun_Send()}}>确定</a></div>
            </div>;
        }

        public fun_menuName_onchange(e:React.FormEvent)
        {
            var _val = e.target["value"];
            this.props.Vm.MenuName = _val;
        }

        public fun_Send()
        {
            this.props.Vm.AddMenu();
        }




    }
    export class NewNodePageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = NewNodePageReact;
        public MenuName: string;
        public AddMenu() {
            this.SendPageActor({ ToPanelName: "", ToModuleName: "RIGHTPAGE" }, { MenuName: this.MenuName });
            this.closePage();
        }

    }
    export class NewNodePageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class NewNodePageProps extends basewedPageFile.Web.BaseWebPageProps<NewNodePageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NEWNODEPAGE", basewedPageFile.Web.BaseWebPageVm, NewNodePageVm);

}

