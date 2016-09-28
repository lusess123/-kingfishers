var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../04page/BaseWebPage", "./../../05tool/EditSpan", "./tool/Reveal", "./../../05tool/Pagination"], function (require, exports, React, iocFile, basewedPageFile, EditSpanFile, RevealFile, PaginationFile) {
    "use strict";
    var ESpan = EditSpanFile.EditSpan.EditSpanReact;
    var ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
    var RevealVm = RevealFile.Reveal.RevealVm;
    var MenuUserPage;
    (function (MenuUserPage) {
        var MenuUserPageAction = (function (_super) {
            __extends(MenuUserPageAction, _super);
            function MenuUserPageAction() {
                _super.apply(this, arguments);
            }
            return MenuUserPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        MenuUserPage.MenuUserPageAction = MenuUserPageAction;
        var MenuUserPageReact = (function (_super) {
            __extends(MenuUserPageReact, _super);
            function MenuUserPageReact() {
                _super.apply(this, arguments);
                this.state = new MenuUserPageStates();
            }
            MenuUserPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "acsPaddingLR0-5 acsMarginT0-5 acsGrayBg acs-grids"}, React.createElement("div", {className: "acs-rightCloud-text"}, "用户/角色/菜单 关系"), React.createElement("div", {className: "acs-table"}, React.createElement("table", {className: "acs-table acs-table-tree"}, this._initRole(), this._initMenuRole(), this._initRole(), this._initUserRole()), this._initPager()));
            };
            MenuUserPageReact.prototype._initPager = function () {
                return this.props.Vm.PagerObj.intoDom();
            };
            MenuUserPageReact.prototype._initMenuRole = function () {
                var _this = this;
                return React.createElement("tbody", null, React.createElement("tr", {index: "1", className: true}, React.createElement("td", null, React.createElement("i", {className: "Hu-pointer fa fa-" + (this.props.Vm.IsTreeTableShow ? "plus-square" : "minus-square"), onClick: function () { return _this.fun_TreeTableClick(); }}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "报修管理" }), children: null})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", {index: "2", className: (this.props.Vm.IsTreeTableShow ? "hide" : "")}, React.createElement("td", {className: "acsPaddingL2-2"}, React.createElement("i", {className: "Hu-pointer fa fa-" + (this.props.Vm.IsTreeTableShow1 ? "plus-square" : "minus-square"), onClick: function () { return _this.fun_TreeTableClick1(); }}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "基础信息" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_RevealShowClick(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", {index: "3", className: (this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") + (this.props.Vm.IsTreeNodeShow ? " hide" : "")}, React.createElement("td", {className: "acsPaddingL3-8"}, React.createElement("i", {className: "fa fa-file-o Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "使用单位" }), children: null}), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer"}), React.createElement("i", {className: "fa fa-times Hu-pointer", onClick: function () { _this.fun_DelTreeNodeClick(); }})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", {index: "3", className: (this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "")}, React.createElement("td", {className: "acsPaddingL3-8"}, React.createElement("i", {className: "fa fa-file-o Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "用户管理" }), children: null})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", {index: "2", className: (this.props.Vm.IsTreeTableShow ? "hide" : "")}, React.createElement("td", {className: "acsPaddingL2-2"}, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "维修信息" }), children: null})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", {index: "2", className: (this.props.Vm.IsTreeTableShow ? "hide" : "")}, React.createElement("td", {className: "acsPaddingL2-2"}, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "设备信息" }), children: null})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", {index: "1"}, React.createElement("td", null, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "弘正采购" }), children: null})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", {index: "1"}, React.createElement("td", null, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "会员信息" }), children: null})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", {index: "1"}, React.createElement("td", null, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "新基础信息平台" }), children: null})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", {index: "1"}, React.createElement("td", null, React.createElement("i", {className: "fa fa-plus-square Hu-pointer"}), React.createElement(ESpan, {Vm: new ESpanVm({ Content: "新权限管理" }), children: null})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()));
            };
            MenuUserPageReact.prototype._initRole = function () {
                var _this = this;
                return React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, React.createElement("span", null, "菜单 / 角色 / 用户")), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "报修人员角色" })})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "维修人员角色" })})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "科长111" })})), React.createElement("th", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "总服务台人员角色" })})), this._initNewThList(), React.createElement("th", null, React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_AddTh(); }}))));
            };
            MenuUserPageReact.prototype._initUserRole = function () {
                var _this = this;
                var addTr = React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { return _this.fun_AddTr(); }})), React.createElement("td", null, React.createElement("input", {type: "checkbox", checked: true})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox", checked: true})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD());
                return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "我的秘书" })})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", null, React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "测试号100" })})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", null, React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "小猫" })})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), React.createElement("tr", null, React.createElement("td", null, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "默认管理员" })})), React.createElement("td", {className: "hide"}, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()), this._initNewTrList(), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function () { _this.fun_AddTr(); }})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), React.createElement("td", null, React.createElement("input", {type: "checkbox"})), this.initNewTD()));
            };
            MenuUserPageReact.prototype._initNewThList = function () {
                var _res = [];
                for (var i = 0; i < this.props.Vm.NewThIndex; i++) {
                    _res.push(React.createElement("th", null, React.createElement("input", {type: "text", placeholder: "请输入角色名称..."})));
                }
                return _res;
            };
            MenuUserPageReact.prototype._initNewTrList = function () {
                var _arry = [];
                for (var i = 0; i < this.props.Vm.NewTrIndex; i++) {
                    _arry.push(React.createElement("tr", null, this._initNewTrTDList()));
                }
                return _arry;
            };
            MenuUserPageReact.prototype._initNewTrTDList = function () {
                var _arry = [];
                _arry.push(React.createElement("td", null, React.createElement("input", {type: 'text', placeholder: '请输入用户名称...'})));
                for (var i = 0; i < this.props.Vm.NewThIndex + 5; i++) {
                    _arry.push(React.createElement("td", null, React.createElement("input", {type: "checkbox"})));
                }
                return _arry;
            };
            MenuUserPageReact.prototype.initNewTD = function () {
                var _arry = [];
                for (var i = 0; i < this.props.Vm.NewThIndex; i++) {
                    _arry.push(React.createElement("td", null, React.createElement("input", {type: "checkbox"})));
                }
                return _arry;
            };
            ;
            MenuUserPageReact.prototype.fun_AddTh = function () {
                this.props.Vm.NewThIndex++;
                this.forceUpdate();
            };
            MenuUserPageReact.prototype.fun_AddTr = function () {
                this.props.Vm.NewTrIndex++;
                this.forceUpdate();
            };
            MenuUserPageReact.prototype.fun_TreeTableClick = function () {
                this.props.Vm.IsTreeTableShow = !this.props.Vm.IsTreeTableShow;
                this.forceUpdate();
            };
            MenuUserPageReact.prototype.fun_TreeTableClick1 = function () {
                this.props.Vm.IsTreeTableShow1 = !this.props.Vm.IsTreeTableShow1;
                this.forceUpdate();
            };
            MenuUserPageReact.prototype.fun_DelTreeNodeClick = function () {
                this.props.Vm.IsTreeNodeShow = !this.props.Vm.IsTreeNodeShow;
                this.forceUpdate();
            };
            MenuUserPageReact.prototype.fun_RevealShowClick = function () {
                this.props.Vm.RevealPanel.prototype.IsModalShow = true;
                this.forceUpdate();
            };
            return MenuUserPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        MenuUserPage.MenuUserPageReact = MenuUserPageReact;
        var MenuUserPageVm = (function (_super) {
            __extends(MenuUserPageVm, _super);
            function MenuUserPageVm() {
                _super.call(this);
                this.ReactType = MenuUserPageReact;
                this.RevealPanel = RevealVm;
                this.NewThIndex = 0;
                this.NewTrIndex = 0;
                this.IsTreeTableShow = true;
                this.IsTreeTableShow1 = true;
                this.IsTreeNodeShow = false;
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
            return MenuUserPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        MenuUserPage.MenuUserPageVm = MenuUserPageVm;
        var MenuUserPageStates = (function (_super) {
            __extends(MenuUserPageStates, _super);
            function MenuUserPageStates() {
                _super.apply(this, arguments);
            }
            return MenuUserPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        MenuUserPage.MenuUserPageStates = MenuUserPageStates;
        var MenuUserPageProps = (function (_super) {
            __extends(MenuUserPageProps, _super);
            function MenuUserPageProps() {
                _super.apply(this, arguments);
            }
            return MenuUserPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        MenuUserPage.MenuUserPageProps = MenuUserPageProps;
        iocFile.Core.Ioc.Current().RegisterType("MENUUSERPAGE", basewedPageFile.Web.BaseWebPageVm, MenuUserPageVm);
    })(MenuUserPage = exports.MenuUserPage || (exports.MenuUserPage = {}));
});
