var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./MenuNewMaster", "./MenuButtonRow"], function (require, exports, domFile, React, menuInsertRowFile, menuButtonRowFile) {
    "use strict";
    var domCore = domFile.Core;
    var MenuNewRow;
    (function (MenuNewRow) {
        var MenuNewRowAction = (function (_super) {
            __extends(MenuNewRowAction, _super);
            function MenuNewRowAction() {
                _super.apply(this, arguments);
            }
            return MenuNewRowAction;
        }(domCore.DomAction));
        MenuNewRow.MenuNewRowAction = MenuNewRowAction;
        var MenuNewRowReact = (function (_super) {
            __extends(MenuNewRowReact, _super);
            function MenuNewRowReact() {
                _super.apply(this, arguments);
                this.state = new MenuNewRowStates();
            }
            MenuNewRowReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            MenuNewRowReact.prototype.fun_addNewButtonRow = function () {
                this.props.Vm.MenuMasterObj.MenuButtonRowList = [];
                this.props.Vm.MenuMasterObj.MenuData.MenuButtonList.push({ FID: "", FName: "", FKey: "", FValue: "", OrderId: "" });
                this.forceUpdate();
            };
            MenuNewRowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, this.props.Vm.MenuMasterObj.intoDom(), React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_detailTitleClick(); }}, "菜单按钮", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsDetailHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse" + (this.props.Vm.IsDetailHide ? " hide" : "")}, React.createElement("div", {className: "content active"}, React.createElement("div", {className: "table-responsive"}, React.createElement("table", {className: "table table-bordered table-striped"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll acsTextC", style: { width: "1em" }}), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement("th", null, React.createElement("span", null, "按钮名称")), React.createElement("th", null, React.createElement("span", null, "按钮值")), React.createElement("th", null, React.createElement("span", null, "编码")), React.createElement("th", null, React.createElement("span", null, "排序编号")), React.createElement("th", null, React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_addNewButtonRow(); }})))), React.createElement("tbody", null, this.props.Vm.MenuMasterObj.MenuData.MenuButtonList.map(function (data, index) {
                    return _this.createMenuButtonRow(data, index);
                }))))))));
            };
            MenuNewRowReact.prototype.createMenuButtonRow = function (data, index) {
                var buttonRow = new menuButtonRowFile.MenuButtonRow.MenuButtonRowVm();
                buttonRow.ButtonData = data;
                buttonRow.RowNumber = index;
                this.props.Vm.MenuMasterObj.MenuButtonRowList.push(buttonRow);
                buttonRow.MenuRow = this.props.Vm;
                return buttonRow.intoDom();
            };
            ;
            MenuNewRowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MenuNewRowReact;
        }(domCore.DomReact));
        MenuNewRow.MenuNewRowReact = MenuNewRowReact;
        var MenuNewRowVm = (function (_super) {
            __extends(MenuNewRowVm, _super);
            function MenuNewRowVm() {
                _super.call(this);
                this.ReactType = MenuNewRowReact;
                this.MenuMasterObj = new menuInsertRowFile.Right.MenuNewMasterVm();
            }
            MenuNewRowVm.prototype.initData = function (data) {
                this.MenuMasterObj.initData(data);
            };
            return MenuNewRowVm;
        }(domCore.DomVm));
        MenuNewRow.MenuNewRowVm = MenuNewRowVm;
        var MenuNewRowStates = (function (_super) {
            __extends(MenuNewRowStates, _super);
            function MenuNewRowStates() {
                _super.apply(this, arguments);
            }
            return MenuNewRowStates;
        }(domCore.DomStates));
        MenuNewRow.MenuNewRowStates = MenuNewRowStates;
        var MenuNewRowProps = (function (_super) {
            __extends(MenuNewRowProps, _super);
            function MenuNewRowProps() {
                _super.apply(this, arguments);
            }
            return MenuNewRowProps;
        }(domCore.DomProps));
        MenuNewRow.MenuNewRowProps = MenuNewRowProps;
    })(MenuNewRow = exports.MenuNewRow || (exports.MenuNewRow = {}));
});
