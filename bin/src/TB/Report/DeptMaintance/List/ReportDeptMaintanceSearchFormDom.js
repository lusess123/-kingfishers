var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/01single/Date", "./../../../../02col/03selector/TreeSelector"], function (require, exports, React, domFile, dateFile, treeSingleFile) {
    "use strict";
    var domCore = domFile.Core;
    var ReportDeptMaintanceSearchFormDom;
    (function (ReportDeptMaintanceSearchFormDom) {
        var ReportDeptMaintanceSearchFormDomAction = (function (_super) {
            __extends(ReportDeptMaintanceSearchFormDomAction, _super);
            function ReportDeptMaintanceSearchFormDomAction() {
                _super.apply(this, arguments);
            }
            return ReportDeptMaintanceSearchFormDomAction;
        }(domCore.DomAction));
        ReportDeptMaintanceSearchFormDom.ReportDeptMaintanceSearchFormDomAction = ReportDeptMaintanceSearchFormDomAction;
        var ReportDeptMaintanceSearchFormDomReact = (function (_super) {
            __extends(ReportDeptMaintanceSearchFormDomReact, _super);
            function ReportDeptMaintanceSearchFormDomReact() {
                _super.apply(this, arguments);
                this.state = new ReportDeptMaintanceSearchFormDomStates();
            }
            ReportDeptMaintanceSearchFormDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel Hs-fff clearfix"}, React.createElement("form", {className: "ask-search Hu-dashed-line clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hu-label pull-left"}, React.createElement("label", {className: "pull-right"}, "月份：")), React.createElement("div", {className: "col-md-8 "}, this.props.Vm.MonthVm.intoDom()))), React.createElement("div", {className: "col-xs-12 text-center mt10 mb10"}, React.createElement("button", {className: "btn btn-primary btn-sm icon-search fa fa-search", title: "搜索", onClick: function () { _this.fun_searchBtn(); }}), React.createElement("button", {className: "btn Hs-btn-trash btn-sm icon-trash fa fa-trash-o ", title: "清空", onClick: function () { _this.fun_seachClearBtn(); }})));
            };
            ReportDeptMaintanceSearchFormDomReact.prototype.fun_linkCode = function (e) {
                var _val = e.target["value"];
                this.props.Vm.SearchSimpleCode = _val;
                if (!_val || _val == "") {
                    this.props.Vm.IsHideClearBtn = true;
                }
                else {
                    this.props.Vm.IsHideClearBtn = false;
                }
                this.forceUpdate();
            };
            ReportDeptMaintanceSearchFormDomReact.prototype.fun_linkName = function (e) {
                var _val = e.target["value"];
                this.props.Vm.SearchName = _val;
                if (!_val || _val == "") {
                    this.props.Vm.IsHideClearBtn = true;
                }
                else {
                    this.props.Vm.IsHideClearBtn = false;
                }
                this.forceUpdate();
            };
            ReportDeptMaintanceSearchFormDomReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.SearchSimpleCode = "";
                this.props.Vm.SearchName = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
            };
            ReportDeptMaintanceSearchFormDomReact.prototype.fun_searchBtn = function () {
                this.props.Vm.loadPageData(0);
            };
            ReportDeptMaintanceSearchFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ReportDeptMaintanceSearchFormDomReact;
        }(domCore.DomReact));
        ReportDeptMaintanceSearchFormDom.ReportDeptMaintanceSearchFormDomReact = ReportDeptMaintanceSearchFormDomReact;
        var ReportDeptMaintanceSearchFormDomVm = (function (_super) {
            __extends(ReportDeptMaintanceSearchFormDomVm, _super);
            function ReportDeptMaintanceSearchFormDomVm(config) {
                _super.call(this);
                this.ReactType = ReportDeptMaintanceSearchFormDomReact;
                this.IsHideClearBtn = true;
                this.UniId = "";
                if (config) {
                    this.UniId = config.UniId;
                }
                this.MonthVm = new dateFile.ui.DateVm();
                this.DepartmentTreeVm = new treeSingleFile.ui.TreeSingleSelectorVm();
                this.DepartmentTreeVm.RegName = "TBDepartmentCodeTable";
            }
            ReportDeptMaintanceSearchFormDomVm.prototype.loadPageData = function (pageIndex) {
                this.emitAppEvent("TB/Report/Test/Test", this.UniId, pageIndex);
            };
            return ReportDeptMaintanceSearchFormDomVm;
        }(domCore.DomVm));
        ReportDeptMaintanceSearchFormDom.ReportDeptMaintanceSearchFormDomVm = ReportDeptMaintanceSearchFormDomVm;
        var ReportDeptMaintanceSearchFormDomStates = (function (_super) {
            __extends(ReportDeptMaintanceSearchFormDomStates, _super);
            function ReportDeptMaintanceSearchFormDomStates() {
                _super.apply(this, arguments);
            }
            return ReportDeptMaintanceSearchFormDomStates;
        }(domCore.DomStates));
        ReportDeptMaintanceSearchFormDom.ReportDeptMaintanceSearchFormDomStates = ReportDeptMaintanceSearchFormDomStates;
        var ReportDeptMaintanceSearchFormDomProps = (function (_super) {
            __extends(ReportDeptMaintanceSearchFormDomProps, _super);
            function ReportDeptMaintanceSearchFormDomProps() {
                _super.apply(this, arguments);
            }
            return ReportDeptMaintanceSearchFormDomProps;
        }(domCore.DomProps));
        ReportDeptMaintanceSearchFormDom.ReportDeptMaintanceSearchFormDomProps = ReportDeptMaintanceSearchFormDomProps;
    })(ReportDeptMaintanceSearchFormDom = exports.ReportDeptMaintanceSearchFormDom || (exports.ReportDeptMaintanceSearchFormDom = {}));
});
