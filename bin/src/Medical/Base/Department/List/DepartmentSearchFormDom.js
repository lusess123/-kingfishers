var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom"], function (require, exports, React, domFile) {
    "use strict";
    var domCore = domFile.Core;
    var DepartmentSearchFormDom;
    (function (DepartmentSearchFormDom) {
        var DepartmentSearchFormDomAction = (function (_super) {
            __extends(DepartmentSearchFormDomAction, _super);
            function DepartmentSearchFormDomAction() {
                _super.apply(this, arguments);
            }
            return DepartmentSearchFormDomAction;
        }(domCore.DomAction));
        DepartmentSearchFormDom.DepartmentSearchFormDomAction = DepartmentSearchFormDomAction;
        var DepartmentSearchFormDomReact = (function (_super) {
            __extends(DepartmentSearchFormDomReact, _super);
            function DepartmentSearchFormDomReact() {
                _super.apply(this, arguments);
                this.state = new DepartmentSearchFormDomStates();
            }
            DepartmentSearchFormDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel"}, React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "简码: ")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {className: "form-control", placeholder: "..", type: "text", value: this.props.Vm.SearchSimpleCode, onChange: function (e) { _this.fun_SearchCode(e); }}))), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "名称: ")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {className: "form-control", placeholder: "..", type: "text", value: this.props.Vm.SearchName, onChange: function (e) { _this.fun_SearchName(e); }}))), React.createElement("div", {className: "col-xs-12 text-center"}, React.createElement("a", {className: "btn btn-primary btn-sm", onClick: function () { _this.fun_searchBtn(); }}, " 搜索"), React.createElement("a", {className: "btn btn-primary btn-sm" + (this.props.Vm.IsHideClearBtn ? " hide" : ""), onClick: function () { _this.fun_seachClearBtn(); }}, "清空 "))));
            };
            DepartmentSearchFormDomReact.prototype.fun_SearchCode = function (e) {
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
            DepartmentSearchFormDomReact.prototype.fun_SearchName = function (e) {
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
            DepartmentSearchFormDomReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.SearchSimpleCode = "";
                this.props.Vm.SearchName = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
                this.forceUpdate();
            };
            DepartmentSearchFormDomReact.prototype.fun_searchBtn = function () {
                this.props.Vm.loadPageData(0);
            };
            DepartmentSearchFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DepartmentSearchFormDomReact;
        }(domCore.DomReact));
        DepartmentSearchFormDom.DepartmentSearchFormDomReact = DepartmentSearchFormDomReact;
        var DepartmentSearchFormDomVm = (function (_super) {
            __extends(DepartmentSearchFormDomVm, _super);
            function DepartmentSearchFormDomVm(config) {
                _super.call(this);
                this.ReactType = DepartmentSearchFormDomReact;
                this.IsHideClearBtn = true;
                this.UniId = "";
                if (config) {
                    this.UniId = config.UniId;
                }
                ;
            }
            DepartmentSearchFormDomVm.prototype.loadPageData = function (pageIndex) {
                this.emitAppEvent("loadpagedata", this.UniId, pageIndex);
            };
            return DepartmentSearchFormDomVm;
        }(domCore.DomVm));
        DepartmentSearchFormDom.DepartmentSearchFormDomVm = DepartmentSearchFormDomVm;
        var DepartmentSearchFormDomStates = (function (_super) {
            __extends(DepartmentSearchFormDomStates, _super);
            function DepartmentSearchFormDomStates() {
                _super.apply(this, arguments);
            }
            return DepartmentSearchFormDomStates;
        }(domCore.DomStates));
        DepartmentSearchFormDom.DepartmentSearchFormDomStates = DepartmentSearchFormDomStates;
        var DepartmentSearchFormDomProps = (function (_super) {
            __extends(DepartmentSearchFormDomProps, _super);
            function DepartmentSearchFormDomProps() {
                _super.apply(this, arguments);
            }
            return DepartmentSearchFormDomProps;
        }(domCore.DomProps));
        DepartmentSearchFormDom.DepartmentSearchFormDomProps = DepartmentSearchFormDomProps;
    })(DepartmentSearchFormDom = exports.DepartmentSearchFormDom || (exports.DepartmentSearchFormDom = {}));
});
