var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, React, singleCheckBoxFile) {
    "use strict";
    var domCore = domFile.Core;
    var singleCheckBoxVm = singleCheckBoxFile.ui.SingleCheckBoxVm;
    var table;
    (function (table) {
        var tableAction = (function (_super) {
            __extends(tableAction, _super);
            function tableAction() {
                _super.apply(this, arguments);
            }
            return tableAction;
        }(domCore.DomAction));
        table.tableAction = tableAction;
        var tableReact = (function (_super) {
            __extends(tableReact, _super);
            function tableReact() {
                _super.apply(this, arguments);
                this.state = new tableStates();
            }
            tableReact.prototype.thClass = function () {
                return "acsTextC " + (this.props.Vm.IsAcsRelative ? " acsRelative acsTableTh " : "");
            };
            tableReact.prototype.thStyle = function () {
                return { left: (this.props.Vm.LeftNum) };
            };
            tableReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "acs-table", onScroll: function (e) { _this.fun_Scroll(e); }}, React.createElement("div", {className: "acsRelative"}, this._initTable()));
            };
            tableReact.prototype._initTable = function () {
                return React.createElement("table", {className: "acs-table acs-new-table acs-table-tree"}, this._initTableTh(), this._initTableBody(), this._initTableThBtn());
            };
            tableReact.prototype._initTableThBtn = function () {
                return React.createElement("div", {className: "button-group" + (this.props.Vm.IsTableThShow ? " " : " hide")}, React.createElement("b", null, this.props.Vm.SingleCheckBox.intoDom(), "已选中2个文件/文件夹"), React.createElement("a", {className: "button e-default secondary", disabled: true}, "启动流程"), React.createElement("a", {className: "button e-default"}, "删除"), React.createElement("a", {className: "button e-default"}, "详情"), React.createElement("a", {className: "button e-default"}, "编辑"));
            };
            tableReact.prototype._initTableTh = function () {
                return React.createElement("thead", null, React.createElement("tr", {className: (this.props.Vm.IsTableThShow ? " hidden" : " ")}, React.createElement("th", {className: this.thClass(), style: this.thStyle()}, this.props.Vm.SingleCheckBox.intoDom()), React.createElement("th", null, "菜单"), React.createElement("th", null, "权值"), React.createElement("th", null, "权限类别"), React.createElement("th", null, "图标"), React.createElement("th", null, "权值"), React.createElement("th", null, "权限类别"), React.createElement("th", null, "图标"), React.createElement("th", null, "权值"), React.createElement("th", null, "权限类别"), React.createElement("th", null, "图标")));
            };
            tableReact.prototype._initTableBody = function () {
                var _this = this;
                return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {className: this.thClass(), style: this.thStyle(), onClick: function () { _this.fun_TClick(); }}, this.props.Vm.SingleCheckBoxList[0].intoDom(), React.createElement("span", null, "1")), React.createElement("td", {className: "item-1"}, React.createElement("i", {className: "acsPointer fa fa-caret-right"}), React.createElement("i", {className: "fa fa-plus-circle"}), React.createElement("span", null, "事务"), React.createElement("a", {className: "right"}, React.createElement("i", {className: "acsPointer fa fa-bars"}), React.createElement("i", {className: "acsPointer fa fa-edit"}), React.createElement("i", {className: "acsPointer fa fa-close"}))), React.createElement("td", null, "$$module/T9e ng/T9_Repair"), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标"), React.createElement("td", null), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标"), React.createElement("td", null), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标")), React.createElement("tr", null, React.createElement("td", {className: this.thClass(), style: this.thStyle(), onClick: function () { _this.fun_TClick(); }}, this.props.Vm.SingleCheckBoxList[1].intoDom(), React.createElement("span", null, "2")), React.createElement("td", {className: "item-1"}, React.createElement("i", {className: "acsPointer fa fa-caret-down" + (this.props.Vm.IsTreeMenuFirShow ? "" : " fa-rotate-270"), onClick: function () { _this.fun_TreeFirClick(); }}), React.createElement("i", {className: "acsPointer fa fa-" + (this.props.Vm.IsTreeMenuFirShow ? "minus" : "plus") + "-circle", onClick: function () { _this.fun_TreeFirClick(); }}), React.createElement("span", null, "新基础信息平台"), React.createElement("a", {className: "right"}, React.createElement("i", {className: "acsPointer fa fa-bars"}), React.createElement("i", {className: "acsPointer fa fa-edit"}), React.createElement("i", {className: "acsPointer fa fa-close"}))), React.createElement("td", null, "$$module/T9e ng/T9_Repair"), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标"), React.createElement("td", null), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标"), React.createElement("td", null), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标")), React.createElement("tr", {className: (this.props.Vm.IsTreeMenuFirShow ? "" : "hide")}, React.createElement("td", {className: this.thClass(), style: this.thStyle()}, this.props.Vm.SingleCheckBoxList[2].intoDom()), React.createElement("td", {className: "item-2"}, React.createElement("i", {className: "acsPointer fa fa-caret-down" + (this.props.Vm.IsTreeMenuSecShow ? "" : " fa-rotate-270"), onClick: function () { _this.fun_TreeSecClick(); }}), React.createElement("i", {className: "acsPointer fa fa-" + (this.props.Vm.IsTreeMenuSecShow ? "minus" : "plus") + "-circle", onClick: function () { _this.fun_TreeSecClick(); }}), React.createElement("span", null, "菜单信息"), React.createElement("a", {className: "right"}, React.createElement("i", {className: "acsPointer fa fa-bars"}), React.createElement("i", {className: "acsPointer fa fa-edit"}), React.createElement("i", {className: "acsPointer fa fa-close"}))), React.createElement("td", null, "$$module/T9e ng/T9_Repair"), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标"), React.createElement("td", null), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标"), React.createElement("td", null), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标")), React.createElement("tr", {className: (this.props.Vm.IsTreeMenuSecShow ? "" : " hide") + (this.props.Vm.IsTreeMenuFirShow ? "" : " hide")}, React.createElement("td", {className: this.thClass(), style: this.thStyle()}, this.props.Vm.SingleCheckBoxList[3].intoDom()), React.createElement("td", {className: "item-3"}, React.createElement("i", {className: "acsPointer fa fa-file-text-o"}), React.createElement("span", null, "员工信息"), React.createElement("a", {className: "right"}, React.createElement("i", {className: "acsPointer fa fa-bars"}), React.createElement("i", {className: "acsPointer fa fa-edit"}), React.createElement("i", {className: "acsPointer fa fa-close"}))), React.createElement("td", null, "$$module/T9e ng/T9_Repair"), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标"), React.createElement("td", null), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标"), React.createElement("td", null), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标")), React.createElement("tr", {className: (this.props.Vm.IsTreeMenuSecShow ? "" : " hide") + (this.props.Vm.IsTreeMenuFirShow ? "" : " hide")}, React.createElement("td", {className: this.thClass(), style: this.thStyle()}, this.props.Vm.SingleCheckBoxList[4].intoDom()), React.createElement("td", {className: "item-3"}, React.createElement("i", {className: "acsPointer fa fa-file-text-o"}), React.createElement("span", null, "部门信息"), React.createElement("a", {className: "right"}, React.createElement("i", {className: "acsPointer fa fa-bars"}), React.createElement("i", {className: "acsPointer fa fa-edit"}), React.createElement("i", {className: "acsPointer fa fa-close"}))), React.createElement("td", null, "$$module/T9e ng/T9_Repair"), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标"), React.createElement("td", null), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标"), React.createElement("td", null), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标")), React.createElement("tr", {className: (this.props.Vm.IsTreeMenuSecShow ? "" : " hide") + (this.props.Vm.IsTreeMenuFirShow ? "" : " hide")}, React.createElement("td", {className: this.thClass(), style: this.thStyle()}, this.props.Vm.SingleCheckBoxList[5].intoDom()), React.createElement("td", {className: "item-3"}, React.createElement("i", {className: "acsPointer fa fa-file-text-o"}), React.createElement("span", null, "职位信息"), React.createElement("a", {className: "right"}, React.createElement("i", {className: "acsPointer fa fa-bars"}), React.createElement("i", {className: "acsPointer fa fa-edit"}), React.createElement("i", {className: "acsPointer fa fa-close"}))), React.createElement("td", null, "$$module/T9e ng/T9_Repair"), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标"), React.createElement("td", null), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标"), React.createElement("td", null), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标")), React.createElement("tr", null, React.createElement("td", {className: this.thClass(), style: this.thStyle(), onClick: function () { _this.fun_TClick(); }}, this.props.Vm.SingleCheckBoxList[6].intoDom(), React.createElement("span", null, "3")), React.createElement("td", {className: "item-1"}, React.createElement("i", {className: "acsPointer fa fa-caret-right"}), React.createElement("i", {className: "acsPointer fa fa-plus-circle"}), React.createElement("span", null, "新权限管理"), React.createElement("a", {className: "right"}, React.createElement("i", {className: "acsPointer fa fa-bars"}), React.createElement("i", {className: "acsPointer fa fa-edit"}), React.createElement("i", {className: "acsPointer fa fa-close"}))), React.createElement("td", null, "$$module/T9e ng/T9_Repair"), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标"), React.createElement("td", null), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标"), React.createElement("td", null), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标")), React.createElement("tr", null, React.createElement("td", {className: this.thClass(), style: this.thStyle(), onClick: function () { _this.fun_TClick(); }}, this.props.Vm.SingleCheckBoxList[7].intoDom(), React.createElement("span", null, "4")), React.createElement("td", {className: "item-1"}, React.createElement("i", {className: "acsPointer fa fa-caret-right"}), React.createElement("i", {className: "fa fa-plus-circle"}), React.createElement("span", null, "SNS"), React.createElement("a", {className: "right"}, React.createElement("i", {className: "acsPointer fa fa-bars"}), React.createElement("i", {className: "acsPointer fa fa-edit"}), React.createElement("i", {className: "acsPointer fa fa-close"}))), React.createElement("td", null, "$$module/T9e ng/T9_Repair"), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标"), React.createElement("td", null), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标"), React.createElement("td", null), React.createElement("td", null, "业务模块"), React.createElement("td", null, "图标")));
            };
            tableReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.LeftNum = _$obj.scrollLeft();
                this.props.Vm.scrollAuto();
            };
            tableReact.prototype.fun_TClick = function () {
                this.props.Vm.IsTableThShow = !this.props.Vm.IsTableThShow;
                this.forceUpdate();
            };
            tableReact.prototype.fun_TreeFirClick = function () {
                this.props.Vm.IsTreeMenuFirShow = !this.props.Vm.IsTreeMenuFirShow;
                this.forceUpdate();
            };
            tableReact.prototype.fun_TreeSecClick = function () {
                this.props.Vm.IsTreeMenuSecShow = !this.props.Vm.IsTreeMenuSecShow;
                this.forceUpdate();
            };
            tableReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return tableReact;
        }(domCore.DomReact));
        table.tableReact = tableReact;
        var tableVm = (function (_super) {
            __extends(tableVm, _super);
            function tableVm(config) {
                _super.call(this);
                this.ReactType = tableReact;
                this.SingleCheckBox = new singleCheckBoxVm();
                this.LeftNum = 0;
                this.IsAcsRelative = false;
                this.IsTableThShow = false;
                this.IsTreeMenuSecShow = false;
                this.IsTreeMenuFirShow = false;
                this.SingleCheckBoxList = new Array();
                this.SingleCheckBoxList.push(new singleCheckBoxVm());
                this.SingleCheckBoxList.push(new singleCheckBoxVm());
                this.SingleCheckBoxList.push(new singleCheckBoxVm());
                this.SingleCheckBoxList.push(new singleCheckBoxVm());
                this.SingleCheckBoxList.push(new singleCheckBoxVm());
                this.SingleCheckBoxList.push(new singleCheckBoxVm());
                this.SingleCheckBoxList.push(new singleCheckBoxVm());
                this.SingleCheckBoxList.push(new singleCheckBoxVm());
            }
            tableVm.prototype.scrollAuto = function () {
                this.IsAcsRelative = this.LeftNum > 0;
                this.forceUpdate("");
            };
            return tableVm;
        }(domCore.DomVm));
        table.tableVm = tableVm;
        var tableStates = (function (_super) {
            __extends(tableStates, _super);
            function tableStates() {
                _super.apply(this, arguments);
            }
            return tableStates;
        }(domCore.DomStates));
        table.tableStates = tableStates;
        var tableProps = (function (_super) {
            __extends(tableProps, _super);
            function tableProps() {
                _super.apply(this, arguments);
            }
            return tableProps;
        }(domCore.DomProps));
        table.tableProps = tableProps;
    })(table = exports.table || (exports.table = {}));
});
