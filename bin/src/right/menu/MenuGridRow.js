var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "./../../01core/Url", "./../../02col/02Mulite/SingleCheckBox", "./RowButtonExpand"], function (require, exports, domFile, React, urlFile, singleCheckFile, expandFile) {
    "use strict";
    var domCore = domFile.Core;
    var MenuGridRow;
    (function (MenuGridRow) {
        var MenuGridRowAction = (function (_super) {
            __extends(MenuGridRowAction, _super);
            function MenuGridRowAction() {
                _super.apply(this, arguments);
            }
            return MenuGridRowAction;
        }(domCore.DomAction));
        MenuGridRow.MenuGridRowAction = MenuGridRowAction;
        var MenuGridRowReact = (function (_super) {
            __extends(MenuGridRowReact, _super);
            function MenuGridRowReact() {
                _super.apply(this, arguments);
            }
            MenuGridRowReact.prototype.fun_linkDetai = function () {
                urlFile.Core.AkUrl.Current().openUrl("$panelmenudetail$" + this.props.Vm.RowData.FID + "$");
            };
            MenuGridRowReact.prototype.fun_linkParentMenu = function () {
                urlFile.Core.AkUrl.Current().openUrl("$panelmenudetail$" + this.props.Vm.RowData.ParentId + "$");
            };
            MenuGridRowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, React.createElement("td", {className: (this.props.Vm.IsAcsRelative ? "  Hf-relative Hf-table-td " : ""), style: { left: this.props.Vm.LeftNum }}, React.createElement("span", null, this.createSingleCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber), this.createRowButtonExpand())), React.createElement("td", {className: "hide"}, React.createElement("span", null, React.createElement("input", {placeholder: "..", type: "hidden"}))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, React.createElement("a", {onClick: function () { _this.fun_linkDetai(); return false; }}, this.props.Vm.RowData.MenuName)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, React.createElement("a", {onClick: function () { _this.fun_linkParentMenu(); return false; }}, this.props.Vm.RowData.ParentName)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Key))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.KeyType))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.UPDATE_TIME))));
            };
            MenuGridRowReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            MenuGridRowReact.prototype.createRowButtonExpand = function () {
                return this.props.Vm.RowButtonExpand.intoDom();
            };
            return MenuGridRowReact;
        }(domCore.DomReact));
        MenuGridRow.MenuGridRowReact = MenuGridRowReact;
        var MenuGridRowVm = (function (_super) {
            __extends(MenuGridRowVm, _super);
            function MenuGridRowVm() {
                _super.apply(this, arguments);
                this.ReactType = MenuGridRowReact;
                this.SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.RowButtonExpand = new expandFile.RowButtonExpand.RowButtonExpandVm();
                this.RowData = { FID: "001001", IconUrl: "", IconName: "", ParentId: "001", MenuKindId: "", MenuName: "业务单", Key: "$$module/BiDa/Statistics/bd_Business_Statistics", ParentName: "必达金融", MenuKindName: "业务模块", UPDATE_TIME: "2015-06-03", KeyType: "mok" };
                this.IsAcsRelative = false;
                this.LeftNum = 0;
            }
            return MenuGridRowVm;
        }(domCore.DomVm));
        MenuGridRow.MenuGridRowVm = MenuGridRowVm;
        var MenuGridRowStates = (function (_super) {
            __extends(MenuGridRowStates, _super);
            function MenuGridRowStates() {
                _super.apply(this, arguments);
            }
            return MenuGridRowStates;
        }(domCore.DomStates));
        MenuGridRow.MenuGridRowStates = MenuGridRowStates;
        var MenuGridRowProps = (function (_super) {
            __extends(MenuGridRowProps, _super);
            function MenuGridRowProps() {
                _super.apply(this, arguments);
            }
            return MenuGridRowProps;
        }(domCore.DomProps));
        MenuGridRow.MenuGridRowProps = MenuGridRowProps;
    })(MenuGridRow = exports.MenuGridRow || (exports.MenuGridRow = {}));
});
