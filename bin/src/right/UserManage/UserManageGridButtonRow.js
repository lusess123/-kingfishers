var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "./../../05tool/Button"], function (require, exports, domFile, React, buttonFile) {
    "use strict";
    var domCore = domFile.Core;
    var UserManageGridButtonRow;
    (function (UserManageGridButtonRow) {
        var UserManageGridButtonRowAction = (function (_super) {
            __extends(UserManageGridButtonRowAction, _super);
            function UserManageGridButtonRowAction() {
                _super.apply(this, arguments);
            }
            return UserManageGridButtonRowAction;
        }(domCore.DomAction));
        UserManageGridButtonRow.UserManageGridButtonRowAction = UserManageGridButtonRowAction;
        var UserManageGridButtonRowReact = (function (_super) {
            __extends(UserManageGridButtonRowReact, _super);
            function UserManageGridButtonRowReact() {
                _super.apply(this, arguments);
            }
            UserManageGridButtonRowReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}, React.createElement("td", {colSpan: "1000", className: "ACT-ROW-BUTTON well ta1"}, React.createElement("div", {className: " ButtonBar text-left"}, this.createButton("重置密码", "Repassword"), this.createButton("删除", "del", "trash", "trash"), this.createButton("详情", "detail", "table", "table"), this.createButton("编辑", "edit", "edit", "edit"), this.createButton("查看权限", "lookright"))));
            };
            UserManageGridButtonRowReact.prototype.createButton = function (displayName, name, icon, fa) {
                var _this = this;
                var btnVm = new buttonFile.ui.ButtonVm();
                btnVm.DisplayName = displayName;
                btnVm.IsNoBg = true;
                btnVm.IconCss = icon;
                btnVm.FaCss = fa;
                btnVm.KindCss = "btn btn-secondary btn-xs";
                btnVm.ClickFun = function () {
                    _this.props.Vm.btnFunCommond(name);
                };
                return btnVm.intoDom();
            };
            UserManageGridButtonRowReact.prototype.pInstall = function () {
                _super.prototype.pInstall.call(this);
                this.props.Vm.Row.RowButtonExpand.ExpandCustomFun = this.rowUpdate();
            };
            ;
            UserManageGridButtonRowReact.prototype.rowUpdate = function () {
                var _this = this;
                return function () {
                    _this.props.Vm.forceUpdate("");
                };
            };
            return UserManageGridButtonRowReact;
        }(domCore.DomReact));
        UserManageGridButtonRow.UserManageGridButtonRowReact = UserManageGridButtonRowReact;
        var UserManageGridButtonRowVm = (function (_super) {
            __extends(UserManageGridButtonRowVm, _super);
            function UserManageGridButtonRowVm() {
                _super.apply(this, arguments);
                this.ReactType = UserManageGridButtonRowReact;
            }
            UserManageGridButtonRowVm.prototype.btnFunCommond = function (name) {
                this.Row.MangeObj[name + "Opt"](this.Row.RowData.UserID);
            };
            return UserManageGridButtonRowVm;
        }(domCore.DomVm));
        UserManageGridButtonRow.UserManageGridButtonRowVm = UserManageGridButtonRowVm;
        var UserManageGridButtonRowStates = (function (_super) {
            __extends(UserManageGridButtonRowStates, _super);
            function UserManageGridButtonRowStates() {
                _super.apply(this, arguments);
            }
            return UserManageGridButtonRowStates;
        }(domCore.DomStates));
        UserManageGridButtonRow.UserManageGridButtonRowStates = UserManageGridButtonRowStates;
        var UserManageGridButtonRowProps = (function (_super) {
            __extends(UserManageGridButtonRowProps, _super);
            function UserManageGridButtonRowProps() {
                _super.apply(this, arguments);
            }
            return UserManageGridButtonRowProps;
        }(domCore.DomProps));
        UserManageGridButtonRow.UserManageGridButtonRowProps = UserManageGridButtonRowProps;
    })(UserManageGridButtonRow = exports.UserManageGridButtonRow || (exports.UserManageGridButtonRow = {}));
});
