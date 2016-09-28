import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import React = require("react");
export module NewMenuPage {
    export class NewMenuPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class NewMenuPageReact extends basewedPageFile.Web.BaseWebPageReact<NewMenuPageProps, NewMenuPageStates, NewMenuPageAction> implements domCore.IReact {

        public state = new NewMenuPageStates();
        public pSender(): React.ReactElement<any> {
            var _Panel;
            debugger;
            if (this.props.Vm.type == "All") {
                _Panel = <div>
                    <div className="acs-form clearfix">
                        <div className="large-4 small-12 columns">
                            <div className="columns acs-lable">
                                <label className="right required">菜单名称：</label>
                            </div>
                            <div className="columns acs-input">
                                <input type="text" placeholder="请输入..." value={this.menuText} onChange={(e) => { this.fun_linkText(e); } }></input>
                            </div>
                        </div>
                    </div>
                    <div className="acs-form clearfix">
                        <div className="large-4 small-12 columns">
                            <div className="columns acs-lable">
                                <label className="right required">按钮名称：</label>
                            </div>
                            <div className="columns acs-input">
                                <input type="text" placeholder="请输入..." value={this.btnText} onChange={(e) => { this.fun_btnText(e); } }></input>
                            </div>
                        </div>
                    </div>
                </div>
            }
            else if (this.props.Vm.type == "Menu") {
                _Panel = <div className="acs-form clearfix">
                    <div className="large-4 small-12 columns">
                        <div className="columns acs-lable">
                            <label className="right required">菜单名称：</label>
                        </div>
                        <div className="columns acs-input">
                            <input type="text" placeholder="请输入..." value={this.menuText} onChange={(e) => { this.fun_linkText(e); } }></input>
                        </div>
                    </div>
                </div>
            }
            else if (this.props.Vm.type == "Btn") {
                _Panel = <div className="acs-form clearfix">
                    <div className="large-4 small-12 columns">
                        <div className="columns acs-lable">
                            <label className="right required">按钮名称：</label>
                        </div>
                        <div className="columns acs-input">
                            <input type="text" placeholder="请输入..." value={this.btnText} onChange={(e) => { this.fun_btnText(e); } }></input>
                        </div>
                    </div>
                </div>
            }
            return <div>
                <h4>{this.props.Vm.type == "All" ? "菜单或按钮名称" : (this.props.Vm.type == "Menu"?"菜单名称":"按钮名称")}</h4>
                {_Panel}
                 <div className="acsTextC acsMarginT3">
                    <a className="button" onClick={() => { this.fun_addMenu() } } >提交</a>
             </div>
            </div>;
        }
        private fun_addMenu() {
            if (this.props.Vm.type != "All")
            {
                this.props.Vm.addMenuByName();
            }
            else {
                if (this.props.Vm.BtnName != undefined && this.props.Vm.MenuName != undefined) {
                    alert("只能输入按钮名或菜单名")
                }
                else {
                    this.props.Vm.addMenuByName();
                }
            }
        }
        public btnText: string;
        private fun_btnText(e)
        {
            var _val = e.target["value"];
            this.btnText = _val;
            this.props.Vm.BtnName = _val;
            this.forceUpdate();
        }
        public menuText: string;
        private fun_linkText(e) {
            var _val = e.target["value"];
            this.menuText = _val;
            this.props.Vm.MenuName = _val
            this.forceUpdate();
        }

    }
    export class NewMenuPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = NewMenuPageReact;
        public Name: string;
        public MenuName: string;
        public BtnName: string;
        public toPage: string;
        public IsModalShow: boolean = true;
        public type: string = "All";
        public constructor() {
            super();           
        }
        public addMenuByName() {
              if (this.MenuName != "" && this.MenuName != undefined) {
                  this.Name = this.MenuName;
                  this.type = "Menu";
               }
             else {
                  this.Name = this.BtnName;
                  this.type = "Btn";
                }
            this.SendPageActor({ ToPanelName: "", ToModuleName: "RIGHTMAINPAGE" }, { CODE_TEXT: this.Name,Type:this.type});
            this.closePage();
        }
        protected loadPage(callback?: () => any) {
            var _keys = this.Param1;
            this.type = _keys;
            if (callback)
            {
                callback();
            }
        }

    }
    export class NewMenuPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class NewMenuPageProps extends basewedPageFile.Web.BaseWebPageProps<NewMenuPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NEWMENUPAGE", basewedPageFile.Web.BaseWebPageVm, NewMenuPageVm);

}

