var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./MasterDom"], function (require, exports, domFile, React, masterDomFile) {
    "use strict";
    var domCore = domFile.Core;
    var Row;
    (function (Row) {
        var RowAction = (function (_super) {
            __extends(RowAction, _super);
            function RowAction() {
                _super.apply(this, arguments);
            }
            return RowAction;
        }(domCore.DomAction));
        Row.RowAction = RowAction;
        var RowReact = (function (_super) {
            __extends(RowReact, _super);
            function RowReact() {
                _super.apply(this, arguments);
                this.state = new RowStates();
            }
            RowReact.prototype.fun_submitBtn = function () {
            };
            RowReact.prototype.fun_rowTitleClick = function () {
                this.props.Vm.IsRowFormHide = !this.props.Vm.IsRowFormHide;
                this.forceUpdate();
            };
            RowReact.prototype.fun_itemTitleClick = function () {
                this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
                this.forceUpdate();
            };
            RowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "Hu-row-title Hu-Pointer", onClick: function () { _this.fun_itemTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "right" : "down")})), React.createElement("div", {className: this.props.Vm.IsItemFormHide ? "hide" : ""}, this.props.Vm.MasterDomObj.intoDom(), React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_rowTitleClick(); }}, "管理与角色相关的明细", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsRowFormHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse" + (this.props.Vm.IsRowFormHide ? " hide" : "")}, React.createElement("div", {className: "content clearfix active "}, this.props.Vm.RoleList.map(function (r) {
                    return React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "角色：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, r.RoleName)));
                }))))));
            };
            RowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return RowReact;
        }(domCore.DomReact));
        Row.RowReact = RowReact;
        var RowVm = (function (_super) {
            __extends(RowVm, _super);
            function RowVm() {
                _super.apply(this, arguments);
                this.ReactType = RowReact;
                this.MasterDomObj = new masterDomFile.MasterDom.MasterDomVm();
                this.RoleList = [];
            }
            return RowVm;
        }(domCore.DomVm));
        Row.RowVm = RowVm;
        var RowStates = (function (_super) {
            __extends(RowStates, _super);
            function RowStates() {
                _super.apply(this, arguments);
            }
            return RowStates;
        }(domCore.DomStates));
        Row.RowStates = RowStates;
        var RowProps = (function (_super) {
            __extends(RowProps, _super);
            function RowProps() {
                _super.apply(this, arguments);
            }
            return RowProps;
        }(domCore.DomProps));
        Row.RowProps = RowProps;
    })(Row = exports.Row || (exports.Row = {}));
});
