var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/01single/Date", "./../../../../02col/03selector/selector"], function (require, exports, React, domFile, dateFile, SingleFile) {
    "use strict";
    var domCore = domFile.Core;
    var ReportBrandElectricalMaintanceSearchFormDom;
    (function (ReportBrandElectricalMaintanceSearchFormDom) {
        var ReportBrandElectricalMaintanceSearchFormDomAction = (function (_super) {
            __extends(ReportBrandElectricalMaintanceSearchFormDomAction, _super);
            function ReportBrandElectricalMaintanceSearchFormDomAction() {
                _super.apply(this, arguments);
            }
            return ReportBrandElectricalMaintanceSearchFormDomAction;
        }(domCore.DomAction));
        ReportBrandElectricalMaintanceSearchFormDom.ReportBrandElectricalMaintanceSearchFormDomAction = ReportBrandElectricalMaintanceSearchFormDomAction;
        var ReportBrandElectricalMaintanceSearchFormDomReact = (function (_super) {
            __extends(ReportBrandElectricalMaintanceSearchFormDomReact, _super);
            function ReportBrandElectricalMaintanceSearchFormDomReact() {
                _super.apply(this, arguments);
                this.state = new ReportBrandElectricalMaintanceSearchFormDomStates();
            }
            ReportBrandElectricalMaintanceSearchFormDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel Hs-fff clearfix"}, React.createElement("form", {className: "ask-search Hu-dashed-line clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "品牌：")), React.createElement("div", {className: "col-md-8"}, this.props.Vm.BrandVm.intoDom())), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "年份：")), React.createElement("div", {className: "col-md-8"}, this.props.Vm.MonthVm.intoDom())), React.createElement("div", {className: "col-xs-12 text-center mt10 mb10"}, React.createElement("button", {className: "btn btn-primary btn-sm icon-search fa fa-search", title: "搜索", onClick: function () { _this.fun_searchBtn(); }}), React.createElement("button", {className: "btn Hs-btn-trash btn-sm icon-trash fa fa-trash-o ", title: "清空", onClick: function () { _this.fun_seachClearBtn(); }}))));
            };
            ReportBrandElectricalMaintanceSearchFormDomReact.prototype.fun_linkCode = function (e) {
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
            ReportBrandElectricalMaintanceSearchFormDomReact.prototype.fun_linkName = function (e) {
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
            ReportBrandElectricalMaintanceSearchFormDomReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.SearchSimpleCode = "";
                this.props.Vm.SearchName = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
            };
            ReportBrandElectricalMaintanceSearchFormDomReact.prototype.fun_searchBtn = function () {
                this.props.Vm.loadPageData(0);
            };
            ReportBrandElectricalMaintanceSearchFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ReportBrandElectricalMaintanceSearchFormDomReact;
        }(domCore.DomReact));
        ReportBrandElectricalMaintanceSearchFormDom.ReportBrandElectricalMaintanceSearchFormDomReact = ReportBrandElectricalMaintanceSearchFormDomReact;
        var ReportBrandElectricalMaintanceSearchFormDomVm = (function (_super) {
            __extends(ReportBrandElectricalMaintanceSearchFormDomVm, _super);
            function ReportBrandElectricalMaintanceSearchFormDomVm(config) {
                _super.call(this);
                this.ReactType = ReportBrandElectricalMaintanceSearchFormDomReact;
                this.IsHideClearBtn = true;
                this.UniId = "";
                if (config) {
                    this.UniId = config.UniId;
                }
                this.MonthVm = new dateFile.ui.DateVm();
                this.BrandVm = new SingleFile.ui.SelectorVm();
                this.BrandVm.RegName = "TBBrandCodeTable";
            }
            ReportBrandElectricalMaintanceSearchFormDomVm.prototype.loadPageData = function (pageIndex) {
                this.emitAppEvent("TB/Report/Test/Test", this.UniId, pageIndex);
            };
            return ReportBrandElectricalMaintanceSearchFormDomVm;
        }(domCore.DomVm));
        ReportBrandElectricalMaintanceSearchFormDom.ReportBrandElectricalMaintanceSearchFormDomVm = ReportBrandElectricalMaintanceSearchFormDomVm;
        var ReportBrandElectricalMaintanceSearchFormDomStates = (function (_super) {
            __extends(ReportBrandElectricalMaintanceSearchFormDomStates, _super);
            function ReportBrandElectricalMaintanceSearchFormDomStates() {
                _super.apply(this, arguments);
            }
            return ReportBrandElectricalMaintanceSearchFormDomStates;
        }(domCore.DomStates));
        ReportBrandElectricalMaintanceSearchFormDom.ReportBrandElectricalMaintanceSearchFormDomStates = ReportBrandElectricalMaintanceSearchFormDomStates;
        var ReportBrandElectricalMaintanceSearchFormDomProps = (function (_super) {
            __extends(ReportBrandElectricalMaintanceSearchFormDomProps, _super);
            function ReportBrandElectricalMaintanceSearchFormDomProps() {
                _super.apply(this, arguments);
            }
            return ReportBrandElectricalMaintanceSearchFormDomProps;
        }(domCore.DomProps));
        ReportBrandElectricalMaintanceSearchFormDom.ReportBrandElectricalMaintanceSearchFormDomProps = ReportBrandElectricalMaintanceSearchFormDomProps;
    })(ReportBrandElectricalMaintanceSearchFormDom = exports.ReportBrandElectricalMaintanceSearchFormDom || (exports.ReportBrandElectricalMaintanceSearchFormDom = {}));
});
