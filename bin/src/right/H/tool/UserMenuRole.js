var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../01core/Url", "./../../../05tool/EditSpan", "./../../../05tool/Pagination"], function (require, exports, domFile, React, urlFile, EditSpanFile, PaginationFile) {
    "use strict";
    var domCore = domFile.Core;
    var ESpan = EditSpanFile.EditSpan.EditSpanReact;
    var ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
    var UserMenuRole;
    (function (UserMenuRole) {
        var UserMenuRoleAction = (function (_super) {
            __extends(UserMenuRoleAction, _super);
            function UserMenuRoleAction() {
                _super.apply(this, arguments);
            }
            return UserMenuRoleAction;
        }(domCore.DomAction));
        UserMenuRole.UserMenuRoleAction = UserMenuRoleAction;
        var UserMenuRoleReact = (function (_super) {
            __extends(UserMenuRoleReact, _super);
            function UserMenuRoleReact() {
                _super.apply(this, arguments);
                this.state = new UserMenuRoleStates();
                this.EspanVMIndex = 0;
            }
            UserMenuRoleReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "table-responsive", onScroll: function (e) { _this.fun_Scroll(e); }}, React.createElement("div", null, this._initTable()));
            };
            UserMenuRoleReact.prototype._initPager = function () {
                return this.props.Vm.PagerObj.intoDom();
            };
            UserMenuRoleReact.prototype._initTable = function () {
                return React.createElement("table", {className: "table table-hover table-bordered table-striped  Hm-table-tree"}, this._initRole(), this._initMenuRole(), this._initRole1(), this._initUserRole());
            };
            UserMenuRoleReact.prototype.thClass = function () {
                return "acsTextC " + (this.props.Vm.IsAcsRelative ? " Hf-relative Hf-table-th " : "");
            };
            UserMenuRoleReact.prototype.thStyle = function () {
                return { left: (this.props.Vm.LeftNum - 12.8) };
            };
            UserMenuRoleReact.prototype._initRole = function () {
                var _this = this;
                return React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", {className: this.thClass(), style: this.thStyle()}, React.createElement("i", {className: "Hu-pointer fa fa-caret-" + (this.props.Vm.IsTreeTableToggle ? "up" : "down"), onClick: function () { _this.fun_TreeTableToggle(); }}), React.createElement("span", null, "菜单 / 角色 "), React.createElement("span", null, React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_OpenUrlRole(); }}), React.createElement("strong", null, "添加角色")), React.createElement("span", null, React.createElement("i", {className: "fa fa-th-large Hu-pointer"}), React.createElement("strong", null, "导入角色"))), this._initNewThList(), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("报修人员角色")}), React.createElement("span", {className: "Hc-edit-spanV"}, "EREUserRole"), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("维修人员角色")}), React.createElement("span", {className: "Hc-edit-spanV"}, "EREServicemanRole"), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("th", {className: (this.props.Vm.IsDel ? "acs-delete" : "")}, React.createElement(ESpan, {children: null, Vm: this.Em("科长")}), React.createElement("span", {className: "Hc-edit-spanV"}, "ERESectionChiefRole"), React.createElement("i", {className: "fa Hu-pointer" + (this.props.Vm.IsDel ? " fa-reply " : " fa-times"), onClick: function () { _this.fun_delClick(); }})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("总服务台人员角色")}), React.createElement("span", {className: "Hc-edit-spanV"}, "EREFrontDesk StaffRole"), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("维修人员角色")}), React.createElement("span", {className: "Hc-edit-spanV"}, "EREServicemanRole"), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("科长")}), React.createElement("span", {className: "Hc-edit-spanV"}, "ERESectionChiefRole"), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("总服务台人员角色")}), React.createElement("span", {className: "Hc-edit-spanV"}, "EREFrontDesk StaffRole"), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("维修人员角色")}), React.createElement("span", {className: "Hc-edit-spanV"}, "EREServicemanRole"), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("科长")}), React.createElement("span", {className: "Hc-edit-spanV"}, "ERESectionChiefRole"), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("总服务台人员角色")}), React.createElement("span", {className: "Hc-edit-spanV"}, "EREFrontDesk StaffRole"), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("报修人员角色")}), React.createElement("span", {className: "Hc-edit-spanV"}, "EREUserRole"), React.createElement("i", {className: "fa fa-times Hu-pointer"}))));
            };
            UserMenuRoleReact.prototype._initRole1 = function () {
                var _this = this;
                return React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", {className: this.thClass(), style: this.thStyle()}, React.createElement("i", {className: "Hu-pointer fa fa-caret-" + (this.props.Vm.IsTreeTableToggle1 ? "up" : "down"), onClick: function () { _this.fun_TreeTableToggle1(); }}), React.createElement("span", null, "用户 / 角色"), React.createElement("span", null, React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_OpenUrlRole(); }}), React.createElement("strong", null, "添加角色")), React.createElement("span", null, React.createElement("i", {className: "fa fa-th-large Hu-pointer"}), React.createElement("strong", null, "导入角色"))), this._initNewThList(), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("报修人员角色")}), React.createElement("span", {className: "Hc-edit-spanV"}, "EREUserRole"), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("维修人员角色")}), React.createElement("span", {className: "Hc-edit-spanV"}, "EREServicemanRole"), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("th", {className: (this.props.Vm.IsDel ? "acs-delete" : "")}, React.createElement(ESpan, {children: null, Vm: this.Em("科长")}), React.createElement("span", {className: "Hc-edit-spanV"}, "ERESectionChiefRole"), React.createElement("i", {className: "fa Hu-pointer" + (this.props.Vm.IsDel ? " fa-reply " : " fa-times"), onClick: function () { _this.fun_delClick(); }})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("总服务台人员角色")}), React.createElement("span", {className: "Hc-edit-spanV"}, "EREFrontDesk StaffRole"), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("维修人员角色")}), React.createElement("span", {className: "Hc-edit-spanV"}, "EREServicemanRole"), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("科长")}), React.createElement("span", {className: "Hc-edit-spanV"}, "ERESectionChiefRole"), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("总服务台人员角色")}), React.createElement("span", {className: "Hc-edit-spanV"}, "EREFrontDesk StaffRole"), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("维修人员角色")}), React.createElement("span", {className: "Hc-edit-spanV"}, "EREServicemanRole"), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("科长")}), React.createElement("span", {className: "Hc-edit-spanV"}, "ERESectionChiefRole"), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("总服务台人员角色")}), React.createElement("span", {className: "Hc-edit-spanV"}, "EREFrontDesk StaffRole"), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("报修人员角色")}), React.createElement("span", {className: "Hc-edit-spanV"}, "EREUserRole"), React.createElement("i", {className: "fa fa-times Hu-pointer"}))));
            };
            UserMenuRoleReact.prototype._initMenuRole = function () {
                var _this = this;
                return React.createElement("tbody", {className: (this.props.Vm.IsTreeTableToggle ? "hide" : "")}, React.createElement("tr", null, React.createElement("td", {className: "Hu-item-1 " + (this.thClass()), style: this.thStyle()}, React.createElement("i", {className: "Hu-pointer fa fa-" + (this.props.Vm.IsTreeTableShow ? "plus-square" : "minus-square"), onClick: function () { return _this.fun_TreeTableClick(); }}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "报修管理" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_OpenUrlNode(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), this.initNewTD(), React.createElement("td", {className: this.props.Vm.IsChecked ? "acs-td-checked" : " "}, React.createElement("input", {type: "checkbox", onClick: function () { _this.fun_IsChagneCheck(); }})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: (this.props.Vm.IsDel ? "acs-delete" : "")}, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {className: (this.props.Vm.IsTreeTableShow ? "hide" : "")}, React.createElement("td", {className: "Hu-item-2 " + (this.thClass()), style: this.thStyle()}, React.createElement("i", {className: "Hu-pointer fa fa-" + (this.props.Vm.IsTreeTableShow1 ? "plus-square" : "minus-square"), onClick: function () { return _this.fun_TreeTableClick1(); }}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "基础信息" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer"}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), this.initNewTD(), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: (this.props.Vm.IsDel ? "acs-delete" : "")}, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {className: (this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") + (this.props.Vm.IsTreeNodeShow ? " hide" : "")}, React.createElement("td", {className: "Hu-item-3 " + (this.thClass()), style: this.thStyle()}, React.createElement("i", {className: "fa fa-file-o Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "使用单位" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_OpenUrlButton(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), this.initNewTD(), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: (this.props.Vm.IsDel ? "acs-delete" : "")}, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "4", className: (this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") + (this.props.Vm.IsTreeNodeShow ? " hide" : "")}, React.createElement("td", {className: "Hu-item-4 " + (this.thClass()), style: (this.thStyle())}, React.createElement("i", {className: "fa fa-square Hu-pointer"}), React.createElement(ESpan, {children: null, Vm: this.Em("新增")})), this.initNewTD(), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: (this.props.Vm.IsDel ? "acs-delete" : "")}, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "4", className: (this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") + (this.props.Vm.IsTreeNodeShow ? " hide" : "")}, React.createElement("td", {className: "Hu-item-4 " + (this.thClass()), style: (this.thStyle())}, React.createElement("i", {className: "fa fa-square Hu-pointer"}), React.createElement(ESpan, {children: null, Vm: this.Em("详情")})), this.initNewTD(), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: (this.props.Vm.IsDel ? "acs-delete" : "")}, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "4", className: (this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") + (this.props.Vm.IsTreeNodeShow ? " hide" : "")}, React.createElement("td", {className: "Hu-item-4 " + (this.thClass()), style: (this.thStyle())}, React.createElement("i", {className: "fa fa-square Hu-pointer"}), React.createElement(ESpan, {children: null, Vm: this.Em("编辑")})), this.initNewTD(), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: (this.props.Vm.IsDel ? "acs-delete" : "")}, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {className: (this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "")}, React.createElement("td", {className: "Hu-item-3 " + (this.thClass()), style: this.thStyle()}, React.createElement("i", {className: "fa fa-file-o Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "用户管理" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer"}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), this.initNewTD(), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: (this.props.Vm.IsDel ? "acs-delete" : "")}, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {className: (this.props.Vm.IsTreeTableShow ? "hide" : "")}, React.createElement("td", {className: "Hu-item-2 " + (this.thClass()), style: this.thStyle()}, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "维修信息" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer"}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), this.initNewTD(), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: (this.props.Vm.IsDel ? "acs-delete" : "")}, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {className: (this.props.Vm.IsTreeTableShow ? "hide" : "")}, React.createElement("td", {className: "Hu-item-2 " + (this.thClass()), style: this.thStyle()}, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "设备信息" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer"}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), this.initNewTD(), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: (this.props.Vm.IsDel ? "acs-delete" : "")}, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", null, React.createElement("td", {className: "Hu-item-1 " + (this.thClass()), style: this.thStyle()}, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "弘正采购" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer"}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), this.initNewTD(), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: (this.props.Vm.IsDel ? "acs-delete" : "")}, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", null, React.createElement("td", {className: "Hu-item-1 " + (this.thClass()), style: this.thStyle()}, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "会员信息" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer"}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), this.initNewTD(), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: (this.props.Vm.IsDel ? "acs-delete" : "")}, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", null, React.createElement("td", {className: "Hu-item-1 " + (this.thClass()), style: this.thStyle()}, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "新基础信息平台" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer"}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), this.initNewTD(), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: (this.props.Vm.IsDel ? "acs-delete" : "")}, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", null, React.createElement("td", {className: "Hu-item-1 " + (this.thClass()), style: this.thStyle()}, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "新权限管理" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer"}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), this.initNewTD(), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: (this.props.Vm.IsDel ? "acs-delete" : "")}, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))));
            };
            UserMenuRoleReact.prototype._initUserRole = function () {
                var _this = this;
                var addTr = React.createElement("tr", null, React.createElement("td", {className: this.thClass(), style: this.thStyle()}, React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { return _this.fun_OpenUrlUser(); }})));
                return React.createElement("tbody", {className: (this.props.Vm.IsTreeTableToggle1 ? "hide" : "")}, React.createElement("tr", null, React.createElement("td", {className: (this.thClass()) + (this.props.Vm.IsDelUser ? " acs-delete" : ""), style: this.thStyle()}, React.createElement(ESpan, {children: null, Vm: this.Em("我的秘书")}), React.createElement("span", {className: "Hc-edit-spanV"}, "mysecret"), React.createElement("i", {className: "fa Hu-pointer" + (this.props.Vm.IsDelUser ? " fa-reply " : " fa-times"), onClick: function () { _this.fun_delUserClick(); }})), this.initNewTD(), React.createElement("td", {className: this.props.Vm.IsDelUser ? "acs-delete" : ""}, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: this.props.Vm.IsDelUser ? "acs-delete" : ""}, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: (this.props.Vm.IsDel ? "acs-delete" : "") + (this.props.Vm.IsDelUser ? " acs-delete" : "")}, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: this.props.Vm.IsDelUser ? "acs-delete" : ""}, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: this.props.Vm.IsDelUser ? "acs-delete" : ""}, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: this.props.Vm.IsDelUser ? "acs-delete" : ""}, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: this.props.Vm.IsDelUser ? "acs-delete" : ""}, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: this.props.Vm.IsDelUser ? "acs-delete" : ""}, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: this.props.Vm.IsDelUser ? "acs-delete" : ""}, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: this.props.Vm.IsDelUser ? "acs-delete" : ""}, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: this.props.Vm.IsDelUser ? "acs-delete" : ""}, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", null, React.createElement("td", {className: this.thClass(), style: this.thStyle()}, React.createElement(ESpan, {children: null, Vm: this.Em("测试号100")}), React.createElement("span", {className: "Hc-edit-spanV"}, "测试号100")), this.initNewTD(), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: (this.props.Vm.IsDel ? "acs-delete" : "")}, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", null, React.createElement("td", {className: (this.thClass()) + (this.props.Vm.IsTdChange ? " acs-edit-check" : ""), style: this.thStyle()}, React.createElement(ESpan, {children: null, Vm: this.Em("小猫", function (vm, ischange) { _this.fun_ESpanChange(ischange); })}), React.createElement("span", {className: "Hc-edit-spanV"}, "xiaomao")), this.initNewTD(), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: (this.props.Vm.IsDel ? "acs-delete" : "")}, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", null, React.createElement("td", {className: this.thClass(), style: this.thStyle()}, React.createElement(ESpan, {children: null, Vm: this.Em("默认管理员")}), React.createElement("span", {className: "Hc-edit-spanV"}, "admin")), this.initNewTD(), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", {className: (this.props.Vm.IsDel ? "acs-delete" : "")}, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), this._initNewTrTDList(), React.createElement("tr", null, React.createElement("td", {className: this.thClass(), style: this.thStyle()}, React.createElement("span", {className: "acsRelative"}, React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_OpenUrlUser(); }}), React.createElement("strong", null, "添加用户")), React.createElement("span", {className: "acsRelative"}, React.createElement("i", {className: "fa fa-th-large Hu-pointer"}), React.createElement("strong", null, "导入用户")))));
            };
            UserMenuRoleReact.prototype.fun_IsChagneCheck = function () {
                this.props.Vm.IsChecked = !this.props.Vm.IsChecked;
                this.forceUpdate();
            };
            UserMenuRoleReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.LeftNum = _$obj.scrollLeft();
                this.props.Vm.scrollAuto();
            };
            UserMenuRoleReact.prototype.fun_OpenUrlRole = function () {
                urlFile.Core.AkUrl.Current().openUrl("$winNewRolePage$", true);
            };
            UserMenuRoleReact.prototype.fun_OpenUrlUser = function () {
                urlFile.Core.AkUrl.Current().openUrl("$winNewUserPage$", true);
            };
            UserMenuRoleReact.prototype.fun_OpenUrlNode = function () {
                urlFile.Core.AkUrl.Current().openUrl("$winNewNodePage$", true);
            };
            UserMenuRoleReact.prototype.fun_ModalClick = function () {
                this.props.Vm.IsModalShow = !this.props.Vm.IsModalShow;
                this.forceUpdate();
            };
            UserMenuRoleReact.prototype.fun_delClick = function () {
                this.props.Vm.IsDel = !this.props.Vm.IsDel;
                this.forceUpdate();
            };
            UserMenuRoleReact.prototype.fun_delUserClick = function () {
                this.props.Vm.IsDelUser = !this.props.Vm.IsDelUser;
                this.forceUpdate();
            };
            UserMenuRoleReact.prototype.fun_OpenUrlButton = function () {
                urlFile.Core.AkUrl.Current().openUrl("$winNewButtonPage$", true);
            };
            UserMenuRoleReact.prototype.fun_ESpanChange = function (ischange) {
                this.props.Vm.IsTdChange = ischange;
                this.props.Vm.forceUpdate("");
            };
            UserMenuRoleReact.prototype.Em = function (content, changeEvent, config) {
                this.EspanVMIndex++;
                if (config) {
                    config.Content = content;
                    if (changeEvent) {
                        config.ChangeEvent = changeEvent;
                    }
                }
                else {
                    config = { Content: content, ChangeEvent: changeEvent };
                }
                return this.props.Vm.getESpan("name" + this.EspanVMIndex, config);
            };
            UserMenuRoleReact.prototype.fun_TreeTableToggle = function () {
                this.props.Vm.IsTreeTableToggle = !this.props.Vm.IsTreeTableToggle;
                this.forceUpdate();
            };
            UserMenuRoleReact.prototype.fun_TreeTableToggle1 = function () {
                this.props.Vm.IsTreeTableToggle1 = !this.props.Vm.IsTreeTableToggle1;
                this.forceUpdate();
            };
            UserMenuRoleReact.prototype.fun_TreeTableClick = function () {
                this.props.Vm.IsTreeTableShow = !this.props.Vm.IsTreeTableShow;
                this.forceUpdate();
            };
            UserMenuRoleReact.prototype.fun_TreeTableClick1 = function () {
                this.props.Vm.IsTreeTableShow1 = !this.props.Vm.IsTreeTableShow1;
                this.forceUpdate();
            };
            UserMenuRoleReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            //private fun_AddTr() {
            //    //this.props.Vm.NewTrIndex++;
            //    this.props.Vm.IsNewUserShow = !this.props.Vm.IsNewUserShow;
            //    this.forceUpdate();
            //}
            UserMenuRoleReact.prototype._initNewThList = function () {
                var _res = [];
                {
                    this.props.Vm.RoleList.map(function (a) {
                        _res.unshift(React.createElement("th", {className: "acs-new-col"}, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: a.RoleName })}), React.createElement("span", {className: "Hc-edit-spanV"}, a.RoleSign), React.createElement("i", {className: "fa fa-times Hu-pointer"})));
                    });
                }
                return _res;
            };
            //private _initNewTrList(): React.ReactElement<any>[] {
            //    var _arry = [];
            //    for (var i: number = 0; i < this.props.Vm.NewTrIndex; i++) {
            //        _arry.push(<tr className="acs-new-col ">{this._initNewTrTDList() }</tr>);
            //    }
            //    return _arry;
            //}
            UserMenuRoleReact.prototype._initNewTrTDList = function () {
                var _this = this;
                var _arry = [];
                var _arryCheck = [];
                for (var i = 0; i < this.props.Vm.NewThIndex + 11; i++) {
                    _arryCheck.push(React.createElement("td", {className: "acs-new-row"}, React.createElement("input", {type: "checkbox"})));
                }
                {
                    this.props.Vm.UserList.map(function (a) {
                        _arry.push(React.createElement("tr", null, React.createElement("td", {className: "acs-new-row " + (_this.thClass()), style: _this.thStyle()}, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: a.UserName })}), React.createElement("span", {className: "Hc-edit-spanV"}, a.LoginName)), _arryCheck));
                    });
                }
                return _arry;
            };
            UserMenuRoleReact.prototype.initNewTD = function () {
                var _arry = [];
                for (var i = 0; i < this.props.Vm.NewThIndex; i++) {
                    _arry.push(React.createElement("td", {className: "acs-new-row"}, React.createElement("input", {type: "checkbox"})));
                }
                return _arry;
            };
            ;
            return UserMenuRoleReact;
        }(domCore.DomReact));
        UserMenuRole.UserMenuRoleReact = UserMenuRoleReact;
        var UserMenuRoleVm = (function (_super) {
            __extends(UserMenuRoleVm, _super);
            function UserMenuRoleVm() {
                _super.call(this);
                this.ReactType = UserMenuRoleReact;
                // public GridObj: GridFormFile.ui.GridFormVm;
                this.IsModalShow = false;
                this.IsTabShow = false;
                this.IsTreeNodeShow = false;
                this.IsTreeTableToggle = false;
                this.IsTreeTableToggle1 = false;
                this.IsNewRoleShow = false;
                this.IsNewUserShow = false;
                this.IsTreeTableShow = false;
                this.IsTreeTableShow1 = false;
                this.NewThIndex = 0;
                this.NewTrIndex = 0;
                this.ModalCurrentIndex = 0;
                this.IsTdChange = false;
                this.IsThChange = false;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                // public ScrollNum: number;
                this.IsDel = false;
                this.IsDelUser = false;
                this.IsChecked = false;
                this.PagerObj = new PaginationFile.tool.PaginationVm;
                this.ESpanDict = {};
                this.MetaShowData = {
                    Name: "菜单 / 角色 / 用户 关系",
                    Content: "可以添加用户，为用户添加角色，以及给角色分配不同的菜单权限",
                    List: ["邵祺", "周欢明"]
                };
                this.RoleList = [];
                this.UserList = [];
            }
            UserMenuRoleVm.prototype.getESpan = function (name, config) {
                var _espan = this.ESpanDict[name];
                if (_espan) {
                    return _espan;
                }
                else {
                    var _es = this.ESpanDict[name] = new ESpanVm(config);
                    return _es;
                }
            };
            UserMenuRoleVm.prototype.addRole = function (obj) {
                this.NewThIndex++;
                this.getEmit("React").emit("setScroll");
                this.RoleName = obj.RoleName;
                this.RoleSign = obj.RoleSign;
                this.RoleList.push({ RoleName: obj.RoleName, RoleSign: obj.RoleSign });
                this.forceUpdate("");
            };
            UserMenuRoleVm.prototype.addUser = function (obj) {
                this.NewTrIndex++;
                this.UserName = obj.UserName;
                this.LoginName = obj.LoginName;
                this.UserList.push({ UserName: obj.UserName, LoginName: obj.LoginName });
                this.forceUpdate("");
            };
            UserMenuRoleVm.prototype.scrollAuto = function () {
                this.IsAcsRelative = this.LeftNum > 0;
                this.forceUpdate("");
            };
            return UserMenuRoleVm;
        }(domCore.DomVm));
        UserMenuRole.UserMenuRoleVm = UserMenuRoleVm;
        var UserMenuRoleStates = (function (_super) {
            __extends(UserMenuRoleStates, _super);
            function UserMenuRoleStates() {
                _super.apply(this, arguments);
            }
            return UserMenuRoleStates;
        }(domCore.DomStates));
        UserMenuRole.UserMenuRoleStates = UserMenuRoleStates;
        var UserMenuRoleProps = (function (_super) {
            __extends(UserMenuRoleProps, _super);
            function UserMenuRoleProps() {
                _super.apply(this, arguments);
            }
            return UserMenuRoleProps;
        }(domCore.DomProps));
        UserMenuRole.UserMenuRoleProps = UserMenuRoleProps;
    })(UserMenuRole = exports.UserMenuRole || (exports.UserMenuRole = {}));
});
