var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "./../../05tool/Button"], function (require, exports, domFile, React, buttonFile) {
    "use strict";
    var domCore = domFile.Core;
    var UserGridButtonRow;
    (function (UserGridButtonRow) {
        var UserGridButtonRowAction = (function (_super) {
            __extends(UserGridButtonRowAction, _super);
            function UserGridButtonRowAction() {
                _super.apply(this, arguments);
            }
            return UserGridButtonRowAction;
        }(domCore.DomAction));
        UserGridButtonRow.UserGridButtonRowAction = UserGridButtonRowAction;
        var UserGridButtonRowReact = (function (_super) {
            __extends(UserGridButtonRowReact, _super);
            function UserGridButtonRowReact() {
                _super.apply(this, arguments);
            }
            UserGridButtonRowReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}, React.createElement("td", {colSpan: "1000", className: "ACT-ROW-BUTTON well ta1"}, React.createElement("div", {className: "ButtonBar text-left"}, this.createButton("删除", "del", "trash", "trash"), this.createButton("详情", "detail", "table", "table"), this.createButton("编辑", "update", "edit", "edit"))));
            };
            UserGridButtonRowReact.prototype.createButton = function (displayName, name, icon, fa) {
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
            UserGridButtonRowReact.prototype.pInstall = function () {
                _super.prototype.pInstall.call(this);
                this.props.Vm.Row.RowButtonExpand.ExpandCustomFun = this.rowUpdate();
            };
            ;
            UserGridButtonRowReact.prototype.rowUpdate = function () {
                var _this = this;
                return function () {
                    _this.props.Vm.forceUpdate("");
                };
            };
            return UserGridButtonRowReact;
        }(domCore.DomReact));
        UserGridButtonRow.UserGridButtonRowReact = UserGridButtonRowReact;
        var UserGridButtonRowVm = (function (_super) {
            __extends(UserGridButtonRowVm, _super);
            function UserGridButtonRowVm() {
                _super.apply(this, arguments);
                this.ReactType = UserGridButtonRowReact;
            }
            UserGridButtonRowVm.prototype.btnFunCommond = function (name) {
                this.Row.UserObj[name + "Opt"](this.Row.RowData.UserID);
            };
            return UserGridButtonRowVm;
        }(domCore.DomVm));
        UserGridButtonRow.UserGridButtonRowVm = UserGridButtonRowVm;
        var UserGridButtonRowStates = (function (_super) {
            __extends(UserGridButtonRowStates, _super);
            function UserGridButtonRowStates() {
                _super.apply(this, arguments);
            }
            return UserGridButtonRowStates;
        }(domCore.DomStates));
        UserGridButtonRow.UserGridButtonRowStates = UserGridButtonRowStates;
        var UserGridButtonRowProps = (function (_super) {
            __extends(UserGridButtonRowProps, _super);
            function UserGridButtonRowProps() {
                _super.apply(this, arguments);
            }
            return UserGridButtonRowProps;
        }(domCore.DomProps));
        UserGridButtonRow.UserGridButtonRowProps = UserGridButtonRowProps;
    })(UserGridButtonRow = exports.UserGridButtonRow || (exports.UserGridButtonRow = {}));
});
