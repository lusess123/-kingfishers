import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

//import UserMenuRole = UserMenuRoleFile.MenuUserRole.MenuUserRoleReact;
//import UserMenuRoleVm = UserMenuRoleFile.MenuUserRole.MenuUserRoleVm;
import MenuRoleFile = require("./NewMenuRolePage/MenuRole");
import MenuRole = MenuRoleFile.MenuRole.MenuRoleReact;
import MenuRoleVm = MenuRoleFile.MenuRole.MenuRoleVm;

import EditSpanFile = require("./../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;

import OrgMenuFile = require("./NewMenuOrgPage/MenuOrg");
import OrgMenu = OrgMenuFile.MenuOrg.MenuOrgReact;
import OrgMenuVm = OrgMenuFile.MenuOrg.MenuOrgVm;

/*import Data = require("./MenuUserRolePage/Data")*/;
import Data1 = require("./NewMenuOrgPage/Data");
import Data2 = require("./NewGroup/Data");

import PaginationFile = require("./../../05tool/Pagination");

export module NewMainDom {
    export class NewMainDomAction extends domCore.DomAction { }

    export class NewMainDomReact extends domCore.DomReact<NewMainDomProps, NewMainDomStates, NewMainDomAction> implements domCore.IReact {
        public state = new NewMainDomStates();

        private test(): React.ReactElement<any> {
            //alert(this.props.Vm.OrgMenuObj.IsChange);
            console.log(this.props.Vm.OrgMenuObj);
            return null;
        }
        public pSender(): React.ReactElement<NewMainDomProps> {
            return <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                <div className="Hm-org-edit">
                    <div className="Hu-org-title clearfix">
                        {this.props.Vm.OrgNameESObj.intoDom() }
                        <b>编码：{this.props.Vm.OrgCodeESObj }</b>
                        <a className="btn btn-xs btn-secondary" onClick={() => { this.props.Vm.GroupSave() } }>保存</a>
                    </div>
                </div>
                <div className="Hm-org-content">
                    <div className="Hm-grids">
                        <ul className="nav nav-tabs Hu-tabs-title">
                            <li className={"nav-item Hu-pointer" + (this.props.Vm.TabCurrentIndex == 0 ? " active" : " ") } onClick={() => { this.fun_TabsClick(0) } }>为组织机构分配菜单权限</li>
                            <li className={"nav-item Hu-pointer" + (this.props.Vm.TabCurrentIndex == 1 ? " active" : " ") } onClick={() => { this.fun_TabsClick(1) } }>菜单 / 角色 / 用户 关系</li>
                        </ul>

                        <div className="tab-content ">

                            <div className={"tab-pane" + (this.props.Vm.TabCurrentIndex == 0 ? " active" : " ") }>

                                {this.props.Vm.OrgMenuObj.table.rMenuOrgTrailSender() }

                                {this.props.Vm.OrgMenuObj.intoDom() }

                            </div>
                            <div className={"tab-pane Hg-relative clearfix " + (this.props.Vm.TabCurrentIndex == 1 ? " active" : " ") }>
                                <div>
                                    <div className="">
                                        {this.props.Vm.MenuRoleObj ? this.props.Vm.MenuRoleObj.intoDom() : null}
                                        {this.props.Vm.ishidePageBar ? null : this.props.Vm.PagerObj.intoDom() }
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>;
        }

        private _initPager(): React.ReactElement<any> {
            if (this.props.Vm.ListData && this.props.Vm.ListData.Pager.PageSize < this.props.Vm.ListData.Pager.TotalCount) {
                var pager = this.props.Vm.ListData.Pager;
                this.props.Vm.PagerObj.PageNo = pager.PageNo;
                this.props.Vm.PagerObj.PageSize = pager.PageSize;
                this.props.Vm.PagerObj.TotalCount = pager.TotalCount;

                this.props.Vm.PagerObj.PageClickEvent = (pageIndex) => {
                    this.props.Vm.loadPageData(pageIndex);
                }

                return this.props.Vm.PagerObj.intoDom();
            }
        }

        public submit() {
            //this.props.Vm.UserMenuRoleObj.table.submit();
        }

        private fun_TabsClick(index) {
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
            } else {
                this.tranform(index);
            }
        }

        public tranform(index) {
            if (index == 1) {
                if (!this.props.Vm.OrgName) {
                    this.props.Vm.MenuUserRoleLoadPage("1", 0);
                } else {
                    //alert("NewMainDom:" + this.props.Vm.OrgName)
                    this.props.Vm.MenuUserRoleLoadPage(this.props.Vm.OrgName, 0);
                }
            } else if (index == 0) {
                debugger
                if (this.props.Vm.OrgName) {
                    this.props.Vm.RoleMenuLoadPage(this.props.Vm.OrgName);
                }
            }
            this.forceUpdate();
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }


    export interface RolePagerListData {
        Pager: PaginationFile.tool.Pagination;
        //List: Array<Data.Menu.IUserRoleSimpleData>;
    }

    export interface GroupData {
        FID: string;
        OrgName: string;
    }

    export interface INewMainDomConfig {
        MenuRole?: MenuRoleFile.MenuRole.IMenuRoleConfig;
        MenuOrg: OrgMenuFile.MenuOrg.IMenuOrgRowConfig
        Group?: GroupData;
        Pager?: RolePagerListData;
        index?: number;
        UinId?: string;
    }

    export class NewMainDomVm extends domCore.DomVm {
        public ReactType = NewMainDomReact;

        public OrgNameESObj: EditSpanFile.EditSpan.EditSpanVm = new EditSpanFile.EditSpan.EditSpanVm();
        public OrgCodeESObj: string;
        public TabCurrentIndex = 0;
        public OrgMenuObj: OrgMenuVm;
        public MenuRoleObj: MenuRoleVm;
        public PagerObj: PaginationFile.tool.PaginationVm;//分页条
        public ListData: RolePagerListData;
        public UniId: string;

        public ishidePageBar: boolean = false;

        public OrgName: string;
        public constructor(config?: INewMainDomConfig) {
            super();
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

                    this.PagerObj.PageClickEvent = (pageIndex) => {
                        this.loadPageData(pageIndex);
                    }
                    this.ishidePageBar = false;
                } else {
                    this.ishidePageBar = true;
                }
            }

            this.TabCurrentIndex = config.index;

            this.listenAppEvent("NewMainDom/MenuOrgPage", config.UinId, (name: string) => {
                if (!this.OrgName) {
                    this.RoleMenuLoadPage("1");
                } else {
                    this.RoleMenuLoadPage(this.OrgName);
                }
            });

            this.listenAppEvent("NewMainDom/MenuRolePage", config.UinId, (name: string) => {
                if (!this.OrgName) {
                    this.MenuUserRoleLoadPage("1", 0);
                } else {
                    //alert("NewMainDom:" + this.OrgName)
                    this.MenuUserRoleLoadPage(this.OrgName, 0);
                }
            });


        }

        //方法----------------------------------------------------
        public loadPageData(index: number, naviTreeId?: string) {
            //if (!this.OrgName) {
            //    this.MenuUserPaging("", index);
            //} else {
            //    this.MenuUserPaging(this.OrgName, index);
            //}

        }

        public GroupSave() {
            if (this.OrgNameESObj.Content != "" && this.OrgCodeESObj != "") {
                urlFile.Core.AkPost("/RightCloud/NewRightConfig/GroupUpdate", { GroupName: this.OrgNameESObj.Content, GroupKey: this.OrgCodeESObj }, (a) => {
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
        }
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
        public MenuUserRoleLoadPage(Group: string, pageIndex: number) {

            var _page = { PageNo: pageIndex };

            urlFile.Core.AkPost("/Rightcloud/NewRightConfig/secodeinit", { Groups: Group, pager: JSON.stringify(_page) }, (a) => {
                if (a) {
                    var _config: INewMainDomConfig = {
                        MenuRole: {
                            MenuRoleTable: {
                                RoleData: [], MenuData: [], Role_Menu: [], Menu_Group: { FID: "", OrgName: "" }
                            }
                            , UniId: this.UniId
                        },
                        MenuOrg: {
                            MenuOrgTable: { MenuData: [], OrgData: [], Menu_Org: [] }, UniId: this.UniId
                        }
                    }
                    this.PagerObj = new PaginationFile.tool.PaginationVm();
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
                    this.MenuRoleObj = new MenuRoleVm(_config.MenuRole);
                    this.MenuRoleObj.table.IsChange = true;
                    this.MenuRoleObj.table.IsMulit = true;
                    this.forceUpdate("");
                }
            });
        }

        //选项卡1的加载
        public RoleMenuLoadPage(Group: string) {
            urlFile.Core.AkPost("/RightCloud/RightConfig/fristinit", { Groups: Group }, (a) => {
                if (a) {
                    var mm = a;
                    var _dataVal: Data2.GroupOrg.IGroupOrgData = a.GroupTree.Data.CurrentGroup;
                    var _config: OrgMenuFile.MenuOrg.IMenuOrgRowConfig =
                        {
                            MenuOrgTable: {
                                MenuData: [], OrgData: [], Menu_Org: []
                            }, UniId: this.UniId
                        };
                    _config = a;
                    _config.MenuOrgTable.MenuData = a.MenuOrgTable.MenuData.Children;
                    this.OrgMenuObj = new OrgMenuVm(_config);
                    this.OrgMenuObj.table.OrgName = Group
                    this.TabCurrentIndex = 0;
                    this.OrgMenuObj.IsChange = true;
                    this.OrgMenuObj.IsMulit = true;
                    this.forceUpdate("");
                }

            });
        }
    }

    export class NewMainDomStates extends domCore.DomStates { }

    export class NewMainDomProps extends domCore.DomProps<NewMainDomVm> { }
}