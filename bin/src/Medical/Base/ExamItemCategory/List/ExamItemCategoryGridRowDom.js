var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Url", "./../../../../02col/02Mulite/SingleCheckBox", "./../../../Common/RowButtonExpandDom"], function (require, exports, React, domFile, urlFile, singleCheckFile, expandFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamItemCategoryGridRowDom;
    (function (ExamItemCategoryGridRowDom) {
        var EExamItemCategoryGridRowDomAction = (function (_super) {
            __extends(EExamItemCategoryGridRowDomAction, _super);
            function EExamItemCategoryGridRowDomAction() {
                _super.apply(this, arguments);
            }
            return EExamItemCategoryGridRowDomAction;
        }(domCore.DomAction));
        ExamItemCategoryGridRowDom.EExamItemCategoryGridRowDomAction = EExamItemCategoryGridRowDomAction;
        var ExamItemCategoryGridRowDomReact = (function (_super) {
            __extends(ExamItemCategoryGridRowDomReact, _super);
            function ExamItemCategoryGridRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemCategoryGridRowDomStates();
            }
            ExamItemCategoryGridRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, React.createElement("td", {className: (this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-td " : ""), style: { left: this.props.Vm.LeftNum }}, React.createElement("span", null, this.createSingleCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber), this.createRowButtonExpand())), React.createElement("td", {className: "hide"}, React.createElement("span", null, React.createElement("input", {placeholder: "..", type: "hidden"}))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, React.createElement("a", {onClick: function () { _this.fun_linkDetai(); return false; }}, this.props.Vm.RowData.Code)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Name))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.UPDATE_TIME))));
            };
            ExamItemCategoryGridRowDomReact.prototype.fun_linkDetai = function () {
                urlFile.Core.AkUrl.Current().openUrl("$panelUserDetailPage$" + this.props.Vm.RowData.FID + "$");
            };
            ExamItemCategoryGridRowDomReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            ExamItemCategoryGridRowDomReact.prototype.createRowButtonExpand = function () {
                return this.props.Vm.RowButtonExpand.intoDom();
            };
            ExamItemCategoryGridRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamItemCategoryGridRowDomReact;
        }(domCore.DomReact));
        ExamItemCategoryGridRowDom.ExamItemCategoryGridRowDomReact = ExamItemCategoryGridRowDomReact;
        var ExamItemCategoryGridRowDomVm = (function (_super) {
            __extends(ExamItemCategoryGridRowDomVm, _super);
            function ExamItemCategoryGridRowDomVm(config) {
                _super.call(this);
                this.ReactType = ExamItemCategoryGridRowDomReact;
                this.LeftNum = 0;
                this.IsAcsRelative = false;
                this.SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();
                if (config) {
                    this.RowData = config.RowData;
                    this.IsAcsRelative = config.IsAcsRelative;
                    this.LeftNum = config.LeftNum;
                    this.RowNumber = config.RowNumber;
                }
            }
            return ExamItemCategoryGridRowDomVm;
        }(domCore.DomVm));
        ExamItemCategoryGridRowDom.ExamItemCategoryGridRowDomVm = ExamItemCategoryGridRowDomVm;
        var ExamItemCategoryGridRowDomStates = (function (_super) {
            __extends(ExamItemCategoryGridRowDomStates, _super);
            function ExamItemCategoryGridRowDomStates() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryGridRowDomStates;
        }(domCore.DomStates));
        ExamItemCategoryGridRowDom.ExamItemCategoryGridRowDomStates = ExamItemCategoryGridRowDomStates;
        var ExamItemCategoryGridRowDomProps = (function (_super) {
            __extends(ExamItemCategoryGridRowDomProps, _super);
            function ExamItemCategoryGridRowDomProps() {
                _super.apply(this, arguments);
            }
            return ExamItemCategoryGridRowDomProps;
        }(domCore.DomProps));
        ExamItemCategoryGridRowDom.ExamItemCategoryGridRowDomProps = ExamItemCategoryGridRowDomProps;
    })(ExamItemCategoryGridRowDom = exports.ExamItemCategoryGridRowDom || (exports.ExamItemCategoryGridRowDom = {}));
});
