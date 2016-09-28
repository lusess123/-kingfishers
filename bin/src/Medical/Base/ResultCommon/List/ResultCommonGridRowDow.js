var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Url", "./../../../Common/RowButtonExpandDom", "./../../../../02col/02Mulite/SingleCheckBox", "react"], function (require, exports, domFile, urlFile, expandFile, singleCheckFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var ResultCommonGridRowDow;
    (function (ResultCommonGridRowDow) {
        var ResultCommonGridRowDowAction = (function (_super) {
            __extends(ResultCommonGridRowDowAction, _super);
            function ResultCommonGridRowDowAction() {
                _super.apply(this, arguments);
            }
            return ResultCommonGridRowDowAction;
        }(domCore.DomAction));
        ResultCommonGridRowDow.ResultCommonGridRowDowAction = ResultCommonGridRowDowAction;
        var ResultCommonGridRowDowReact = (function (_super) {
            __extends(ResultCommonGridRowDowReact, _super);
            function ResultCommonGridRowDowReact() {
                _super.apply(this, arguments);
                this.state = new ResultCommonGridRowDowStates();
            }
            ResultCommonGridRowDowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, React.createElement("td", {className: (this.props.Vm.IsAcsRelative ? "  Hf-relative Hf-table-td " : ""), style: { left: this.props.Vm.LeftNum }}, React.createElement("span", null, this.createSingleCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber), this.createRowButtonExpand())), React.createElement("td", {className: "hide"}, React.createElement("span", null, React.createElement("input", {placeholder: "..", type: "hidden"}))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.SimpleCode))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, React.createElement("a", {onClick: function () { _this.fun_linkDetai(); return false; }}, this.props.Vm.RowData.ItemId)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Result))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.OrderNum))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.UPDATE_TIME))));
            };
            ResultCommonGridRowDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            ResultCommonGridRowDowReact.prototype.fun_linkDetai = function () {
                urlFile.Core.AkUrl.Current().openUrl("$panelCommonResultDetailPage$" + this.props.Vm.RowData.FID + "$");
            };
            ResultCommonGridRowDowReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            ResultCommonGridRowDowReact.prototype.createRowButtonExpand = function () {
                return this.props.Vm.RowButtonExpand.intoDom();
            };
            return ResultCommonGridRowDowReact;
        }(domCore.DomReact));
        ResultCommonGridRowDow.ResultCommonGridRowDowReact = ResultCommonGridRowDowReact;
        var ResultCommonGridRowDowVm = (function (_super) {
            __extends(ResultCommonGridRowDowVm, _super);
            function ResultCommonGridRowDowVm(config) {
                _super.call(this);
                this.ReactType = ResultCommonGridRowDowReact;
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
            return ResultCommonGridRowDowVm;
        }(domCore.DomVm));
        ResultCommonGridRowDow.ResultCommonGridRowDowVm = ResultCommonGridRowDowVm;
        var ResultCommonGridRowDowStates = (function (_super) {
            __extends(ResultCommonGridRowDowStates, _super);
            function ResultCommonGridRowDowStates() {
                _super.apply(this, arguments);
            }
            return ResultCommonGridRowDowStates;
        }(domCore.DomStates));
        ResultCommonGridRowDow.ResultCommonGridRowDowStates = ResultCommonGridRowDowStates;
        var ResultCommonGridRowDowProps = (function (_super) {
            __extends(ResultCommonGridRowDowProps, _super);
            function ResultCommonGridRowDowProps() {
                _super.apply(this, arguments);
            }
            return ResultCommonGridRowDowProps;
        }(domCore.DomProps));
        ResultCommonGridRowDow.ResultCommonGridRowDowProps = ResultCommonGridRowDowProps;
    })(ResultCommonGridRowDow = exports.ResultCommonGridRowDow || (exports.ResultCommonGridRowDow = {}));
});
