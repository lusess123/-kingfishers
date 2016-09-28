

import domFile = require("./../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import comboFile = require("./../../02col/02Mulite/Combo");
import textFile = require("./../../02col/01single/Text");
import textareaFile = require("./../../02col/01single/TextArea");


export module NewMenuPage {
    export class NewMenuPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class NewMenuPageReact extends basewedPageFile.Web.BaseWebPageReact<NewMenuPageProps, NewMenuPageStates, NewMenuPageAction> implements domCore.IReact {

        public state = new NewMenuPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                <h4>新建菜单</h4>
                <div className="acs-form clearfix">
                    <div className="large-4 small-12 columns"><div className="pull-left Hu-label">
                        <label className="right required">菜单名称：</label></div>
                        <div className="pull-left Hu-input">
                            <input type="text" placeholder="请输入..." value={this.menuText} onChange={(e) => { this.fun_linkText(e); } }></input></div></div>
                </div>
                <div className="acsTextC acsMarginT3">
                    <a className="button" onClick={() => { this.fun_addMenu() } } >提交</a></div>
            </div>;
        }

        private fun_addMenu() {
            this.props.Vm.addMenuByName();
        }

        public menuText: string;
        private fun_linkText(e) {
            var _val = e.target["value"];
            this.menuText = _val;
            this.forceUpdate();
        }
    }
    export class NewMenuPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = NewMenuPageReact;
        public MenuName: string;
        public toPage: string;
        public IsModalShow: boolean = true;
        public addMenuByName() {
            this.SendPageActor({ ToPanelName: "rightPage" }, this.MenuName);
            this.closePage();
        }

    }
    export class NewMenuPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class NewMenuPageProps extends basewedPageFile.Web.BaseWebPageProps<NewMenuPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NEWMENUPAGE", basewedPageFile.Web.BaseWebPageVm, NewMenuPageVm);

}

