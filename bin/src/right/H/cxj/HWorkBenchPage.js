var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../04page/BaseWebPage", "./HWorkFlowItemPage", "./HWorkNewMsg"], function (require, exports, React, iocFile, basewedPageFile, workflowFile, worknewsFile) {
    "use strict";
    var workflowVm = workflowFile.HWFItemPage.HWFItemPageVm;
    var worknewsVm = worknewsFile.HWorkNewMsg.HWorkNewMsgVm;
    var HWorkBenchPage;
    (function (HWorkBenchPage) {
        var HWorkBenchPageAction = (function (_super) {
            __extends(HWorkBenchPageAction, _super);
            function HWorkBenchPageAction() {
                _super.apply(this, arguments);
            }
            return HWorkBenchPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        HWorkBenchPage.HWorkBenchPageAction = HWorkBenchPageAction;
        var HWorkBenchPageReact = (function (_super) {
            __extends(HWorkBenchPageReact, _super);
            function HWorkBenchPageReact() {
                _super.apply(this, arguments);
                this.state = new HWorkBenchPageStates();
            }
            HWorkBenchPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "acsWhiteBg acsMarginT1"}, React.createElement("div", {className: "acs-workflow-tab clearfix"}, React.createElement("ul", {className: "left"}, React.createElement("li", {className: "acsPointer" + (this.props.Vm.TabCurrentIndex == 0 ? " active" : " "), onClick: function () { _this.fun_TabsClick(0); }}, "待处理事项"), React.createElement("li", {className: "acsPointer" + (this.props.Vm.TabCurrentIndex == 1 ? " active" : " "), onClick: function () { _this.fun_TabsClick(1); }}, "最新动态")), React.createElement("ul", {className: "right"}, React.createElement("li", {className: "acsMarginR0 "}, React.createElement("i", {className: "acsPointer acsFontSize0-2 fa fa-repeat"})), React.createElement("li", {className: "acsMarginR1-5 "}, React.createElement("i", {className: "acsPointer acsFontSize1-2 fa fa-" + (this.props.Vm.IsWorkshow ? "angle-up" : "angle-down"), onClick: function () { _this.fun_WorkShow(); }})), React.createElement("li", {className: "acsMarginR1-5 "}, React.createElement("i", {className: "acsPointer acsFontSize0-2 fa fa-expand"})))), React.createElement("div", {className: (this.props.Vm.IsWorkshow ? "hide" : "")}, React.createElement("div", {className: (this.props.Vm.TabCurrentIndex == 0 ? "" : " hide")}, this.props.Vm.workflowObj.intoDom()), React.createElement("div", {className: (this.props.Vm.TabCurrentIndex == 1 ? "" : " hide")}, this.props.Vm.worknewsObj.intoDom())));
            };
            HWorkBenchPageReact.prototype.fun_TabsClick = function (index) {
                this.props.Vm.TabCurrentIndex = index;
                this.forceUpdate();
            };
            HWorkBenchPageReact.prototype.fun_WorkShow = function () {
                this.props.Vm.IsWorkshow = !this.props.Vm.IsWorkshow;
                this.forceUpdate();
            };
            return HWorkBenchPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        HWorkBenchPage.HWorkBenchPageReact = HWorkBenchPageReact;
        var HWorkBenchPageVm = (function (_super) {
            __extends(HWorkBenchPageVm, _super);
            function HWorkBenchPageVm() {
                _super.apply(this, arguments);
                this.ReactType = HWorkBenchPageReact;
                this.worknewsObj = new worknewsVm();
                this.workflowObj = new workflowVm();
                this.TabCurrentIndex = 0;
                this.IsWorkshow = false;
            }
            return HWorkBenchPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        HWorkBenchPage.HWorkBenchPageVm = HWorkBenchPageVm;
        var HWorkBenchPageStates = (function (_super) {
            __extends(HWorkBenchPageStates, _super);
            function HWorkBenchPageStates() {
                _super.apply(this, arguments);
            }
            return HWorkBenchPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        HWorkBenchPage.HWorkBenchPageStates = HWorkBenchPageStates;
        var HWorkBenchPageProps = (function (_super) {
            __extends(HWorkBenchPageProps, _super);
            function HWorkBenchPageProps() {
                _super.apply(this, arguments);
            }
            return HWorkBenchPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        HWorkBenchPage.HWorkBenchPageProps = HWorkBenchPageProps;
        iocFile.Core.Ioc.Current().RegisterType("HWORKBENCHPAGE", basewedPageFile.Web.BaseWebPageVm, HWorkBenchPageVm);
    })(HWorkBenchPage = exports.HWorkBenchPage || (exports.HWorkBenchPage = {}));
});
