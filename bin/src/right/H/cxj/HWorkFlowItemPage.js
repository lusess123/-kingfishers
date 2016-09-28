var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../04page/BaseWebPage"], function (require, exports, React, iocFile, basewedPageFile) {
    "use strict";
    var HWFItemPage;
    (function (HWFItemPage) {
        var HWFItemPageAction = (function (_super) {
            __extends(HWFItemPageAction, _super);
            function HWFItemPageAction() {
                _super.apply(this, arguments);
            }
            return HWFItemPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        HWFItemPage.HWFItemPageAction = HWFItemPageAction;
        var HWFItemPageReact = (function (_super) {
            __extends(HWFItemPageReact, _super);
            function HWFItemPageReact() {
                _super.apply(this, arguments);
                this.state = new HWFItemPageStates();
            }
            HWFItemPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "acs-workflow-info"}, React.createElement("span", null, "上午好！"), React.createElement("a", null, "您有(234) 条工作"), React.createElement("span", null, "需要处理：若查看自己的工作流，点击："), React.createElement("a", null, "我的工作。"), React.createElement("span", null, "若查看自己参与的流程，点击："), React.createElement("a", null, "我参与的流程")), React.createElement("div", {className: "acs-workflow-content"}, React.createElement("ul", null, React.createElement("div", null, React.createElement("li", null, React.createElement("a", {className: "acsPointer" + (this.props.Vm.IsNodeShow ? "" : " active"), onClick: function () { _this.fun_NodeShow(); }}, React.createElement("i", {className: "fa fa-angle-down" + (this.props.Vm.IsNodeShow ? " active" : "")}), "加班工作流(2) "), React.createElement("ul", {className: (this.props.Vm.IsNodeShow ? "hide" : "")}, React.createElement("li", {className: "acs-workflow-item"}, React.createElement("div", {className: "acs-new-btn"}, React.createElement("a", {className: "button red2"}, "最新"), React.createElement("a", {className: "button orange acsMarginL0-2"}, "最紧急")), React.createElement("div", {className: "clearfix"}, React.createElement("span", null, "2015/09/29  16:05"), React.createElement("a", {className: "acsMarginL3 acsWidth48"}, "信使系统管理员2015/9/1加班-申请人确定信使系统管理员2015/9/1加班-申请人确定信使系统管理员2015/9/1加班-申请人确定信使系统管理员2015/9/1加班-申请人确定"), React.createElement("a", {className: "acs-btn-execute right"}, React.createElement("i", {className: "fa fa-caret-right"}), "执行"))), React.createElement("li", {className: "acs-workflow-item"}, React.createElement("div", {className: "clearfix"}, React.createElement("span", null, "2015/09/29  16:05"), React.createElement("a", {className: "acsMarginL3 acsWidth48"}, "信使系统管理员2015/9/1加班-申请人确定"), React.createElement("a", {className: "acs-btn-execute right"}, React.createElement("i", {className: "fa fa-caret-right"}), "执行")))))), React.createElement("div", null, React.createElement("li", null, React.createElement("a", null, React.createElement("i", {className: "fa fa-angle-right"}), "弘正保修申请(17)"))), React.createElement("div", null, React.createElement("li", null, React.createElement("a", null, React.createElement("i", {className: "fa fa-angle-right"}), "必达信息补充流程(60)"))), React.createElement("div", null, React.createElement("li", null, React.createElement("a", null, React.createElement("i", {className: "fa fa-angle-right"}), "必达打款流程(56)"))))));
            };
            HWFItemPageReact.prototype.fun_NodeShow = function () {
                this.props.Vm.IsNodeShow = !this.props.Vm.IsNodeShow;
                this.forceUpdate();
            };
            return HWFItemPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        HWFItemPage.HWFItemPageReact = HWFItemPageReact;
        var HWFItemPageVm = (function (_super) {
            __extends(HWFItemPageVm, _super);
            function HWFItemPageVm() {
                _super.apply(this, arguments);
                this.ReactType = HWFItemPageReact;
                this.IsNodeShow = false;
            }
            return HWFItemPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        HWFItemPage.HWFItemPageVm = HWFItemPageVm;
        var HWFItemPageStates = (function (_super) {
            __extends(HWFItemPageStates, _super);
            function HWFItemPageStates() {
                _super.apply(this, arguments);
            }
            return HWFItemPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        HWFItemPage.HWFItemPageStates = HWFItemPageStates;
        var HWFItemPageProps = (function (_super) {
            __extends(HWFItemPageProps, _super);
            function HWFItemPageProps() {
                _super.apply(this, arguments);
            }
            return HWFItemPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        HWFItemPage.HWFItemPageProps = HWFItemPageProps;
        iocFile.Core.Ioc.Current().RegisterType("HWFITEMPAGE", basewedPageFile.Web.BaseWebPageVm, HWFItemPageVm);
    })(HWFItemPage = exports.HWFItemPage || (exports.HWFItemPage = {}));
});
