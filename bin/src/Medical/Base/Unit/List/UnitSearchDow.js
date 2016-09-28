var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var UnitSearchDow;
    (function (UnitSearchDow) {
        var UnitSearchDowAction = (function (_super) {
            __extends(UnitSearchDowAction, _super);
            function UnitSearchDowAction() {
                _super.apply(this, arguments);
            }
            return UnitSearchDowAction;
        }(domCore.DomAction));
        UnitSearchDow.UnitSearchDowAction = UnitSearchDowAction;
        var UnitSearchDowReact = (function (_super) {
            __extends(UnitSearchDowReact, _super);
            function UnitSearchDowReact() {
                _super.apply(this, arguments);
                this.state = new UnitSearchDowStates();
            }
            UnitSearchDowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel"}, React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "单位编码：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {className: "form-control", placeholder: "..", type: "text", value: this.props.Vm.SearchSimpleCode, onChange: function (e) { _this.fun_linkCode(e); }}))), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "单位名称：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {className: "form-control", placeholder: "..", type: "text", value: this.props.Vm.SearchName, onChange: function (e) { _this.fun_linkName(e); }}))), React.createElement("div", {className: "col-xs-12 text-center"}, React.createElement("a", {className: "btn btn-primary btn-sm", onClick: function () { _this.fun_searchBtn(); }}, "搜索"), React.createElement("a", {className: "btn btn-primary btn-sm " + (this.props.Vm.IsHideClearBtn ? " hide" : ""), onClick: function () { _this.fun_seachClearBtn(); }}, "清空"))));
            };
            UnitSearchDowReact.prototype.fun_linkCode = function (e) {
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
            UnitSearchDowReact.prototype.fun_linkName = function (e) {
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
            UnitSearchDowReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.SearchSimpleCode = "";
                this.props.Vm.SearchName = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
                this.forceUpdate();
            };
            UnitSearchDowReact.prototype.fun_searchBtn = function () {
                this.props.Vm.loadPageData(0);
            };
            UnitSearchDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UnitSearchDowReact;
        }(domCore.DomReact));
        UnitSearchDow.UnitSearchDowReact = UnitSearchDowReact;
        var UnitSearchDowVm = (function (_super) {
            __extends(UnitSearchDowVm, _super);
            function UnitSearchDowVm(config) {
                _super.call(this);
                this.ReactType = UnitSearchDowReact;
                this.IsHideClearBtn = true;
                this.UniId = "";
                this.UniId = config.UniId;
            }
            ;
            UnitSearchDowVm.prototype.loadPageData = function (pageIndex) {
                this.emitAppEvent("loadunitpagedata", this.UniId, pageIndex);
            };
            return UnitSearchDowVm;
        }(domCore.DomVm));
        UnitSearchDow.UnitSearchDowVm = UnitSearchDowVm;
        var UnitSearchDowStates = (function (_super) {
            __extends(UnitSearchDowStates, _super);
            function UnitSearchDowStates() {
                _super.apply(this, arguments);
            }
            return UnitSearchDowStates;
        }(domCore.DomStates));
        UnitSearchDow.UnitSearchDowStates = UnitSearchDowStates;
        var UnitSearchDowProps = (function (_super) {
            __extends(UnitSearchDowProps, _super);
            function UnitSearchDowProps() {
                _super.apply(this, arguments);
            }
            return UnitSearchDowProps;
        }(domCore.DomProps));
        UnitSearchDow.UnitSearchDowProps = UnitSearchDowProps;
    })(UnitSearchDow = exports.UnitSearchDow || (exports.UnitSearchDow = {}));
});
