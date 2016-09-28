import domFile = require("./../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import iocFile = require("./../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import thFile = require("./../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import EditSpanFile = require("./../../../src/05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
import RevealFile = require("./tool/Reveal");
import Reveal = RevealFile.Reveal.RevealReact;
import RevealVm = RevealFile.Reveal.RevealVm;

import MenuOrgFile = require("./MenuOrgPage");
import MenuOrg = MenuOrgFile.MenuOrgPage.MenuOrgPageReact;
import MenuOrgVm = MenuOrgFile.MenuOrgPage.MenuOrgPageVm;

import MenuUserFile = require("./MenuUserPage");
import MenuUser = MenuUserFile.MenuUserPage.MenuUserPageReact;
import MenuUserVm = MenuUserFile.MenuUserPage.MenuUserPageVm;

import OrgTreeFile = require("./tool/OrgTree");
import OrgTree = OrgTreeFile.OrgTree.OrgTreeReact;
import OrgTreeVm = OrgTreeFile.OrgTree.OrgTreeVm;

import OrgEditFile = require("./tool/OrgEdit");
import OrgEdit = OrgEditFile.OrgEdit.OrgEditReact;
import OrgEditVm = OrgEditFile.OrgEdit.OrgEditVm;

import OrgMenuFile = require("./tool/OrgMenu");
import OrgMenu = OrgMenuFile.OrgMenu.OrgMenuReact;
import OrgMenuVm = OrgMenuFile.OrgMenu.OrgMenuVm;

import UserMenuRoleFile = require("./tool/UserMenuRole");
import UserMenuRole = UserMenuRoleFile.UserMenuRole.UserMenuRoleReact;
import UserMenuRoleVm = UserMenuRoleFile.UserMenuRole.UserMenuRoleVm;


import NewRolePageFile = require("./NewRolePage");
import NewRolePage = NewRolePageFile.NewRolePage.NewRolePageReact;
import NewRolePageVm = NewRolePageFile.NewRolePage.NewRolePageVm;
MenuUserFile;

import PaginationFile = require("./../../05tool/Pagination");
export module rightPage {
    export class rightPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class rightPageReact extends basewedPageFile.Web.BaseWebPageReact<rightPageProps, rightPageStates, rightPageAction> implements domCore.IReact {

        public state = new rightPageStates();

        public pSender(): React.ReactElement<any> {
            var modalPanel = <div className={"Hm-modals-bg Hg-width Hg-max-width" + (this.props.Vm.IsModalShow ? " show" : " hide") }>
                <div className="Hm-modals  Hm-modals-shape Hg-relative">
                    <h4>新增组织机构</h4>
                    <div className="Hm-form clearfix">
                        <div className="col-lg-4 col-sm-12 col-xs-12">
                            <div className="pull-left Hu-label"><label className="right required">上级机构：</label></div>
                            <div className="pull-left Hu-input">
                                <ESpan children={null} Vm={new ESpanVm({ Content: "请输入..." }) }></ESpan>
                                <input type="text" placeholder="请输入..."></input>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12"><div className="pull-left Hu-label"><label className="form-control-label pull-right required">机构名称：</label></div><div className="pull-left Hu-input"><input type="text" placeholder="请输入..."></input></div></div>
                        <div className="col-lg-4 col-sm-12 col-xs-12"><div className="pull-left Hu-label"><label className="form-control-label pull-right required">机构编码：</label></div><div className="pull-left Hu-input"><input type="text" placeholder="请输入..."></input></div></div>
                        <a className="Hu-close Hu-pointer" onClick={() => this.fun_ModalClick() }><i className="fa fa-close"></i></a>
                    </div>

                    <div className="text-center"><a className="btn btn-xs btn-primary">提交</a></div>
                </div>
            </div>;

           
            return <div>
                <div className="col-lg-2 col-md-2 text-left Hm-toggle-menu">
                    {this.props.Vm.OrgTreeObj.intoDom() }
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                    {this.props.Vm.OrgEditObj.intoDom() }
                    <div className="Hm-org-content">                       
                        <div className="Hm-grids">
                            <ul className="nav nav-tabs Hu-tabs-title">
                                <li className={"nav-item Hu-pointer" + (this.props.Vm.TabCurrentIndex == 0 ? " active" : " ") } onClick={() => { this.fun_TabsClick(0) } }>为组织机构分配菜单权限</li>
                                <li className={"nav-item Hu-pointer" + (this.props.Vm.TabCurrentIndex == 1 ? " active" : " ") } onClick={() => { this.fun_TabsClick(1) } }>菜单 / 角色 / 用户 关系</li>
                            </ul>
                            <div className="tab-content">
                                <div className={"tab-pane" + (this.props.Vm.TabCurrentIndex == 0 ? " active" : " ") }>
                                    <div className="">
                                        <div className="Hm-header-btn btn-group-sm clearfix">                                         
                                        <input type="button" value="保存" className="btn btn-primary pull-right" disabled="disabled"></input>
                                        <a className="btn btn-primary pull-right">保存</a>
                                            </div>
                                        </div>
                                    <div className="">
                                        <div className="table-responsive">
                                        {this.props.Vm.OrgMenuObj.intoDom() }
                                        </div>
                                        </div>
                                </div>
                                <div className={"tab-pane Hg-relative clearfix " + (this.props.Vm.TabCurrentIndex == 1 ? " active" : " ") }>
                                    <div className="">
                                        <div className="Hm-header-btn btn-group-sm clearfix">
                                            <a className="btn btn-primary pull-right">保存</a>
                                            <a className="btn btn-primary pull-right" onClick={() => { this.fun_OpenUrl("df") } }>设置表头</a>
                                            
                                        </div>
                                        <div className="">
                                            {this.props.Vm.UserMenuRoleObj.intoDom() }
                                            {this._initPager()}
                                        </div>
                                    </div>
                                    <div className="acs-new-role-btn ACT-BTNSCROLL">
                                        
      
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                                   
                </div>                
                {modalPanel}
            </div>;
        }

        private _initPager(): React.ReactElement<any> {
            return this.props.Vm.PagerObj.intoDom();
        }

        private fun_ModalClick() {
            urlFile.Core.AkUrl.Current().openUrl("$winrightpage$2342343434$");
        }
      
        private fun_OpenUrl(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$winCustomColPage$" + vals + "$", true);
        } 

        private fun_TabsClick(index) {
            this.props.Vm.TabCurrentIndex = index;
            this.forceUpdate();
        }

        private fun_PagerClick() {
            this.props.Vm.IsPagerShow = !this.props.Vm.IsPagerShow;
            this.forceUpdate();
        }


    }


    export class rightPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = rightPageReact;
        public RevealPanel = RevealVm;
        public IsModalShow: boolean = false;
        public IsPagerShow: boolean = false;
        
        public MenuOrgObj: MenuOrgVm = new MenuOrgVm();
        public MenuUserObj: MenuUserVm = new MenuUserVm();
        public OrgTreeObj: OrgTreeVm = new OrgTreeVm();
        public OrgEditObj: OrgEditVm = new OrgEditVm();
        public NewRoleObj: NewRolePageVm = new NewRolePageVm();
        public OrgMenuObj: OrgMenuVm = new OrgMenuVm();
        public UserMenuRoleObj: UserMenuRoleVm = new UserMenuRoleVm();
        public PagerObj: PaginationFile.tool.PaginationVm;

        public TabCurrentIndex = 0;


        public constructor() {
            super();
            var pagerVm = this.PagerObj = new PaginationFile.tool.PaginationVm();
            pagerVm.PageNo = 0;
            pagerVm.PageSize = 20;
            pagerVm.TotalCount = 80;

            pagerVm.PageClickEvent = (pageIndex) => {
                //this.props.Vm.loadPageData(pageIndex);
                pagerVm.PageNo = pageIndex;
                pagerVm.IsChange = true;
                pagerVm.forceUpdate("");
            }
        }

        protected ReceivePageSend(config: basewedPageFile.Web.IPageActor, obj: any) {
            super.ReceivePageSend(config, obj);
            switch (config.FromModulename) {
                case "NEWROLEPAGE":
                    if (obj.RoleSign) {
                        var _obj: RoleActorData = obj;
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
        }

    }
    export interface RoleActorData {
        RoleName: string;
        RoleSign: string;
    }
    export class rightPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class rightPageProps extends basewedPageFile.Web.BaseWebPageProps<rightPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("RIGHTPAGE", basewedPageFile.Web.BaseWebPageVm, rightPageVm);

}

