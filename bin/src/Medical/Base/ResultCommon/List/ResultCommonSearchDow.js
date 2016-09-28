var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var ResultCommonSearchDow;
    (function (ResultCommonSearchDow) {
        var ResultCommonSearchDowAction = (function (_super) {
            __extends(ResultCommonSearchDowAction, _super);
            function ResultCommonSearchDowAction() {
                _super.apply(this, arguments);
            }
            return ResultCommonSearchDowAction;
        }(domCore.DomAction));
        ResultCommonSearchDow.ResultCommonSearchDowAction = ResultCommonSearchDowAction;
        var ResultCommonSearchDowReact = (function (_super) {
            __extends(ResultCommonSearchDowReact, _super);
            function ResultCommonSearchDowReact() {
                _super.apply(this, arguments);
                this.state = new ResultCommonSearchDowStates();
            }
            ResultCommonSearchDowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel"}, React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "简码：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {className: "form-control", placeholder: "..", type: "text", value: this.props.Vm.SearchSimpleCode, onChange: function (e) { _this.fun_linkCode(e); }}))), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "体检项目：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {className: "form-control", placeholder: "..", type: "text", value: this.props.Vm.SearchName, onChange: function (e) { _this.fun_linkName(e); }}))), React.createElement("div", {className: "col-xs-12 text-center"}, React.createElement("a", {className: "btn btn-primary btn-sm", onClick: function () { _this.fun_searchBtn(); }}, "搜索"), React.createElement("a", {className: "btn btn-primary btn-sm " + (this.props.Vm.IsHideClearBtn ? " hide" : ""), onClick: function () { _this.fun_seachClearBtn(); }}, "清空"))));
            };
            ResultCommonSearchDowReact.prototype.fun_linkCode = function (e) {
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
            ResultCommonSearchDowReact.prototype.fun_linkName = function (e) {
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
            ResultCommonSearchDowReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.SearchSimpleCode = "";
                this.props.Vm.SearchName = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
                this.forceUpdate();
            };
            ResultCommonSearchDowReact.prototype.fun_searchBtn = function () {
                this.props.Vm.loadPageData(0);
            };
            ResultCommonSearchDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ResultCommonSearchDowReact;
        }(domCore.DomReact));
        ResultCommonSearchDow.ResultCommonSearchDowReact = ResultCommonSearchDowReact;
        var ResultCommonSearchDowVm = (function (_super) {
            __extends(ResultCommonSearchDowVm, _super);
            function ResultCommonSearchDowVm(config) {
                _super.call(this);
                this.ReactType = ResultCommonSearchDowReact;
                this.IsHideClearBtn = true;
                this.UniId = "";
                this.UniId = config.UniId;
            }
            ResultCommonSearchDowVm.prototype.loadPageData = function (pageIndex) {
                this.emitAppEvent("loadresultpagedata", this.UniId, pageIndex);
            };
            return ResultCommonSearchDowVm;
        }(domCore.DomVm));
        ResultCommonSearchDow.ResultCommonSearchDowVm = ResultCommonSearchDowVm;
        var ResultCommonSearchDowStates = (function (_super) {
            __extends(ResultCommonSearchDowStates, _super);
            function ResultCommonSearchDowStates() {
                _super.apply(this, arguments);
            }
            return ResultCommonSearchDowStates;
        }(domCore.DomStates));
        ResultCommonSearchDow.ResultCommonSearchDowStates = ResultCommonSearchDowStates;
        var ResultCommonSearchDowProps = (function (_super) {
            __extends(ResultCommonSearchDowProps, _super);
            function ResultCommonSearchDowProps() {
                _super.apply(this, arguments);
            }
            return ResultCommonSearchDowProps;
        }(domCore.DomProps));
        ResultCommonSearchDow.ResultCommonSearchDowProps = ResultCommonSearchDowProps;
    })(ResultCommonSearchDow = exports.ResultCommonSearchDow || (exports.ResultCommonSearchDow = {}));
});
