var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../01core/Url", "./../../04page/BaseWebPage", "./../../../src/05tool/EditSpan", "./tool/Reveal", "./MenuOrgPage", "./MenuUserPage", "./tool/OrgTree", "./tool/OrgEdit", "./tool/OrgMenu", "./tool/UserMenuRole", "./NewRolePage", "./../../05tool/Pagination"], function (require, exports, React, iocFile, urlFile, basewedPageFile, EditSpanFile, RevealFile, MenuOrgFile, MenuUserFile, OrgTreeFile, OrgEditFile, OrgMenuFile, UserMenuRoleFile, NewRolePageFile, PaginationFile) {
    "use strict";
    var ESpan = EditSpanFile.EditSpan.EditSpanReact;
    var ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
    var RevealVm = RevealFile.Reveal.RevealVm;
    var MenuOrgVm = MenuOrgFile.MenuOrgPage.MenuOrgPageVm;
    var MenuUserVm = MenuUserFile.MenuUserPage.MenuUserPageVm;
    var OrgTreeVm = OrgTreeFile.OrgTree.OrgTreeVm;
    var OrgEditVm = OrgEditFile.OrgEdit.OrgEditVm;
    var OrgMenuVm = OrgMenuFile.OrgMenu.OrgMenuVm;
    var UserMenuRoleVm = UserMenuRoleFile.UserMenuRole.UserMenuRoleVm;
    var NewRolePageVm = NewRolePageFile.NewRolePage.NewRolePageVm;
    MenuUserFile;
    var rightPage;
    (function (rightPage) {
        var rightPageAction = (function (_super) {
            __extends(rightPageAction, _super);
            function rightPageAction() {
                _super.apply(this, arguments);
            }
            return rightPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        rightPage.rightPageAction = rightPageAction;
        var rightPageReact = (function (_super) {
            __extends(rightPageReact, _super);
            function rightPageReact() {
                _super.apply(this, arguments);
                this.state = new rightPageStates();
            }
            rightPageReact.prototype.pSender = function () {
                var _this = this;
                var modalPanel = React.createElement("div", {className: "Hm-modals-bg Hg-width Hg-max-width" + (this.props.Vm.IsModalShow ? " show" : " hide")}, React.createElement("div", {className: "Hm-modals  Hm-modals-shape Hg-relative"}, React.createElement("h4", null, "新增组织机构"), React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "right required"}, "上级机构：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement(ESpan, {children: null, Vm: new ESpanVm({ Content: "请输入..." })}), React.createElement("input", {type: "text", placeholder: "请输入..."}))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "form-control-label pull-right required"}, "机构名称：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {type: "text", placeholder: "请输入..."}))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "form-control-label pull-right required"}, "机构编码：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("input", {type: "text", placeholder: "请输入..."}))), React.createElement("a", {className: "Hu-close Hu-pointer", onClick: function () { return _this.fun_ModalClick(); }}, React.createElement("i", {className: "fa fa-close"}))), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-xs btn-primary"}, "提交"))));
                return React.createElement("div", null, React.createElement("div", {className: "col-lg-2 col-md-2 text-left Hm-toggle-menu"}, this.props.Vm.OrgTreeObj.intoDom()), React.createElement("div", {className: "col-lg-10 col-md-10 col-sm-12 col-xs-12"}, this.props.Vm.OrgEditObj.intoDom(), React.createElement("div", {className: "Hm-org-content"}, React.createElement("div", {className: "Hm-grids"}, React.createElement("ul", {className: "nav nav-tabs Hu-tabs-title"}, React.createElement("li", {className: "nav-item Hu-pointer" + (this.props.Vm.TabCurrentIndex == 0 ? " active" : " "), onClick: function () { _this.fun_TabsClick(0); }}, "为组织机构分配菜单权限"), React.createElement("li", {className: "nav-item Hu-pointer" + (this.props.Vm.TabCurrentIndex == 1 ? " active" : " "), onClick: function () { _this.fun_TabsClick(1); }}, "菜单 / 角色 / 用户 关系")), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane" + (this.props.Vm.TabCurrentIndex == 0 ? " active" : " ")}, React.createElement("div", {className: ""}, React.createElement("div", {className: "Hm-header-btn btn-group-sm clearfix"}, React.createElement("input", {type: "button", value: "保存", className: "btn btn-primary pull-right", disabled: "disabled"}), React.createElement("a", {className: "btn btn-primary pull-right"}, "保存"))), React.createElement("div", {className: ""}, React.createElement("div", {className: "table-responsive"}, this.props.Vm.OrgMenuObj.intoDom()))), React.createElement("div", {className: "tab-pane Hg-relative clearfix " + (this.props.Vm.TabCurrentIndex == 1 ? " active" : " ")}, React.createElement("div", {className: ""}, React.createElement("div", {className: "Hm-header-btn btn-group-sm clearfix"}, React.createElement("a", {className: "btn btn-primary pull-right"}, "保存"), React.createElement("a", {className: "btn btn-primary pull-right", onClick: function () { _this.fun_OpenUrl("df"); }}, "设置表头")), React.createElement("div", {className: ""}, this.props.Vm.UserMenuRoleObj.intoDom(), this._initPager())), React.createElement("div", {className: "acs-new-role-btn ACT-BTNSCROLL"})))))), modalPanel);
            };
            rightPageReact.prototype._initPager = function () {
                return this.props.Vm.PagerObj.intoDom();
            };
            rightPageReact.prototype.fun_ModalClick = function () {
                urlFile.Core.AkUrl.Current().openUrl("$winrightpage$2342343434$");
            };
            rightPageReact.prototype.fun_OpenUrl = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$winCustomColPage$" + vals + "$", true);
            };
            rightPageReact.prototype.fun_TabsClick = function (index) {
                this.props.Vm.TabCurrentIndex = index;
                this.forceUpdate();
            };
            rightPageReact.prototype.fun_PagerClick = function () {
                this.props.Vm.IsPagerShow = !this.props.Vm.IsPagerShow;
                this.forceUpdate();
            };
            return rightPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        rightPage.rightPageReact = rightPageReact;
        var rightPageVm = (function (_super) {
            __extends(rightPageVm, _super);
            function rightPageVm() {
                _super.call(this);
                this.ReactType = rightPageReact;
                this.RevealPanel = RevealVm;
                this.IsModalShow = false;
                this.IsPagerShow = false;
                this.MenuOrgObj = new MenuOrgVm();
                this.MenuUserObj = new MenuUserVm();
                this.OrgTreeObj = new OrgTreeVm();
                this.OrgEditObj = new OrgEditVm();
                this.NewRoleObj = new NewRolePageVm();
                this.OrgMenuObj = new OrgMenuVm();
                this.UserMenuRoleObj = new UserMenuRoleVm();
                this.TabCurrentIndex = 0;
                var pagerVm = this.PagerObj = new PaginationFile.tool.PaginationVm();
                pagerVm.PageNo = 0;
                pagerVm.PageSize = 20;
                pagerVm.TotalCount = 80;
                pagerVm.PageClickEvent = function (pageIndex) {
                    //this.props.Vm.loadPageData(pageIndex);
                    pagerVm.PageNo = pageIndex;
                    pagerVm.IsChange = true;
                    pagerVm.forceUpdate("");
                };
            }
            rightPageVm.prototype.ReceivePageSend = function (config, obj) {
                _super.prototype.ReceivePageSend.call(this, config, obj);
                switch (config.FromModulename) {
                    case "NEWROLEPAGE":
                        if (obj.RoleSign) {
                            var _obj = obj;
                            this.UserMenuRoleObj.addRole(_obj);
                        }
                        break;
                    case "NEWUSERPAGE":
                        this.UserMenuRoleObj.addUser(obj);
                        this.UserMenuRoleObj.forceUpdate("");
                        break;
                    case "NEWORGPAGES":
                        this.OrgTreeObj.addNodeByName(obj);
                        break;
                    default:
                        break;
                }
            };
            return rightPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        rightPage.rightPageVm = rightPageVm;
        var rightPageStates = (function (_super) {
            __extends(rightPageStates, _super);
            function rightPageStates() {
                _super.apply(this, arguments);
            }
            return rightPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        rightPage.rightPageStates = rightPageStates;
        var rightPageProps = (function (_super) {
            __extends(rightPageProps, _super);
            function rightPageProps() {
                _super.apply(this, arguments);
            }
            return rightPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        rightPage.rightPageProps = rightPageProps;
        iocFile.Core.Ioc.Current().RegisterType("RIGHTPAGE", basewedPageFile.Web.BaseWebPageVm, rightPageVm);
    })(rightPage = exports.rightPage || (exports.rightPage = {}));
});
