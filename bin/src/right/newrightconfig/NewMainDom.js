var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "./../../01core/Url", "react", "./NewMenuRolePage/MenuRole", "./../../05tool/EditSpan", "./NewMenuOrgPage/MenuOrg", "./../../05tool/Pagination"], function (require, exports, domFile, urlFile, React, MenuRoleFile, EditSpanFile, OrgMenuFile, PaginationFile) {
    "use strict";
    var domCore = domFile.Core;
    var MenuRoleVm = MenuRoleFile.MenuRole.MenuRoleVm;
    var OrgMenuVm = OrgMenuFile.MenuOrg.MenuOrgVm;
    /*import Data = require("./MenuUserRolePage/Data")*/ ;
    var NewMainDom;
    (function (NewMainDom) {
        var NewMainDomAction = (function (_super) {
            __extends(NewMainDomAction, _super);
            function NewMainDomAction() {
                _super.apply(this, arguments);
            }
            return NewMainDomAction;
        }(domCore.DomAction));
        NewMainDom.NewMainDomAction = NewMainDomAction;
        var NewMainDomReact = (function (_super) {
            __extends(NewMainDomReact, _super);
            function NewMainDomReact() {
                _super.apply(this, arguments);
                this.state = new NewMainDomStates();
            }
            NewMainDomReact.prototype.test = function () {
                //alert(this.props.Vm.OrgMenuObj.IsChange);
                console.log(this.props.Vm.OrgMenuObj);
                return null;
            };
            NewMainDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "col-lg-10 col-md-10 col-sm-12 col-xs-12"}, React.createElement("div", {className: "Hm-org-edit"}, React.createElement("div", {className: "Hu-org-title clearfix"}, this.props.Vm.OrgNameESObj.intoDom(), React.createElement("b", null, "编码：", this.props.Vm.OrgCodeESObj), React.createElement("a", {className: "btn btn-xs btn-secondary", onClick: function () { _this.props.Vm.GroupSave(); }}, "保存"))), React.createElement("div", {className: "Hm-org-content"}, React.createElement("div", {className: "Hm-grids"}, React.createElement("ul", {className: "nav nav-tabs Hu-tabs-title"}, React.createElement("li", {className: "nav-item Hu-pointer" + (this.props.Vm.TabCurrentIndex == 0 ? " active" : " "), onClick: function () { _this.fun_TabsClick(0); }}, "为组织机构分配菜单权限"), React.createElement("li", {className: "nav-item Hu-pointer" + (this.props.Vm.TabCurrentIndex == 1 ? " active" : " "), onClick: function () { _this.fun_TabsClick(1); }}, "菜单 / 角色 / 用户 关系")), React.createElement("div", {className: "tab-content "}, React.createElement("div", {className: "tab-pane" + (this.props.Vm.TabCurrentIndex == 0 ? " active" : " ")}, this.props.Vm.OrgMenuObj.table.rMenuOrgTrailSender(), this.props.Vm.OrgMenuObj.intoDom()), React.createElement("div", {className: "tab-pane Hg-relative clearfix " + (this.props.Vm.TabCurrentIndex == 1 ? " active" : " ")}, React.createElement("div", null, React.createElement("div", {className: ""}, this.props.Vm.MenuRoleObj ? this.props.Vm.MenuRoleObj.intoDom() : null, this.props.Vm.ishidePageBar ? null : this.props.Vm.PagerObj.intoDom())))))));
            };
            NewMainDomReact.prototype._initPager = function () {
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
            NewMainDomReact.prototype.submit = function () {
                //this.props.Vm.UserMenuRoleObj.table.submit();
            };
            NewMainDomReact.prototype.fun_TabsClick = function (index) {
                this.props.Vm.TabCurrentIndex = index;
                //if (this.props.Vm.UserMenuRoleObj.table.ischage) {
                //    alert("2有修改,请保持之后在进行跳转");
                //} else
                //if (this.props.Vm.UserMenuRoleObj) {
                //    //alert(this.props.Vm.UserMenuRoleObj.table.ischage);
                //    if (this.props.Vm.UserMenuRoleObj.table.ischage) {
                //        alert("2有修改,请保持之后在进行跳转");
                //    } else {
                //        this.tranform(index);
                //    }
                //} else 
                if (this.props.Vm.OrgMenuObj.table.ChageFlag) {
                    alert("1有修改,请保持之后在进行跳转");
                }
                else {
                    this.tranform(index);
                }
            };
            NewMainDomReact.prototype.tranform = function (index) {
                if (index == 1) {
                    if (!this.props.Vm.OrgName) {
                        this.props.Vm.MenuUserRoleLoadPage("1", 0);
                    }
                    else {
                        //alert("NewMainDom:" + this.props.Vm.OrgName)
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
            NewMainDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return NewMainDomReact;
        }(domCore.DomReact));
        NewMainDom.NewMainDomReact = NewMainDomReact;
        var NewMainDomVm = (function (_super) {
            __extends(NewMainDomVm, _super);
            function NewMainDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = NewMainDomReact;
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
                if (config.MenuRole) {
                    config.MenuRole.UniId = config.UinId;
                    this.MenuRoleObj = new MenuRoleVm(config.MenuRole);
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
                this.listenAppEvent("NewMainDom/MenuOrgPage", config.UinId, function (name) {
                    if (_this.OrgName) {
                        _this.RoleMenuLoadPage(_this.OrgName);
                    }
                });
                this.listenAppEvent("NewMainDom/MenuRolePage", config.UinId, function (name) {
                    if (!_this.OrgName) {
                        _this.MenuUserRoleLoadPage("1", 0);
                    }
                    else {
                        //alert("NewMainDom:" + this.OrgName)
                        _this.MenuUserRoleLoadPage(_this.OrgName, 0);
                    }
                });
            }
            //方法----------------------------------------------------
            NewMainDomVm.prototype.loadPageData = function (index, naviTreeId) {
                //if (!this.OrgName) {
                //    this.MenuUserPaging("", index);
                //} else {
                //    this.MenuUserPaging(this.OrgName, index);
                //}
            };
            NewMainDomVm.prototype.GroupSave = function () {
                if (this.OrgNameESObj.Content != "" && this.OrgCodeESObj != "") {
                    urlFile.Core.AkPost("/RightCloud/NewRightConfig/GroupUpdate", { GroupName: this.OrgNameESObj.Content, GroupKey: this.OrgCodeESObj }, function (a) {
                        if (a != null) {
                            urlFile.Core.AkUrl.Current().openUrl("$NewRightMainPage$", true);
                            alert(a);
                        }
                        else
                            alert("返回值为空");
                    });
                }
                else {
                    alert("不能为空");
                }
            };
            //public MenuUserPaging(Group: string, pageIndex: number) {
            //    var _page = { PageNo: pageIndex };
            //    urlFile.Core.AkPost("/Rightcloud/RightConfig/RolePageing", { Group: Group, pager: JSON.stringify(_page) }, (a) => {
            //        var _config: INewMainDomConfig = {
            //            MenuUserRole: {
            //                MenuUserTable: {
            //                    RoleData: [], MenuData: [], UserData: [], UserRoleData: [], Role_Menu: [], Role_User: [], Menu_Group: { FID: "", OrgName: "" }
            //                }
            //                , UniId: this.UniId
            //            }
            //            , MenuOrg: {
            //                MenuOrgTable: { MenuData: [], OrgData: [], Menu_Org: [] }, UniId: this.UniId
            //            }
            //        }
            //        this.ListData = a.MenuUserTable.UserData;
            //        this.UserMenuRoleObj.table.UserData = a.MenuUserTable.UserData.List;
            //        this.UserMenuRoleObj.table.UserRoleData = a.MenuUserTable.Role_User;
            //        this.UserMenuRoleObj.table.RoleUser = a.MenuUserTable.Role_User;
            //        debugger
            //        if (this.ListData && this.ListData.Pager.PageSize < this.ListData.Pager.TotalCount) {
            //            var pager = this.ListData.Pager;
            //            this.PagerObj.PageNo = pager.PageNo;
            //            this.PagerObj.PageSize = pager.PageSize;
            //            this.PagerObj.TotalCount = pager.TotalCount;
            //            this.ishidePageBar = false;
            //        } else {
            //            this.ishidePageBar = true;
            //        }
            //        this.UserMenuRoleObj.table.UserEspeList.map((a, index) => {
            //            if (index < this.UserMenuRoleObj.table.UserData.length) {
            //                a.Content = this.UserMenuRoleObj.table.UserData[index].UserName;
            //                a.ChangeEvent = (vm, ischage) => {
            //                    this.UserMenuRoleObj.table.UpdateUser(this.UserMenuRoleObj.table.UserData[index], vm.Content)
            //                }
            //            }
            //            a.IsChange = true;
            //            return a;
            //        })
            //        this.UserMenuRoleObj.table.forceUpdateMenuUser("");
            //        this.PagerObj.IsChange = true;
            //        this.PagerObj.IsMulit = true;
            //        this.PagerObj.forceUpdate("");
            //    }
            //    )
            //}
            //选项卡2的加载
            NewMainDomVm.prototype.MenuUserRoleLoadPage = function (Group, pageIndex) {
                var _this = this;
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/Rightcloud/NewRightConfig/secodeinit", { Groups: Group, pager: JSON.stringify(_page) }, function (a) {
                    if (a) {
                        var _config = {
                            MenuRole: {
                                MenuRoleTable: {
                                    RoleData: [], MenuData: [], Role_Menu: [], Menu_Group: { FID: "", OrgName: "" }
                                },
                                UniId: _this.UniId
                            },
                            MenuOrg: {
                                MenuOrgTable: { MenuData: [], OrgData: [], Menu_Org: [] }, UniId: _this.UniId
                            }
                        };
                        _this.PagerObj = new PaginationFile.tool.PaginationVm();
                        _config.MenuRole.MenuRoleTable = a.MenuUserTable;
                        //this.ListData = a.MenuUserTable.UserData;
                        //if (this.ListData && this.ListData.Pager.PageSize < this.ListData.Pager.TotalCount) {
                        //    var pager = this.ListData.Pager;
                        //    this.PagerObj.PageNo = pager.PageNo;
                        //    this.PagerObj.PageSize = pager.PageSize;
                        //    this.PagerObj.TotalCount = pager.TotalCount;
                        //    this.PagerObj.PageClickEvent = (pageIndex) => {
                        //        this.loadPageData(pageIndex);
                        //    }
                        //    this.ishidePageBar = false;
                        //} else {
                        //    this.ishidePageBar = true;
                        //}
                        //_config.MenuRole.MenuRoleTable.UserData = a.MenuUserTable.UserData.List;
                        _config.MenuRole.MenuRoleTable.MenuData = a.MenuUserTable.MenuData.Children;
                        _config.MenuRole.MenuRoleTable.Menu_Group = a.Group;
                        _this.MenuRoleObj = new MenuRoleVm(_config.MenuRole);
                        _this.MenuRoleObj.table.IsChange = true;
                        _this.MenuRoleObj.table.IsMulit = true;
                        _this.forceUpdate("");
                    }
                });
            };
            //选项卡1的加载
            NewMainDomVm.prototype.RoleMenuLoadPage = function (Group) {
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
            return NewMainDomVm;
        }(domCore.DomVm));
        NewMainDom.NewMainDomVm = NewMainDomVm;
        var NewMainDomStates = (function (_super) {
            __extends(NewMainDomStates, _super);
            function NewMainDomStates() {
                _super.apply(this, arguments);
            }
            return NewMainDomStates;
        }(domCore.DomStates));
        NewMainDom.NewMainDomStates = NewMainDomStates;
        var NewMainDomProps = (function (_super) {
            __extends(NewMainDomProps, _super);
            function NewMainDomProps() {
                _super.apply(this, arguments);
            }
            return NewMainDomProps;
        }(domCore.DomProps));
        NewMainDom.NewMainDomProps = NewMainDomProps;
    })(NewMainDom = exports.NewMainDom || (exports.NewMainDom = {}));
});
