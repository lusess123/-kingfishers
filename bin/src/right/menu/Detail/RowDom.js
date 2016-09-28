var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./MasterDom", "./../../../09Web/dom/ThDom"], function (require, exports, domFile, React, masterDomFile, thFile) {
    "use strict";
    var domCore = domFile.Core;
    var ThDom = thFile.Web.ThDomReact;
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
                return React.createElement("div", null, React.createElement("div", {className: "Hu-row-title Hu-pointer", onClick: function () { _this.fun_itemTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "right" : "down")})), React.createElement("div", {className: this.props.Vm.IsItemFormHide ? "hide" : "Hm-toggle-item"}, this.props.Vm.MasterDomObj.intoDom(), React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_rowTitleClick(); }}, "菜单按钮", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsRowFormHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse" + (this.props.Vm.IsRowFormHide ? " hide" : "")}, React.createElement("div", {className: "content active"}, React.createElement("div", {className: "table-responsive"}, React.createElement("table", {className: "table table-bordered table-striped"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll", style: { width: "1em" }}), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "按钮名称")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "按钮值")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "编码")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "排序编号")))), React.createElement("tbody", null, this.props.Vm.MenuButtonList.map(function (btn, index) {
                    return (React.createElement("tr", null, React.createElement("td", null, (index + 1).toString()), React.createElement("td", {className: "hide"}, btn.FID), React.createElement("td", null, btn.FName), React.createElement("td", null, btn.FKey), React.createElement("td", null, btn.FValue), React.createElement("td", null, btn.OrderId)));
                })))))))));
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
                this.MenuButtonList = [];
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
