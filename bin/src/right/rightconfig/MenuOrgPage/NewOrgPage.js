var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../04page/BaseWebPage", "react"], function (require, exports, iocFile, basewedPageFile, React) {
    "use strict";
    var NewOrgPage;
    (function (NewOrgPage) {
        var NewOrgPageAction = (function (_super) {
            __extends(NewOrgPageAction, _super);
            function NewOrgPageAction() {
                _super.apply(this, arguments);
            }
            return NewOrgPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewOrgPage.NewOrgPageAction = NewOrgPageAction;
        var NewOrgPageReact = (function (_super) {
            __extends(NewOrgPageReact, _super);
            function NewOrgPageReact() {
                _super.apply(this, arguments);
                this.state = new NewOrgPageStates();
            }
            NewOrgPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("h4", null, "新建组织"), React.createElement("div", {className: "acs-form clearfix"}, React.createElement("div", {className: "large-4 small-12 columns"}, React.createElement("div", {className: "columns acs-lable"}, React.createElement("label", {className: "right required"}, "组织名称：")), React.createElement("div", {className: "columns acs-input"}, React.createElement("input", {type: "text", placeholder: "请输入...", value: this.OrgText, onChange: function (e) { _this.fun_linkText(e); }})))), React.createElement("div", {className: "acsTextC acsMarginT3"}, React.createElement("a", {className: "button", onClick: function () { _this.fun_addOrg(); }}, "提交")));
            };
            NewOrgPageReact.prototype.fun_addOrg = function () {
                this.props.Vm.addOrgByName();
            };
            NewOrgPageReact.prototype.fun_linkText = function (e) {
                var _val = e.target["value"];
                this.OrgText = _val;
                this.props.Vm.OrgName = _val;
                this.forceUpdate();
            };
            return NewOrgPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewOrgPage.NewOrgPageReact = NewOrgPageReact;
        var NewOrgPageVm = (function (_super) {
            __extends(NewOrgPageVm, _super);
            function NewOrgPageVm() {
                _super.apply(this, arguments);
                this.ReactType = NewOrgPageReact;
                this.IsModalShow = true;
            }
            NewOrgPageVm.prototype.addOrgByName = function () {
                debugger;
                this.SendPageActor({ ToPanelName: "", ToModuleName: "MENUORGLINK" }, { OrgName: this.OrgName });
                this.closePage();
            };
            return NewOrgPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        NewOrgPage.NewOrgPageVm = NewOrgPageVm;
        var NewOrgPageStates = (function (_super) {
            __extends(NewOrgPageStates, _super);
            function NewOrgPageStates() {
                _super.apply(this, arguments);
            }
            return NewOrgPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewOrgPage.NewOrgPageStates = NewOrgPageStates;
        var NewOrgPageProps = (function (_super) {
            __extends(NewOrgPageProps, _super);
            function NewOrgPageProps() {
                _super.apply(this, arguments);
            }
            return NewOrgPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        NewOrgPage.NewOrgPageProps = NewOrgPageProps;
        iocFile.Core.Ioc.Current().RegisterType("NEWORGANPAGE", basewedPageFile.Web.BaseWebPageVm, NewOrgPageVm);
    })(NewOrgPage = exports.NewOrgPage || (exports.NewOrgPage = {}));
});
