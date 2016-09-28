var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
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
            RowReact.prototype.fun_titleClick = function () {
                this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
                this.forceUpdate();
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
                return React.createElement("div", null, React.createElement("div", {className: "Hu-row-title Hu-pointer", onClick: function () { _this.fun_itemTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "right" : "down")})), React.createElement("div", {className: this.props.Vm.IsItemFormHide ? "hide" : ""}, this.createRow()));
            };
            RowReact.prototype.createRow = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("div", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleClick(); }}, "角色明细", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down")})))), React.createElement("div", {className: "tabs-content"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsFormHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12  Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "角色标识：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.RoleSign))), React.createElement("div", {className: "col-lg-6 col-sm-12  Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "角色名称：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.RoleName))), React.createElement("div", {className: "col-lg-6 col-sm-12  Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "组织机构：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.FControlUnitName))), React.createElement("div", {className: "col-lg-12 col-sm-12  Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "描述：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.Description))))))));
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
