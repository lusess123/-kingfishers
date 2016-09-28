var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "./../../05tool/Button"], function (require, exports, domFile, React, buttonFile) {
    "use strict";
    var domCore = domFile.Core;
    var MenuGridButtonRow;
    (function (MenuGridButtonRow) {
        var MenuGridButtonRowAction = (function (_super) {
            __extends(MenuGridButtonRowAction, _super);
            function MenuGridButtonRowAction() {
                _super.apply(this, arguments);
            }
            return MenuGridButtonRowAction;
        }(domCore.DomAction));
        MenuGridButtonRow.MenuGridButtonRowAction = MenuGridButtonRowAction;
        var MenuGridButtonRowReact = (function (_super) {
            __extends(MenuGridButtonRowReact, _super);
            function MenuGridButtonRowReact() {
                _super.apply(this, arguments);
            }
            MenuGridButtonRowReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}, React.createElement("td", {colSpan: "1000", className: "ACT-ROW-BUTTON well"}, React.createElement("div", {className: " ButtonBar text-left"}, this.createButton("删除", "del", "trash", "trash"), this.createButton("详情", "detail", "table", "table"), this.createButton("编辑", "update", "edit", "edit"))));
            };
            MenuGridButtonRowReact.prototype.createButton = function (displayName, name, icon, fa) {
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
            MenuGridButtonRowReact.prototype.pInstall = function () {
                _super.prototype.pInstall.call(this);
                this.props.Vm.Row.RowButtonExpand.ExpandCustomFun = this.rowUpdate();
            };
            ;
            MenuGridButtonRowReact.prototype.rowUpdate = function () {
                var _this = this;
                return function () {
                    _this.props.Vm.forceUpdate("");
                };
            };
            return MenuGridButtonRowReact;
        }(domCore.DomReact));
        MenuGridButtonRow.MenuGridButtonRowReact = MenuGridButtonRowReact;
        var MenuGridButtonRowVm = (function (_super) {
            __extends(MenuGridButtonRowVm, _super);
            function MenuGridButtonRowVm() {
                _super.apply(this, arguments);
                this.ReactType = MenuGridButtonRowReact;
            }
            MenuGridButtonRowVm.prototype.btnFunCommond = function (name) {
                this.Row.MenuObj[name + "Opt"](this.Row.RowData.FID);
            };
            return MenuGridButtonRowVm;
        }(domCore.DomVm));
        MenuGridButtonRow.MenuGridButtonRowVm = MenuGridButtonRowVm;
        var MenuGridButtonRowStates = (function (_super) {
            __extends(MenuGridButtonRowStates, _super);
            function MenuGridButtonRowStates() {
                _super.apply(this, arguments);
            }
            return MenuGridButtonRowStates;
        }(domCore.DomStates));
        MenuGridButtonRow.MenuGridButtonRowStates = MenuGridButtonRowStates;
        var MenuGridButtonRowProps = (function (_super) {
            __extends(MenuGridButtonRowProps, _super);
            function MenuGridButtonRowProps() {
                _super.apply(this, arguments);
            }
            return MenuGridButtonRowProps;
        }(domCore.DomProps));
        MenuGridButtonRow.MenuGridButtonRowProps = MenuGridButtonRowProps;
    })(MenuGridButtonRow = exports.MenuGridButtonRow || (exports.MenuGridButtonRow = {}));
});
