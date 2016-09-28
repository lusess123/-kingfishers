var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../04page/BaseWebPage"], function (require, exports, React, iocFile, basewedPageFile) {
    "use strict";
    var NewNodePage;
    (function (NewNodePage) {
        var NewNodePageAction = (function (_super) {
            __extends(NewNodePageAction, _super);
            function NewNodePageAction() {
                _super.apply(this, arguments);
            }
            return NewNodePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewNodePage.NewNodePageAction = NewNodePageAction;
        var NewNodePageReact = (function (_super) {
            __extends(NewNodePageReact, _super);
            function NewNodePageReact() {
                _super.apply(this, arguments);
                this.state = new NewNodePageStates();
            }
            NewNodePageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("h4", null, "新增树节点"), React.createElement("div", {className: "acs-form clearfix"}, React.createElement("div", {className: "large-6 small-12 columns"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: "right required"}, "节点名称：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {type: "text", value: this.props.Vm.MenuName, onChange: function (e) { _this.fun_menuName_onchange(e); }, placeholder: "请输入..."})))), React.createElement("div", {className: "text-center acsMarginT3"}, React.createElement("a", {className: "button", onClick: function () { _this.fun_Send(); }}, "确定")));
            };
            NewNodePageReact.prototype.fun_menuName_onchange = function (e) {
                var _val = e.target["value"];
                this.props.Vm.MenuName = _val;
            };
            NewNodePageReact.prototype.fun_Send = function () {
                this.props.Vm.AddMenu();
            };
            return NewNodePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewNodePage.NewNodePageReact = NewNodePageReact;
        var NewNodePageVm = (function (_super) {
            __extends(NewNodePageVm, _super);
            function NewNodePageVm() {
                _super.apply(this, arguments);
                this.ReactType = NewNodePageReact;
            }
            NewNodePageVm.prototype.AddMenu = function () {
                this.SendPageActor({ ToPanelName: "", ToModuleName: "RIGHTPAGE" }, { MenuName: this.MenuName });
                this.closePage();
            };
            return NewNodePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        NewNodePage.NewNodePageVm = NewNodePageVm;
        var NewNodePageStates = (function (_super) {
            __extends(NewNodePageStates, _super);
            function NewNodePageStates() {
                _super.apply(this, arguments);
            }
            return NewNodePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewNodePage.NewNodePageStates = NewNodePageStates;
        var NewNodePageProps = (function (_super) {
            __extends(NewNodePageProps, _super);
            function NewNodePageProps() {
                _super.apply(this, arguments);
            }
            return NewNodePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        NewNodePage.NewNodePageProps = NewNodePageProps;
        iocFile.Core.Ioc.Current().RegisterType("NEWNODEPAGE", basewedPageFile.Web.BaseWebPageVm, NewNodePageVm);
    })(NewNodePage = exports.NewNodePage || (exports.NewNodePage = {}));
});
