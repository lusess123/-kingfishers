var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/02Mulite/SingleCheckBox", "./../../../Common/RowButtonExpandDom"], function (require, exports, React, domFile, singleCheckFile, expandFile) {
    "use strict";
    var domCore = domFile.Core;
    var AnomalyGridRowDom;
    (function (AnomalyGridRowDom) {
        var AnomalyGridRowDomAction = (function (_super) {
            __extends(AnomalyGridRowDomAction, _super);
            function AnomalyGridRowDomAction() {
                _super.apply(this, arguments);
            }
            return AnomalyGridRowDomAction;
        }(domCore.DomAction));
        AnomalyGridRowDom.AnomalyGridRowDomAction = AnomalyGridRowDomAction;
        var AnomalyGridRowDomReact = (function (_super) {
            __extends(AnomalyGridRowDomReact, _super);
            function AnomalyGridRowDomReact() {
                _super.apply(this, arguments);
                this.state = new AnomalyGridRowDomStates();
            }
            AnomalyGridRowDomReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, React.createElement("td", {className: (this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-td" : ""), style: { left: this.props.Vm.LeftNum }}, React.createElement("span", null, this.createSingleCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber), this.createRowButtonExpand())), React.createElement("td", {className: "hide"}, React.createElement("span", null, React.createElement("input", {placeholder: "..", type: "hidden"}))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.SimpleCode))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Name))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.OrderNumber))));
            };
            AnomalyGridRowDomReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            AnomalyGridRowDomReact.prototype.createRowButtonExpand = function () {
                return this.props.Vm.RowButtonExpand.intoDom();
            };
            AnomalyGridRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AnomalyGridRowDomReact;
        }(domCore.DomReact));
        AnomalyGridRowDom.AnomalyGridRowDomReact = AnomalyGridRowDomReact;
        var AnomalyGridRowDomVm = (function (_super) {
            __extends(AnomalyGridRowDomVm, _super);
            function AnomalyGridRowDomVm(config) {
                _super.call(this);
                this.ReactType = AnomalyGridRowDomReact;
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
            return AnomalyGridRowDomVm;
        }(domCore.DomVm));
        AnomalyGridRowDom.AnomalyGridRowDomVm = AnomalyGridRowDomVm;
        var AnomalyGridRowDomStates = (function (_super) {
            __extends(AnomalyGridRowDomStates, _super);
            function AnomalyGridRowDomStates() {
                _super.apply(this, arguments);
            }
            return AnomalyGridRowDomStates;
        }(domCore.DomStates));
        AnomalyGridRowDom.AnomalyGridRowDomStates = AnomalyGridRowDomStates;
        var AnomalyGridRowDomProps = (function (_super) {
            __extends(AnomalyGridRowDomProps, _super);
            function AnomalyGridRowDomProps() {
                _super.apply(this, arguments);
            }
            return AnomalyGridRowDomProps;
        }(domCore.DomProps));
        AnomalyGridRowDom.AnomalyGridRowDomProps = AnomalyGridRowDomProps;
    })(AnomalyGridRowDom = exports.AnomalyGridRowDom || (exports.AnomalyGridRowDom = {}));
});
