import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import React = require("react");
export module NewMenuOrgPage {
    export class NewMenuOrgPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class NewMenuOrgPageReact extends basewedPageFile.Web.BaseWebPageReact<NewMenuOrgPageProps, NewMenuOrgPageStates, NewMenuOrgPageAction> implements domCore.IReact {

        public state = new NewMenuOrgPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                    <h4>新建菜单</h4>
                    <div className="acs-form clearfix">
                    <div className="large-4 small-12 columns"><div className="columns acs-lable">
                        <label className="right required">菜单名称：</label></div>
                        <div className="columns acs-input">
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
    export interface MenuActorData {
        MenuName: string;
    }

    export class NewMenuOrgPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = NewMenuOrgPageReact;
        public MenuName: string;
        public toPage: string;
        public IsModalShow: boolean = true;
        public addMenuByName() {
            this.SendPageActor({ ToPanelName: "MENUUSERROLEPAGE" }, this.MenuName);
            this.closePage();
        }
    }
    export class NewMenuOrgPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class NewMenuOrgPageProps extends basewedPageFile.Web.BaseWebPageProps<NewMenuOrgPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NEWMENUORGPAGES", basewedPageFile.Web.BaseWebPageVm, NewMenuOrgPageVm);

}
