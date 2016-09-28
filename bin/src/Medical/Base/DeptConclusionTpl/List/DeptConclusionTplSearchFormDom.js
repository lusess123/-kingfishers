var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../Common/List/MedicalBaseSearchFormDom"], function (require, exports, React, baseSearchForm) {
    "use strict";
    var DeptConclusionTplSearchFormDom;
    (function (DeptConclusionTplSearchFormDom) {
        var DeptConclusionTplSearchFormDomAction = (function (_super) {
            __extends(DeptConclusionTplSearchFormDomAction, _super);
            function DeptConclusionTplSearchFormDomAction() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplSearchFormDomAction;
        }(baseSearchForm.MedicalBaseSearchFormDom.MedicalBaseSearchFormDomAction));
        DeptConclusionTplSearchFormDom.DeptConclusionTplSearchFormDomAction = DeptConclusionTplSearchFormDomAction;
        var DeptConclusionTplSearchFormDomReact = (function (_super) {
            __extends(DeptConclusionTplSearchFormDomReact, _super);
            function DeptConclusionTplSearchFormDomReact() {
                _super.apply(this, arguments);
                this.state = new DeptConclusionTplSearchFormDomStates();
            }
            DeptConclusionTplSearchFormDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel"}, React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "名称：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {placeholder: "..", type: "text", value: this.props.Vm.SearchName, onChange: function (e) { _this.fun_linkText(e, "SearchName"); }}))), React.createElement("div", {className: "col-xs-12 text-center"}, React.createElement("a", {className: "btn btn-primary btn-sm", onClick: function () { _this.fun_searchBtn(); }}, "搜索"), React.createElement("a", {className: "btn btn-sm btn-primary " + (this.props.Vm.IsHideClearBtn ? "hide" : ""), onClick: function () { _this.fun_seachClearBtn(); }}, "清空"))));
            };
            DeptConclusionTplSearchFormDomReact.prototype.clearSearchVal = function () {
                this.props.Vm.SearchName = "";
            };
            return DeptConclusionTplSearchFormDomReact;
        }(baseSearchForm.MedicalBaseSearchFormDom.MedicalBaseSearchFormDomReact));
        DeptConclusionTplSearchFormDom.DeptConclusionTplSearchFormDomReact = DeptConclusionTplSearchFormDomReact;
        var DeptConclusionTplSearchFormDomVm = (function (_super) {
            __extends(DeptConclusionTplSearchFormDomVm, _super);
            function DeptConclusionTplSearchFormDomVm(config) {
                _super.call(this);
                this.ReactType = DeptConclusionTplSearchFormDomReact;
                this.SearchName = "";
                if (config) {
                    this.UniId = config.UniId;
                }
            }
            return DeptConclusionTplSearchFormDomVm;
        }(baseSearchForm.MedicalBaseSearchFormDom.MedicalBaseSearchFormDomVm));
        DeptConclusionTplSearchFormDom.DeptConclusionTplSearchFormDomVm = DeptConclusionTplSearchFormDomVm;
        var DeptConclusionTplSearchFormDomStates = (function (_super) {
            __extends(DeptConclusionTplSearchFormDomStates, _super);
            function DeptConclusionTplSearchFormDomStates() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplSearchFormDomStates;
        }(baseSearchForm.MedicalBaseSearchFormDom.MedicalBaseSearchFormDomStates));
        DeptConclusionTplSearchFormDom.DeptConclusionTplSearchFormDomStates = DeptConclusionTplSearchFormDomStates;
        var DeptConclusionTplSearchFormDomProps = (function (_super) {
            __extends(DeptConclusionTplSearchFormDomProps, _super);
            function DeptConclusionTplSearchFormDomProps() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplSearchFormDomProps;
        }(baseSearchForm.MedicalBaseSearchFormDom.MedicalBaseSearchFormDomProps));
        DeptConclusionTplSearchFormDom.DeptConclusionTplSearchFormDomProps = DeptConclusionTplSearchFormDomProps;
    })(DeptConclusionTplSearchFormDom = exports.DeptConclusionTplSearchFormDom || (exports.DeptConclusionTplSearchFormDom = {}));
});
