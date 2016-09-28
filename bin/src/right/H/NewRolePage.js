var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../04page/BaseWebPage"], function (require, exports, React, iocFile, basewedPageFile) {
    "use strict";
    var NewRolePage;
    (function (NewRolePage) {
        var NewRolePageAction = (function (_super) {
            __extends(NewRolePageAction, _super);
            function NewRolePageAction() {
                _super.apply(this, arguments);
            }
            return NewRolePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewRolePage.NewRolePageAction = NewRolePageAction;
        var NewRolePageReact = (function (_super) {
            __extends(NewRolePageReact, _super);
            function NewRolePageReact() {
                _super.apply(this, arguments);
                this.state = new NewRolePageStates();
            }
            NewRolePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("h4", null, "新增角色"), React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {className: "required"}, "角色名称：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", type: "text", value: this.props.Vm.RoleName, onChange: function (e) { _this.fun_roleName_onchange(e); }, placeholder: "请输入..."}))), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: "required"}, "角色标识：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", type: "text", value: this.props.Vm.RoleSign, onChange: function (e) { _this.fun_roleSign_onchange(e); }, placeholder: "请输入..."})))), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.fun_Pclick(); }}, "确定")));
            };
            NewRolePageReact.prototype.fun_Pclick = function () {
                this.props.Vm.addRoleByName();
            };
            NewRolePageReact.prototype.fun_roleName_onchange = function (e) {
                var _val = e.target["value"];
                this.props.Vm.RoleName = _val;
            };
            NewRolePageReact.prototype.fun_roleSign_onchange = function (e) {
                var _val = e.target["value"];
                this.props.Vm.RoleSign = _val;
            };
            return NewRolePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewRolePage.NewRolePageReact = NewRolePageReact;
        var NewRolePageVm = (function (_super) {
            __extends(NewRolePageVm, _super);
            function NewRolePageVm() {
                _super.apply(this, arguments);
                this.ReactType = NewRolePageReact;
            }
            NewRolePageVm.prototype.addRoleByName = function () {
                this.SendPageActor({ ToPanelName: "", ToModuleName: "RIGHTPAGE" }, { RoleName: this.RoleName, RoleSign: this.RoleSign });
                this.closePage();
            };
            return NewRolePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        NewRolePage.NewRolePageVm = NewRolePageVm;
        var NewRolePageStates = (function (_super) {
            __extends(NewRolePageStates, _super);
            function NewRolePageStates() {
                _super.apply(this, arguments);
            }
            return NewRolePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewRolePage.NewRolePageStates = NewRolePageStates;
        var NewRolePageProps = (function (_super) {
            __extends(NewRolePageProps, _super);
            function NewRolePageProps() {
                _super.apply(this, arguments);
            }
            return NewRolePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        NewRolePage.NewRolePageProps = NewRolePageProps;
        iocFile.Core.Ioc.Current().RegisterType("NEWROLEPAGE", basewedPageFile.Web.BaseWebPageVm, NewRolePageVm);
    })(NewRolePage = exports.NewRolePage || (exports.NewRolePage = {}));
});
