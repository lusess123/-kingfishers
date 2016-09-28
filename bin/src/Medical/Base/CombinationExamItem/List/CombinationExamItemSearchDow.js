var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var CombinationExamItemSearchDow;
    (function (CombinationExamItemSearchDow) {
        var CombinationExamItemSearchDowAction = (function (_super) {
            __extends(CombinationExamItemSearchDowAction, _super);
            function CombinationExamItemSearchDowAction() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemSearchDowAction;
        }(domCore.DomAction));
        CombinationExamItemSearchDow.CombinationExamItemSearchDowAction = CombinationExamItemSearchDowAction;
        var CombinationExamItemSearchDowReact = (function (_super) {
            __extends(CombinationExamItemSearchDowReact, _super);
            function CombinationExamItemSearchDowReact() {
                _super.apply(this, arguments);
                this.state = new CombinationExamItemSearchDowStates();
            }
            CombinationExamItemSearchDowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "acsTextC acs-search-panel"}, React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "large-6 small-12 columns"}, React.createElement("div", {className: "row"}, React.createElement("div", {className: "small-3 columns"}, React.createElement("label", {className: "right"}, "体检套餐：")), React.createElement("div", {className: "small-9 columns"}, React.createElement("input", {placeholder: "..", type: "text", value: this.props.Vm.SearchSimpleCode, onChange: function (e) { _this.fun_linkCode(e); }}))), React.createElement("div", {className: "row"}, React.createElement("div", {className: "small-3 columns"}, React.createElement("label", {className: "right"}, "体检项目：")), React.createElement("div", {className: "small-9 columns"}, React.createElement("input", {placeholder: "..", type: "text", value: this.props.Vm.SearchName, onChange: function (e) { _this.fun_linkName(e); }})))), React.createElement("div", {className: "small-12 columns"}, React.createElement("a", {className: "button tiny", onClick: function () { _this.fun_searchBtn(); }}, "搜索"), React.createElement("a", {className: "button tiny " + (this.props.Vm.IsHideClearBtn ? "hide" : ""), onClick: function () { _this.fun_seachClearBtn(); }}, "清空"))));
            };
            CombinationExamItemSearchDowReact.prototype.fun_linkCode = function (e) {
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
            CombinationExamItemSearchDowReact.prototype.fun_linkName = function (e) {
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
            CombinationExamItemSearchDowReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.SearchSimpleCode = "";
                this.props.Vm.SearchName = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
                this.forceUpdate();
            };
            CombinationExamItemSearchDowReact.prototype.fun_searchBtn = function () {
                this.props.Vm.loadPageData(0);
            };
            CombinationExamItemSearchDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return CombinationExamItemSearchDowReact;
        }(domCore.DomReact));
        CombinationExamItemSearchDow.CombinationExamItemSearchDowReact = CombinationExamItemSearchDowReact;
        var CombinationExamItemSearchDowVm = (function (_super) {
            __extends(CombinationExamItemSearchDowVm, _super);
            function CombinationExamItemSearchDowVm(config) {
                _super.call(this);
                this.ReactType = CombinationExamItemSearchDowReact;
                this.IsHideClearBtn = true;
                this.UniId = "";
            }
            CombinationExamItemSearchDowVm.prototype.loadPageData = function (pageIndex) {
                this.emitAppEvent("loadpagedata", this.UniId, pageIndex);
            };
            return CombinationExamItemSearchDowVm;
        }(domCore.DomVm));
        CombinationExamItemSearchDow.CombinationExamItemSearchDowVm = CombinationExamItemSearchDowVm;
        var CombinationExamItemSearchDowStates = (function (_super) {
            __extends(CombinationExamItemSearchDowStates, _super);
            function CombinationExamItemSearchDowStates() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemSearchDowStates;
        }(domCore.DomStates));
        CombinationExamItemSearchDow.CombinationExamItemSearchDowStates = CombinationExamItemSearchDowStates;
        var CombinationExamItemSearchDowProps = (function (_super) {
            __extends(CombinationExamItemSearchDowProps, _super);
            function CombinationExamItemSearchDowProps() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemSearchDowProps;
        }(domCore.DomProps));
        CombinationExamItemSearchDow.CombinationExamItemSearchDowProps = CombinationExamItemSearchDowProps;
    })(CombinationExamItemSearchDow = exports.CombinationExamItemSearchDow || (exports.CombinationExamItemSearchDow = {}));
});
