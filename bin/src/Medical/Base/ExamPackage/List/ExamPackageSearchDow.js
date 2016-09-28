var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var ExamPackageSearchDow;
    (function (ExamPackageSearchDow) {
        var ExamPackageSearchDowAction = (function (_super) {
            __extends(ExamPackageSearchDowAction, _super);
            function ExamPackageSearchDowAction() {
                _super.apply(this, arguments);
            }
            return ExamPackageSearchDowAction;
        }(domCore.DomAction));
        ExamPackageSearchDow.ExamPackageSearchDowAction = ExamPackageSearchDowAction;
        var ExamPackageSearchDowReact = (function (_super) {
            __extends(ExamPackageSearchDowReact, _super);
            function ExamPackageSearchDowReact() {
                _super.apply(this, arguments);
                this.state = new ExamPackageSearchDowStates();
            }
            ExamPackageSearchDowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel"}, React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "简码：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {className: "form-control", placeholder: "..", type: "text", value: this.props.Vm.SearchSimpleCode, onChange: function (e) { _this.fun_linkCode(e); }}))), React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "名称：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {className: "form-control", placeholder: "..", type: "text", value: this.props.Vm.SearchName, onChange: function (e) { _this.fun_linkName(e); }}))), React.createElement("div", {className: "col-xs-12 text-center"}, React.createElement("a", {className: "btn btn-primary btn-sm", onClick: function () { _this.fun_searchBtn(); }}, "搜索"), React.createElement("a", {className: "btn btn-primary btn-sm " + (this.props.Vm.IsHideClearBtn ? " hide" : ""), onClick: function () { _this.fun_seachClearBtn(); }}, "清空"))));
            };
            ExamPackageSearchDowReact.prototype.fun_linkCode = function (e) {
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
            ExamPackageSearchDowReact.prototype.fun_linkName = function (e) {
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
            ExamPackageSearchDowReact.prototype.fun_seachClearBtn = function () {
                this.props.Vm.SearchSimpleCode = "";
                this.props.Vm.SearchName = "";
                this.props.Vm.IsHideClearBtn = true;
                this.props.Vm.loadPageData(0);
                this.forceUpdate();
            };
            ExamPackageSearchDowReact.prototype.fun_searchBtn = function () {
                this.props.Vm.loadPageData(0);
            };
            ExamPackageSearchDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamPackageSearchDowReact;
        }(domCore.DomReact));
        ExamPackageSearchDow.ExamPackageSearchDowReact = ExamPackageSearchDowReact;
        var ExamPackageSearchDowVm = (function (_super) {
            __extends(ExamPackageSearchDowVm, _super);
            function ExamPackageSearchDowVm(config) {
                _super.call(this);
                this.ReactType = ExamPackageSearchDowReact;
                this.IsHideClearBtn = true;
                this.UniId = "";
                this.UniId = config.UniId;
            }
            ExamPackageSearchDowVm.prototype.loadPageData = function (pageIndex) {
                this.emitAppEvent("loadexampackagepagedata", this.UniId, pageIndex);
            };
            return ExamPackageSearchDowVm;
        }(domCore.DomVm));
        ExamPackageSearchDow.ExamPackageSearchDowVm = ExamPackageSearchDowVm;
        var ExamPackageSearchDowStates = (function (_super) {
            __extends(ExamPackageSearchDowStates, _super);
            function ExamPackageSearchDowStates() {
                _super.apply(this, arguments);
            }
            return ExamPackageSearchDowStates;
        }(domCore.DomStates));
        ExamPackageSearchDow.ExamPackageSearchDowStates = ExamPackageSearchDowStates;
        var ExamPackageSearchDowProps = (function (_super) {
            __extends(ExamPackageSearchDowProps, _super);
            function ExamPackageSearchDowProps() {
                _super.apply(this, arguments);
            }
            return ExamPackageSearchDowProps;
        }(domCore.DomProps));
        ExamPackageSearchDow.ExamPackageSearchDowProps = ExamPackageSearchDowProps;
    })(ExamPackageSearchDow = exports.ExamPackageSearchDow || (exports.ExamPackageSearchDow = {}));
});
