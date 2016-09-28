var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Url", "./../../../../02col/02Mulite/SingleCheckBox", "./../../../Common/RowButtonExpandDom"], function (require, exports, React, domFile, urlFile, singleCheckFile, expandFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamItemGirdRow;
    (function (ExamItemGirdRow) {
        var ExamItemGirdRowAction = (function (_super) {
            __extends(ExamItemGirdRowAction, _super);
            function ExamItemGirdRowAction() {
                _super.apply(this, arguments);
            }
            return ExamItemGirdRowAction;
        }(domCore.DomAction));
        ExamItemGirdRow.ExamItemGirdRowAction = ExamItemGirdRowAction;
        var ExamItemGirdRowReact = (function (_super) {
            __extends(ExamItemGirdRowReact, _super);
            function ExamItemGirdRowReact() {
                _super.apply(this, arguments);
                this.state = new ExamItemGirdRowStates();
            }
            ExamItemGirdRowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, React.createElement("td", {className: (this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-td" : ""), style: { left: this.props.Vm.LeftNum }}, React.createElement("span", null, this.createSingleCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber), this.createRowButtonExpand())), React.createElement("td", {className: "hide"}, React.createElement("span", null, React.createElement("input", {placeholder: "..", type: "hidden"}))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, React.createElement("a", {onClick: function () { _this.fun_linkDetai(); return false; }}, this.props.Vm.RowData.SimpleCode)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.ItemCode))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Name))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.DepartmentId))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.ItemCategory))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Unit))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.UpperLimit))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.LowerLimit))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Price))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Order))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.ResultClass))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Remark))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.UPDATE_TIME))));
            };
            ExamItemGirdRowReact.prototype.fun_linkDetai = function () {
                urlFile.Core.AkUrl.Current().openUrl("$panelExamItemDetailPage$" + this.props.Vm.RowData.FID + "$");
            };
            ExamItemGirdRowReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            ExamItemGirdRowReact.prototype.createRowButtonExpand = function () {
                return this.props.Vm.RowButtonExpand.intoDom();
            };
            ExamItemGirdRowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamItemGirdRowReact;
        }(domCore.DomReact));
        ExamItemGirdRow.ExamItemGirdRowReact = ExamItemGirdRowReact;
        var ExamItemGirdRowVm = (function (_super) {
            __extends(ExamItemGirdRowVm, _super);
            function ExamItemGirdRowVm(config) {
                _super.call(this);
                this.ReactType = ExamItemGirdRowReact;
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
            ExamItemGirdRowVm.prototype.GetText = function (List, Id) {
                for (var index = 0; index < List.length; index++) {
                    if (List[index].Value == Id) {
                        return List[index].Text;
                    }
                }
                return "";
            };
            return ExamItemGirdRowVm;
        }(domCore.DomVm));
        ExamItemGirdRow.ExamItemGirdRowVm = ExamItemGirdRowVm;
        var ExamItemGirdRowStates = (function (_super) {
            __extends(ExamItemGirdRowStates, _super);
            function ExamItemGirdRowStates() {
                _super.apply(this, arguments);
            }
            return ExamItemGirdRowStates;
        }(domCore.DomStates));
        ExamItemGirdRow.ExamItemGirdRowStates = ExamItemGirdRowStates;
        var ExamItemGirdRowProps = (function (_super) {
            __extends(ExamItemGirdRowProps, _super);
            function ExamItemGirdRowProps() {
                _super.apply(this, arguments);
            }
            return ExamItemGirdRowProps;
        }(domCore.DomProps));
        ExamItemGirdRow.ExamItemGirdRowProps = ExamItemGirdRowProps;
    })(ExamItemGirdRow = exports.ExamItemGirdRow || (exports.ExamItemGirdRow = {}));
});
