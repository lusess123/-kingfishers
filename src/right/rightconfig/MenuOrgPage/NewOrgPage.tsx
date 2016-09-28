import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import React = require("react");
export module NewOrgPage {
    export class NewOrgPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class NewOrgPageReact extends basewedPageFile.Web.BaseWebPageReact<NewOrgPageProps, NewOrgPageStates, NewOrgPageAction> implements domCore.IReact {

        public state = new NewOrgPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                <h4>新建组织</h4>
                <div className="acs-form clearfix">
                    <div className="large-4 small-12 columns"><div className="columns acs-lable">
                        <label className="right required">组织名称：</label></div>
                        <div className="columns acs-input">
                            <input type="text" placeholder="请输入..." value={this.OrgText} onChange={(e) => { this.fun_linkText(e); } }></input></div></div>
                </div>
                <div className="acsTextC acsMarginT3">
                    <a className="button" onClick={() => { this.fun_addOrg() } } >提交</a></div>
            </div>;
        }

        private fun_addOrg() {
            this.props.Vm.addOrgByName();
        }

        public OrgText: string;
        private fun_linkText(e) {
            var _val = e.target["value"];
            this.OrgText = _val;
            this.props.Vm.OrgName = _val
            this.forceUpdate();
        }




    }
    export class NewOrgPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = NewOrgPageReact;
        public OrgName: string;
        public toPage: string;
        public IsModalShow: boolean = true;
        public addOrgByName() {
            debugger
            this.SendPageActor({ ToPanelName: "", ToModuleName: "MENUORGLINK" }, { OrgName: this.OrgName});
            this.closePage();
        }





    }
    export class NewOrgPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class NewOrgPageProps extends basewedPageFile.Web.BaseWebPageProps<NewOrgPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NEWORGANPAGE", basewedPageFile.Web.BaseWebPageVm, NewOrgPageVm);

}

