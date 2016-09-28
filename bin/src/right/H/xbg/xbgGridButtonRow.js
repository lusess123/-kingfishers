var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../05tool/Button"], function (require, exports, domFile, React, buttonFile) {
    "use strict";
    var domCore = domFile.Core;
    var xbgGridButtonRow;
    (function (xbgGridButtonRow) {
        var xbgGridButtonRowAction = (function (_super) {
            __extends(xbgGridButtonRowAction, _super);
            function xbgGridButtonRowAction() {
                _super.apply(this, arguments);
            }
            return xbgGridButtonRowAction;
        }(domCore.DomAction));
        xbgGridButtonRow.xbgGridButtonRowAction = xbgGridButtonRowAction;
        var xbgGridButtonRowReact = (function (_super) {
            __extends(xbgGridButtonRowReact, _super);
            function xbgGridButtonRowReact() {
                _super.apply(this, arguments);
            }
            xbgGridButtonRowReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}, React.createElement("td", {colSpan: "1000", className: "ACT-ROW-BUTTON well ButtonBar ta1"}, this.createButton("删除", "del", "trash"), this.createButton("详情", "detail", "table"), this.createButton("编辑", "update", "edit")));
            };
            xbgGridButtonRowReact.prototype.createButton = function (displayName, name, icon) {
                var _this = this;
                var btnVm = new buttonFile.ui.ButtonVm();
                btnVm.DisplayName = displayName;
                btnVm.IsNoBg = true;
                btnVm.IconCss = icon;
                btnVm.ClickFun = function () {
                    _this.props.Vm.btnFunCommond(name);
                };
                return btnVm.intoDom();
            };
            xbgGridButtonRowReact.prototype.pInstall = function () {
                _super.prototype.pInstall.call(this);
                this.props.Vm.Row.RowButtonExpand.ExpandCustomFun = this.rowUpdate();
            };
            ;
            xbgGridButtonRowReact.prototype.rowUpdate = function () {
                var _this = this;
                return function () {
                    _this.props.Vm.forceUpdate("");
                };
            };
            return xbgGridButtonRowReact;
        }(domCore.DomReact));
        xbgGridButtonRow.xbgGridButtonRowReact = xbgGridButtonRowReact;
        var xbgGridButtonRowVm = (function (_super) {
            __extends(xbgGridButtonRowVm, _super);
            function xbgGridButtonRowVm() {
                _super.apply(this, arguments);
                this.ReactType = xbgGridButtonRowReact;
            }
            xbgGridButtonRowVm.prototype.btnFunCommond = function (name) {
                this.Row.RoleObj[name + "Opt"](this.Row.RowData.FID);
            };
            return xbgGridButtonRowVm;
        }(domCore.DomVm));
        xbgGridButtonRow.xbgGridButtonRowVm = xbgGridButtonRowVm;
        var xbgGridButtonRowStates = (function (_super) {
            __extends(xbgGridButtonRowStates, _super);
            function xbgGridButtonRowStates() {
                _super.apply(this, arguments);
            }
            return xbgGridButtonRowStates;
        }(domCore.DomStates));
        xbgGridButtonRow.xbgGridButtonRowStates = xbgGridButtonRowStates;
        var xbgGridButtonRowProps = (function (_super) {
            __extends(xbgGridButtonRowProps, _super);
            function xbgGridButtonRowProps() {
                _super.apply(this, arguments);
            }
            return xbgGridButtonRowProps;
        }(domCore.DomProps));
        xbgGridButtonRow.xbgGridButtonRowProps = xbgGridButtonRowProps;
    })(xbgGridButtonRow = exports.xbgGridButtonRow || (exports.xbgGridButtonRow = {}));
});
