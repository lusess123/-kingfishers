// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ChangePWD {
    export class ChangPwdAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }
    export class ChangePwdReact extends basewedPageFile.Web.BaseWebPageReact<ChangePwdProps, ChangePwdStates, ChangPwdAction> implements domCore.IReact{
        public state = new ChangePwdStates();

        private fun_SubmitPwd()
        {
            this.props.Vm.submitPwd();
        }
        private fun_oldPwd(e) {
            var _val = e.target["value"];
            this.props.Vm.OldPass = _val;
            this.forceUpdate();
        }
        private fun_newPwd(e) {
            var _val = e.target["value"];
            this.props.Vm.NewPass = _val;
            this.forceUpdate();
        }
        private fun_valiNewPwd(e) {
            var _val = e.target["value"];
            this.props.Vm.ValiNewPass = _val;
            this.forceUpdate();
        }
        public pSender(): React.ReactElement<any> {
            return (
                <div className="container">
                    <div className="Hm-form clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 collapse in">
                            <div className="col-lg-3 col-md-3 col-sm-5 col-xs-5 text-right">
                                <label>原始密码：</label>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-7 col-xs-7">
                                <input type="password" className="Hg-width" value={this.props.Vm.OldPass} onChange={(e) => { this.fun_oldPwd(e); } } />
                                </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 collapse in">
                            <div className="col-lg-3 col-md-3 col-sm-5 col-xs-5 text-right">
                                <label>新密码：</label></div>
                            <div className="col-lg-9 col-md-9 col-sm-7 col-xs-7">
                                <input type="password" className="Hg-width" value={this.props.Vm.NewPass} onChange={(e) => { this.fun_newPwd(e); } }   /></div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 collapse in">
                            <div className="col-lg-3 col-md-3 col-sm-5 col-xs-5 text-right">
                                <label>确认新密码：</label></div>
                            <div className="col-lg-9 col-md-9 col-sm-7 col-xs-7">
                                <input type="password" className="Hg-width" value={this.props.Vm.ValiNewPass} onChange={(e) => { this.fun_valiNewPwd(e); } } />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 btn-group-sm collapse in text-center"><a className="btn btn-sm btn-primary"   onClick={() => { this.fun_SubmitPwd(); } } >提交</a></div>
                    </div>
               </div>
                )
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
        }
    }
    export class ChangePwdVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = ChangePwdReact;
        public OldPass: string;
        public NewPass: string;
        public ValiNewPass: string;
        public constructor() {
            super();
        }
        public submitPwd() {
            var _val_old = this.OldPass;
            var _val_new = this.NewPass;
            var _val_valinew = this.ValiNewPass;

            if (_val_new == _val_valinew) {
                urlFile.Core.AkPost("/RightCloud/Auth/changePassword", { oldPass:_val_old,newPass:_val_new}, (a) => {
                    var _res: string = a.Content;
                    if (_res == "ok") {
                        utilFile.Core.Util.Noty("密码修改成功");
                        //urlFile.Core.AkUrl.Current().openUrl("$Feed$");
                    }
                    else {
                        alert(_res);
                    }

                })
            }
            else {
                utilFile.Core.Util.Noty('两次密码不一样');
            }
            
        }
    }
    export class ChangePwdStates extends basewedPageFile.Web.BaseWebPageStates { }
    export class ChangePwdProps extends basewedPageFile.Web.BaseWebPageProps <ChangePwdVm > {}
    iocFile.Core.Ioc.Current().RegisterType("CHANGEPWD", basewedPageFile.Web.BaseWebPageVm, ChangePwdVm);
}