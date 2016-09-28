var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom"], function (require, exports, React, domFile) {
    "use strict";
    var domCore = domFile.Core;
    var AnomalySearchFormDom;
    (function (AnomalySearchFormDom) {
        var AnomalySearchFormDomAction = (function (_super) {
            __extends(AnomalySearchFormDomAction, _super);
            function AnomalySearchFormDomAction() {
                _super.apply(this, arguments);
            }
            return AnomalySearchFormDomAction;
        }(domCore.DomAction));
        AnomalySearchFormDom.AnomalySearchFormDomAction = AnomalySearchFormDomAction;
        var AnomalySearchFormDomReact = (function (_super) {
            __extends(AnomalySearchFormDomReact, _super);
            function AnomalySearchFormDomReact() {
                _super.apply(this, arguments);
                this.state = new AnomalySearchFormDomStates();
            }
            AnomalySearchFormDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel"}, React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "简码：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {className: "form-control", placeholder: "..", type: "text", value: this.props.Vm.SearchSimpleCode, onChange: function (e) { _this.fun_linkCode(e); }}))), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "名称：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {className: "form-control", placeholder: "..", type: "text", value: this.props.Vm.SearchName, onChange: function (e) { _this.fun_linkName(e); }}))), React.createElement("div", {className: "col-xs-12 text-center"}, React.createElement("a", {className: "btn btn-primary btn-sm", onClick: function () { _this.fun_searchBtn(); }}, "搜索"), React.createElement("a", {className: "btn btn-primary btn-sm " + (this.props.Vm.IsHideClearBtn ? "hide" : ""), onClick: function () { _this.fun_seachClearBtn(); }}, "清空"))));
            };
            AnomalySearchFormDomReact.prototype.fun_linkCode = function (e) {
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
            AnomalySearchFormDomReact.prototype.fun_linkName = function (e) {
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
            AnomalySearchFormDomReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.SearchSimpleCode = "";
                this.props.Vm.SearchName = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
            };
            AnomalySearchFormDomReact.prototype.fun_searchBtn = function () {
                this.props.Vm.loadPageData(0);
            };
            AnomalySearchFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AnomalySearchFormDomReact;
        }(domCore.DomReact));
        AnomalySearchFormDom.AnomalySearchFormDomReact = AnomalySearchFormDomReact;
        var AnomalySearchFormDomVm = (function (_super) {
            __extends(AnomalySearchFormDomVm, _super);
            function AnomalySearchFormDomVm(config) {
                _super.call(this);
                this.ReactType = AnomalySearchFormDomReact;
                this.IsHideClearBtn = true;
                this.UniId = "";
                if (config) {
                    this.UniId = config.UniId;
                }
            }
            AnomalySearchFormDomVm.prototype.loadPageData = function (pageIndex) {
                this.emitAppEvent("medical/base/anomaly/list/loadpagedata", this.UniId, pageIndex);
            };
            return AnomalySearchFormDomVm;
        }(domCore.DomVm));
        AnomalySearchFormDom.AnomalySearchFormDomVm = AnomalySearchFormDomVm;
        var AnomalySearchFormDomStates = (function (_super) {
            __extends(AnomalySearchFormDomStates, _super);
            function AnomalySearchFormDomStates() {
                _super.apply(this, arguments);
            }
            return AnomalySearchFormDomStates;
        }(domCore.DomStates));
        AnomalySearchFormDom.AnomalySearchFormDomStates = AnomalySearchFormDomStates;
        var AnomalySearchFormDomProps = (function (_super) {
            __extends(AnomalySearchFormDomProps, _super);
            function AnomalySearchFormDomProps() {
                _super.apply(this, arguments);
            }
            return AnomalySearchFormDomProps;
        }(domCore.DomProps));
        AnomalySearchFormDom.AnomalySearchFormDomProps = AnomalySearchFormDomProps;
    })(AnomalySearchFormDom = exports.AnomalySearchFormDom || (exports.AnomalySearchFormDom = {}));
});
