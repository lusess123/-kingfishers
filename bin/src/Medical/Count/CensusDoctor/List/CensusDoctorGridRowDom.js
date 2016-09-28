var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/02Mulite/SingleCheckBox", "./../../../Common/RowButtonExpandDom"], function (require, exports, React, domFile, singleCheckFile, expandFile) {
    "use strict";
    var domCore = domFile.Core;
    var CensusDoctorGridRowDom;
    (function (CensusDoctorGridRowDom) {
        var CensusDoctorGridRowDomAction = (function (_super) {
            __extends(CensusDoctorGridRowDomAction, _super);
            function CensusDoctorGridRowDomAction() {
                _super.apply(this, arguments);
            }
            return CensusDoctorGridRowDomAction;
        }(domCore.DomAction));
        CensusDoctorGridRowDom.CensusDoctorGridRowDomAction = CensusDoctorGridRowDomAction;
        var CensusDoctorGridRowDomReact = (function (_super) {
            __extends(CensusDoctorGridRowDomReact, _super);
            function CensusDoctorGridRowDomReact() {
                _super.apply(this, arguments);
                this.state = new CensusDoctorGridRowDomStates();
            }
            CensusDoctorGridRowDomReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, React.createElement("td", {className: (this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-td" : ""), style: { left: this.props.Vm.LeftNum }}, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowNumber))), React.createElement("td", {className: "hide"}, React.createElement("span", null, React.createElement("input", {placeholder: "..", type: "hidden"}))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.DoctorName))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Department))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.DoctorType))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.ExamPeople))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.ExamDate))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.InputTime))));
            };
            CensusDoctorGridRowDomReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            CensusDoctorGridRowDomReact.prototype.createRowButtonExpand = function () {
                return this.props.Vm.RowButtonExpand.intoDom();
            };
            CensusDoctorGridRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return CensusDoctorGridRowDomReact;
        }(domCore.DomReact));
        CensusDoctorGridRowDom.CensusDoctorGridRowDomReact = CensusDoctorGridRowDomReact;
        var CensusDoctorGridRowDomVm = (function (_super) {
            __extends(CensusDoctorGridRowDomVm, _super);
            function CensusDoctorGridRowDomVm(config) {
                _super.call(this);
                this.ReactType = CensusDoctorGridRowDomReact;
                this.SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();
                if (config) {
                    this.RowData = config.RowData;
                    this.IsAcsRelative = config.IsAcsRelative;
                    this.LeftNum = config.LeftNum;
                    this.RowNumber = config.RowNumber;
                }
            }
            return CensusDoctorGridRowDomVm;
        }(domCore.DomVm));
        CensusDoctorGridRowDom.CensusDoctorGridRowDomVm = CensusDoctorGridRowDomVm;
        var CensusDoctorGridRowDomStates = (function (_super) {
            __extends(CensusDoctorGridRowDomStates, _super);
            function CensusDoctorGridRowDomStates() {
                _super.apply(this, arguments);
            }
            return CensusDoctorGridRowDomStates;
        }(domCore.DomStates));
        CensusDoctorGridRowDom.CensusDoctorGridRowDomStates = CensusDoctorGridRowDomStates;
        var CensusDoctorGridRowDomProps = (function (_super) {
            __extends(CensusDoctorGridRowDomProps, _super);
            function CensusDoctorGridRowDomProps() {
                _super.apply(this, arguments);
            }
            return CensusDoctorGridRowDomProps;
        }(domCore.DomProps));
        CensusDoctorGridRowDom.CensusDoctorGridRowDomProps = CensusDoctorGridRowDomProps;
    })(CensusDoctorGridRowDom = exports.CensusDoctorGridRowDom || (exports.CensusDoctorGridRowDom = {}));
});
