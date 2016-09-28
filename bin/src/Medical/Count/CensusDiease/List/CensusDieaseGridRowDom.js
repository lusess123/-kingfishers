var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/02Mulite/SingleCheckBox", "./../../../Common/RowButtonExpandDom", "./../../../Common/Data"], function (require, exports, React, domFile, singleCheckFile, expandFile, constantData) {
    "use strict";
    var domCore = domFile.Core;
    var CensusDieaseGridRowDom;
    (function (CensusDieaseGridRowDom) {
        var CensusDieaseGridRowDomAction = (function (_super) {
            __extends(CensusDieaseGridRowDomAction, _super);
            function CensusDieaseGridRowDomAction() {
                _super.apply(this, arguments);
            }
            return CensusDieaseGridRowDomAction;
        }(domCore.DomAction));
        CensusDieaseGridRowDom.CensusDieaseGridRowDomAction = CensusDieaseGridRowDomAction;
        var CensusDieaseGridRowDomReact = (function (_super) {
            __extends(CensusDieaseGridRowDomReact, _super);
            function CensusDieaseGridRowDomReact() {
                _super.apply(this, arguments);
                this.state = new CensusDieaseGridRowDomStates();
            }
            CensusDieaseGridRowDomReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, React.createElement("td", {className: (this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-td" : ""), style: { left: this.props.Vm.LeftNum }}, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowNumber))), React.createElement("td", {className: "hide"}, React.createElement("span", null, React.createElement("input", {placeholder: "..", type: "hidden"}))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Number))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Name))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.GetText(constantData.Data.GenderTypeData, this.props.Vm.RowData.Gender)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.ExamDate))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.DieaseName))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.DoctorName))));
            };
            CensusDieaseGridRowDomReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            CensusDieaseGridRowDomReact.prototype.createRowButtonExpand = function () {
                return this.props.Vm.RowButtonExpand.intoDom();
            };
            CensusDieaseGridRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return CensusDieaseGridRowDomReact;
        }(domCore.DomReact));
        CensusDieaseGridRowDom.CensusDieaseGridRowDomReact = CensusDieaseGridRowDomReact;
        var CensusDieaseGridRowDomVm = (function (_super) {
            __extends(CensusDieaseGridRowDomVm, _super);
            function CensusDieaseGridRowDomVm(config) {
                _super.call(this);
                this.ReactType = CensusDieaseGridRowDomReact;
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
            CensusDieaseGridRowDomVm.prototype.GetText = function (List, Id) {
                for (var index = 0; index < List.length; index++) {
                    if (List[index].Value == Id) {
                        return List[index].Text;
                    }
                }
                return "";
            };
            return CensusDieaseGridRowDomVm;
        }(domCore.DomVm));
        CensusDieaseGridRowDom.CensusDieaseGridRowDomVm = CensusDieaseGridRowDomVm;
        var CensusDieaseGridRowDomStates = (function (_super) {
            __extends(CensusDieaseGridRowDomStates, _super);
            function CensusDieaseGridRowDomStates() {
                _super.apply(this, arguments);
            }
            return CensusDieaseGridRowDomStates;
        }(domCore.DomStates));
        CensusDieaseGridRowDom.CensusDieaseGridRowDomStates = CensusDieaseGridRowDomStates;
        var CensusDieaseGridRowDomProps = (function (_super) {
            __extends(CensusDieaseGridRowDomProps, _super);
            function CensusDieaseGridRowDomProps() {
                _super.apply(this, arguments);
            }
            return CensusDieaseGridRowDomProps;
        }(domCore.DomProps));
        CensusDieaseGridRowDom.CensusDieaseGridRowDomProps = CensusDieaseGridRowDomProps;
    })(CensusDieaseGridRowDom = exports.CensusDieaseGridRowDom || (exports.CensusDieaseGridRowDom = {}));
});
