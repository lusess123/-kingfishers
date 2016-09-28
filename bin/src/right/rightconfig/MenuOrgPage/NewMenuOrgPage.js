var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../04page/BaseWebPage", "react"], function (require, exports, iocFile, basewedPageFile, React) {
    "use strict";
    var NewMenuOrgPage;
    (function (NewMenuOrgPage) {
        var NewMenuOrgPageAction = (function (_super) {
            __extends(NewMenuOrgPageAction, _super);
            function NewMenuOrgPageAction() {
                _super.apply(this, arguments);
            }
            return NewMenuOrgPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewMenuOrgPage.NewMenuOrgPageAction = NewMenuOrgPageAction;
        var NewMenuOrgPageReact = (function (_super) {
            __extends(NewMenuOrgPageReact, _super);
            function NewMenuOrgPageReact() {
                _super.apply(this, arguments);
                this.state = new NewMenuOrgPageStates();
            }
            NewMenuOrgPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("h4", null, "新建菜单"), React.createElement("div", {className: "acs-form clearfix"}, React.createElement("div", {className: "large-4 small-12 columns"}, React.createElement("div", {className: "columns acs-lable"}, React.createElement("label", {className: "right required"}, "菜单名称：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("input", {type: "text", placeholder: "请输入...", value: this.menuText, onChange: function (e) { _this.fun_linkText(e); }})))), React.createElement("div", {className: "acsTextC acsMarginT3"}, React.createElement("a", {className: "button", onClick: function () { _this.fun_addMenu(); }}, "提交")));
            };
            NewMenuOrgPageReact.prototype.fun_addMenu = function () {
                this.props.Vm.addMenuByName();
            };
            NewMenuOrgPageReact.prototype.fun_linkText = function (e) {
                var _val = e.target["value"];
                this.menuText = _val;
                this.forceUpdate();
            };
            return NewMenuOrgPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewMenuOrgPage.NewMenuOrgPageReact = NewMenuOrgPageReact;
        var NewMenuOrgPageVm = (function (_super) {
            __extends(NewMenuOrgPageVm, _super);
            function NewMenuOrgPageVm() {
                _super.apply(this, arguments);
                this.ReactType = NewMenuOrgPageReact;
                this.IsModalShow = true;
            }
            NewMenuOrgPageVm.prototype.addMenuByName = function () {
                this.SendPageActor({ ToPanelName: "MENUUSERROLEPAGE" }, this.MenuName);
                this.closePage();
            };
            return NewMenuOrgPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        NewMenuOrgPage.NewMenuOrgPageVm = NewMenuOrgPageVm;
        var NewMenuOrgPageStates = (function (_super) {
            __extends(NewMenuOrgPageStates, _super);
            function NewMenuOrgPageStates() {
                _super.apply(this, arguments);
            }
            return NewMenuOrgPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewMenuOrgPage.NewMenuOrgPageStates = NewMenuOrgPageStates;
        var NewMenuOrgPageProps = (function (_super) {
            __extends(NewMenuOrgPageProps, _super);
            function NewMenuOrgPageProps() {
                _super.apply(this, arguments);
            }
            return NewMenuOrgPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        NewMenuOrgPage.NewMenuOrgPageProps = NewMenuOrgPageProps;
        iocFile.Core.Ioc.Current().RegisterType("NEWMENUORGPAGES", basewedPageFile.Web.BaseWebPageVm, NewMenuOrgPageVm);
    })(NewMenuOrgPage = exports.NewMenuOrgPage || (exports.NewMenuOrgPage = {}));
});
