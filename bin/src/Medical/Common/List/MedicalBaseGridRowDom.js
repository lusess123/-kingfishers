var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../02col/02Mulite/SingleCheckBox", "./../RowButtonExpandDom"], function (require, exports, domFile, React, singleCheckFile, expandFile) {
    "use strict";
    var domCore = domFile.Core;
    var MedicalBaseGridRowDom;
    (function (MedicalBaseGridRowDom) {
        var MedicalBaseGridRowDomAction = (function (_super) {
            __extends(MedicalBaseGridRowDomAction, _super);
            function MedicalBaseGridRowDomAction() {
                _super.apply(this, arguments);
            }
            return MedicalBaseGridRowDomAction;
        }(domCore.DomAction));
        MedicalBaseGridRowDom.MedicalBaseGridRowDomAction = MedicalBaseGridRowDomAction;
        var MedicalBaseGridRowDomReact = (function (_super) {
            __extends(MedicalBaseGridRowDomReact, _super);
            function MedicalBaseGridRowDomReact() {
                _super.apply(this, arguments);
            }
            MedicalBaseGridRowDomReact.prototype.pSender = function () {
                return null;
            };
            MedicalBaseGridRowDomReact.prototype.createFirstTd = function () {
                return React.createElement("td", {className: (this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-td" : ""), style: { left: this.props.Vm.LeftNum }}, React.createElement("span", null, this.createSingleCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber), this.createRowButtonExpand()));
            };
            MedicalBaseGridRowDomReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            MedicalBaseGridRowDomReact.prototype.createRowButtonExpand = function () {
                return this.props.Vm.RowButtonExpand.intoDom();
            };
            MedicalBaseGridRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MedicalBaseGridRowDomReact;
        }(domCore.DomReact));
        MedicalBaseGridRowDom.MedicalBaseGridRowDomReact = MedicalBaseGridRowDomReact;
        var MedicalBaseGridRowDomVm = (function (_super) {
            __extends(MedicalBaseGridRowDomVm, _super);
            function MedicalBaseGridRowDomVm(config) {
                _super.call(this);
                this.ReactType = MedicalBaseGridRowDomReact;
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
            return MedicalBaseGridRowDomVm;
        }(domCore.DomVm));
        MedicalBaseGridRowDom.MedicalBaseGridRowDomVm = MedicalBaseGridRowDomVm;
        var MedicalBaseGridRowDomStates = (function (_super) {
            __extends(MedicalBaseGridRowDomStates, _super);
            function MedicalBaseGridRowDomStates() {
                _super.apply(this, arguments);
            }
            return MedicalBaseGridRowDomStates;
        }(domCore.DomStates));
        MedicalBaseGridRowDom.MedicalBaseGridRowDomStates = MedicalBaseGridRowDomStates;
        var MedicalBaseGridRowDomProps = (function (_super) {
            __extends(MedicalBaseGridRowDomProps, _super);
            function MedicalBaseGridRowDomProps() {
                _super.apply(this, arguments);
            }
            return MedicalBaseGridRowDomProps;
        }(domCore.DomProps));
        MedicalBaseGridRowDom.MedicalBaseGridRowDomProps = MedicalBaseGridRowDomProps;
    })(MedicalBaseGridRowDom = exports.MedicalBaseGridRowDom || (exports.MedicalBaseGridRowDom = {}));
});
