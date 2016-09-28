var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../Common/List/MedicalBaseSearchFormDom"], function (require, exports, React, baseSearchForm) {
    "use strict";
    var GeneralExamTplSearchFormDom;
    (function (GeneralExamTplSearchFormDom) {
        var GeneralExamTplSearchFormDomAction = (function (_super) {
            __extends(GeneralExamTplSearchFormDomAction, _super);
            function GeneralExamTplSearchFormDomAction() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplSearchFormDomAction;
        }(baseSearchForm.MedicalBaseSearchFormDom.MedicalBaseSearchFormDomAction));
        GeneralExamTplSearchFormDom.GeneralExamTplSearchFormDomAction = GeneralExamTplSearchFormDomAction;
        var GeneralExamTplSearchFormDomReact = (function (_super) {
            __extends(GeneralExamTplSearchFormDomReact, _super);
            function GeneralExamTplSearchFormDomReact() {
                _super.apply(this, arguments);
                this.state = new GeneralExamTplSearchFormDomStates();
            }
            GeneralExamTplSearchFormDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hm-search-panel"}, React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-6 col-md-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "名称：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {className: "form-control", placeholder: "..", type: "text", value: this.props.Vm.SearchName, onChange: function (e) { _this.fun_linkText(e, "SearchName"); }}))), React.createElement("div", {className: "col-xs-12 text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.fun_searchBtn(); }}, "搜索"), React.createElement("a", {className: "btn btn-sm btn-primary " + (this.props.Vm.IsHideClearBtn ? "hide" : ""), onClick: function () { _this.fun_seachClearBtn(); }}, "清空"))));
            };
            GeneralExamTplSearchFormDomReact.prototype.clearSearchVal = function () {
                this.props.Vm.SearchName = "";
            };
            return GeneralExamTplSearchFormDomReact;
        }(baseSearchForm.MedicalBaseSearchFormDom.MedicalBaseSearchFormDomReact));
        GeneralExamTplSearchFormDom.GeneralExamTplSearchFormDomReact = GeneralExamTplSearchFormDomReact;
        var GeneralExamTplSearchFormDomVm = (function (_super) {
            __extends(GeneralExamTplSearchFormDomVm, _super);
            function GeneralExamTplSearchFormDomVm(config) {
                _super.call(this);
                this.ReactType = GeneralExamTplSearchFormDomReact;
                this.SearchName = "";
                if (config) {
                    this.UniId = config.UniId;
                }
            }
            return GeneralExamTplSearchFormDomVm;
        }(baseSearchForm.MedicalBaseSearchFormDom.MedicalBaseSearchFormDomVm));
        GeneralExamTplSearchFormDom.GeneralExamTplSearchFormDomVm = GeneralExamTplSearchFormDomVm;
        var GeneralExamTplSearchFormDomStates = (function (_super) {
            __extends(GeneralExamTplSearchFormDomStates, _super);
            function GeneralExamTplSearchFormDomStates() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplSearchFormDomStates;
        }(baseSearchForm.MedicalBaseSearchFormDom.MedicalBaseSearchFormDomStates));
        GeneralExamTplSearchFormDom.GeneralExamTplSearchFormDomStates = GeneralExamTplSearchFormDomStates;
        var GeneralExamTplSearchFormDomProps = (function (_super) {
            __extends(GeneralExamTplSearchFormDomProps, _super);
            function GeneralExamTplSearchFormDomProps() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplSearchFormDomProps;
        }(baseSearchForm.MedicalBaseSearchFormDom.MedicalBaseSearchFormDomProps));
        GeneralExamTplSearchFormDom.GeneralExamTplSearchFormDomProps = GeneralExamTplSearchFormDomProps;
    })(GeneralExamTplSearchFormDom = exports.GeneralExamTplSearchFormDom || (exports.GeneralExamTplSearchFormDom = {}));
});
