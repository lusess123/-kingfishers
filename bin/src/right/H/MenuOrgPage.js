var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../01core/Url", "./../../04page/BaseWebPage", "./../../05tool/EditSpan", "./tool/Reveal", "./../../05tool/Pagination"], function (require, exports, React, iocFile, urlFile, basewedPageFile, EditSpanFile, RevealFile, PaginationFile) {
    "use strict";
    var ESpan = EditSpanFile.EditSpan.EditSpanReact;
    var ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
    var Reveal = RevealFile.Reveal.RevealReact;
    var RevealVm = RevealFile.Reveal.RevealVm;
    var MenuOrgPage;
    (function (MenuOrgPage) {
        var MenuOrgPageAction = (function (_super) {
            __extends(MenuOrgPageAction, _super);
            function MenuOrgPageAction() {
                _super.apply(this, arguments);
            }
            return MenuOrgPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        MenuOrgPage.MenuOrgPageAction = MenuOrgPageAction;
        var MenuOrgPageReact = (function (_super) {
            __extends(MenuOrgPageReact, _super);
            function MenuOrgPageReact() {
                _super.apply(this, arguments);
                this.state = new MenuOrgPageStates();
                this.EspanVMIndex = 0;
            }
            MenuOrgPageReact.prototype.pSender = function () {
                var _this = this;
                this.EspanVMIndex = 0;
                var menuPanel = React.createElement("div", {className: "Hm-modals-bg Hg-width Hg-max-width" + (this.props.Vm.IsModalShow ? " show" : " hide")}, React.createElement("div", {className: "Hm-modals Hm-modals-shape Hg-relative"}, React.createElement("h4", null, "新建菜单"), React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "form-control-label pull-right required"}, "菜单名称：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {type: "text", placeholder: "请输入..."}))), React.createElement("a", {className: "Hu-close Hu-pointer", onClick: function () { return _this.fun_ModalClick(); }}, React.createElement("i", {className: "fa fa-close"}))), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-xs btn-primary"}, "提交"))));
                var menuOrg_theader = React.createElement("tr", null, React.createElement("th", null, React.createElement("span", null, "菜单 / 组织机构")), React.createElement("th", null, React.createElement("span", null, "浙江省立同德医院")));
                return React.createElement("div", {className: "acsPaddingLR0-5 acsMarginT0-5 acsGrayBg"}, React.createElement("div", {className: "Hu-pointer", onClick: function () { _this.fun_OpenUrl("df"); }}, React.createElement("i", {className: "fa fa-glass"}, "角色筛选")), React.createElement("div", {className: "acs-tabs acs-grids"}, React.createElement("ul", {className: "acs-tabs-titile"}, React.createElement("li", {className: "Hu-pointer" + (this.props.Vm.TabCurrentIndex == 0 ? " active" : " "), onClick: function () { _this.fun_TabsClick(0); }}, "为组织机构分配菜单权限"), React.createElement("li", {className: "Hu-pointer" + (this.props.Vm.TabCurrentIndex == 1 ? " active" : " "), onClick: function () { _this.fun_TabsClick(1); }}, "菜单 / 角色 / 用户 关系")), React.createElement("div", {className: "acs-tabs-content"}, React.createElement("div", {className: (this.props.Vm.TabCurrentIndex == 0 ? "" : " hide")}, React.createElement("div", {className: "acs-table Hg-width"}, React.createElement("table", {className: "acs-table acs-table-tree"}, menuOrg_theader, this._initMenuOrgPanel())), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.fun_OpenUrl2(); }}, "保存"), React.createElement("input", {type: "button", value: "保存", className: "btn btn-sm pull-right", disabled: "disabled"}))), React.createElement("div", {className: (this.props.Vm.TabCurrentIndex == 1 ? "" : " hide")}, this._initPager(), React.createElement("div", {className: "acs-table Hg-width"}, React.createElement("table", {className: "acs-table Hm-table-tree"}, this._initRole(), this._initMenuRole(), this._initRole1(), this._initUserRole())), this._initPager(), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-xs btn-primary"}, "确定"))))), menuPanel);
            };
            MenuOrgPageReact.prototype._initRevealShow = function () {
                return React.createElement(Reveal, {children: null, Vm: new RevealVm({ Title: "新建菜单", LabelName: "菜单名称:", IsModalShow: true })});
            };
            MenuOrgPageReact.prototype._initMenuOrgPanel = function () {
                var _this = this;
                return React.createElement("tbody", null, React.createElement("tr", {index: "1", className: true}, React.createElement("td", {className: (this.props.Vm.IsTdChange ? "acs-edit-check" : "")}, React.createElement("i", {className: "Hu-pointer fa fa-" + (this.props.Vm.IsTreeTableShow ? "plus-square" : "minus-square"), onClick: function () { return _this.fun_TreeTableClick(); }}), React.createElement(ESpan, {children: null, Vm: this.Em("报修管理")}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "2", className: (this.props.Vm.IsTreeTableShow ? "hide" : "")}, React.createElement("td", {className: "acsPaddingL2-2"}, React.createElement("i", {className: "Hu-pointer fa fa-" + (this.props.Vm.IsTreeTableShow1 ? "plus-square" : "minus-square"), onClick: function () { return _this.fun_TreeTableClick1(); }}), React.createElement(ESpan, {children: null, Vm: this.Em("基础信息")}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "3", className: (this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") + (this.props.Vm.IsTreeNodeShow ? " hide" : "")}, React.createElement("td", {className: "acsPaddingL3-8"}, React.createElement("i", {className: "fa fa-file-o Hu-pointer"}), React.createElement(ESpan, {children: null, Vm: this.Em("使用单位")}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "3", className: (this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "")}, React.createElement("td", {className: "acsPaddingL3-8"}, React.createElement("i", {className: "fa fa-file-o Hu-pointer"}), React.createElement(ESpan, {children: null, Vm: this.Em("用户管理")}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "2", className: (this.props.Vm.IsTreeTableShow ? "hide" : "")}, React.createElement("td", {className: "acsPaddingL2-2"}, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {children: null, Vm: this.Em("维修信息")}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "2", className: (this.props.Vm.IsTreeTableShow ? "hide" : "")}, React.createElement("td", {className: "acsPaddingL2-2"}, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {children: null, Vm: this.Em("设备信息")}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "1"}, React.createElement("td", null, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {children: null, Vm: this.Em("弘正采购")}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "1"}, React.createElement("td", null, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "会员信息" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "1"}, React.createElement("td", null, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "新基础信息平台" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))), React.createElement("tr", {index: "1"}, React.createElement("td", null, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "新权限管理" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"}))));
            };
            MenuOrgPageReact.prototype._initPager = function () {
                return this.props.Vm.PagerObj.intoDom();
            };
            MenuOrgPageReact.prototype._initMenuRole = function () {
                var _this = this;
                return React.createElement("tbody", {className: (this.props.Vm.IsTreeTableToggle ? "hide" : "")}, React.createElement("tr", {index: "1", className: true}, React.createElement("td", null, React.createElement("i", {className: "Hu-pointer fa fa-" + (this.props.Vm.IsTreeTableShow ? "plus-square" : "minus-square"), onClick: function () { return _this.fun_TreeTableClick(); }}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "报修管理" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", {index: "2", className: (this.props.Vm.IsTreeTableShow ? "hide" : "")}, React.createElement("td", {className: "acsPaddingL2-2"}, React.createElement("i", {className: "Hu-pointer fa fa-" + (this.props.Vm.IsTreeTableShow1 ? "plus-square" : "minus-square"), onClick: function () { return _this.fun_TreeTableClick1(); }}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "基础信息" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", {index: "3", className: (this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") + (this.props.Vm.IsTreeNodeShow ? " hide" : "")}, React.createElement("td", {className: "acsPaddingL3-8"}, React.createElement("i", {className: "fa fa-file-o Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "使用单位" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", {index: "3", className: (this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "")}, React.createElement("td", {className: "acsPaddingL3-8"}, React.createElement("i", {className: "fa fa-file-o Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "用户管理" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", {index: "2", className: (this.props.Vm.IsTreeTableShow ? "hide" : "")}, React.createElement("td", {className: "acsPaddingL2-2"}, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "维修信息" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", {index: "2", className: (this.props.Vm.IsTreeTableShow ? "hide" : "")}, React.createElement("td", {className: "acsPaddingL2-2"}, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "设备信息" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", {index: "1"}, React.createElement("td", null, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "弘正采购" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", {index: "1"}, React.createElement("td", null, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "会员信息" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", {index: "1"}, React.createElement("td", null, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "新基础信息平台" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", {index: "1"}, React.createElement("td", null, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "新权限管理" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_ModalClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()));
            };
            MenuOrgPageReact.prototype._initRole = function () {
                var _this = this;
                return React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, React.createElement("span", null, "菜单 / 角色 "), " ", React.createElement("i", {className: "Hu-pointer fa fa-caret-" + (this.props.Vm.IsTreeTableToggle ? "up" : "down"), onClick: function () { _this.fun_TreeTableToggle(); }})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("报修人员角色")}), React.createElement("span", {className: "Hc-edit-spanV"}, "EREUserRole")), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("维修人员角色")}), React.createElement("span", {className: "Hc-edit-spanV"}, "EREServicemanRole")), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("科长")}), React.createElement("span", {className: "Hc-edit-spanV"}, "ERESectionChiefRole")), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: this.Em("总服务台人员角色")}), React.createElement("span", {className: "Hc-edit-spanV"}, "EREFrontDesk StaffRole")), this._initNewThList(), React.createElement("th", null, React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_AddTh(); }}))));
            };
            MenuOrgPageReact.prototype._initRole1 = function () {
                var _this = this;
                return React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, React.createElement("span", null, "角色 / 用户"), " ", React.createElement("i", {className: "Hu-pointer fa fa-caret-" + (this.props.Vm.IsTreeTableToggle1 ? "up" : "down"), onClick: function () { _this.fun_TreeTableToggle1(); }})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "报修人员角色" })}), React.createElement("span", {className: "Hc-edit-spanV"}, "EREUserRole")), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "维修人员角色" })}), React.createElement("span", {className: "Hc-edit-spanV"}, "EREServicemanRole")), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "科长" })}), React.createElement("span", {className: "Hc-edit-spanV"}, "ERESectionChiefRole")), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "总服务台人员角色" })}), React.createElement("span", {className: "Hc-edit-spanV"}, "EREFrontDesk StaffRole")), this._initNewThList(), React.createElement("th", null, React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_AddTh(); }}))));
            };
            MenuOrgPageReact.prototype.Em = function (content, changeEvent, config) {
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
            MenuOrgPageReact.prototype._initUserRole = function () {
                var _this = this;
                var addTr = React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { return _this.fun_AddTr(); }})), React.createElement("td", null, React.createElement("input", {type: "checkbox", checked: true})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox", checked: true})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD());
                return React.createElement("tbody", {className: (this.props.Vm.IsTreeTableToggle1 ? "hide" : "")}, React.createElement("tr", null, React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: this.Em("我的秘书")}), React.createElement("span", {className: "Hc-edit-spanH"}, "mysecret")), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", null, React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: this.Em("测试号100")}), React.createElement("span", {className: "Hc-edit-spanH"}, "测试号100")), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", null, React.createElement("td", {className: (this.props.Vm.IsTdChange ? "acs-edit-check" : "")}, React.createElement(ESpan, {children: null, Vm: this.Em("小猫", function (vm, ischange) { _this.fun_ESpanChange(ischange); })}), React.createElement("span", {className: "Hc-edit-spanH"}, "xiaomao")), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", {className: "acs-new-row"}, React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "默认管理员" })}), React.createElement("span", {className: "Hc-edit-spanH"}, "admin")), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), this._initNewTrList(), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_AddTr(); }})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()));
            };
            MenuOrgPageReact.prototype._initNewThList = function () {
                var _res = [];
                for (var i = 0; i < this.props.Vm.NewThIndex; i++) {
                    _res.push(React.createElement("th", {className: "acs-new-col"}, React.createElement("input", {type: "text", placeholder: "请输入角色名称..."})));
                }
                return _res;
            };
            MenuOrgPageReact.prototype._initNewTrList = function () {
                var _arry = [];
                for (var i = 0; i < this.props.Vm.NewTrIndex; i++) {
                    _arry.push(React.createElement("tr", {className: "acs-new-col"}, this._initNewTrTDList()));
                }
                return _arry;
            };
            MenuOrgPageReact.prototype._initNewTrTDList = function () {
                var _arry = [];
                _arry.push(React.createElement("td", null, React.createElement("input", {type: 'text', placeholder: '请输入用户名称...'})));
                for (var i = 0; i < this.props.Vm.NewThIndex + 5; i++) {
                    _arry.push(React.createElement("td", {className: "acs-new-row"}, React.createElement("input", {type: "checkbox"})));
                }
                return _arry;
            };
            MenuOrgPageReact.prototype.initNewTD = function () {
                var _arry = [];
                for (var i = 0; i < this.props.Vm.NewThIndex; i++) {
                    _arry.push(React.createElement("td", null, React.createElement("input", {type: "checkbox"})));
                }
                return _arry;
            };
            ;
            MenuOrgPageReact.prototype.fun_AddTh = function () {
                this.props.Vm.NewThIndex++;
                this.forceUpdate();
            };
            MenuOrgPageReact.prototype.fun_AddTr = function () {
                this.props.Vm.NewTrIndex++;
                this.forceUpdate();
            };
            MenuOrgPageReact.prototype.fun_TreeTableClick = function () {
                this.props.Vm.IsTreeTableShow = !this.props.Vm.IsTreeTableShow;
                this.forceUpdate();
            };
            MenuOrgPageReact.prototype.fun_TreeTableClick1 = function () {
                this.props.Vm.IsTreeTableShow1 = !this.props.Vm.IsTreeTableShow1;
                this.forceUpdate();
            };
            MenuOrgPageReact.prototype.fun_DelTreeNodeClick = function () {
                this.props.Vm.IsTreeNodeShow = !this.props.Vm.IsTreeNodeShow;
                this.forceUpdate();
            };
            MenuOrgPageReact.prototype.fun_TabsClick = function (index) {
                this.props.Vm.TabCurrentIndex = index;
                this.forceUpdate();
            };
            MenuOrgPageReact.prototype.fun_ModalClick = function () {
                this.props.Vm.IsModalShow = !this.props.Vm.IsModalShow;
                this.forceUpdate();
            };
            MenuOrgPageReact.prototype.fun_TreeTableToggle = function () {
                this.props.Vm.IsTreeTableToggle = !this.props.Vm.IsTreeTableToggle;
                this.forceUpdate();
            };
            MenuOrgPageReact.prototype.fun_TreeTableToggle1 = function () {
                this.props.Vm.IsTreeTableToggle1 = !this.props.Vm.IsTreeTableToggle1;
                this.forceUpdate();
            };
            MenuOrgPageReact.prototype.fun_OpenUrl = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$winCustomColPage$" + vals + "$", true);
                //this.forceUpdate();
            };
            MenuOrgPageReact.prototype.fun_OpenUrl2 = function () {
                urlFile.Core.AkUrl.Current().openUrl("$MenuUserPage$");
                //this.forceUpdate();
            };
            MenuOrgPageReact.prototype.fun_ESpanChange = function (ischange) {
                this.props.Vm.IsTdChange = ischange;
                this.props.Vm.forceUpdate("");
            };
            return MenuOrgPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        MenuOrgPage.MenuOrgPageReact = MenuOrgPageReact;
        var MenuOrgPageVm = (function (_super) {
            __extends(MenuOrgPageVm, _super);
            function MenuOrgPageVm() {
                _super.call(this);
                this.ReactType = MenuOrgPageReact;
                this.RevealPanel = RevealVm;
                this.IsTreeTableShow = false;
                this.IsTreeTableShow1 = false;
                this.IsTdHoverShow = false;
                this.IsModalShow = false;
                this.IsTabShow = false;
                this.IsTreeTableToggle = false;
                this.IsTreeTableToggle1 = false;
                this.NewThIndex = 0;
                this.NewTrIndex = 0;
                this.IsTdChange = false;
                this.TabCurrentIndex = 0;
                this.ESpanDict = {};
                var pagerVm = this.PagerObj = new PaginationFile.tool.PaginationVm();
                pagerVm.PageNo = 0;
                pagerVm.PageSize = 50;
                pagerVm.TotalCount = 5000;
                pagerVm.PageClickEvent = function (pageIndex) {
                    //this.props.Vm.loadPageData(pageIndex);
                    pagerVm.PageNo = pageIndex;
                    pagerVm.IsChange = true;
                    pagerVm.forceUpdate("");
                };
            }
            MenuOrgPageVm.prototype.getESpan = function (name, config) {
                var _espan = this.ESpanDict[name];
                if (_espan) {
                    return _espan;
                }
                else {
                    var _es = this.ESpanDict[name] = new ESpanVm(config);
                    return _es;
                }
            };
            return MenuOrgPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        MenuOrgPage.MenuOrgPageVm = MenuOrgPageVm;
        var MenuOrgPageStates = (function (_super) {
            __extends(MenuOrgPageStates, _super);
            function MenuOrgPageStates() {
                _super.apply(this, arguments);
            }
            return MenuOrgPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        MenuOrgPage.MenuOrgPageStates = MenuOrgPageStates;
        var MenuOrgPageProps = (function (_super) {
            __extends(MenuOrgPageProps, _super);
            function MenuOrgPageProps() {
                _super.apply(this, arguments);
            }
            return MenuOrgPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        MenuOrgPage.MenuOrgPageProps = MenuOrgPageProps;
        iocFile.Core.Ioc.Current().RegisterType("MENUORGPAGE", basewedPageFile.Web.BaseWebPageVm, MenuOrgPageVm);
    })(MenuOrgPage = exports.MenuOrgPage || (exports.MenuOrgPage = {}));
});
