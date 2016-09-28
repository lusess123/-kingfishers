var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/01single/Date", "./../../../../02col/03selector/selector"], function (require, exports, React, domFile, dateFile, SingleFile) {
    "use strict";
    var domCore = domFile.Core;
    var HomeRepairSearchFormDom;
    (function (HomeRepairSearchFormDom) {
        var HomeRepairSearchFormDomAction = (function (_super) {
            __extends(HomeRepairSearchFormDomAction, _super);
            function HomeRepairSearchFormDomAction() {
                _super.apply(this, arguments);
            }
            return HomeRepairSearchFormDomAction;
        }(domCore.DomAction));
        HomeRepairSearchFormDom.HomeRepairSearchFormDomAction = HomeRepairSearchFormDomAction;
        var HomeRepairSearchFormDomReact = (function (_super) {
            __extends(HomeRepairSearchFormDomReact, _super);
            function HomeRepairSearchFormDomReact() {
                _super.apply(this, arguments);
                this.state = new HomeRepairSearchFormDomStates();
            }
            HomeRepairSearchFormDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel"}, React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "所属维修部：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.BrandVm.intoDom())), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "年份：")), React.createElement("div", {className: "pull-left Hu-input"}, this.props.Vm.MonthVm.intoDom())), React.createElement("div", {className: "col-xs-12 text-center"}, React.createElement("a", {className: "btn btn-primary btn-sm", onClick: function () { _this.fun_searchBtn(); }}, "搜索"), React.createElement("a", {className: "btn btn-primary btn-sm " + (this.props.Vm.IsHideClearBtn ? "hide" : ""), onClick: function () { _this.fun_seachClearBtn(); }}, "清空"))));
            };
            HomeRepairSearchFormDomReact.prototype.fun_linkCode = function (e) {
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
            HomeRepairSearchFormDomReact.prototype.fun_linkName = function (e) {
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
            HomeRepairSearchFormDomReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.SearchSimpleCode = "";
                this.props.Vm.SearchName = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
            };
            HomeRepairSearchFormDomReact.prototype.fun_searchBtn = function () {
                this.props.Vm.loadPageData(0);
            };
            HomeRepairSearchFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return HomeRepairSearchFormDomReact;
        }(domCore.DomReact));
        HomeRepairSearchFormDom.HomeRepairSearchFormDomReact = HomeRepairSearchFormDomReact;
        var HomeRepairSearchFormDomVm = (function (_super) {
            __extends(HomeRepairSearchFormDomVm, _super);
            function HomeRepairSearchFormDomVm(config) {
                _super.call(this);
                this.ReactType = HomeRepairSearchFormDomReact;
                this.IsHideClearBtn = true;
                this.UniId = "";
                if (config) {
                    this.UniId = config.UniId;
                }
                this.MonthVm = new dateFile.ui.DateVm();
                this.BrandVm = new SingleFile.ui.SelectorVm();
                this.BrandVm.RegName = "TBDepartmentCodeTable";
            }
            HomeRepairSearchFormDomVm.prototype.loadPageData = function (pageIndex) {
                this.emitAppEvent("TB/Report/Test/Test", this.UniId, pageIndex);
            };
            return HomeRepairSearchFormDomVm;
        }(domCore.DomVm));
        HomeRepairSearchFormDom.HomeRepairSearchFormDomVm = HomeRepairSearchFormDomVm;
        var HomeRepairSearchFormDomStates = (function (_super) {
            __extends(HomeRepairSearchFormDomStates, _super);
            function HomeRepairSearchFormDomStates() {
                _super.apply(this, arguments);
            }
            return HomeRepairSearchFormDomStates;
        }(domCore.DomStates));
        HomeRepairSearchFormDom.HomeRepairSearchFormDomStates = HomeRepairSearchFormDomStates;
        var HomeRepairSearchFormDomProps = (function (_super) {
            __extends(HomeRepairSearchFormDomProps, _super);
            function HomeRepairSearchFormDomProps() {
                _super.apply(this, arguments);
            }
            return HomeRepairSearchFormDomProps;
        }(domCore.DomProps));
        HomeRepairSearchFormDom.HomeRepairSearchFormDomProps = HomeRepairSearchFormDomProps;
    })(HomeRepairSearchFormDom = exports.HomeRepairSearchFormDom || (exports.HomeRepairSearchFormDom = {}));
});
