import domFile = require("./../../01core/0Dom"); import React = require("react");
import ReactDOM = require("react-dom");
import iocFile = require("./../../01core/Ioc");

import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import eventFile = require("./../../01core/Event");

import PaginationFile = require("./../../05tool/Pagination");
import toolTreeFile = require("./../../05tool/Tree");
import UserMenuRoleFile = require("./MenuUserRolePage/MenuUserRole");
import UserMenuRole = UserMenuRoleFile.MenuUserRole.MenuUserRoleReact;
import UserMenuRoleVm = UserMenuRoleFile.MenuUserRole.MenuUserRoleVm;

import OrgMenuFile = require("./MenuOrgPage/MenuOrg");
import OrgMenu = OrgMenuFile.MenuOrg.MenuOrgReact;
import OrgMenuVm = OrgMenuFile.MenuOrg.MenuOrgVm;

import EditSpanFile = require("./../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;

import Data = require("./MenuUserRolePage/Data");
import Data1 = require("./MenuOrgPage/Data");
import Data2 = require("./Group/Data");


import MainDom = require("./MainDom");
export module RightMainPage {

    export class RightMainPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string; public Id: string; public Vm: any;
    }


    export class RightMainPageReact extends basewedPageFile.Web.BaseWebPageReact<RightMainPageProps, RightMainPageStates, RightMainPageAction> implements domCore.IReact {
        public state = new RightMainPageStates();

        public pSender(): React.ReactElement<any> {

            return <div>
                <div className="col-lg-2 col-md-2 text-left Hm-toggle-menu">
                    {this.props.Vm.NaviTree.intoDom() }
                </div>
                {this.props.Vm.mainDom.intoDom() }
            </div>;
        }

    }

    export interface RolePagerListData {
        Pager: PaginationFile.tool.Pagination;
        List: Array<Data.Menu.IUserRoleSimpleData>;
    }

    export interface IRightMainPageConfig {

    }
    export interface IMainPageConfig {

    }

    export class RightMainPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = RightMainPageReact;
        public UniId: string;
        public NaviTree: toolTreeFile.ui.TreeVm;
        public mainDom: MainDom.MainDom.MainDomVm;

        public OrgName: string;
        public constructor() {
            super();
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
            this.NaviTree.onReactNodeClick((a) => {
                //发送监听的请求
                //this.LoadGroupNameCode(a.Value);
                //if (a.Id != this.NaviTree.Roots[0].Id) {
                //    this.NaviTree.Roots[0].IsActive = false;
                //}

                var dd = this.getNaviGroupTreeFId();
                //alert(dd);
                if (dd) {
                    if (this.mainDom.TabCurrentIndex == 1) {
                        this.LoadRoleMenuUser(dd, 0);
                    } else if (this.mainDom.TabCurrentIndex == 0) {
                        this.LoadMenuOrg(dd);
                    }
                }
                return true;
            });

            this.NaviTree.NodeTplFun = (node) => {
                return [(
                    <span>
                        <span>{node.Text}</span>
                        <i className="fa fa-plus-circle Hu-pointer" onClick={(e) => { this.newOpt(); e.stopPropagation(); } }></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </span>
                )];
            }
        }
        //新增
        public newOpt() {
            var _str = this.getNaviGroupTreeFId();
            urlFile.Core.AkUrl.Current().openUrl("$wingrouporgnew$" + _str + "$", true);
        }

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/RightCloud/RightConfig/fristinit", { Groups: "1" }, (a) => {
                if (a) {
                    var _data: Data2.GroupOrg.IGroupOrgData = a.GroupTree.Data.GroupDataList;
                    this.NaviTree.initTreeVm(_data);

                    if (this.NaviTree.Roots[0].Children) {
                      //  this.NaviTree.Roots[0].Expand();
                        this.NaviTree.Roots[0].NoExpand = false;
                        this.NaviTree.Roots[0].Active();
                        //this.NaviTree.Roots[0].NoExpand = false;
                        //this.NaviTree.Roots[0].IsActive = true;
                    }

                    var _dataVal: Data2.GroupOrg.IGroupOrgData = a.GroupTree.Data.CurrentGroup;
                   // this.forceUpdate("");
                    var mm = a;
                    var _config: MainDom.MainDom.IMainDomConfig =
                        {
                            MenuOrg: {
                                MenuOrgTable: { MenuData: [], OrgData: [], Menu_Org: [] }, UniId: this.UniId
                            }, Group: { FID: "", OrgName: "" }, index: 0
                        };
                    _config.Group = a.Group;
                    _config.MenuOrg = a;
                    _config.MenuOrg.MenuOrgTable.MenuData = a.MenuOrgTable.MenuData.Children;                    
                    this.mainDom = new MainDom.MainDom.MainDomVm(_config);
                    this.mainDom.ishidePageBar = true;
                    if (callback) {
                        callback();
                    }
                }

            });

        }

        //index为0
        public LoadMenuOrg(Group: string) {
            urlFile.Core.AkPost("/RightCloud/RightConfig/fristinit", { Groups: Group }, (a) => {
                if (a) {
                    var mm = a;
                    var _dataVal: Data2.GroupOrg.IGroupOrgData = a.GroupTree.Data.CurrentGroup;
                    var _config: MainDom.MainDom.IMainDomConfig =
                        {
                            MenuOrg: {
                                MenuOrgTable: { MenuData: [], OrgData: [], Menu_Org: [] }, UniId: this.UniId
                            }, Group: { FID: "", OrgName: "" }, index: 0
                        };
                    _config.Group = a.Group;
                    _config.MenuOrg = a;

                    _config.MenuOrg.MenuOrgTable.MenuData = a.MenuOrgTable.MenuData.Children;
                    this.mainDom = new MainDom.MainDom.MainDomVm(_config);
                    this.mainDom.IsChange = true;
                    this.mainDom.ishidePageBar = true
                    this.mainDom.OrgName = this.OrgName;
                    this.mainDom.OrgMenuObj.table.IsChange = true;
                    this.mainDom.OrgMenuObj.table.IsMulit = true;

                    this.mainDom.OrgMenuObj.IsChange = true;
                    this.mainDom.OrgMenuObj.IsMulit = true;
                    //this.mainDom.OrgMenuObj.forceUpdate("")
                    this.forceUpdate("");
                }

            });
        }

        //index为1
        public LoadRoleMenuUser(Group: string, index: number) {
            var _page = { PageNo: index };
            urlFile.Core.AkPost("/RightCloud/RightConfig/secodeinit", { Groups: Group, pager: JSON.stringify(_page) }, (a) => {

                var _config: MainDom.MainDom.IMainDomConfig = {
                    MenuUserRole: {
                        MenuUserTable: {
                            RoleData: [], MenuData: [], UserData: [], UserRoleData: [], Role_Menu: [], Role_User: [], Menu_Group: { FID: "", OrgName: "" }
                        }
                        , UniId: this.UniId
                    }
                    , MenuOrg: {
                        MenuOrgTable: { MenuData: [], OrgData: [], Menu_Org: [] }, UniId: this.UniId
                    }, Pager: {
                        List: [], Pager: { PageNo: 0, PageSize: 15, TotalCount: 20 }
                    }, index: 1
                }
                _config.Group = a.Group;
                _config.MenuUserRole = a;
                var dd = a.MenuUserTable.UserData;
                _config.MenuUserRole.MenuUserTable.MenuData = a.MenuUserTable.MenuData.Children;
                _config.MenuUserRole.MenuUserTable.UserData = a.MenuUserTable.UserData.List;
                _config.MenuUserRole.MenuUserTable.Menu_Group = a.Group;
                _config.Pager = dd;
                this.mainDom = new MainDom.MainDom.MainDomVm(_config);
                this.mainDom.IsChange = true;
                this.mainDom.OrgName = this.OrgName;
                this.mainDom.UserMenuRoleObj.table.IsMulit = true;
                this.mainDom.UserMenuRoleObj.table.IsChange = true;
                this.mainDom.UserMenuRoleObj.IsChange = true;
                this.mainDom.UserMenuRoleObj.IsMulit = true;
                //this.mainDom.UserMenuRoleObj.forceUpdate("");
                this.forceUpdate("");

            })
        }

        public getNaviGroupTreeFId(): string {
            if (this.NaviTree.SelectNodes[0]) {
                var _str: any = this.NaviTree.SelectNodes[0].Value;
                this.OrgName = _str;
                return _str;
            }
            return "";
        }

        protected ReceivePageSend(config: basewedPageFile.Web.IPageActor, obj: any) {
            super.ReceivePageSend(config, obj);

            switch (config.FromModulename) {

                case "NEWROLEPAGE":
                    if (obj.RoleSign) {

                        var _obj: Data.Menu.RoleActorData = obj;
                        //this.menuuserrole.table.RoleData.push({ FID: "", RoleName: obj.RoleName, RoleSign: obj.RoleSign })
                        //this.UserMenuRoleObj.addRole(_obj);
                        this.mainDom.UserMenuRoleObj.table.addRole(_obj);
                        this.mainDom.UserMenuRoleObj.table.forceUpdate("");
                    }
                    break;
                case "NEWUSERROLEPAGE":
                    if (obj.RoleSign) {
                        var _obj: Data.Menu.UserRoleActorData = obj;
                        this.mainDom.UserMenuRoleObj.table.addRole(_obj);
                        this.mainDom.UserMenuRoleObj.table.forceUpdate("");
                    }
                case "NEWUSERPAGE":
                    if (obj.UserSign) {
                        var obj_: Data.Menu.UserActorData = obj;
                        this.mainDom.UserMenuRoleObj.table.addUser(obj_);
                    }
                    //this.UserMenuRoleObj.addUser(obj);
                    //this.UserMenuRoleObj.forceUpdate("");
                    break;
                case "NEWORGPAGE":
                    //this.OrgTreeObj.addNodeByName(obj);
                    break;
                case "MENUNEWPAGE":
                    debugger
                    //alert(_objMenu.MenuName + "  " + _objMenu.Type + "  " + _objMenu.RightValue);
                    var _objMenu: Data1.Menu.IMenuSimpleData = obj;
                    this.mainDom.OrgMenuObj.table.addMenu(_objMenu.MenuName, _objMenu.Type, _objMenu.RightValue);
                    break;
                case "NEWNODEPAGE":
                    this.mainDom.UserMenuRoleObj.table.addMenu(obj.MenuName);
                    break;
                case "ADDMENUORBUTTONPAGE":
                    if (obj.Type == "Node") {
                        this.mainDom.UserMenuRoleObj.table.addMenu(obj);
                    } else if (obj.Type = "Button") {
                        this.mainDom.UserMenuRoleObj.table.addButton(obj.MenuName);
                    }
                    break;

                default:
                    break;
            }
        }
    }


    export class RightMainPageStates extends basewedPageFile.Web.BaseWebPageStates { }

    export class RightMainPageProps extends basewedPageFile.Web.BaseWebPageProps<RightMainPageVm> { }

    iocFile.Core.Ioc.Current().RegisterType("RIGHTMAINPAGE", basewedPageFile.Web.BaseWebPageVm, RightMainPageVm);
}