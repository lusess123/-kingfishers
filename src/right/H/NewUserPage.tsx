import domFile = require("./../../01core/0Dom"); import React = require("react");

import iocFile = require("./../../01core/Ioc");


import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");

export module NewUserPage {
    export class NewUserPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class NewUserPageReact extends basewedPageFile.Web.BaseWebPageReact<NewUserPageProps, NewUserPageStates, NewUserPageAction> implements domCore.IReact {

        public state = new NewUserPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                <h4>新增用户</h4>
                <div className="Hm-form clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="pull-left Hu-label"><label className="form-control-label  pull-right required">用户名称：</label></div>
                        <div className="pull-left Hu-input">
                            <input className="Hg-width" type="text" value={this.props.Vm.UserName}  onChange={(e) => { this.fun_userName_onchange(e); } } placeholder="请输入..."/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="pull-left Hu-label"><label className="form-control-label  pull-right required">登录名：</label></div>
                        <div className="pull-left Hu-input">
                            <input className="Hg-width" type="text" value={this.props.Vm.LoginName}  onChange={(e) => { this.fun_loginName_onchange(e); } } placeholder="请输入..."/>
                        </div>
                    </div>
                </div>
                <div className="text-center"><a className="btn btn-xs btn-primary" onClick={() => { this.fun_Pclick() } }>确定</a></div>
            </div>;
        }


        private fun_Pclick() {
            this.props.Vm.addUserByName();
        }

        private fun_userName_onchange(e: React.FormEvent) {
            var _val = e.target["value"];
            this.props.Vm.UserName = _val;
        }
        private fun_loginName_onchange(e: React.FormEvent) {
            var _val = e.target["value"];
            this.props.Vm.LoginName = _val;
        }



    }

    export interface UserActorData {
        UserName: string;
        LoginName: string;
    }

    export class NewUserPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = NewUserPageReact;

        public UserName: string;
        public LoginName: string;

        public addUserByName() {
            this.SendPageActor({ ToPanelName: "", ToModuleName: "RIGHTPAGE" }, { UserName: this.UserName, UserSign: this.LoginName });
            this.closePage();
        }
    }
    export class NewUserPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class NewUserPageProps extends basewedPageFile.Web.BaseWebPageProps<NewUserPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NEWUSERPAGE", basewedPageFile.Web.BaseWebPageVm, NewUserPageVm);

}

