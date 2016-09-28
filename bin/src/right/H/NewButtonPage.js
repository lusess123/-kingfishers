var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../04page/BaseWebPage"], function (require, exports, React, iocFile, basewedPageFile) {
    "use strict";
    var NewButtonPage;
    (function (NewButtonPage) {
        var NewButtonPageAction = (function (_super) {
            __extends(NewButtonPageAction, _super);
            function NewButtonPageAction() {
                _super.apply(this, arguments);
            }
            return NewButtonPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewButtonPage.NewButtonPageAction = NewButtonPageAction;
        var NewButtonPageReact = (function (_super) {
            __extends(NewButtonPageReact, _super);
            function NewButtonPageReact() {
                _super.apply(this, arguments);
                this.state = new NewButtonPageStates();
            }
            NewButtonPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("h4", null, "新增"), React.createElement("ul", {className: "acs-tabs-title"}, React.createElement("li", {className: "Hu-pointer" + (this.props.Vm.TabCurrentIndex == 0 ? " active" : " "), onClick: function () { _this.fun_TabsClick(0); }}, "添加子节点"), React.createElement("li", {className: "Hu-pointer" + (this.props.Vm.TabCurrentIndex == 1 ? " active" : " "), onClick: function () { _this.fun_TabsClick(1); }}, "添加按钮")), React.createElement("div", {className: "acs-tabs-content"}, React.createElement("div", {className: (this.props.Vm.TabCurrentIndex == 0 ? " " : " hide ")}, React.createElement("div", {className: "acs-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 columns"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: "required"}, "节点名称：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {type: "text", placeholder: "请输入..."})))), React.createElement("div", {className: "text-center acsMarginT3"}, React.createElement("a", {className: "button"}, "确定"))), React.createElement("div", {className: (this.props.Vm.TabCurrentIndex == 1 ? " " : " hide ")}, React.createElement("div", {className: "acs-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 columns"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: "required"}, "按钮名称：")), React.createElement("div", {className: "Hu-input"}, React.createElement("input", {type: "text", placeholder: "请输入..."})))), React.createElement("div", {className: "text-center acsMarginT3"}, React.createElement("a", {className: "button"}, "确定")))));
            };
            //public fun_Send() {
            //    this.props.Vm.AddButton();
            //}
            NewButtonPageReact.prototype.fun_TabsClick = function (index) {
                this.props.Vm.TabCurrentIndex = index;
                this.forceUpdate();
            };
            return NewButtonPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewButtonPage.NewButtonPageReact = NewButtonPageReact;
        var NewButtonPageVm = (function (_super) {
            __extends(NewButtonPageVm, _super);
            function NewButtonPageVm() {
                _super.apply(this, arguments);
                this.ReactType = NewButtonPageReact;
                this.TabCurrentIndex = 0;
            }
            return NewButtonPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        NewButtonPage.NewButtonPageVm = NewButtonPageVm;
        var NewButtonPageStates = (function (_super) {
            __extends(NewButtonPageStates, _super);
            function NewButtonPageStates() {
                _super.apply(this, arguments);
            }
            return NewButtonPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewButtonPage.NewButtonPageStates = NewButtonPageStates;
        var NewButtonPageProps = (function (_super) {
            __extends(NewButtonPageProps, _super);
            function NewButtonPageProps() {
                _super.apply(this, arguments);
            }
            return NewButtonPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        NewButtonPage.NewButtonPageProps = NewButtonPageProps;
        iocFile.Core.Ioc.Current().RegisterType("NEWBUTTONPAGE", basewedPageFile.Web.BaseWebPageVm, NewButtonPageVm);
    })(NewButtonPage = exports.NewButtonPage || (exports.NewButtonPage = {}));
});
