var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "./../../01core/Url", "./../../02col/02Mulite/SingleCheckBox", "./../../right/menu/RowButtonExpand"], function (require, exports, domFile, React, urlFile, singleCheckFile, expandFile) {
    "use strict";
    var domCore = domFile.Core;
    var UserManageGridRow;
    (function (UserManageGridRow) {
        var UserManageGridRowAction = (function (_super) {
            __extends(UserManageGridRowAction, _super);
            function UserManageGridRowAction() {
                _super.apply(this, arguments);
            }
            return UserManageGridRowAction;
        }(domCore.DomAction));
        UserManageGridRow.UserManageGridRowAction = UserManageGridRowAction;
        var UserManageGridRowReact = (function (_super) {
            __extends(UserManageGridRowReact, _super);
            function UserManageGridRowReact() {
                _super.apply(this, arguments);
            }
            UserManageGridRowReact.prototype._showTxt = function (str) {
                if (str.indexOf("<") >= 0 && str.indexOf(">") >= 0) {
                    try {
                        return $(str).text();
                    }
                    catch (r) {
                        return str;
                    }
                }
                return str;
            };
            UserManageGridRowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", {className: (this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : "")}, React.createElement("td", {className: (this.props.Vm.IsAcsRelative ? "  acsRelative  acsTableTr " : ""), style: { left: this.props.Vm.LeftNum }}, React.createElement("span", null, this.createSingleCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber), this.createRowButtonExpand())), React.createElement("td", {className: "hide"}, React.createElement("span", null, React.createElement("input", {placeholder: "..", type: "hidden"}))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, React.createElement("a", {onClick: function () { _this.fun_link(); }}, this.props.Vm.RowData.NickName)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.UserName))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Area))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.UserKindName))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.CreateTime))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this._showTxt(this.props.Vm.RowData.CreaterName)))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.Remark))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.MEID))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.FControlUnitName))), React.createElement("td", null, React.createElement("span", null, React.createElement("span", null, this.props.Vm.RowData.UPDATE_TIME))));
            };
            UserManageGridRowReact.prototype.fun_link = function () {
                urlFile.Core.AkUrl.Current().openUrl("$winusermanagedetail$" + this.props.Vm.RowData.UserID + "$");
            };
            UserManageGridRowReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            UserManageGridRowReact.prototype.createRowButtonExpand = function () {
                return this.props.Vm.RowButtonExpand.intoDom();
            };
            return UserManageGridRowReact;
        }(domCore.DomReact));
        UserManageGridRow.UserManageGridRowReact = UserManageGridRowReact;
        var UserManageGridRowVm = (function (_super) {
            __extends(UserManageGridRowVm, _super);
            function UserManageGridRowVm() {
                _super.apply(this, arguments);
                this.ReactType = UserManageGridRowReact;
                this.SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.RowButtonExpand = new expandFile.RowButtonExpand.RowButtonExpandVm();
                this.RowData = { UserID: "16313413163143", NickName: "邵祺", UserName: "邵祺User", Area: "建德十八桥", UserKindId: "1", UserKindName: "系统用户", IsActive: true, Creater: "ataws", Remark: "备注", FControlUnitID: "002", FControlUnitName: "树人", CreaterName: "信使管理员", CreateTime: (new Date()).toTimeString(), MEID: "1231321312", UPDATE_TIME: "dd" };
                this.IsAcsRelative = false;
                this.LeftNum = 0;
            }
            return UserManageGridRowVm;
        }(domCore.DomVm));
        UserManageGridRow.UserManageGridRowVm = UserManageGridRowVm;
        var UserManageGridRowStates = (function (_super) {
            __extends(UserManageGridRowStates, _super);
            function UserManageGridRowStates() {
                _super.apply(this, arguments);
            }
            return UserManageGridRowStates;
        }(domCore.DomStates));
        UserManageGridRow.UserManageGridRowStates = UserManageGridRowStates;
        var UserManageGridRowProps = (function (_super) {
            __extends(UserManageGridRowProps, _super);
            function UserManageGridRowProps() {
                _super.apply(this, arguments);
            }
            return UserManageGridRowProps;
        }(domCore.DomProps));
        UserManageGridRow.UserManageGridRowProps = UserManageGridRowProps;
    })(UserManageGridRow = exports.UserManageGridRow || (exports.UserManageGridRow = {}));
});
