var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/Ioc", "./../../../../04page/BaseWebPage"], function (require, exports, React, iocFile, basewedPageFile) {
    "use strict";
    var RCNewRolePage;
    (function (RCNewRolePage) {
        var RCNewRolePageAction = (function (_super) {
            __extends(RCNewRolePageAction, _super);
            function RCNewRolePageAction() {
                _super.apply(this, arguments);
            }
            return RCNewRolePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        RCNewRolePage.RCNewRolePageAction = RCNewRolePageAction;
        var RCNewRolePageReact = (function (_super) {
            __extends(RCNewRolePageReact, _super);
            function RCNewRolePageReact() {
                _super.apply(this, arguments);
                this.state = new RCNewRolePageStates();
            }
            RCNewRolePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("h4", null, "新增角色"), React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {className: "required"}, "角色名称：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", type: "text", value: this.props.Vm.RoleName, onChange: function (e) { _this.fun_roleName_onchange(e); }, placeholder: "请输入..."}))), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: "required"}, "角色标识：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {className: "Hg-width", type: "text", value: this.props.Vm.RoleSign, onChange: function (e) { _this.fun_roleSign_onchange(e); }, placeholder: "请输入..."})))), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.fun_Pclick(); }}, "确定")));
            };
            RCNewRolePageReact.prototype.fun_Pclick = function () {
                this.props.Vm.addRoleByName();
            };
            RCNewRolePageReact.prototype.fun_roleName_onchange = function (e) {
                var _val = e.target["value"];
                this.props.Vm.RoleName = _val;
            };
            RCNewRolePageReact.prototype.fun_roleSign_onchange = function (e) {
                var _val = e.target["value"];
                this.props.Vm.RoleSign = _val;
            };
            return RCNewRolePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        RCNewRolePage.RCNewRolePageReact = RCNewRolePageReact;
        var RCNewRolePageVm = (function (_super) {
            __extends(RCNewRolePageVm, _super);
            function RCNewRolePageVm() {
                _super.apply(this, arguments);
                this.ReactType = RCNewRolePageReact;
            }
            RCNewRolePageVm.prototype.addRoleByName = function () {
                this.SendPageActor({ ToPanelName: "", ToModuleName: "NewRIGHTPAGE" }, { RoleName: this.RoleName, RoleSign: this.RoleSign });
                this.closePage();
            };
            return RCNewRolePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        RCNewRolePage.RCNewRolePageVm = RCNewRolePageVm;
        var RCNewRolePageStates = (function (_super) {
            __extends(RCNewRolePageStates, _super);
            function RCNewRolePageStates() {
                _super.apply(this, arguments);
            }
            return RCNewRolePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        RCNewRolePage.RCNewRolePageStates = RCNewRolePageStates;
        var RCNewRolePageProps = (function (_super) {
            __extends(RCNewRolePageProps, _super);
            function RCNewRolePageProps() {
                _super.apply(this, arguments);
            }
            return RCNewRolePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        RCNewRolePage.RCNewRolePageProps = RCNewRolePageProps;
        iocFile.Core.Ioc.Current().RegisterType("RCNewRolePage", basewedPageFile.Web.BaseWebPageVm, RCNewRolePageVm);
    })(RCNewRolePage = exports.RCNewRolePage || (exports.RCNewRolePage = {}));
});
