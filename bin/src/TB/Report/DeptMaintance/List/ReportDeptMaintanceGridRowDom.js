var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, React, domFile, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ReportDeptMaintanceGridRowDom;
    (function (ReportDeptMaintanceGridRowDom) {
        var ReportDeptMaintanceGridRowDomAction = (function (_super) {
            __extends(ReportDeptMaintanceGridRowDomAction, _super);
            function ReportDeptMaintanceGridRowDomAction() {
                _super.apply(this, arguments);
            }
            return ReportDeptMaintanceGridRowDomAction;
        }(domCore.DomAction));
        ReportDeptMaintanceGridRowDom.ReportDeptMaintanceGridRowDomAction = ReportDeptMaintanceGridRowDomAction;
        var ReportDeptMaintanceGridRowDomReact = (function (_super) {
            __extends(ReportDeptMaintanceGridRowDomReact, _super);
            function ReportDeptMaintanceGridRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ReportDeptMaintanceGridRowDomStates();
            }
            ReportDeptMaintanceGridRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, this.props.Vm.ColList.map(function (col) {
                    return React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, " ", _this.props.Vm.RowData[col])));
                }));
            };
            ReportDeptMaintanceGridRowDomReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            ReportDeptMaintanceGridRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ReportDeptMaintanceGridRowDomReact;
        }(domCore.DomReact));
        ReportDeptMaintanceGridRowDom.ReportDeptMaintanceGridRowDomReact = ReportDeptMaintanceGridRowDomReact;
        var ReportDeptMaintanceGridRowDomVm = (function (_super) {
            __extends(ReportDeptMaintanceGridRowDomVm, _super);
            // public IsMulit: boolean = true;
            function ReportDeptMaintanceGridRowDomVm(config) {
                _super.call(this);
                this.ReactType = ReportDeptMaintanceGridRowDomReact;
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
            return ReportDeptMaintanceGridRowDomVm;
        }(domCore.DomVm));
        ReportDeptMaintanceGridRowDom.ReportDeptMaintanceGridRowDomVm = ReportDeptMaintanceGridRowDomVm;
        var ReportDeptMaintanceGridRowDomStates = (function (_super) {
            __extends(ReportDeptMaintanceGridRowDomStates, _super);
            function ReportDeptMaintanceGridRowDomStates() {
                _super.apply(this, arguments);
            }
            return ReportDeptMaintanceGridRowDomStates;
        }(domCore.DomStates));
        ReportDeptMaintanceGridRowDom.ReportDeptMaintanceGridRowDomStates = ReportDeptMaintanceGridRowDomStates;
        var ReportDeptMaintanceGridRowDomProps = (function (_super) {
            __extends(ReportDeptMaintanceGridRowDomProps, _super);
            function ReportDeptMaintanceGridRowDomProps() {
                _super.apply(this, arguments);
            }
            return ReportDeptMaintanceGridRowDomProps;
        }(domCore.DomProps));
        ReportDeptMaintanceGridRowDom.ReportDeptMaintanceGridRowDomProps = ReportDeptMaintanceGridRowDomProps;
    })(ReportDeptMaintanceGridRowDom = exports.ReportDeptMaintanceGridRowDom || (exports.ReportDeptMaintanceGridRowDom = {}));
});
