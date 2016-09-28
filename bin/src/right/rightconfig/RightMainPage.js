var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/Ioc", "./../../01core/Url", "./../../04page/BaseWebPage", "./../../01core/Event", "./../../05tool/Tree", "./MainDom"], function (require, exports, React, iocFile, urlFile, basewedPageFile, eventFile, toolTreeFile, MainDom) {
    "use strict";
    var RightMainPage;
    (function (RightMainPage) {
        var RightMainPageAction = (function (_super) {
            __extends(RightMainPageAction, _super);
            function RightMainPageAction() {
                _super.apply(this, arguments);
            }
            return RightMainPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        RightMainPage.RightMainPageAction = RightMainPageAction;
        var RightMainPageReact = (function (_super) {
            __extends(RightMainPageReact, _super);
            function RightMainPageReact() {
                _super.apply(this, arguments);
                this.state = new RightMainPageStates();
            }
            RightMainPageReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "col-lg-2 col-md-2 text-left Hm-toggle-menu"}, this.props.Vm.NaviTree.intoDom()), this.props.Vm.mainDom.intoDom());
            };
            return RightMainPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        RightMainPage.RightMainPageReact = RightMainPageReact;
        var RightMainPageVm = (function (_super) {
            __extends(RightMainPageVm, _super);
            function RightMainPageVm() {
                var _this = this;
                _super.call(this);
                this.ReactType = RightMainPageReact;
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
                        if (_this.mainDom.TabCurrentIndex == 1) {
                            _this.LoadRoleMenuUser(dd, 0);
                        }
                        else if (_this.mainDom.TabCurrentIndex == 0) {
                            _this.LoadMenuOrg(dd);
                        }
                    }
                    return true;
                });
                this.NaviTree.NodeTplFun = function (node) {
                    return [(React.createElement("span", null, React.createElement("span", null, node.Text), React.createElement("i", {className: "fa fa-plus-circle Hu-pointer", onClick: function (e) { _this.newOpt(); e.stopPropagation(); }}), React.createElement("i", {className: "fa fa-times Hu-pointer"})))];
                };
            }
            //新增
            RightMainPageVm.prototype.newOpt = function () {
                var _str = this.getNaviGroupTreeFId();
                urlFile.Core.AkUrl.Current().openUrl("$wingrouporgnew$" + _str + "$", true);
            };
            RightMainPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/RightCloud/RightConfig/fristinit", { Groups: "1" }, function (a) {
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
                        _this.mainDom = new MainDom.MainDom.MainDomVm(_config);
                        _this.mainDom.ishidePageBar = true;
                        if (callback) {
                            callback();
                        }
                    }
                });
            };
            //index为0
            RightMainPageVm.prototype.LoadMenuOrg = function (Group) {
                var _this = this;
                urlFile.Core.AkPost("/RightCloud/RightConfig/fristinit", { Groups: Group }, function (a) {
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
                        _this.mainDom = new MainDom.MainDom.MainDomVm(_config);
                        _this.mainDom.IsChange = true;
                        _this.mainDom.ishidePageBar = true;
                        _this.mainDom.OrgName = _this.OrgName;
                        _this.mainDom.OrgMenuObj.table.IsChange = true;
                        _this.mainDom.OrgMenuObj.table.IsMulit = true;
                        _this.mainDom.OrgMenuObj.IsChange = true;
                        _this.mainDom.OrgMenuObj.IsMulit = true;
                        //this.mainDom.OrgMenuObj.forceUpdate("")
                        _this.forceUpdate("");
                    }
                });
            };
            //index为1
            RightMainPageVm.prototype.LoadRoleMenuUser = function (Group, index) {
                var _this = this;
                var _page = { PageNo: index };
                urlFile.Core.AkPost("/RightCloud/RightConfig/secodeinit", { Groups: Group, pager: JSON.stringify(_page) }, function (a) {
                    var _config = {
                        MenuUserRole: {
                            MenuUserTable: {
                                RoleData: [], MenuData: [], UserData: [], UserRoleData: [], Role_Menu: [], Role_User: [], Menu_Group: { FID: "", OrgName: "" }
                            },
                            UniId: _this.UniId
                        },
                        MenuOrg: {
                            MenuOrgTable: { MenuData: [], OrgData: [], Menu_Org: [] }, UniId: _this.UniId
                        }, Pager: {
                            List: [], Pager: { PageNo: 0, PageSize: 15, TotalCount: 20 }
                        }, index: 1
                    };
                    _config.Group = a.Group;
                    _config.MenuUserRole = a;
                    var dd = a.MenuUserTable.UserData;
                    _config.MenuUserRole.MenuUserTable.MenuData = a.MenuUserTable.MenuData.Children;
                    _config.MenuUserRole.MenuUserTable.UserData = a.MenuUserTable.UserData.List;
                    _config.MenuUserRole.MenuUserTable.Menu_Group = a.Group;
                    _config.Pager = dd;
                    _this.mainDom = new MainDom.MainDom.MainDomVm(_config);
                    _this.mainDom.IsChange = true;
                    _this.mainDom.OrgName = _this.OrgName;
                    _this.mainDom.UserMenuRoleObj.table.IsMulit = true;
                    _this.mainDom.UserMenuRoleObj.table.IsChange = true;
                    _this.mainDom.UserMenuRoleObj.IsChange = true;
                    _this.mainDom.UserMenuRoleObj.IsMulit = true;
                    //this.mainDom.UserMenuRoleObj.forceUpdate("");
                    _this.forceUpdate("");
                });
            };
            RightMainPageVm.prototype.getNaviGroupTreeFId = function () {
                if (this.NaviTree.SelectNodes[0]) {
                    var _str = this.NaviTree.SelectNodes[0].Value;
                    this.OrgName = _str;
                    return _str;
                }
                return "";
            };
            RightMainPageVm.prototype.ReceivePageSend = function (config, obj) {
                _super.prototype.ReceivePageSend.call(this, config, obj);
                switch (config.FromModulename) {
                    case "NEWROLEPAGE":
                        if (obj.RoleSign) {
                            var _obj = obj;
                            //this.menuuserrole.table.RoleData.push({ FID: "", RoleName: obj.RoleName, RoleSign: obj.RoleSign })
                            //this.UserMenuRoleObj.addRole(_obj);
                            this.mainDom.UserMenuRoleObj.table.addRole(_obj);
                            this.mainDom.UserMenuRoleObj.table.forceUpdate("");
                        }
                        break;
                    case "NEWUSERROLEPAGE":
                        if (obj.RoleSign) {
                            var _obj = obj;
                            this.mainDom.UserMenuRoleObj.table.addRole(_obj);
                            this.mainDom.UserMenuRoleObj.table.forceUpdate("");
                        }
                    case "NEWUSERPAGE":
                        if (obj.UserSign) {
                            var obj_ = obj;
                            this.mainDom.UserMenuRoleObj.table.addUser(obj_);
                        }
                        //this.UserMenuRoleObj.addUser(obj);
                        //this.UserMenuRoleObj.forceUpdate("");
                        break;
                    case "NEWORGPAGE":
                        //this.OrgTreeObj.addNodeByName(obj);
                        break;
                    case "MENUNEWPAGE":
                        debugger;
                        //alert(_objMenu.MenuName + "  " + _objMenu.Type + "  " + _objMenu.RightValue);
                        var _objMenu = obj;
                        this.mainDom.OrgMenuObj.table.addMenu(_objMenu.MenuName, _objMenu.Type, _objMenu.RightValue);
                        break;
                    case "NEWNODEPAGE":
                        this.mainDom.UserMenuRoleObj.table.addMenu(obj.MenuName);
                        break;
                    case "ADDMENUORBUTTONPAGE":
                        if (obj.Type == "Node") {
                            this.mainDom.UserMenuRoleObj.table.addMenu(obj);
                        }
                        else if (obj.Type = "Button") {
                            this.mainDom.UserMenuRoleObj.table.addButton(obj.MenuName);
                        }
                        break;
                    default:
                        break;
                }
            };
            return RightMainPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        RightMainPage.RightMainPageVm = RightMainPageVm;
        var RightMainPageStates = (function (_super) {
            __extends(RightMainPageStates, _super);
            function RightMainPageStates() {
                _super.apply(this, arguments);
            }
            return RightMainPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        RightMainPage.RightMainPageStates = RightMainPageStates;
        var RightMainPageProps = (function (_super) {
            __extends(RightMainPageProps, _super);
            function RightMainPageProps() {
                _super.apply(this, arguments);
            }
            return RightMainPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        RightMainPage.RightMainPageProps = RightMainPageProps;
        iocFile.Core.Ioc.Current().RegisterType("RIGHTMAINPAGE", basewedPageFile.Web.BaseWebPageVm, RightMainPageVm);
    })(RightMainPage = exports.RightMainPage || (exports.RightMainPage = {}));
});
