var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/01single/Date", "./../../../../02col/03selector/selector"], function (require, exports, React, domFile, dateFile, SingleFile) {
    "use strict";
    var domCore = domFile.Core;
    var ReportElectricalFaultCategorySearchFormDom;
    (function (ReportElectricalFaultCategorySearchFormDom) {
        var ReportElectricalFaultCategorySearchFormDomAction = (function (_super) {
            __extends(ReportElectricalFaultCategorySearchFormDomAction, _super);
            function ReportElectricalFaultCategorySearchFormDomAction() {
                _super.apply(this, arguments);
            }
            return ReportElectricalFaultCategorySearchFormDomAction;
        }(domCore.DomAction));
        ReportElectricalFaultCategorySearchFormDom.ReportElectricalFaultCategorySearchFormDomAction = ReportElectricalFaultCategorySearchFormDomAction;
        var ReportElectricalFaultCategorySearchFormDomReact = (function (_super) {
            __extends(ReportElectricalFaultCategorySearchFormDomReact, _super);
            function ReportElectricalFaultCategorySearchFormDomReact() {
                _super.apply(this, arguments);
                this.state = new ReportElectricalFaultCategorySearchFormDomStates();
            }
            ReportElectricalFaultCategorySearchFormDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel Hs-fff clearfix"}, React.createElement("form", {className: "ask-search Hu-dashed-line clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "电器：")), React.createElement("div", {className: "col-md-8"}, this.props.Vm.BrandVm.intoDom())), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "年份：")), React.createElement("div", {className: "col-md-8"}, this.props.Vm.MonthVm.intoDom()))), React.createElement("div", {className: "col-xs-12 text-center mt10 mb10"}, React.createElement("button", {className: "btn btn-primary btn-sm icon-search fa fa-search", title: "搜索", onClick: function () { _this.fun_searchBtn(); }}), React.createElement("button", {className: "btn Hs-btn-trash btn-sm icon-trash fa fa-trash-o", title: "清空", onClick: function () { _this.fun_seachClearBtn(); }})));
            };
            ReportElectricalFaultCategorySearchFormDomReact.prototype.fun_linkCode = function (e) {
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
            ReportElectricalFaultCategorySearchFormDomReact.prototype.fun_linkName = function (e) {
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
            ReportElectricalFaultCategorySearchFormDomReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.SearchSimpleCode = "";
                this.props.Vm.SearchName = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
            };
            ReportElectricalFaultCategorySearchFormDomReact.prototype.fun_searchBtn = function () {
                this.props.Vm.loadPageData(0);
            };
            ReportElectricalFaultCategorySearchFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ReportElectricalFaultCategorySearchFormDomReact;
        }(domCore.DomReact));
        ReportElectricalFaultCategorySearchFormDom.ReportElectricalFaultCategorySearchFormDomReact = ReportElectricalFaultCategorySearchFormDomReact;
        var ReportElectricalFaultCategorySearchFormDomVm = (function (_super) {
            __extends(ReportElectricalFaultCategorySearchFormDomVm, _super);
            function ReportElectricalFaultCategorySearchFormDomVm(config) {
                _super.call(this);
                this.ReactType = ReportElectricalFaultCategorySearchFormDomReact;
                this.IsHideClearBtn = true;
                this.UniId = "";
                if (config) {
                    this.UniId = config.UniId;
                }
                this.MonthVm = new dateFile.ui.DateVm();
                this.BrandVm = new SingleFile.ui.SelectorVm();
                this.BrandVm.RegName = "InvoivingFaultCategoryCodeTableB";
            }
            ReportElectricalFaultCategorySearchFormDomVm.prototype.loadPageData = function (pageIndex) {
                this.emitAppEvent("TB/Report/Test/Test", this.UniId, pageIndex);
            };
            return ReportElectricalFaultCategorySearchFormDomVm;
        }(domCore.DomVm));
        ReportElectricalFaultCategorySearchFormDom.ReportElectricalFaultCategorySearchFormDomVm = ReportElectricalFaultCategorySearchFormDomVm;
        var ReportElectricalFaultCategorySearchFormDomStates = (function (_super) {
            __extends(ReportElectricalFaultCategorySearchFormDomStates, _super);
            function ReportElectricalFaultCategorySearchFormDomStates() {
                _super.apply(this, arguments);
            }
            return ReportElectricalFaultCategorySearchFormDomStates;
        }(domCore.DomStates));
        ReportElectricalFaultCategorySearchFormDom.ReportElectricalFaultCategorySearchFormDomStates = ReportElectricalFaultCategorySearchFormDomStates;
        var ReportElectricalFaultCategorySearchFormDomProps = (function (_super) {
            __extends(ReportElectricalFaultCategorySearchFormDomProps, _super);
            function ReportElectricalFaultCategorySearchFormDomProps() {
                _super.apply(this, arguments);
            }
            return ReportElectricalFaultCategorySearchFormDomProps;
        }(domCore.DomProps));
        ReportElectricalFaultCategorySearchFormDom.ReportElectricalFaultCategorySearchFormDomProps = ReportElectricalFaultCategorySearchFormDomProps;
    })(ReportElectricalFaultCategorySearchFormDom = exports.ReportElectricalFaultCategorySearchFormDom || (exports.ReportElectricalFaultCategorySearchFormDom = {}));
});
