var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../Common/List/MedicalBaseGridRowDom"], function (require, exports, React, baseGridRow) {
    "use strict";
    var GeneralExamTplGridRowDom;
    (function (GeneralExamTplGridRowDom) {
        var GeneralExamTplGridRowDomAction = (function (_super) {
            __extends(GeneralExamTplGridRowDomAction, _super);
            function GeneralExamTplGridRowDomAction() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplGridRowDomAction;
        }(baseGridRow.MedicalBaseGridRowDom.MedicalBaseGridRowDomAction));
        GeneralExamTplGridRowDom.GeneralExamTplGridRowDomAction = GeneralExamTplGridRowDomAction;
        var GeneralExamTplGridRowDomReact = (function (_super) {
            __extends(GeneralExamTplGridRowDomReact, _super);
            function GeneralExamTplGridRowDomReact() {
                _super.apply(this, arguments);
                this.state = new GeneralExamTplGridRowDomStates();
            }
            GeneralExamTplGridRowDomReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, this.createFirstTd(), React.createElement("td", {className: "hide"}, React.createElement("span", null, React.createElement("input", {placeholder: "..", type: "hidden"}))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Name))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Summary))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Advice))));
            };
            return GeneralExamTplGridRowDomReact;
        }(baseGridRow.MedicalBaseGridRowDom.MedicalBaseGridRowDomReact));
        GeneralExamTplGridRowDom.GeneralExamTplGridRowDomReact = GeneralExamTplGridRowDomReact;
        var GeneralExamTplGridRowDomVm = (function (_super) {
            __extends(GeneralExamTplGridRowDomVm, _super);
            function GeneralExamTplGridRowDomVm(config) {
                _super.call(this, config);
                this.ReactType = GeneralExamTplGridRowDomReact;
                //if (config) {
                //    this.RowData = config.RowData;
                //    this.IsAcsRelative = config.IsAcsRelative;
                //    this.LeftNum = config.LeftNum;
                //    this.RowNumber = config.RowNumber;
                //}
            }
            return GeneralExamTplGridRowDomVm;
        }(baseGridRow.MedicalBaseGridRowDom.MedicalBaseGridRowDomVm));
        GeneralExamTplGridRowDom.GeneralExamTplGridRowDomVm = GeneralExamTplGridRowDomVm;
        var GeneralExamTplGridRowDomStates = (function (_super) {
            __extends(GeneralExamTplGridRowDomStates, _super);
            function GeneralExamTplGridRowDomStates() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplGridRowDomStates;
        }(baseGridRow.MedicalBaseGridRowDom.MedicalBaseGridRowDomStates));
        GeneralExamTplGridRowDom.GeneralExamTplGridRowDomStates = GeneralExamTplGridRowDomStates;
        var GeneralExamTplGridRowDomProps = (function (_super) {
            __extends(GeneralExamTplGridRowDomProps, _super);
            function GeneralExamTplGridRowDomProps() {
                _super.apply(this, arguments);
            }
            return GeneralExamTplGridRowDomProps;
        }(baseGridRow.MedicalBaseGridRowDom.MedicalBaseGridRowDomProps));
        GeneralExamTplGridRowDom.GeneralExamTplGridRowDomProps = GeneralExamTplGridRowDomProps;
    })(GeneralExamTplGridRowDom = exports.GeneralExamTplGridRowDom || (exports.GeneralExamTplGridRowDom = {}));
});
