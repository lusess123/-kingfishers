var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "./../../01core/Url", "react", "./MenuUserRolePage/MenuUserRole", "./../../05tool/EditSpan", "./MenuOrgPage/MenuOrg", "./../../05tool/Pagination"], function (require, exports, domFile, urlFile, React, UserMenuRoleFile, EditSpanFile, OrgMenuFile, PaginationFile) {
    "use strict";
    var domCore = domFile.Core;
    var UserMenuRoleVm = UserMenuRoleFile.MenuUserRole.MenuUserRoleVm;
    var OrgMenuVm = OrgMenuFile.MenuOrg.MenuOrgVm;
    var MainDom;
    (function (MainDom) {
        var MainDomAction = (function (_super) {
            __extends(MainDomAction, _super);
            function MainDomAction() {
                _super.apply(this, arguments);
            }
            return MainDomAction;
        }(domCore.DomAction));
        MainDom.MainDomAction = MainDomAction;
        var MainDomReact = (function (_super) {
            __extends(MainDomReact, _super);
            function MainDomReact() {
                _super.apply(this, arguments);
                this.state = new MainDomStates();
            }
            MainDomReact.prototype.test = function () {
                //alert(this.props.Vm.OrgMenuObj.IsChange);
                console.log(this.props.Vm.OrgMenuObj);
                return null;
            };
            MainDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "col-lg-10 col-md-10 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hm-org-edit"}, React.createElement("div", {className: "Hu-org-title clearfix"}, this.props.Vm.OrgNameESObj.intoDom(), React.createElement("b", null, "编码：", this.props.Vm.OrgCodeESObj), React.createElement("a", {className: "btn btn-xs btn-secondary", onClick: function () { _this.props.Vm.GroupSave(); }}, "保存"))), React.createElement("div", {className: "Hm-org-content"}, React.createElement("div", {className: "Hm-grids"}, React.createElement("ul", {className: "nav nav-tabs Hu-tabs-title"}, React.createElement("li", {className: "nav-item Hu-pointer" + (this.props.Vm.TabCurrentIndex == 0 ? " active" : " "), onClick: function () { _this.fun_TabsClick(0); }}, "为组织机构分配菜单权限"), React.createElement("li", {className: "nav-item Hu-pointer" + (this.props.Vm.TabCurrentIndex == 1 ? " active" : " "), onClick: function () { _this.fun_TabsClick(1); }}, "菜单 / 角色 / 用户 关系")), React.createElement("div", {className: "tab-content "}, React.createElement("div", {className: "tab-pane" + (this.props.Vm.TabCurrentIndex == 0 ? " active" : " ")}, this.props.Vm.OrgMenuObj.table.rMenuOrgTrailSender(), this.props.Vm.OrgMenuObj.intoDom()), React.createElement("div", {className: "tab-pane Hg-relative clearfix " + (this.props.Vm.TabCurrentIndex == 1 ? " active" : " ")}, React.createElement("div", null, React.createElement("div", {className: ""}, this.props.Vm.UserMenuRoleObj ? this.props.Vm.UserMenuRoleObj.intoDom() : null, this.props.Vm.ishidePageBar ? null : this.props.Vm.PagerObj.intoDom())))))));
            };
            MainDomReact.prototype._initPager = function () {
                var _this = this;
                if (this.props.Vm.ListData && this.props.Vm.ListData.Pager.PageSize < this.props.Vm.ListData.Pager.TotalCount) {
                    var pager = this.props.Vm.ListData.Pager;
                    this.props.Vm.PagerObj.PageNo = pager.PageNo;
                    this.props.Vm.PagerObj.PageSize = pager.PageSize;
                    this.props.Vm.PagerObj.TotalCount = pager.TotalCount;
                    this.props.Vm.PagerObj.PageClickEvent = function (pageIndex) {
                        _this.props.Vm.loadPageData(pageIndex);
                    };
                    return this.props.Vm.PagerObj.intoDom();
                }
            };
            MainDomReact.prototype.submit = function () {
                this.props.Vm.UserMenuRoleObj.table.submit();
            };
            MainDomReact.prototype.fun_TabsClick = function (index) {
                this.props.Vm.TabCurrentIndex = index;
                //if (this.props.Vm.UserMenuRoleObj.table.ischage) {
                //    alert("2有修改,请保持之后在进行跳转");
                //} else
                if (this.props.Vm.UserMenuRoleObj) {
                    //alert(this.props.Vm.UserMenuRoleObj.table.ischage);
                    if (this.props.Vm.UserMenuRoleObj.table.ischage) {
                        alert("2有修改,请保持之后在进行跳转");
                    }
                    else {
                        this.tranform(index);
                    }
                }
                else if (this.props.Vm.OrgMenuObj.table.ChageFlag) {
                    alert("1有修改,请保持之后在进行跳转");
                }
                else {
                    this.tranform(index);
                }
            };
            MainDomReact.prototype.tranform = function (index) {
                if (index == 1) {
                    if (!this.props.Vm.OrgName) {
                        this.props.Vm.MenuUserRoleLoadPage("1", 0);
                    }
                    else {
                        //alert("MainDom:" + this.props.Vm.OrgName)
                        this.props.Vm.MenuUserRoleLoadPage(this.props.Vm.OrgName, 0);
                    }
                }
                else if (index == 0) {
                    debugger;
                    if (this.props.Vm.OrgName) {
                        this.props.Vm.RoleMenuLoadPage(this.props.Vm.OrgName);
                    }
                }
                this.forceUpdate();
            };
            MainDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return MainDomReact;
        }(domCore.DomReact));
        MainDom.MainDomReact = MainDomReact;
        var MainDomVm = (function (_super) {
            __extends(MainDomVm, _super);
            function MainDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = MainDomReact;
                this.OrgNameESObj = new EditSpanFile.EditSpan.EditSpanVm();
                this.TabCurrentIndex = 0;
                this.ishidePageBar = false;
                //this.OrgCodeESObj.ChangeEvent = (vm, ischange) => { alert(vm.Content) };
                //this.OrgCodeESObj.ChangeEvent = (vm, ischage) => { alert(vm.Content) }
                //将数据传到这边
                if (config.MenuOrg) {
                    config.MenuOrg.UniId = config.UinId;
                    this.OrgMenuObj = new OrgMenuVm(config.MenuOrg);
                }
                if (config.Group) {
                    this.OrgNameESObj.Content = config.Group.OrgName;
                    this.OrgCodeESObj = config.Group.FID;
                    this.OrgNameESObj.IsChange = true;
                }
                if (config.MenuUserRole) {
                    config.MenuUserRole.UniId = config.UinId;
                    this.UserMenuRoleObj = new UserMenuRoleVm(config.MenuUserRole);
                    this.PagerObj = new PaginationFile.tool.PaginationVm();
                    // debugger
                    this.ListData = config.Pager;
                    if (this.ListData && this.ListData.Pager.PageSize < this.ListData.Pager.TotalCount) {
                        var pager = this.ListData.Pager;
                        this.PagerObj.PageNo = pager.PageNo;
                        this.PagerObj.PageSize = pager.PageSize;
                        this.PagerObj.TotalCount = pager.TotalCount;
                        this.PagerObj.PageClickEvent = function (pageIndex) {
                            _this.loadPageData(pageIndex);
                        };
                        this.ishidePageBar = false;
                    }
                    else {
                        this.ishidePageBar = true;
                    }
                }
                this.TabCurrentIndex = config.index;
                this.listenAppEvent("MainDom/MenuOrgPage", config.UinId, function (name) {
                    if (_this.OrgName) {
                        _this.RoleMenuLoadPage(_this.OrgName);
                    }
                });
                this.listenAppEvent("MainDom/MenuUSerRolePage", config.UinId, function (name) {
                    if (!_this.OrgName) {
                        _this.MenuUserRoleLoadPage("1", 0);
                    }
                    else {
                        //alert("MainDom:" + this.OrgName)
                        _this.MenuUserRoleLoadPage(_this.OrgName, 0);
                    }
                });
            }
            //方法----------------------------------------------------
            MainDomVm.prototype.loadPageData = function (index, naviTreeId) {
                if (!this.OrgName) {
                    this.MenuUserPaging("", index);
                }
                else {
                    this.MenuUserPaging(this.OrgName, index);
                }
            };
            MainDomVm.prototype.GroupSave = function () {
                if (this.OrgNameESObj.Content != "" && this.OrgCodeESObj != "") {
                    urlFile.Core.AkPost("/Rightcloud/RightConfig/GroupSubmit", { GroupName: this.OrgNameESObj.Content, GroupKey: this.OrgCodeESObj }, function (a) {
                        if (a != null)
                            alert(a);
                        else
                            alert("返回值为空");
                    });
                }
                else {
                    alert("不能为空");
                }
            };
            MainDomVm.prototype.MenuUserPaging = function (Group, pageIndex) {
                var _this = this;
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/Rightcloud/RightConfig/RolePageing", { Group: Group, pager: JSON.stringify(_page) }, function (a) {
                    var _config = {
                        MenuUserRole: {
                            MenuUserTable: {
                                RoleData: [], MenuData: [], UserData: [], UserRoleData: [], Role_Menu: [], Role_User: [], Menu_Group: { FID: "", OrgName: "" }
                            },
                            UniId: _this.UniId
                        },
                        MenuOrg: {
                            MenuOrgTable: { MenuData: [], OrgData: [], Menu_Org: [] }, UniId: _this.UniId
                        }
                    };
                    _this.ListData = a.MenuUserTable.UserData;
                    _this.UserMenuRoleObj.table.UserData = a.MenuUserTable.UserData.List;
                    _this.UserMenuRoleObj.table.UserRoleData = a.MenuUserTable.Role_User;
                    _this.UserMenuRoleObj.table.RoleUser = a.MenuUserTable.Role_User;
                    debugger;
                    if (_this.ListData && _this.ListData.Pager.PageSize < _this.ListData.Pager.TotalCount) {
                        var pager = _this.ListData.Pager;
                        _this.PagerObj.PageNo = pager.PageNo;
                        _this.PagerObj.PageSize = pager.PageSize;
                        _this.PagerObj.TotalCount = pager.TotalCount;
                        _this.ishidePageBar = false;
                    }
                    else {
                        _this.ishidePageBar = true;
                    }
                    _this.UserMenuRoleObj.table.UserEspeList.map(function (a, index) {
                        if (index < _this.UserMenuRoleObj.table.UserData.length) {
                            a.Content = _this.UserMenuRoleObj.table.UserData[index].UserName;
                            a.ChangeEvent = function (vm, ischage) {
                                _this.UserMenuRoleObj.table.UpdateUser(_this.UserMenuRoleObj.table.UserData[index], vm.Content);
                            };
                        }
                        a.IsChange = true;
                        return a;
                    });
                    _this.UserMenuRoleObj.table.forceUpdateMenuUser("");
                    _this.PagerObj.IsChange = true;
                    _this.PagerObj.IsMulit = true;
                    _this.PagerObj.forceUpdate("");
                });
            };
            //选项卡2的加载
            MainDomVm.prototype.MenuUserRoleLoadPage = function (Group, pageIndex) {
                var _this = this;
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/Rightcloud/RightConfig/secodeinit", { Groups: Group, pager: JSON.stringify(_page) }, function (a) {
                    if (a) {
                        var _config = {
                            MenuUserRole: {
                                MenuUserTable: {
                                    RoleData: [], MenuData: [], UserData: [], UserRoleData: [], Role_Menu: [], Role_User: [], Menu_Group: { FID: "", OrgName: "" }
                                },
                                UniId: _this.UniId
                            },
                            MenuOrg: {
                                MenuOrgTable: { MenuData: [], OrgData: [], Menu_Org: [] }, UniId: _this.UniId
                            }
                        };
                        _this.PagerObj = new PaginationFile.tool.PaginationVm();
                        _config.MenuUserRole = a;
                        _this.ListData = a.MenuUserTable.UserData;
                        if (_this.ListData && _this.ListData.Pager.PageSize < _this.ListData.Pager.TotalCount) {
                            var pager = _this.ListData.Pager;
                            _this.PagerObj.PageNo = pager.PageNo;
                            _this.PagerObj.PageSize = pager.PageSize;
                            _this.PagerObj.TotalCount = pager.TotalCount;
                            _this.PagerObj.PageClickEvent = function (pageIndex) {
                                _this.loadPageData(pageIndex);
                            };
                            _this.ishidePageBar = false;
                        }
                        else {
                            _this.ishidePageBar = true;
                        }
                        _config.MenuUserRole.MenuUserTable.UserData = a.MenuUserTable.UserData.List;
                        _config.MenuUserRole.MenuUserTable.MenuData = a.MenuUserTable.MenuData.Children;
                        _config.MenuUserRole.MenuUserTable.Menu_Group = a.Group;
                        _this.UserMenuRoleObj = new UserMenuRoleVm(_config.MenuUserRole);
                        _this.UserMenuRoleObj.table.IsChange = true;
                        _this.UserMenuRoleObj.table.IsMulit = true;
                        _this.forceUpdate("");
                    }
                });
            };
            //选项卡1的加载
            MainDomVm.prototype.RoleMenuLoadPage = function (Group) {
                var _this = this;
                urlFile.Core.AkPost("/RightCloud/RightConfig/fristinit", { Groups: Group }, function (a) {
                    if (a) {
                        var mm = a;
                        var _dataVal = a.GroupTree.Data.CurrentGroup;
                        var _config = {
                            MenuOrgTable: {
                                MenuData: [], OrgData: [], Menu_Org: []
                            }, UniId: _this.UniId
                        };
                        _config = a;
                        _config.MenuOrgTable.MenuData = a.MenuOrgTable.MenuData.Children;
                        _this.OrgMenuObj = new OrgMenuVm(_config);
                        _this.OrgMenuObj.table.OrgName = Group;
                        _this.TabCurrentIndex = 0;
                        _this.OrgMenuObj.IsChange = true;
                        _this.OrgMenuObj.IsMulit = true;
                        _this.forceUpdate("");
                    }
                });
            };
            return MainDomVm;
        }(domCore.DomVm));
        MainDom.MainDomVm = MainDomVm;
        var MainDomStates = (function (_super) {
            __extends(MainDomStates, _super);
            function MainDomStates() {
                _super.apply(this, arguments);
            }
            return MainDomStates;
        }(domCore.DomStates));
        MainDom.MainDomStates = MainDomStates;
        var MainDomProps = (function (_super) {
            __extends(MainDomProps, _super);
            function MainDomProps() {
                _super.apply(this, arguments);
            }
            return MainDomProps;
        }(domCore.DomProps));
        MainDom.MainDomProps = MainDomProps;
    })(MainDom = exports.MainDom || (exports.MainDom = {}));
});
