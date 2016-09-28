var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../01core/Url", "./../../04page/BaseWebPage", "./../../01core/Event", "./../../05tool/Tree", "./NewMainDom"], function (require, exports, React, iocFile, urlFile, basewedPageFile, eventFile, toolTreeFile, NewMainDom) {
    "use strict";
    var NewRightMainPage;
    (function (NewRightMainPage) {
        var NewRightMainPageAction = (function (_super) {
            __extends(NewRightMainPageAction, _super);
            function NewRightMainPageAction() {
                _super.apply(this, arguments);
            }
            return NewRightMainPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewRightMainPage.NewRightMainPageAction = NewRightMainPageAction;
        var NewRightMainPageReact = (function (_super) {
            __extends(NewRightMainPageReact, _super);
            function NewRightMainPageReact() {
                _super.apply(this, arguments);
                this.state = new NewRightMainPageStates();
            }
            NewRightMainPageReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "col-lg-2 col-md-2 text-left Hm-toggle-menu"}, this.props.Vm.NaviTree.intoDom()), this.props.Vm.NewMainDom.intoDom());
            };
            return NewRightMainPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewRightMainPage.NewRightMainPageReact = NewRightMainPageReact;
        var NewRightMainPageVm = (function (_super) {
            __extends(NewRightMainPageVm, _super);
            function NewRightMainPageVm() {
                var _this = this;
                _super.call(this);
                this.ReactType = NewRightMainPageReact;
                //var pagerVm = this.PagerObj = new PaginationFile.tool.PaginationVm();
                this.UniId = eventFile.App.getUniId().toString();
                //分页
                //pagerVm.PageClickEvent = (pageIndex) => {
                //    //this.props.Vm.loadPageData(pageIndex);
                //    pagerVm.PageNo = pageIndex;
                //    pagerVm.IsChange = true;
                //    pagerVm.forceUpdate("");
                //}
                this.NaviTree = new toolTreeFile.ui.TreeVm();
                //点击树触发 更新事件
                this.NaviTree.onReactNodeClick(function (a) {
                    //发送监听的请求
                    //this.LoadGroupNameCode(a.Value);
                    //if (a.Id != this.NaviTree.Roots[0].Id) {
                    //    this.NaviTree.Roots[0].IsActive = false;
                    //}
                    var dd = _this.getNaviGroupTreeFId();
                    //alert(dd);
                    if (dd) {
                        if (_this.NewMainDom.TabCurrentIndex == 1) {
                            _this.LoadRoleMenuUser(dd, 0);
                        }
                        else if (_this.NewMainDom.TabCurrentIndex == 0) {
                            _this.LoadMenuOrg(dd);
                        }
                    }
                    return true;
                });
                this.NaviTree.NodeTplFun = function (node) {
                    return [(React.createElement("span", null, React.createElement("span", null, node.Text), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function (e) { _this.newOpt(); e.stopPropagation(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer", onClick: function (e) { _this.delOpt(node.Value); e.stopPropagation(); }})))];
                };
            }
            //新增
            NewRightMainPageVm.prototype.newOpt = function () {
                var _str = this.getNaviGroupTreeFId();
                urlFile.Core.AkUrl.Current().openUrl("$winNewGroupNewPage$" + _str + "$", true);
            };
            NewRightMainPageVm.prototype.delOpt = function (val) {
                //alert(val);
                if (confirm("你确定要删除所选中的组织机构？？")) {
                }
            };
            NewRightMainPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/RightCloud/NewRightConfig/fristinit", { Groups: "1" }, function (a) {
                    if (a) {
                        var _data = a.GroupTree.Data.GroupDataList;
                        _this.NaviTree.initTreeVm(_data);
                        if (_this.NaviTree.Roots[0].Children) {
                            //  this.NaviTree.Roots[0].Expand();
                            _this.NaviTree.Roots[0].NoExpand = false;
                            _this.NaviTree.Roots[0].Active();
                        }
                        var _dataVal = a.GroupTree.Data.CurrentGroup;
                        // this.forceUpdate("");
                        var mm = a;
                        var _config = {
                            MenuOrg: {
                                MenuOrgTable: { MenuData: [], OrgData: [], Menu_Org: [] }, UniId: _this.UniId
                            }, Group: { FID: "", OrgName: "" }, index: 0
                        };
                        _config.Group = a.Group;
                        _config.MenuOrg = a;
                        _config.MenuOrg.MenuOrgTable.MenuData = a.MenuOrgTable.MenuData.Children;
                        _this.NewMainDom = new NewMainDom.NewMainDom.NewMainDomVm(_config);
                        _this.NewMainDom.ishidePageBar = true;
                        if (callback) {
                            callback();
                        }
                    }
                });
            };
            //index为0
            NewRightMainPageVm.prototype.LoadMenuOrg = function (Group) {
                var _this = this;
                urlFile.Core.AkPost("/RightCloud/NewRightConfig/fristinit", { Groups: Group }, function (a) {
                    if (a) {
                        var mm = a;
                        var _dataVal = a.GroupTree.Data.CurrentGroup;
                        var _config = {
                            MenuOrg: {
                                MenuOrgTable: { MenuData: [], OrgData: [], Menu_Org: [] }, UniId: _this.UniId
                            }, Group: { FID: "", OrgName: "" }, index: 0
                        };
                        _config.Group = a.Group;
                        _config.MenuOrg = a;
                        _config.MenuOrg.MenuOrgTable.MenuData = a.MenuOrgTable.MenuData.Children;
                        _this.NewMainDom = new NewMainDom.NewMainDom.NewMainDomVm(_config);
                        _this.NewMainDom.IsChange = true;
                        _this.NewMainDom.ishidePageBar = true;
                        _this.NewMainDom.OrgName = _this.OrgName;
                        _this.NewMainDom.OrgMenuObj.table.IsChange = true;
                        _this.NewMainDom.OrgMenuObj.table.IsMulit = true;
                        _this.NewMainDom.OrgMenuObj.IsChange = true;
                        _this.NewMainDom.OrgMenuObj.IsMulit = true;
                        //this.NewMainDom.OrgMenuObj.forceUpdate("")
                        _this.forceUpdate("");
                    }
                });
            };
            //index为1
            NewRightMainPageVm.prototype.LoadRoleMenuUser = function (Group, index) {
                var _this = this;
                var _page = { PageNo: index };
                urlFile.Core.AkPost("/RightCloud/NewRightConfig/secodeinit", { Groups: Group, pager: JSON.stringify(_page) }, function (a) {
                    var _config = {
                        MenuRole: {
                            MenuRoleTable: {
                                RoleData: [], MenuData: [], Role_Menu: [], Menu_Group: { FID: "", OrgName: "" }
                            },
                            UniId: _this.UniId
                        },
                        MenuOrg: {
                            MenuOrgTable: { MenuData: [], OrgData: [], Menu_Org: [] }, UniId: _this.UniId
                        },
                        Group: { FID: "", OrgName: "" }, index: 1
                    };
                    _config.Group = a.Group;
                    _config.MenuRole.MenuRoleTable = a.MenuUserTable;
                    //var dd = a.MenuUserTable.UserData;
                    _config.MenuRole.MenuRoleTable.MenuData = a.MenuUserTable.MenuData.Children;
                    _config.MenuRole.MenuRoleTable.Menu_Group = a.Group;
                    //_config.Pager = dd;
                    _this.NewMainDom = new NewMainDom.NewMainDom.NewMainDomVm(_config);
                    _this.NewMainDom.IsChange = true;
                    _this.NewMainDom.OrgName = _this.OrgName;
                    _this.NewMainDom.MenuRoleObj.table.IsMulit = true;
                    _this.NewMainDom.MenuRoleObj.table.IsChange = true;
                    _this.NewMainDom.MenuRoleObj.IsChange = true;
                    _this.NewMainDom.MenuRoleObj.IsMulit = true;
                    _this.NewMainDom.MenuRoleObj.forceUpdate("");
                    _this.forceUpdate("");
                });
            };
            NewRightMainPageVm.prototype.getNaviGroupTreeFId = function () {
                if (this.NaviTree.SelectNodes[0]) {
                    var _str = this.NaviTree.SelectNodes[0].Value;
                    this.OrgName = _str;
                    return _str;
                }
                return "";
            };
            NewRightMainPageVm.prototype.ReceivePageSend = function (config, obj) {
                _super.prototype.ReceivePageSend.call(this, config, obj);
                switch (config.FromModulename) {
                    case "RCNEWROLEPAGE":
                        if (obj.RoleSign) {
                            var _obj = obj;
                            //this.menuuserrole.table.RoleData.push({ FID: "", RoleName: obj.RoleName, RoleSign: obj.RoleSign })
                            //this.UserMenuRoleObj.addRole(_obj);
                            this.NewMainDom.MenuRoleObj.table.addRole(_obj);
                            this.NewMainDom.MenuRoleObj.table.forceUpdate("");
                        }
                        break;
                    //case "NEWUSERROLEPAGE":
                    //    if (obj.RoleSign) {
                    //        var _obj: Data.Menu.UserRoleActorData = obj;
                    //        this.NewMainDom.UserMenuRoleObj.table.addRole(_obj);
                    //        this.NewMainDom.UserMenuRoleObj.table.forceUpdate("");
                    //    }
                    //case "NEWUSERPAGE":
                    //    if (obj.UserSign) {
                    //        var obj_: Data.Menu.UserActorData = obj;
                    //        this.NewMainDom.UserMenuRoleObj.table.addUser(obj_);
                    //    }
                    //    //this.UserMenuRoleObj.addUser(obj);
                    //    //this.UserMenuRoleObj.forceUpdate("");
                    //    break;
                    case "NEWORGPAGE":
                        //this.OrgTreeObj.addNodeByName(obj);
                        break;
                    case "NWEMENUNEWPAGE":
                        //debugger
                        //alert(_objMenu.MenuName + "  " + _objMenu.Type + "  " + _objMenu.RightValue);
                        var _objMenu = obj;
                        this.NewMainDom.OrgMenuObj.table.addMenu(_objMenu.MenuName, _objMenu.Type, _objMenu.RightValue);
                        break;
                    case "NEWNODEPAGE":
                        this.NewMainDom.MenuRoleObj.table.addMenu(obj.MenuName);
                        break;
                    case "ADDNEWMENUPAGE":
                        if (obj.Type == "Node") {
                            this.NewMainDom.MenuRoleObj.table.addMenu(obj);
                        }
                        else if (obj.Type = "Button") {
                            this.NewMainDom.MenuRoleObj.table.addButton(obj);
                        }
                        break;
                    default:
                        break;
                }
            };
            return NewRightMainPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        NewRightMainPage.NewRightMainPageVm = NewRightMainPageVm;
        var NewRightMainPageStates = (function (_super) {
            __extends(NewRightMainPageStates, _super);
            function NewRightMainPageStates() {
                _super.apply(this, arguments);
            }
            return NewRightMainPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewRightMainPage.NewRightMainPageStates = NewRightMainPageStates;
        var NewRightMainPageProps = (function (_super) {
            __extends(NewRightMainPageProps, _super);
            function NewRightMainPageProps() {
                _super.apply(this, arguments);
            }
            return NewRightMainPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        NewRightMainPage.NewRightMainPageProps = NewRightMainPageProps;
        iocFile.Core.Ioc.Current().RegisterType("NewRightMainPage", basewedPageFile.Web.BaseWebPageVm, NewRightMainPageVm);
    })(NewRightMainPage = exports.NewRightMainPage || (exports.NewRightMainPage = {}));
});
