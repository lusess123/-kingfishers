var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "./../../05tool/Button"], function (require, exports, domFile, React, buttonFile) {
    "use strict";
    var domCore = domFile.Core;
    var GroupGridButtonRow;
    (function (GroupGridButtonRow) {
        var GroupGridButtonRowAction = (function (_super) {
            __extends(GroupGridButtonRowAction, _super);
            function GroupGridButtonRowAction() {
                _super.apply(this, arguments);
            }
            return GroupGridButtonRowAction;
        }(domCore.DomAction));
        GroupGridButtonRow.GroupGridButtonRowAction = GroupGridButtonRowAction;
        var GroupGridButtonRowReact = (function (_super) {
            __extends(GroupGridButtonRowReact, _super);
            function GroupGridButtonRowReact() {
                _super.apply(this, arguments);
            }
            GroupGridButtonRowReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}, React.createElement("td", {colSpan: "1000", className: "ACT-ROW-BUTTON well ta1"}, React.createElement("div", {className: "ButtonBar text-left"}, this.createButton("删除", "del", "trash", "trash"), this.createButton("详情", "detail", "table", "table"), this.createButton("编辑", "update", "edit", "edit"))));
            };
            GroupGridButtonRowReact.prototype.createButton = function (displayName, name, icon, fa) {
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
            GroupGridButtonRowReact.prototype.pInstall = function () {
                _super.prototype.pInstall.call(this);
                this.props.Vm.Row.RowButtonExpand.ExpandCustomFun = this.rowUpdate();
            };
            ;
            GroupGridButtonRowReact.prototype.rowUpdate = function () {
                var _this = this;
                return function () {
                    _this.props.Vm.forceUpdate("");
                };
            };
            return GroupGridButtonRowReact;
        }(domCore.DomReact));
        GroupGridButtonRow.GroupGridButtonRowReact = GroupGridButtonRowReact;
        var GroupGridButtonRowVm = (function (_super) {
            __extends(GroupGridButtonRowVm, _super);
            function GroupGridButtonRowVm() {
                _super.apply(this, arguments);
                this.ReactType = GroupGridButtonRowReact;
            }
            GroupGridButtonRowVm.prototype.btnFunCommond = function (name) {
                this.Row.GroupObj[name + "Opt"](this.Row.RowData.GroupID);
            };
            return GroupGridButtonRowVm;
        }(domCore.DomVm));
        GroupGridButtonRow.GroupGridButtonRowVm = GroupGridButtonRowVm;
        var GroupGridButtonRowStates = (function (_super) {
            __extends(GroupGridButtonRowStates, _super);
            function GroupGridButtonRowStates() {
                _super.apply(this, arguments);
            }
            return GroupGridButtonRowStates;
        }(domCore.DomStates));
        GroupGridButtonRow.GroupGridButtonRowStates = GroupGridButtonRowStates;
        var GroupGridButtonRowProps = (function (_super) {
            __extends(GroupGridButtonRowProps, _super);
            function GroupGridButtonRowProps() {
                _super.apply(this, arguments);
            }
            return GroupGridButtonRowProps;
        }(domCore.DomProps));
        GroupGridButtonRow.GroupGridButtonRowProps = GroupGridButtonRowProps;
    })(GroupGridButtonRow = exports.GroupGridButtonRow || (exports.GroupGridButtonRow = {}));
});
