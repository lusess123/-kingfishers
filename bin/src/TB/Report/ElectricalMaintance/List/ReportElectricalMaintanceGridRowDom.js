var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, React, domFile, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ReportElectricalMaintanceGridRowDom;
    (function (ReportElectricalMaintanceGridRowDom) {
        var ReportElectricalMaintanceGridRowDomAction = (function (_super) {
            __extends(ReportElectricalMaintanceGridRowDomAction, _super);
            function ReportElectricalMaintanceGridRowDomAction() {
                _super.apply(this, arguments);
            }
            return ReportElectricalMaintanceGridRowDomAction;
        }(domCore.DomAction));
        ReportElectricalMaintanceGridRowDom.ReportElectricalMaintanceGridRowDomAction = ReportElectricalMaintanceGridRowDomAction;
        var ReportElectricalMaintanceGridRowDomReact = (function (_super) {
            __extends(ReportElectricalMaintanceGridRowDomReact, _super);
            function ReportElectricalMaintanceGridRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ReportElectricalMaintanceGridRowDomStates();
            }
            ReportElectricalMaintanceGridRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, this.props.Vm.ColList.map(function (col) {
                    return React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, " ", _this.props.Vm.RowData[col])));
                }));
            };
            ReportElectricalMaintanceGridRowDomReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            ReportElectricalMaintanceGridRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ReportElectricalMaintanceGridRowDomReact;
        }(domCore.DomReact));
        ReportElectricalMaintanceGridRowDom.ReportElectricalMaintanceGridRowDomReact = ReportElectricalMaintanceGridRowDomReact;
        var ReportElectricalMaintanceGridRowDomVm = (function (_super) {
            __extends(ReportElectricalMaintanceGridRowDomVm, _super);
            function ReportElectricalMaintanceGridRowDomVm(config) {
                _super.call(this);
                this.ReactType = ReportElectricalMaintanceGridRowDomReact;
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
            return ReportElectricalMaintanceGridRowDomVm;
        }(domCore.DomVm));
        ReportElectricalMaintanceGridRowDom.ReportElectricalMaintanceGridRowDomVm = ReportElectricalMaintanceGridRowDomVm;
        var ReportElectricalMaintanceGridRowDomStates = (function (_super) {
            __extends(ReportElectricalMaintanceGridRowDomStates, _super);
            function ReportElectricalMaintanceGridRowDomStates() {
                _super.apply(this, arguments);
            }
            return ReportElectricalMaintanceGridRowDomStates;
        }(domCore.DomStates));
        ReportElectricalMaintanceGridRowDom.ReportElectricalMaintanceGridRowDomStates = ReportElectricalMaintanceGridRowDomStates;
        var ReportElectricalMaintanceGridRowDomProps = (function (_super) {
            __extends(ReportElectricalMaintanceGridRowDomProps, _super);
            function ReportElectricalMaintanceGridRowDomProps() {
                _super.apply(this, arguments);
            }
            return ReportElectricalMaintanceGridRowDomProps;
        }(domCore.DomProps));
        ReportElectricalMaintanceGridRowDom.ReportElectricalMaintanceGridRowDomProps = ReportElectricalMaintanceGridRowDomProps;
    })(ReportElectricalMaintanceGridRowDom = exports.ReportElectricalMaintanceGridRowDom || (exports.ReportElectricalMaintanceGridRowDom = {}));
});
