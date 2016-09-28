var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var ExamItemSearchDow;
    (function (ExamItemSearchDow) {
        var ExamItemSearchDowAction = (function (_super) {
            __extends(ExamItemSearchDowAction, _super);
            function ExamItemSearchDowAction() {
                _super.apply(this, arguments);
            }
            return ExamItemSearchDowAction;
        }(domCore.DomAction));
        ExamItemSearchDow.ExamItemSearchDowAction = ExamItemSearchDowAction;
        var ExamItemSearchDowReact = (function (_super) {
            __extends(ExamItemSearchDowReact, _super);
            function ExamItemSearchDowReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemSearchDowStates();
            }
            ExamItemSearchDowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel"}, React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "large-6 small-12 columns"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "right"}, "简码：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {className: "form-control", placeholder: "..", type: "text", value: this.props.Vm.SearchSimpleCode, onChange: function (e) { _this.fun_linkCode(e); }}))), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "项目名称：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {className: "form-control", placeholder: "..", type: "text", value: this.props.Vm.SearchName, onChange: function (e) { _this.fun_linkName(e); }})))), React.createElement("div", {className: "col-xs-12 text-center"}, React.createElement("a", {className: "btn btn-primary btn-sm", onClick: function () { _this.fun_searchBtn(); }}, "搜索"), React.createElement("a", {className: "btn btn-primary btn-sm " + (this.props.Vm.IsHideClearBtn ? "hide" : ""), onClick: function () { _this.fun_seachClearBtn(); }}, "清空"))));
            };
            ExamItemSearchDowReact.prototype.fun_linkCode = function (e) {
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
            ExamItemSearchDowReact.prototype.fun_linkName = function (e) {
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
            ExamItemSearchDowReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.SearchSimpleCode = "";
                this.props.Vm.SearchName = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
                this.forceUpdate();
            };
            ExamItemSearchDowReact.prototype.fun_searchBtn = function () {
                this.props.Vm.loadPageData(0);
            };
            ExamItemSearchDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamItemSearchDowReact;
        }(domCore.DomReact));
        ExamItemSearchDow.ExamItemSearchDowReact = ExamItemSearchDowReact;
        var ExamItemSearchDowVm = (function (_super) {
            __extends(ExamItemSearchDowVm, _super);
            function ExamItemSearchDowVm(config) {
                _super.call(this);
                this.ReactType = ExamItemSearchDowReact;
                this.IsHideClearBtn = true;
                this.UniId = "";
                this.UniId = config.UniId;
            }
            ExamItemSearchDowVm.prototype.loadPageData = function (pageIndex) {
                this.emitAppEvent("medical/base/ExamItem/loadpagedata", this.UniId, pageIndex);
            };
            return ExamItemSearchDowVm;
        }(domCore.DomVm));
        ExamItemSearchDow.ExamItemSearchDowVm = ExamItemSearchDowVm;
        var ExamItemSearchDowStates = (function (_super) {
            __extends(ExamItemSearchDowStates, _super);
            function ExamItemSearchDowStates() {
                _super.apply(this, arguments);
            }
            return ExamItemSearchDowStates;
        }(domCore.DomStates));
        ExamItemSearchDow.ExamItemSearchDowStates = ExamItemSearchDowStates;
        var ExamItemSearchDowProps = (function (_super) {
            __extends(ExamItemSearchDowProps, _super);
            function ExamItemSearchDowProps() {
                _super.apply(this, arguments);
            }
            return ExamItemSearchDowProps;
        }(domCore.DomProps));
        ExamItemSearchDow.ExamItemSearchDowProps = ExamItemSearchDowProps;
    })(ExamItemSearchDow = exports.ExamItemSearchDow || (exports.ExamItemSearchDow = {}));
});
