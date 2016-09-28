var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Url", "./../../../Common/RowButtonExpandDom", "./../../../../02col/02Mulite/SingleCheckBox", "react"], function (require, exports, domFile, urlFile, expandFile, singleCheckFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var CombinationExamItemGridRowDow;
    (function (CombinationExamItemGridRowDow) {
        var CombinationExamItemGridRowDowAction = (function (_super) {
            __extends(CombinationExamItemGridRowDowAction, _super);
            function CombinationExamItemGridRowDowAction() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemGridRowDowAction;
        }(domCore.DomAction));
        CombinationExamItemGridRowDow.CombinationExamItemGridRowDowAction = CombinationExamItemGridRowDowAction;
        var CombinationExamItemGridRowDowReact = (function (_super) {
            __extends(CombinationExamItemGridRowDowReact, _super);
            function CombinationExamItemGridRowDowReact() {
                _super.apply(this, arguments);
                this.state = new CombinationExamItemGridRowDowStates();
            }
            CombinationExamItemGridRowDowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, React.createElement("td", {className: (this.props.Vm.IsAcsRelative ? "  acsRelative  acsTableTr " : ""), style: { left: this.props.Vm.LeftNum }}, React.createElement("span", null, this.createSingleCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber), this.createRowButtonExpand())), React.createElement("td", {className: "hide"}, React.createElement("span", null, React.createElement("input", {placeholder: "..", type: "hidden"}))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.ItemId))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, React.createElement("a", {onClick: function () { _this.fun_linkDetai(); return false; }}, this.props.Vm.RowData.PackageId)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.UPDATE_TIME))));
            };
            CombinationExamItemGridRowDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            CombinationExamItemGridRowDowReact.prototype.fun_linkDetai = function () {
                urlFile.Core.AkUrl.Current().openUrl("$panelCombinationExamItemDetailPage$" + this.props.Vm.RowData.FID + "$");
            };
            CombinationExamItemGridRowDowReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            CombinationExamItemGridRowDowReact.prototype.createRowButtonExpand = function () {
                return this.props.Vm.RowButtonExpand.intoDom();
            };
            return CombinationExamItemGridRowDowReact;
        }(domCore.DomReact));
        CombinationExamItemGridRowDow.CombinationExamItemGridRowDowReact = CombinationExamItemGridRowDowReact;
        var CombinationExamItemGridRowDowVm = (function (_super) {
            __extends(CombinationExamItemGridRowDowVm, _super);
            function CombinationExamItemGridRowDowVm(config) {
                _super.call(this);
                this.ReactType = CombinationExamItemGridRowDowReact;
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
            return CombinationExamItemGridRowDowVm;
        }(domCore.DomVm));
        CombinationExamItemGridRowDow.CombinationExamItemGridRowDowVm = CombinationExamItemGridRowDowVm;
        var CombinationExamItemGridRowDowStates = (function (_super) {
            __extends(CombinationExamItemGridRowDowStates, _super);
            function CombinationExamItemGridRowDowStates() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemGridRowDowStates;
        }(domCore.DomStates));
        CombinationExamItemGridRowDow.CombinationExamItemGridRowDowStates = CombinationExamItemGridRowDowStates;
        var CombinationExamItemGridRowDowProps = (function (_super) {
            __extends(CombinationExamItemGridRowDowProps, _super);
            function CombinationExamItemGridRowDowProps() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemGridRowDowProps;
        }(domCore.DomProps));
        CombinationExamItemGridRowDow.CombinationExamItemGridRowDowProps = CombinationExamItemGridRowDowProps;
    })(CombinationExamItemGridRowDow = exports.CombinationExamItemGridRowDow || (exports.CombinationExamItemGridRowDow = {}));
});
