var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/01single/Date", "./../../../../02col/03selector/selector"], function (require, exports, React, domFile, dateFile, SingleFile) {
    "use strict";
    var domCore = domFile.Core;
    var ReliefmonthSearchFormDom;
    (function (ReliefmonthSearchFormDom) {
        var ReliefmonthSearchFormDomAction = (function (_super) {
            __extends(ReliefmonthSearchFormDomAction, _super);
            function ReliefmonthSearchFormDomAction() {
                _super.apply(this, arguments);
            }
            return ReliefmonthSearchFormDomAction;
        }(domCore.DomAction));
        ReliefmonthSearchFormDom.ReliefmonthSearchFormDomAction = ReliefmonthSearchFormDomAction;
        var ReliefmonthSearchFormDomReact = (function (_super) {
            __extends(ReliefmonthSearchFormDomReact, _super);
            function ReliefmonthSearchFormDomReact() {
                _super.apply(this, arguments);
                this.state = new ReliefmonthSearchFormDomStates();
            }
            ReliefmonthSearchFormDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel Hs-fff clearfix"}, React.createElement("form", {className: "ask-search Hu-dashed-line clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "月份")), React.createElement("div", {className: "col-md-8"}, this.props.Vm.MonthVm.intoDom()))), React.createElement("div", {className: "col-xs-12 text-center mt10 mb10"}, React.createElement("a", {className: "btn btn-primary btn-sm", onClick: function () { _this.fun_searchBtn(); }}, "搜索"), React.createElement("a", {className: "btn btn-primary btn-sm " + (this.props.Vm.IsHideClearBtn ? "hide" : ""), onClick: function () { _this.fun_seachClearBtn(); }}, "清空")));
            };
            ReliefmonthSearchFormDomReact.prototype.fun_linkCode = function (e) {
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
            ReliefmonthSearchFormDomReact.prototype.fun_linkName = function (e) {
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
            ReliefmonthSearchFormDomReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.SearchSimpleCode = "";
                this.props.Vm.SearchName = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
            };
            ReliefmonthSearchFormDomReact.prototype.fun_searchBtn = function () {
                this.props.Vm.loadPageData(0);
            };
            ReliefmonthSearchFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ReliefmonthSearchFormDomReact;
        }(domCore.DomReact));
        ReliefmonthSearchFormDom.ReliefmonthSearchFormDomReact = ReliefmonthSearchFormDomReact;
        var ReliefmonthSearchFormDomVm = (function (_super) {
            __extends(ReliefmonthSearchFormDomVm, _super);
            function ReliefmonthSearchFormDomVm(config) {
                _super.call(this);
                this.ReactType = ReliefmonthSearchFormDomReact;
                this.IsHideClearBtn = true;
                this.UniId = "";
                if (config) {
                    this.UniId = config.UniId;
                }
                this.MonthVm = new dateFile.ui.DateVm();
                this.BrandVm = new SingleFile.ui.SelectorVm();
                this.BrandVm.RegName = "TBDepartmentCodeTable";
            }
            ReliefmonthSearchFormDomVm.prototype.loadPageData = function (pageIndex) {
                this.emitAppEvent("TB/Report/Test/Test", this.UniId, pageIndex);
            };
            return ReliefmonthSearchFormDomVm;
        }(domCore.DomVm));
        ReliefmonthSearchFormDom.ReliefmonthSearchFormDomVm = ReliefmonthSearchFormDomVm;
        var ReliefmonthSearchFormDomStates = (function (_super) {
            __extends(ReliefmonthSearchFormDomStates, _super);
            function ReliefmonthSearchFormDomStates() {
                _super.apply(this, arguments);
            }
            return ReliefmonthSearchFormDomStates;
        }(domCore.DomStates));
        ReliefmonthSearchFormDom.ReliefmonthSearchFormDomStates = ReliefmonthSearchFormDomStates;
        var ReliefmonthSearchFormDomProps = (function (_super) {
            __extends(ReliefmonthSearchFormDomProps, _super);
            function ReliefmonthSearchFormDomProps() {
                _super.apply(this, arguments);
            }
            return ReliefmonthSearchFormDomProps;
        }(domCore.DomProps));
        ReliefmonthSearchFormDom.ReliefmonthSearchFormDomProps = ReliefmonthSearchFormDomProps;
    })(ReliefmonthSearchFormDom = exports.ReliefmonthSearchFormDom || (exports.ReliefmonthSearchFormDom = {}));
});
