import domFile = require("./../../01core/0Dom"); import React = require("react");

import iocFile = require("./../../01core/Ioc");


import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");

export module NewUserRolePage {
    export class NewRolePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class NewUserRolePageReact extends basewedPageFile.Web.BaseWebPageReact<NewRolePageProps, NewRolePageStates, NewRolePageAction> implements domCore.IReact {
        public state = new NewRolePageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                <h4>新增角色</h4>
                <div className="Hm-form clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="Hu-label"><label className="required">角色名称: </label></div>
                        <div className="Hu-input">
                            <input type="text" value={this.props.Vm.RoleName} onChange={(e) => { this.fun_roleName_onchange(e); } } placeholder="请输入..."/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className ="Hu-label"><label className="form-control-label  pull-right required">角色标识: </label></div>
                        <div className=" Hu-input">
                            <input type="text" value={this.props.Vm.RoleSign} onChange={(e) => { this.fun_roleSign_onchange(e); } } placeholder="请输入..." />
                        </div>
                    </div>
                </div>
                <div className="text-center"><a className ="btn btn-sm btn-primary" onClick={() => { this.fun_Pclick() } }>确定</a></div>
            </div>
        }

        private fun_Pclick() {
            this.props.Vm.addRoleByName();
        }

        private fun_roleName_onchange(e: React.FormEvent) {
            var _val = e.target["value"];
            this.props.Vm.RoleName = _val;
        }

        private fun_roleSign_onchange(e: React.FormEvent) {
            var _val = e.target["value"];
            this.props.Vm.RoleSign = _val;
        }

    }

    export interface RoleActorData {
        RoleName: string;
        RoleSign: string;
    }



    export class NewRolePageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = NewUserRolePageReact;
        public RoleName: string;
        public RoleSign: string;

        public addRoleByName() {
            this.SendPageActor({ ToPanelName: "", ToModuleName: "form-control-label  pull-rightPAGE" }, { RoleName: this.RoleName, RoleSign: this.RoleSign });

            this.closePage();
        }
    }

    export class NewRolePageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class NewRolePageProps extends basewedPageFile.Web.BaseWebPageProps<NewRolePageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NEWUSERROLEPAGE", basewedPageFile.Web.BaseWebPageVm, NewRolePageVm);

}