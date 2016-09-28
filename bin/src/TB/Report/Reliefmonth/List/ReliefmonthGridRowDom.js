var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, React, domFile, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ReliefmonthGridRowDom;
    (function (ReliefmonthGridRowDom) {
        var ReliefmonthGridRowDomAction = (function (_super) {
            __extends(ReliefmonthGridRowDomAction, _super);
            function ReliefmonthGridRowDomAction() {
                _super.apply(this, arguments);
            }
            return ReliefmonthGridRowDomAction;
        }(domCore.DomAction));
        ReliefmonthGridRowDom.ReliefmonthGridRowDomAction = ReliefmonthGridRowDomAction;
        var ReliefmonthGridRowDomReact = (function (_super) {
            __extends(ReliefmonthGridRowDomReact, _super);
            function ReliefmonthGridRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ReliefmonthGridRowDomStates();
            }
            ReliefmonthGridRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, this.props.Vm.ColList.map(function (col) {
                    return React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, " ", _this.props.Vm.RowData[col])));
                }));
            };
            ReliefmonthGridRowDomReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            ReliefmonthGridRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ReliefmonthGridRowDomReact;
        }(domCore.DomReact));
        ReliefmonthGridRowDom.ReliefmonthGridRowDomReact = ReliefmonthGridRowDomReact;
        var ReliefmonthGridRowDomVm = (function (_super) {
            __extends(ReliefmonthGridRowDomVm, _super);
            function ReliefmonthGridRowDomVm(config) {
                _super.call(this);
                this.ReactType = ReliefmonthGridRowDomReact;
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
            return ReliefmonthGridRowDomVm;
        }(domCore.DomVm));
        ReliefmonthGridRowDom.ReliefmonthGridRowDomVm = ReliefmonthGridRowDomVm;
        var ReliefmonthGridRowDomStates = (function (_super) {
            __extends(ReliefmonthGridRowDomStates, _super);
            function ReliefmonthGridRowDomStates() {
                _super.apply(this, arguments);
            }
            return ReliefmonthGridRowDomStates;
        }(domCore.DomStates));
        ReliefmonthGridRowDom.ReliefmonthGridRowDomStates = ReliefmonthGridRowDomStates;
        var ReliefmonthGridRowDomProps = (function (_super) {
            __extends(ReliefmonthGridRowDomProps, _super);
            function ReliefmonthGridRowDomProps() {
                _super.apply(this, arguments);
            }
            return ReliefmonthGridRowDomProps;
        }(domCore.DomProps));
        ReliefmonthGridRowDom.ReliefmonthGridRowDomProps = ReliefmonthGridRowDomProps;
    })(ReliefmonthGridRowDom = exports.ReliefmonthGridRowDom || (exports.ReliefmonthGridRowDom = {}));
});
