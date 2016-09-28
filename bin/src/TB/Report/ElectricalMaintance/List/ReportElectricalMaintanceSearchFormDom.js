var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/01single/Date", "./../../../../02col/03selector/TreeSelector"], function (require, exports, React, domFile, dateFile, treeSingleFile) {
    "use strict";
    var domCore = domFile.Core;
    var ReportElectricalMaintanceSearchFormDom;
    (function (ReportElectricalMaintanceSearchFormDom) {
        var ReportElectricalMaintanceSearchFormDomAction = (function (_super) {
            __extends(ReportElectricalMaintanceSearchFormDomAction, _super);
            function ReportElectricalMaintanceSearchFormDomAction() {
                _super.apply(this, arguments);
            }
            return ReportElectricalMaintanceSearchFormDomAction;
        }(domCore.DomAction));
        ReportElectricalMaintanceSearchFormDom.ReportElectricalMaintanceSearchFormDomAction = ReportElectricalMaintanceSearchFormDomAction;
        var ReportElectricalMaintanceSearchFormDomReact = (function (_super) {
            __extends(ReportElectricalMaintanceSearchFormDomReact, _super);
            function ReportElectricalMaintanceSearchFormDomReact() {
                _super.apply(this, arguments);
                this.state = new ReportElectricalMaintanceSearchFormDomStates();
            }
            ReportElectricalMaintanceSearchFormDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel Hs-fff clearfix"}, React.createElement("form", {className: "ask-search Hu-dashed-line clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "年份：")), React.createElement("div", {className: "col-md-8"}, this.props.Vm.MonthVm.intoDom()))), React.createElement("div", {className: "col-xs-12 text-center mt10 mb10"}, React.createElement("button", {className: "btn btn-primary btn-sm icon-search fa fa-search", title: "搜索", onClick: function () { _this.fun_searchBtn(); }}), React.createElement("button", {className: "btn Hs-btn-trash btn-sm icon-trash fa fa-trash-o", title: "清空", onClick: function () { _this.fun_seachClearBtn(); }})));
            };
            ReportElectricalMaintanceSearchFormDomReact.prototype.fun_linkCode = function (e) {
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
            ReportElectricalMaintanceSearchFormDomReact.prototype.fun_linkName = function (e) {
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
            ReportElectricalMaintanceSearchFormDomReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.SearchSimpleCode = "";
                this.props.Vm.SearchName = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
            };
            ReportElectricalMaintanceSearchFormDomReact.prototype.fun_searchBtn = function () {
                this.props.Vm.loadPageData(0);
            };
            ReportElectricalMaintanceSearchFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ReportElectricalMaintanceSearchFormDomReact;
        }(domCore.DomReact));
        ReportElectricalMaintanceSearchFormDom.ReportElectricalMaintanceSearchFormDomReact = ReportElectricalMaintanceSearchFormDomReact;
        var ReportElectricalMaintanceSearchFormDomVm = (function (_super) {
            __extends(ReportElectricalMaintanceSearchFormDomVm, _super);
            function ReportElectricalMaintanceSearchFormDomVm(config) {
                _super.call(this);
                this.ReactType = ReportElectricalMaintanceSearchFormDomReact;
                this.IsHideClearBtn = true;
                this.UniId = "";
                if (config) {
                    this.UniId = config.UniId;
                }
                this.MonthVm = new dateFile.ui.DateVm();
                this.DepartmentTreeVm = new treeSingleFile.ui.TreeSingleSelectorVm();
                this.DepartmentTreeVm.RegName = "TBDepartmentCodeTable";
            }
            ReportElectricalMaintanceSearchFormDomVm.prototype.loadPageData = function (pageIndex) {
                this.emitAppEvent("TB/Report/Test/Test", this.UniId, pageIndex);
            };
            return ReportElectricalMaintanceSearchFormDomVm;
        }(domCore.DomVm));
        ReportElectricalMaintanceSearchFormDom.ReportElectricalMaintanceSearchFormDomVm = ReportElectricalMaintanceSearchFormDomVm;
        var ReportElectricalMaintanceSearchFormDomStates = (function (_super) {
            __extends(ReportElectricalMaintanceSearchFormDomStates, _super);
            function ReportElectricalMaintanceSearchFormDomStates() {
                _super.apply(this, arguments);
            }
            return ReportElectricalMaintanceSearchFormDomStates;
        }(domCore.DomStates));
        ReportElectricalMaintanceSearchFormDom.ReportElectricalMaintanceSearchFormDomStates = ReportElectricalMaintanceSearchFormDomStates;
        var ReportElectricalMaintanceSearchFormDomProps = (function (_super) {
            __extends(ReportElectricalMaintanceSearchFormDomProps, _super);
            function ReportElectricalMaintanceSearchFormDomProps() {
                _super.apply(this, arguments);
            }
            return ReportElectricalMaintanceSearchFormDomProps;
        }(domCore.DomProps));
        ReportElectricalMaintanceSearchFormDom.ReportElectricalMaintanceSearchFormDomProps = ReportElectricalMaintanceSearchFormDomProps;
    })(ReportElectricalMaintanceSearchFormDom = exports.ReportElectricalMaintanceSearchFormDom || (exports.ReportElectricalMaintanceSearchFormDom = {}));
});
