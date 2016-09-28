var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, React, domFile, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ReportBrandElectricalMaintanceGridRowDom;
    (function (ReportBrandElectricalMaintanceGridRowDom) {
        var ReportBrandElectricalMaintanceGridRowDomAction = (function (_super) {
            __extends(ReportBrandElectricalMaintanceGridRowDomAction, _super);
            function ReportBrandElectricalMaintanceGridRowDomAction() {
                _super.apply(this, arguments);
            }
            return ReportBrandElectricalMaintanceGridRowDomAction;
        }(domCore.DomAction));
        ReportBrandElectricalMaintanceGridRowDom.ReportBrandElectricalMaintanceGridRowDomAction = ReportBrandElectricalMaintanceGridRowDomAction;
        var ReportBrandElectricalMaintanceGridRowDomReact = (function (_super) {
            __extends(ReportBrandElectricalMaintanceGridRowDomReact, _super);
            function ReportBrandElectricalMaintanceGridRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ReportBrandElectricalMaintanceGridRowDomStates();
            }
            ReportBrandElectricalMaintanceGridRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, this.props.Vm.ColList.map(function (col) {
                    return React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, " ", _this.props.Vm.RowData[col])));
                }));
            };
            ReportBrandElectricalMaintanceGridRowDomReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            ReportBrandElectricalMaintanceGridRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ReportBrandElectricalMaintanceGridRowDomReact;
        }(domCore.DomReact));
        ReportBrandElectricalMaintanceGridRowDom.ReportBrandElectricalMaintanceGridRowDomReact = ReportBrandElectricalMaintanceGridRowDomReact;
        var ReportBrandElectricalMaintanceGridRowDomVm = (function (_super) {
            __extends(ReportBrandElectricalMaintanceGridRowDomVm, _super);
            function ReportBrandElectricalMaintanceGridRowDomVm(config) {
                _super.call(this);
                this.ReactType = ReportBrandElectricalMaintanceGridRowDomReact;
                this.SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                if (config) {
                    this.RowData = config.RowData;
                    this.IsAcsRelative = config.IsAcsRelative;
                    this.LeftNum = config.LeftNum;
                    this.RowNumber = config.RowNumber;
                    this.ColList = config.ColList;
                }
            }
            return ReportBrandElectricalMaintanceGridRowDomVm;
        }(domCore.DomVm));
        ReportBrandElectricalMaintanceGridRowDom.ReportBrandElectricalMaintanceGridRowDomVm = ReportBrandElectricalMaintanceGridRowDomVm;
        var ReportBrandElectricalMaintanceGridRowDomStates = (function (_super) {
            __extends(ReportBrandElectricalMaintanceGridRowDomStates, _super);
            function ReportBrandElectricalMaintanceGridRowDomStates() {
                _super.apply(this, arguments);
            }
            return ReportBrandElectricalMaintanceGridRowDomStates;
        }(domCore.DomStates));
        ReportBrandElectricalMaintanceGridRowDom.ReportBrandElectricalMaintanceGridRowDomStates = ReportBrandElectricalMaintanceGridRowDomStates;
        var ReportBrandElectricalMaintanceGridRowDomProps = (function (_super) {
            __extends(ReportBrandElectricalMaintanceGridRowDomProps, _super);
            function ReportBrandElectricalMaintanceGridRowDomProps() {
                _super.apply(this, arguments);
            }
            return ReportBrandElectricalMaintanceGridRowDomProps;
        }(domCore.DomProps));
        ReportBrandElectricalMaintanceGridRowDom.ReportBrandElectricalMaintanceGridRowDomProps = ReportBrandElectricalMaintanceGridRowDomProps;
    })(ReportBrandElectricalMaintanceGridRowDom = exports.ReportBrandElectricalMaintanceGridRowDom || (exports.ReportBrandElectricalMaintanceGridRowDom = {}));
});
