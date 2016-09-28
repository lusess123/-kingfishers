var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../01core/Util", "./../../01core/Url", "./../../04page/BaseWebPage", "react"], function (require, exports, iocFile, utilFile, urlFile, basewedPageFile, React) {
    "use strict";
    var ChangePWD;
    (function (ChangePWD) {
        var ChangPwdAction = (function (_super) {
            __extends(ChangPwdAction, _super);
            function ChangPwdAction() {
                _super.apply(this, arguments);
            }
            return ChangPwdAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        ChangePWD.ChangPwdAction = ChangPwdAction;
        var ChangePwdReact = (function (_super) {
            __extends(ChangePwdReact, _super);
            function ChangePwdReact() {
                _super.apply(this, arguments);
                this.state = new ChangePwdStates();
            }
            ChangePwdReact.prototype.fun_SubmitPwd = function () {
                this.props.Vm.submitPwd();
            };
            ChangePwdReact.prototype.fun_oldPwd = function (e) {
                var _val = e.target["value"];
                this.props.Vm.OldPass = _val;
                this.forceUpdate();
            };
            ChangePwdReact.prototype.fun_newPwd = function (e) {
                var _val = e.target["value"];
                this.props.Vm.NewPass = _val;
                this.forceUpdate();
            };
            ChangePwdReact.prototype.fun_valiNewPwd = function (e) {
                var _val = e.target["value"];
                this.props.Vm.ValiNewPass = _val;
                this.forceUpdate();
            };
            ChangePwdReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "container"}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 collapse in"}, React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-5 col-xs-5 text-right"}, React.createElement("label", null, "原始密码：")), React.createElement("div", {className: "col-lg-9 col-md-9 col-sm-7 col-xs-7"}, React.createElement("input", {type: "password", className: "Hg-width", value: this.props.Vm.OldPass, onChange: function (e) { _this.fun_oldPwd(e); }}))), React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 collapse in"}, React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-5 col-xs-5 text-right"}, React.createElement("label", null, "新密码：")), React.createElement("div", {className: "col-lg-9 col-md-9 col-sm-7 col-xs-7"}, React.createElement("input", {type: "password", className: "Hg-width", value: this.props.Vm.NewPass, onChange: function (e) { _this.fun_newPwd(e); }}))), React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 collapse in"}, React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-5 col-xs-5 text-right"}, React.createElement("label", null, "确认新密码：")), React.createElement("div", {className: "col-lg-9 col-md-9 col-sm-7 col-xs-7"}, React.createElement("input", {type: "password", className: "Hg-width", value: this.props.Vm.ValiNewPass, onChange: function (e) { _this.fun_valiNewPwd(e); }}))), React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 btn-group-sm collapse in text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.fun_SubmitPwd(); }}, "提交")))));
            };
            ChangePwdReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ChangePwdReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        ChangePWD.ChangePwdReact = ChangePwdReact;
        var ChangePwdVm = (function (_super) {
            __extends(ChangePwdVm, _super);
            function ChangePwdVm() {
                _super.call(this);
                this.ReactType = ChangePwdReact;
            }
            ChangePwdVm.prototype.submitPwd = function () {
                var _val_old = this.OldPass;
                var _val_new = this.NewPass;
                var _val_valinew = this.ValiNewPass;
                if (_val_new == _val_valinew) {
                    urlFile.Core.AkPost("/RightCloud/Auth/changePassword", { oldPass: _val_old, newPass: _val_new }, function (a) {
                        var _res = a.Content;
                        if (_res == "ok") {
                            utilFile.Core.Util.Noty("密码修改成功");
                        }
                        else {
                            alert(_res);
                        }
                    });
                }
                else {
                    utilFile.Core.Util.Noty('两次密码不一样');
                }
            };
            return ChangePwdVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        ChangePWD.ChangePwdVm = ChangePwdVm;
        var ChangePwdStates = (function (_super) {
            __extends(ChangePwdStates, _super);
            function ChangePwdStates() {
                _super.apply(this, arguments);
            }
            return ChangePwdStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        ChangePWD.ChangePwdStates = ChangePwdStates;
        var ChangePwdProps = (function (_super) {
            __extends(ChangePwdProps, _super);
            function ChangePwdProps() {
                _super.apply(this, arguments);
            }
            return ChangePwdProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        ChangePWD.ChangePwdProps = ChangePwdProps;
        iocFile.Core.Ioc.Current().RegisterType("CHANGEPWD", basewedPageFile.Web.BaseWebPageVm, ChangePwdVm);
    })(ChangePWD = exports.ChangePWD || (exports.ChangePWD = {}));
});
