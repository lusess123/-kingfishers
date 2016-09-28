var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "./../../05tool/Button"], function (require, exports, domFile, React, buttonFile) {
    "use strict";
    var domCore = domFile.Core;
    var RoleGridButtonRow;
    (function (RoleGridButtonRow) {
        var RoleGridButtonRowAction = (function (_super) {
            __extends(RoleGridButtonRowAction, _super);
            function RoleGridButtonRowAction() {
                _super.apply(this, arguments);
            }
            return RoleGridButtonRowAction;
        }(domCore.DomAction));
        RoleGridButtonRow.RoleGridButtonRowAction = RoleGridButtonRowAction;
        var RoleGridButtonRowReact = (function (_super) {
            __extends(RoleGridButtonRowReact, _super);
            function RoleGridButtonRowReact() {
                _super.apply(this, arguments);
            }
            RoleGridButtonRowReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}, React.createElement("td", {colSpan: "1000", className: "ACT-ROW-BUTTON well ta1"}, React.createElement("div", {className: "ButtonBar text-left"}, this.createButton("分配权限", "grant", ""), this.createButton("删除", "del", "trash", "trash"), this.createButton("详情", "detail", "table", "table"), this.createButton("编辑", "update", "edit", "edit"))));
            };
            RoleGridButtonRowReact.prototype.createButton = function (displayName, name, icon, fa) {
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
            RoleGridButtonRowReact.prototype.pInstall = function () {
                _super.prototype.pInstall.call(this);
                this.props.Vm.Row.RowButtonExpand.ExpandCustomFun = this.rowUpdate();
            };
            ;
            RoleGridButtonRowReact.prototype.rowUpdate = function () {
                var _this = this;
                return function () {
                    _this.props.Vm.forceUpdate("");
                };
            };
            return RoleGridButtonRowReact;
        }(domCore.DomReact));
        RoleGridButtonRow.RoleGridButtonRowReact = RoleGridButtonRowReact;
        var RoleGridButtonRowVm = (function (_super) {
            __extends(RoleGridButtonRowVm, _super);
            function RoleGridButtonRowVm() {
                _super.apply(this, arguments);
                this.ReactType = RoleGridButtonRowReact;
            }
            RoleGridButtonRowVm.prototype.btnFunCommond = function (name) {
                this.Row.RoleObj[name + "Opt"](this.Row.RowData.RoleID);
            };
            return RoleGridButtonRowVm;
        }(domCore.DomVm));
        RoleGridButtonRow.RoleGridButtonRowVm = RoleGridButtonRowVm;
        var RoleGridButtonRowStates = (function (_super) {
            __extends(RoleGridButtonRowStates, _super);
            function RoleGridButtonRowStates() {
                _super.apply(this, arguments);
            }
            return RoleGridButtonRowStates;
        }(domCore.DomStates));
        RoleGridButtonRow.RoleGridButtonRowStates = RoleGridButtonRowStates;
        var RoleGridButtonRowProps = (function (_super) {
            __extends(RoleGridButtonRowProps, _super);
            function RoleGridButtonRowProps() {
                _super.apply(this, arguments);
            }
            return RoleGridButtonRowProps;
        }(domCore.DomProps));
        RoleGridButtonRow.RoleGridButtonRowProps = RoleGridButtonRowProps;
    })(RoleGridButtonRow = exports.RoleGridButtonRow || (exports.RoleGridButtonRow = {}));
});
