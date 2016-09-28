var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, React, domFile, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ReportElectricalFaultCategoryGridRowDom;
    (function (ReportElectricalFaultCategoryGridRowDom) {
        var ReportElectricalFaultCategoryGridRowDomAction = (function (_super) {
            __extends(ReportElectricalFaultCategoryGridRowDomAction, _super);
            function ReportElectricalFaultCategoryGridRowDomAction() {
                _super.apply(this, arguments);
            }
            return ReportElectricalFaultCategoryGridRowDomAction;
        }(domCore.DomAction));
        ReportElectricalFaultCategoryGridRowDom.ReportElectricalFaultCategoryGridRowDomAction = ReportElectricalFaultCategoryGridRowDomAction;
        var ReportElectricalFaultCategoryGridRowDomReact = (function (_super) {
            __extends(ReportElectricalFaultCategoryGridRowDomReact, _super);
            function ReportElectricalFaultCategoryGridRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ReportElectricalFaultCategoryGridRowDomStates();
            }
            ReportElectricalFaultCategoryGridRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, this.props.Vm.ColList.map(function (col) {
                    return React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, " ", _this.props.Vm.RowData[col])));
                }));
            };
            ReportElectricalFaultCategoryGridRowDomReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            ReportElectricalFaultCategoryGridRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ReportElectricalFaultCategoryGridRowDomReact;
        }(domCore.DomReact));
        ReportElectricalFaultCategoryGridRowDom.ReportElectricalFaultCategoryGridRowDomReact = ReportElectricalFaultCategoryGridRowDomReact;
        var ReportElectricalFaultCategoryGridRowDomVm = (function (_super) {
            __extends(ReportElectricalFaultCategoryGridRowDomVm, _super);
            function ReportElectricalFaultCategoryGridRowDomVm(config) {
                _super.call(this);
                this.ReactType = ReportElectricalFaultCategoryGridRowDomReact;
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
            return ReportElectricalFaultCategoryGridRowDomVm;
        }(domCore.DomVm));
        ReportElectricalFaultCategoryGridRowDom.ReportElectricalFaultCategoryGridRowDomVm = ReportElectricalFaultCategoryGridRowDomVm;
        var ReportElectricalFaultCategoryGridRowDomStates = (function (_super) {
            __extends(ReportElectricalFaultCategoryGridRowDomStates, _super);
            function ReportElectricalFaultCategoryGridRowDomStates() {
                _super.apply(this, arguments);
            }
            return ReportElectricalFaultCategoryGridRowDomStates;
        }(domCore.DomStates));
        ReportElectricalFaultCategoryGridRowDom.ReportElectricalFaultCategoryGridRowDomStates = ReportElectricalFaultCategoryGridRowDomStates;
        var ReportElectricalFaultCategoryGridRowDomProps = (function (_super) {
            __extends(ReportElectricalFaultCategoryGridRowDomProps, _super);
            function ReportElectricalFaultCategoryGridRowDomProps() {
                _super.apply(this, arguments);
            }
            return ReportElectricalFaultCategoryGridRowDomProps;
        }(domCore.DomProps));
        ReportElectricalFaultCategoryGridRowDom.ReportElectricalFaultCategoryGridRowDomProps = ReportElectricalFaultCategoryGridRowDomProps;
    })(ReportElectricalFaultCategoryGridRowDom = exports.ReportElectricalFaultCategoryGridRowDom || (exports.ReportElectricalFaultCategoryGridRowDom = {}));
});
