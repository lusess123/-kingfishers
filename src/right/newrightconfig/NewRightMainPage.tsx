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
import MenuRoleFile = require("./NewMenuRolePage/MenuRole");
import MenuRole = MenuRoleFile.MenuRole.MenuRoleReact;
import MenuRoleVm = MenuRoleFile.MenuRole.MenuRoleVm;

import OrgMenuFile = require("./NewMenuOrgPage/MenuOrg");
import OrgMenu = OrgMenuFile.MenuOrg.MenuOrgReact;
import OrgMenuVm = OrgMenuFile.MenuOrg.MenuOrgVm;

import EditSpanFile = require("./../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;

import Data = require("./NewMenuRolePage/Data");
import Data1 = require("./NewMenuOrgPage/Data");
import Data2 = require("./NewGroup/Data");


import NewMainDom = require("./NewMainDom");
export module NewRightMainPage {

    export class NewRightMainPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string; public Id: string; public Vm: any;
    }


    export class NewRightMainPageReact extends basewedPageFile.Web.BaseWebPageReact<NewRightMainPageProps, NewRightMainPageStates, NewRightMainPageAction> implements domCore.IReact {
        public state = new NewRightMainPageStates();

        public pSender(): React.ReactElement<any> {

            return <div>
                <div className="col-lg-2 col-md-2 text-left Hm-toggle-menu">
                    {this.props.Vm.NaviTree.intoDom() }
                </div>
                {this.props.Vm.NewMainDom.intoDom() }
            </div>;
        }

    }

    export interface RolePagerListData {
        Pager: PaginationFile.tool.Pagination;
        //List: Array<Data.Menu.IUserRoleSimpleData>;
    }

    export interface INewRightMainPageConfig {

    }
    export interface IMainPageConfig {

    }

    export class NewRightMainPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = NewRightMainPageReact;
        public UniId: string;
        public NaviTree: toolTreeFile.ui.TreeVm;
        public NewMainDom: NewMainDom.NewMainDom.NewMainDomVm;
        
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
                    if (this.NewMainDom.TabCurrentIndex == 1) {
                        this.LoadRoleMenuUser(dd, 0);
                    } else if (this.NewMainDom.TabCurrentIndex == 0) {
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
                        <i className="fa fa-times Hu-pointer" onClick={e => { this.delOpt(node.Value); e.stopPropagation(); } }></i>
                    </span>
                )];
            }
        }
        //新增
        public newOpt() {
            var _str = this.getNaviGroupTreeFId();
            urlFile.Core.AkUrl.Current().openUrl("$winNewGroupNewPage$" + _str + "$", true);
        }
        public delOpt(val: string) {
            //alert(val);
            if (confirm("你确定要删除所选中的组织机构？？")) {

                //urlFile.Core.AkPost("/RightCloud/NewRightCloud/delGroupTree", { fid: vas }, (data) => {
                //   
                //});
            }
        }
        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/RightCloud/NewRightConfig/fristinit", { Groups: "1" }, (a) => {
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
                    var _config: NewMainDom.NewMainDom.INewMainDomConfig =
                        {
                            MenuOrg: {
                                MenuOrgTable: { MenuData: [], OrgData: [], Menu_Org: [] }, UniId: this.UniId
                            }, Group: { FID: "", OrgName: "" }, index: 0
                        };
                    _config.Group = a.Group;
                    _config.MenuOrg = a;
                     _config.MenuOrg.MenuOrgTable.MenuData = a.MenuOrgTable.MenuData.Children;                    
                    this.NewMainDom = new NewMainDom.NewMainDom.NewMainDomVm(_config);
                    this.NewMainDom.ishidePageBar = true;
                    if (callback) {
                        callback();
                    }
                }

            });

        }

        //index为0
        public LoadMenuOrg(Group: string) {
            urlFile.Core.AkPost("/RightCloud/NewRightConfig/fristinit", { Groups: Group }, (a) => {
                if (a) {
                    var mm = a;
                    var _dataVal: Data2.GroupOrg.IGroupOrgData = a.GroupTree.Data.CurrentGroup;
                    var _config: NewMainDom.NewMainDom.INewMainDomConfig =
                        {
                            MenuOrg: {
                                MenuOrgTable: { MenuData: [], OrgData: [], Menu_Org: [] }, UniId: this.UniId
                            }, Group: { FID: "", OrgName: "" }, index: 0
                        };
                    _config.Group = a.Group;
                    _config.MenuOrg = a;

                    _config.MenuOrg.MenuOrgTable.MenuData = a.MenuOrgTable.MenuData.Children;
                    this.NewMainDom = new NewMainDom.NewMainDom.NewMainDomVm(_config);
                    this.NewMainDom.IsChange = true;
                    this.NewMainDom.ishidePageBar = true
                    this.NewMainDom.OrgName = this.OrgName;
                    this.NewMainDom.OrgMenuObj.table.IsChange = true;
                    this.NewMainDom.OrgMenuObj.table.IsMulit = true;

                    this.NewMainDom.OrgMenuObj.IsChange = true;
                    this.NewMainDom.OrgMenuObj.IsMulit = true;
                    //this.NewMainDom.OrgMenuObj.forceUpdate("")
                    this.forceUpdate("");
                }

            });
        }

        //index为1
        public LoadRoleMenuUser(Group: string, index: number) {
            var _page = { PageNo: index };
            urlFile.Core.AkPost("/RightCloud/NewRightConfig/secodeinit", { Groups: Group, pager: JSON.stringify(_page) }, (a) => {

                var _config: NewMainDom.NewMainDom.INewMainDomConfig = {
                    MenuRole: {
                        MenuRoleTable: {
                            RoleData: [], MenuData: [], Role_Menu: [], Menu_Group: { FID: "", OrgName: "" }
                        }
                        , UniId: this.UniId
                    },
                    MenuOrg: {
                        MenuOrgTable: { MenuData: [], OrgData: [], Menu_Org: [] }, UniId: this.UniId
                    },
                    Group: { FID: "", OrgName: "" }, index: 1
                }
                _config.Group = a.Group;
                _config.MenuRole.MenuRoleTable = a.MenuUserTable;
                //var dd = a.MenuUserTable.UserData;
                _config.MenuRole.MenuRoleTable.MenuData = a.MenuUserTable.MenuData.Children;
                _config.MenuRole.MenuRoleTable.Menu_Group = a.Group;
                //_config.Pager = dd;
                this.NewMainDom = new NewMainDom.NewMainDom.NewMainDomVm(_config);
                this.NewMainDom.IsChange = true;
                this.NewMainDom.OrgName = this.OrgName;
                this.NewMainDom.MenuRoleObj.table.IsMulit = true;
                this.NewMainDom.MenuRoleObj.table.IsChange = true;
                this.NewMainDom.MenuRoleObj.IsChange = true;
                this.NewMainDom.MenuRoleObj.IsMulit = true;
                this.NewMainDom.MenuRoleObj.forceUpdate("");
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

                case "RCNEWROLEPAGE":
                    if (obj.RoleSign) {

                        var _obj: Data.Menu.RoleActorData = obj;
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
                    var _objMenu: Data1.Menu.IMenuSimpleData = obj;
                    this.NewMainDom.OrgMenuObj.table.addMenu(_objMenu.MenuName, _objMenu.Type, _objMenu.RightValue);
                    break;
                case "NEWNODEPAGE":
                    this.NewMainDom.MenuRoleObj.table.addMenu(obj.MenuName);
                    break;
                case "ADDNEWMENUPAGE":
                    if (obj.Type == "Node") {
                        this.NewMainDom.MenuRoleObj.table.addMenu(obj);
                    } else if (obj.Type = "Button") {
                        this.NewMainDom.MenuRoleObj.table.addButton(obj);
                    }
                    break;

                default:
                    break;
            }
        }
    }


    export class NewRightMainPageStates extends basewedPageFile.Web.BaseWebPageStates { }

    export class NewRightMainPageProps extends basewedPageFile.Web.BaseWebPageProps<NewRightMainPageVm> { }

    iocFile.Core.Ioc.Current().RegisterType("NewRightMainPage", basewedPageFile.Web.BaseWebPageVm, NewRightMainPageVm);
}