var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Url", "./../../../Common/RowButtonExpandDom", "./../../../../02col/02Mulite/SingleCheckBox", "./../../../Common/Data", "react"], function (require, exports, domFile, urlFile, expandFile, singleCheckFile, constantData, React) {
    "use strict";
    var domCore = domFile.Core;
    var UnitGridRowDow;
    (function (UnitGridRowDow) {
        var UnitGridRowDowAction = (function (_super) {
            __extends(UnitGridRowDowAction, _super);
            function UnitGridRowDowAction() {
                _super.apply(this, arguments);
            }
            return UnitGridRowDowAction;
        }(domCore.DomAction));
        UnitGridRowDow.UnitGridRowDowAction = UnitGridRowDowAction;
        var UnitGridRowDowReact = (function (_super) {
            __extends(UnitGridRowDowReact, _super);
            function UnitGridRowDowReact() {
                _super.apply(this, arguments);
                this.state = new UnitGridRowDowStates();
            }
            UnitGridRowDowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, React.createElement("td", {className: (this.props.Vm.IsAcsRelative ? "  Hf-relative Hf-table-td " : ""), style: { left: this.props.Vm.LeftNum }}, React.createElement("span", null, this.createSingleCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber), this.createRowButtonExpand())), React.createElement("td", {className: "hide"}, React.createElement("span", null, React.createElement("input", {placeholder: "..", type: "hidden"}))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Code))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, React.createElement("a", {onClick: function () { _this.fun_linkDetai(); return false; }}, this.props.Vm.RowData.Name)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.ContactPerson))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Phone))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Fax))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Email))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.GetText(constantData.Data.UnitTypeData, this.props.Vm.RowData.Type)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Address))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Description))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.UPDATE_TIME))));
            };
            UnitGridRowDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            UnitGridRowDowReact.prototype.fun_linkDetai = function () {
                urlFile.Core.AkUrl.Current().openUrl("$panelUnitDetailPage$" + this.props.Vm.RowData.FID + "$");
            };
            UnitGridRowDowReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            UnitGridRowDowReact.prototype.createRowButtonExpand = function () {
                return this.props.Vm.RowButtonExpand.intoDom();
            };
            return UnitGridRowDowReact;
        }(domCore.DomReact));
        UnitGridRowDow.UnitGridRowDowReact = UnitGridRowDowReact;
        var UnitGridRowDowVm = (function (_super) {
            __extends(UnitGridRowDowVm, _super);
            function UnitGridRowDowVm(config) {
                _super.call(this);
                this.ReactType = UnitGridRowDowReact;
                this.RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();
                this.SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                if (config) {
                    this.RowData = config.RowData;
                    this.IsAcsRelative = config.IsAcsRelative;
                    this.LeftNum = config.LeftNum;
                    this.RowNumber = config.RowNumber;
                }
            }
            UnitGridRowDowVm.prototype.GetText = function (List, Id) {
                for (var index = 0; index < List.length; index++) {
                    if (List[index].Value == Id) {
                        return List[index].Text;
                    }
                }
                return "";
            };
            return UnitGridRowDowVm;
        }(domCore.DomVm));
        UnitGridRowDow.UnitGridRowDowVm = UnitGridRowDowVm;
        var UnitGridRowDowStates = (function (_super) {
            __extends(UnitGridRowDowStates, _super);
            function UnitGridRowDowStates() {
                _super.apply(this, arguments);
            }
            return UnitGridRowDowStates;
        }(domCore.DomStates));
        UnitGridRowDow.UnitGridRowDowStates = UnitGridRowDowStates;
        var UnitGridRowDowProps = (function (_super) {
            __extends(UnitGridRowDowProps, _super);
            function UnitGridRowDowProps() {
                _super.apply(this, arguments);
            }
            return UnitGridRowDowProps;
        }(domCore.DomProps));
        UnitGridRowDow.UnitGridRowDowProps = UnitGridRowDowProps;
    })(UnitGridRowDow = exports.UnitGridRowDow || (exports.UnitGridRowDow = {}));
});
