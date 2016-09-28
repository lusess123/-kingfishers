var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../04page/BaseWebPage", "./../tool/BookMark", "./HWorkBenchPage", "./../NewCollectpage"], function (require, exports, React, iocFile, basewedPageFile, BookMarkFile, WorkBenchFile, NewCollectFile) {
    "use strict";
    var WorkBenchVm = WorkBenchFile.HWorkBenchPage.HWorkBenchPageVm;
    var NewCollectVm = NewCollectFile.NewCollect.NewCollectVm;
    var cxjTest;
    (function (cxjTest) {
        var cxjTestAction = (function (_super) {
            __extends(cxjTestAction, _super);
            function cxjTestAction() {
                _super.apply(this, arguments);
            }
            return cxjTestAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        cxjTest.cxjTestAction = cxjTestAction;
        var cxjTestReact = (function (_super) {
            __extends(cxjTestReact, _super);
            function cxjTestReact() {
                _super.apply(this, arguments);
                this.state = new cxjTestStates();
            }
            cxjTestReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "m-t-lg"}, React.createElement("div", {className: "left acs-Width20"}, React.createElement("ul", null, React.createElement("li", {className: "acsPointer" + (this.props.Vm.TabCurrentIndex == 0 ? " active" : " "), onClick: function () { _this.fun_TabsClick(0); }}, React.createElement("a", {className: "btn btn-primary"}, "新增书签")), React.createElement("li", {className: "acsPointer" + (this.props.Vm.TabCurrentIndex == 1 ? " active" : " "), onClick: function () { _this.fun_TabsClick(1); }}, React.createElement("a", {className: "btn btn-primary"}, "我的工作台")))), React.createElement("div", {className: "right acs-Width80 acsWhiteBg hide"}, React.createElement("div", {className: (this.props.Vm.TabCurrentIndex == 0 ? "" : " hide")}, this.props.Vm.NewCollectObj.intoDom()), React.createElement("div", {className: (this.props.Vm.TabCurrentIndex == 1 ? "" : " hide")}, this.props.Vm.WorkBenchObj.intoDom())), React.createElement("div", {className: "PagerCenter"}, React.createElement("ul", {className: "pagination pagination-sm"}, React.createElement("li", {className: "disabled"}, React.createElement("a", null, React.createElement("i", {className: "icon-double-angle-left fa fa-angle-double-left"}))), React.createElement("li", {className: "active"}, React.createElement("a", null, "1")), React.createElement("li", null, React.createElement("a", null, "2")), React.createElement("li", null, React.createElement("a", null, "3")), React.createElement("li", null, React.createElement("a", null, "4")), React.createElement("li", null, React.createElement("a", null, "5")), React.createElement("li", null, React.createElement("a", null, React.createElement("i", {className: "icon-double-angle-right fa fa-angle-double-right"}))), React.createElement("span", null, "共有5条记录"), React.createElement("span", null, React.createElement("input", {className: "acs-pagination-input"}), "/2页"), React.createElement("a", {className: "GoToPage btn btn-xs btn-primary acs-pagination-surebtn pull-right"}, "确定"), React.createElement("div", {className: "Hu-page-size input-group pull-right"}, React.createElement("span", {className: "input-group-addon"}, React.createElement("i", {className: "icon-th-large fa fa-th-large"})), React.createElement("input", {type: "text", className: "form-control ACT-PAGE-SIZE"})))));
            };
            cxjTestReact.prototype.fun_TabsClick = function (index) {
                this.props.Vm.TabCurrentIndex = index;
                this.forceUpdate();
            };
            return cxjTestReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        cxjTest.cxjTestReact = cxjTestReact;
        var cxjTestVm = (function (_super) {
            __extends(cxjTestVm, _super);
            function cxjTestVm() {
                _super.apply(this, arguments);
                this.ReactType = cxjTestReact;
                this.TabCurrentIndex = 0;
                this.BookMarkObj = new BookMarkFile.BookMark.BookMarkVm();
                this.WorkBenchObj = new WorkBenchVm();
                this.NewCollectObj = new NewCollectVm();
            }
            return cxjTestVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        cxjTest.cxjTestVm = cxjTestVm;
        var cxjTestStates = (function (_super) {
            __extends(cxjTestStates, _super);
            function cxjTestStates() {
                _super.apply(this, arguments);
            }
            return cxjTestStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        cxjTest.cxjTestStates = cxjTestStates;
        var cxjTestProps = (function (_super) {
            __extends(cxjTestProps, _super);
            function cxjTestProps() {
                _super.apply(this, arguments);
            }
            return cxjTestProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        cxjTest.cxjTestProps = cxjTestProps;
        iocFile.Core.Ioc.Current().RegisterType("CXJTESTPAGE", basewedPageFile.Web.BaseWebPageVm, cxjTestVm);
    })(cxjTest = exports.cxjTest || (exports.cxjTest = {}));
});
