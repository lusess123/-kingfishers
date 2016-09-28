var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "./../../01core/Url", "./../../02col/02Mulite/SingleCheckBox", "./RowButtonExpand"], function (require, exports, domFile, React, urlFile, singleCheckFile, expandFile) {
    "use strict";
    var domCore = domFile.Core;
    var GroupGridRow;
    (function (GroupGridRow) {
        var GroupGridRowAction = (function (_super) {
            __extends(GroupGridRowAction, _super);
            function GroupGridRowAction() {
                _super.apply(this, arguments);
            }
            return GroupGridRowAction;
        }(domCore.DomAction));
        GroupGridRow.GroupGridRowAction = GroupGridRowAction;
        var GroupGridRowReact = (function (_super) {
            __extends(GroupGridRowReact, _super);
            function GroupGridRowReact() {
                _super.apply(this, arguments);
            }
            GroupGridRowReact.prototype.fun_linkDetai = function () {
                urlFile.Core.AkUrl.Current().openUrl("$wingroupdetail$" + this.props.Vm.RowData.GroupID + "$");
            };
            GroupGridRowReact.prototype.fun_linkParentMenu = function () {
                urlFile.Core.AkUrl.Current().openUrl("$wingroupdetail$" + this.props.Vm.RowData.GroupID + "$");
            };
            GroupGridRowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", {className: this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}, React.createElement("td", null, React.createElement("span", null, this.createSingleCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber), this.createRowButtonExpand())), React.createElement("td", {className: "hide"}, React.createElement("span", null, React.createElement("input", {placeholder: "..", type: "hidden"}), this.props.Vm.RowData.GroupID)), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, React.createElement("a", {onClick: function () { _this.fun_linkDetai(); return false; }}, this.props.Vm.RowData.FParentFName)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, React.createElement("a", {onClick: function () { _this.fun_linkParentMenu(); return false; }}, this.props.Vm.RowData.GroupName)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.GroupID))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.FPhone))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.UPDATE_TIME))));
            };
            GroupGridRowReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            GroupGridRowReact.prototype.createRowButtonExpand = function () {
                return this.props.Vm.RowButtonExpand.intoDom();
            };
            return GroupGridRowReact;
        }(domCore.DomReact));
        GroupGridRow.GroupGridRowReact = GroupGridRowReact;
        var GroupGridRowVm = (function (_super) {
            __extends(GroupGridRowVm, _super);
            function GroupGridRowVm() {
                _super.apply(this, arguments);
                this.ReactType = GroupGridRowReact;
                this.SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.RowButtonExpand = new expandFile.RowButtonExpand.RowButtonExpandVm();
                this.RowData = { GroupID: "001001", FParentFName: "", GroupName: "", GroupCode: "001", FPhone: "", FControlUnitName: "", UPDATE_TIME: "dd" };
            }
            return GroupGridRowVm;
        }(domCore.DomVm));
        GroupGridRow.GroupGridRowVm = GroupGridRowVm;
        var GroupGridRowStates = (function (_super) {
            __extends(GroupGridRowStates, _super);
            function GroupGridRowStates() {
                _super.apply(this, arguments);
            }
            return GroupGridRowStates;
        }(domCore.DomStates));
        GroupGridRow.GroupGridRowStates = GroupGridRowStates;
        var GroupGridRowProps = (function (_super) {
            __extends(GroupGridRowProps, _super);
            function GroupGridRowProps() {
                _super.apply(this, arguments);
            }
            return GroupGridRowProps;
        }(domCore.DomProps));
        GroupGridRow.GroupGridRowProps = GroupGridRowProps;
    })(GroupGridRow = exports.GroupGridRow || (exports.GroupGridRow = {}));
});
