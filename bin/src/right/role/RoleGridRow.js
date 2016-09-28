var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "./../../01core/Url", "./../../02col/02Mulite/SingleCheckBox", "./../Menu/RowButtonExpand"], function (require, exports, domFile, React, urlFile, singleCheckFile, expandFile) {
    "use strict";
    var domCore = domFile.Core;
    var RoleGridRow;
    (function (RoleGridRow) {
        var RoleGridRowAction = (function (_super) {
            __extends(RoleGridRowAction, _super);
            function RoleGridRowAction() {
                _super.apply(this, arguments);
            }
            return RoleGridRowAction;
        }(domCore.DomAction));
        RoleGridRow.RoleGridRowAction = RoleGridRowAction;
        var RoleGridRowReact = (function (_super) {
            __extends(RoleGridRowReact, _super);
            function RoleGridRowReact() {
                _super.apply(this, arguments);
            }
            RoleGridRowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, React.createElement("td", null, React.createElement("span", null, this.createSingleCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber), this.createRowButtonExpand())), React.createElement("td", {className: "hide"}, React.createElement("span", null, React.createElement("input", {placeholder: "..", type: "hidden"}))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, React.createElement("a", {onClick: function () { _this.fun_linkDetai(); return false; }}, this.props.Vm.RowData.RoleName)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.RoleSign))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.FControlUnitName))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.UPDATE_TIME))));
            };
            RoleGridRowReact.prototype.fun_linkDetai = function () {
                urlFile.Core.AkUrl.Current().openUrl("$winroledetail$" + this.props.Vm.RowData.RoleID + "$");
            };
            RoleGridRowReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            RoleGridRowReact.prototype.createRowButtonExpand = function () {
                return this.props.Vm.RowButtonExpand.intoDom();
            };
            return RoleGridRowReact;
        }(domCore.DomReact));
        RoleGridRow.RoleGridRowReact = RoleGridRowReact;
        var RoleGridRowVm = (function (_super) {
            __extends(RoleGridRowVm, _super);
            function RoleGridRowVm() {
                _super.call(this);
                this.ReactType = RoleGridRowReact;
                this.SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.RowButtonExpand = new expandFile.RowButtonExpand.RowButtonExpandVm();
                this.RowData = { RoleSign: "BiDaSalesManRole", RoleName: "业务员", FControlUnitName: "必达", UPDATE_TIME: "dd" };
            }
            return RoleGridRowVm;
        }(domCore.DomVm));
        RoleGridRow.RoleGridRowVm = RoleGridRowVm;
        var RoleGridRowStates = (function (_super) {
            __extends(RoleGridRowStates, _super);
            function RoleGridRowStates() {
                _super.apply(this, arguments);
            }
            return RoleGridRowStates;
        }(domCore.DomStates));
        RoleGridRow.RoleGridRowStates = RoleGridRowStates;
        var RoleGridRowProps = (function (_super) {
            __extends(RoleGridRowProps, _super);
            function RoleGridRowProps() {
                _super.apply(this, arguments);
            }
            return RoleGridRowProps;
        }(domCore.DomProps));
        RoleGridRow.RoleGridRowProps = RoleGridRowProps;
    })(RoleGridRow = exports.RoleGridRow || (exports.RoleGridRow = {}));
});
