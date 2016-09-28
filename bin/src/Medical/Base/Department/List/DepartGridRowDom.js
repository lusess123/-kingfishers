var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../01core/Url", "./../../../../02col/02Mulite/SingleCheckBox", "./../../../Common/RowButtonExpandDom"], function (require, exports, React, domFile, urlFile, singleCheckFile, expandFile) {
    "use strict";
    var domCore = domFile.Core;
    var DepartGirdRow;
    (function (DepartGirdRow) {
        var DepartGirdRowAction = (function (_super) {
            __extends(DepartGirdRowAction, _super);
            function DepartGirdRowAction() {
                _super.apply(this, arguments);
            }
            return DepartGirdRowAction;
        }(domCore.DomAction));
        DepartGirdRow.DepartGirdRowAction = DepartGirdRowAction;
        var DepartGirdRowReact = (function (_super) {
            __extends(DepartGirdRowReact, _super);
            function DepartGirdRowReact() {
                _super.apply(this, arguments);
                this.state = new DepartGirdRowStates();
            }
            DepartGirdRowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, React.createElement("td", {className: (this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-td" : ""), style: { left: this.props.Vm.LeftNum }}, React.createElement("span", null, this.createSingleCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber), this.createRowButtonExpand())), React.createElement("td", {className: "hide"}, React.createElement("span", null, React.createElement("input", {placeholder: "..", type: "hidden"}))), React.createElement("td", null, React.createElement("span", null), this.props.Vm.RowData.SimpleCode), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, React.createElement("a", {onClick: function () { _this.fun_linkDetai(); return false; }}, this.props.Vm.RowData.FName)))), React.createElement("td", null, React.createElement("span", null), this.props.Vm.RowData.FNumber), React.createElement("td", null, React.createElement("span", null), this.props.Vm.RowData.DeptType), React.createElement("td", null, React.createElement("span", null), this.props.Vm.RowData.Description), React.createElement("td", null, React.createElement("span", null), this.props.Vm.RowData.Remark), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.UPDATE_TIME))));
            };
            DepartGirdRowReact.prototype.fun_linkDetai = function () {
                urlFile.Core.AkUrl.Current().openUrl("$panelDepartDetailPage$" + this.props.Vm.RowData.FID + "$");
            };
            DepartGirdRowReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            DepartGirdRowReact.prototype.createRowButtonExpand = function () {
                return this.props.Vm.RowButtonExpand.intoDom();
            };
            DepartGirdRowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DepartGirdRowReact;
        }(domCore.DomReact));
        DepartGirdRow.DepartGirdRowReact = DepartGirdRowReact;
        var DepartGirdRowVm = (function (_super) {
            __extends(DepartGirdRowVm, _super);
            function DepartGirdRowVm(config) {
                _super.call(this);
                this.ReactType = DepartGirdRowReact;
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
            DepartGirdRowVm.prototype.GetText = function (List, Id) {
                for (var index = 0; index < List.length; index++) {
                    if (List[index].Value == Id) {
                        return List[index].Text;
                    }
                }
                return "";
            };
            return DepartGirdRowVm;
        }(domCore.DomVm));
        DepartGirdRow.DepartGirdRowVm = DepartGirdRowVm;
        var DepartGirdRowStates = (function (_super) {
            __extends(DepartGirdRowStates, _super);
            function DepartGirdRowStates() {
                _super.apply(this, arguments);
            }
            return DepartGirdRowStates;
        }(domCore.DomStates));
        DepartGirdRow.DepartGirdRowStates = DepartGirdRowStates;
        var DepartGirdRowProps = (function (_super) {
            __extends(DepartGirdRowProps, _super);
            function DepartGirdRowProps() {
                _super.apply(this, arguments);
            }
            return DepartGirdRowProps;
        }(domCore.DomProps));
        DepartGirdRow.DepartGirdRowProps = DepartGirdRowProps;
    })(DepartGirdRow = exports.DepartGirdRow || (exports.DepartGirdRow = {}));
});
