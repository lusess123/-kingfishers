var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../04page/BaseWebPage"], function (require, exports, React, iocFile, basewedPageFile) {
    "use strict";
    var NewUserPage;
    (function (NewUserPage) {
        var NewUserPageAction = (function (_super) {
            __extends(NewUserPageAction, _super);
            function NewUserPageAction() {
                _super.apply(this, arguments);
            }
            return NewUserPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewUserPage.NewUserPageAction = NewUserPageAction;
        var NewUserPageReact = (function (_super) {
            __extends(NewUserPageReact, _super);
            function NewUserPageReact() {
                _super.apply(this, arguments);
                this.state = new NewUserPageStates();
            }
            NewUserPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("h4", null, "新增用户"), React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "form-control-label  pull-right required"}, "用户名称：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {className: "Hg-width", type: "text", value: this.props.Vm.UserName, onChange: function (e) { _this.fun_userName_onchange(e); }, placeholder: "请输入..."}))), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "form-control-label  pull-right required"}, "登录名：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {className: "Hg-width", type: "text", value: this.props.Vm.LoginName, onChange: function (e) { _this.fun_loginName_onchange(e); }, placeholder: "请输入..."})))), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-xs btn-primary", onClick: function () { _this.fun_Pclick(); }}, "确定")));
            };
            NewUserPageReact.prototype.fun_Pclick = function () {
                this.props.Vm.addUserByName();
            };
            NewUserPageReact.prototype.fun_userName_onchange = function (e) {
                var _val = e.target["value"];
                this.props.Vm.UserName = _val;
            };
            NewUserPageReact.prototype.fun_loginName_onchange = function (e) {
                var _val = e.target["value"];
                this.props.Vm.LoginName = _val;
            };
            return NewUserPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewUserPage.NewUserPageReact = NewUserPageReact;
        var NewUserPageVm = (function (_super) {
            __extends(NewUserPageVm, _super);
            function NewUserPageVm() {
                _super.apply(this, arguments);
                this.ReactType = NewUserPageReact;
            }
            NewUserPageVm.prototype.addUserByName = function () {
                this.SendPageActor({ ToPanelName: "", ToModuleName: "RIGHTPAGE" }, { UserName: this.UserName, UserSign: this.LoginName });
                this.closePage();
            };
            return NewUserPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        NewUserPage.NewUserPageVm = NewUserPageVm;
        var NewUserPageStates = (function (_super) {
            __extends(NewUserPageStates, _super);
            function NewUserPageStates() {
                _super.apply(this, arguments);
            }
            return NewUserPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewUserPage.NewUserPageStates = NewUserPageStates;
        var NewUserPageProps = (function (_super) {
            __extends(NewUserPageProps, _super);
            function NewUserPageProps() {
                _super.apply(this, arguments);
            }
            return NewUserPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        NewUserPage.NewUserPageProps = NewUserPageProps;
        iocFile.Core.Ioc.Current().RegisterType("NEWUSERPAGE", basewedPageFile.Web.BaseWebPageVm, NewUserPageVm);
    })(NewUserPage = exports.NewUserPage || (exports.NewUserPage = {}));
});
