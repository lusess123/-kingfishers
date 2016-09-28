var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../Common/List/MedicalBaseGridRowDom"], function (require, exports, React, baseGridRow) {
    "use strict";
    var DeptConclusionTplGridRowDom;
    (function (DeptConclusionTplGridRowDom) {
        var DeptConclusionTplGridRowDomAction = (function (_super) {
            __extends(DeptConclusionTplGridRowDomAction, _super);
            function DeptConclusionTplGridRowDomAction() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplGridRowDomAction;
        }(baseGridRow.MedicalBaseGridRowDom.MedicalBaseGridRowDomAction));
        DeptConclusionTplGridRowDom.DeptConclusionTplGridRowDomAction = DeptConclusionTplGridRowDomAction;
        var DeptConclusionTplGridRowDomReact = (function (_super) {
            __extends(DeptConclusionTplGridRowDomReact, _super);
            function DeptConclusionTplGridRowDomReact() {
                _super.apply(this, arguments);
                this.state = new DeptConclusionTplGridRowDomStates();
            }
            DeptConclusionTplGridRowDomReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, this.createFirstTd(), React.createElement("td", {className: "hide"}, React.createElement("span", null, React.createElement("input", {placeholder: "..", type: "hidden"}))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.DeptName))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Name))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Content))));
            };
            return DeptConclusionTplGridRowDomReact;
        }(baseGridRow.MedicalBaseGridRowDom.MedicalBaseGridRowDomReact));
        DeptConclusionTplGridRowDom.DeptConclusionTplGridRowDomReact = DeptConclusionTplGridRowDomReact;
        var DeptConclusionTplGridRowDomVm = (function (_super) {
            __extends(DeptConclusionTplGridRowDomVm, _super);
            function DeptConclusionTplGridRowDomVm(config) {
                _super.call(this, config);
                this.ReactType = DeptConclusionTplGridRowDomReact;
                //if (config) {
                //    this.RowData = config.RowData;
                //    this.IsAcsRelative = config.IsAcsRelative;
                //    this.LeftNum = config.LeftNum;
                //    this.RowNumber = config.RowNumber;
                //}
            }
            return DeptConclusionTplGridRowDomVm;
        }(baseGridRow.MedicalBaseGridRowDom.MedicalBaseGridRowDomVm));
        DeptConclusionTplGridRowDom.DeptConclusionTplGridRowDomVm = DeptConclusionTplGridRowDomVm;
        var DeptConclusionTplGridRowDomStates = (function (_super) {
            __extends(DeptConclusionTplGridRowDomStates, _super);
            function DeptConclusionTplGridRowDomStates() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplGridRowDomStates;
        }(baseGridRow.MedicalBaseGridRowDom.MedicalBaseGridRowDomStates));
        DeptConclusionTplGridRowDom.DeptConclusionTplGridRowDomStates = DeptConclusionTplGridRowDomStates;
        var DeptConclusionTplGridRowDomProps = (function (_super) {
            __extends(DeptConclusionTplGridRowDomProps, _super);
            function DeptConclusionTplGridRowDomProps() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTplGridRowDomProps;
        }(baseGridRow.MedicalBaseGridRowDom.MedicalBaseGridRowDomProps));
        DeptConclusionTplGridRowDom.DeptConclusionTplGridRowDomProps = DeptConclusionTplGridRowDomProps;
    })(DeptConclusionTplGridRowDom = exports.DeptConclusionTplGridRowDom || (exports.DeptConclusionTplGridRowDom = {}));
});
