import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import iocFile = require("./../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");

import PaginationFile = require("./../../../05tool/Pagination");
import toolTreeFile = require("./../../../05tool/Tree");

import EditSpanFile = require("./../../../05tool/EditSpan");
import Espan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;


import UserRoleFile = require("./UserRole/UserRole");
import UserRole = UserRoleFile.UserRole.UserRoleReact;
import UserRoleVm = UserRoleFile.UserRole.UserRoleVm;

import Data = require("./UserRole/Data");

export module zhmTestPage {
    export class zhmTestPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class zhmTestPageReact extends basewedPageFile.Web.BaseWebPageReact<zhmTestPageProps, zhmTestPageStates, zhmTestPageAction> implements domCore.IReact {

        public state = new zhmTestPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="acs-table-absolute-org">
                {this.props.Vm.UserRoleObj.intoDom() }
                {this.props.Vm.UserRoleObj.table.rUserRoleHeadSender}
                {this.props.Vm.UserRoleObj.table.rUserRoleSender}
            </div>;
        }

        private fun_TabsClick(index) {
            this.props.Vm.TabCurrentIndex = index;
            this.forceUpdate();
        }
    }

    export interface zhmTestPageConfig {
        UserRole: UserRoleFile.UserRole.zhmTestPageConfig;
    }
    export class zhmTestPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = zhmTestPageReact;

        public PageObj: PaginationFile.tool.PaginationVm;
        public NaviTree: toolTreeFile.ui.TreeVm;
        public TabCurrentIndex = 0;
        public UserRoleObj: UserRoleVm;
        public constructor() {
            super();
            var pagerVm = this.PageObj = new PaginationFile.tool.PaginationVm();
            pagerVm.PageNo = 0;
            pagerVm.PageSize = 20;
            pagerVm.TotalCount = 80;

            pagerVm.PageClickEvent = (pageIndex) => {
                pagerVm.PageNo = pageIndex;
                pagerVm.IsChange = true;
                pagerVm.forceUpdate("");
            }
            this.NaviTree = new toolTreeFile.ui.TreeVm();
            this.NaviTree.NodeTplFun = (node) => {
                return [(
                    <span>{node.Text}
                        <span>+</span>
                        <span>X</span></span>
                )];
            }
        }



        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "RightPalform.json" }, (a) => {
                if (a) {
                    var _config: zhmTestPageConfig = { UserRole: { MenuUserTable: { RoleData: [], UserData: [] } } };
                    _config.UserRole = a;
                    this.UserRoleObj = new UserRoleVm(_config.UserRole);
             
                }
                if (callback)
                callback();
            });
        }

        public getNaviGroupTreeFId(): string {
            var _str: any = this.NaviTree.dataValue();
            return _str;
        }
        protected ReceivePageSend(config: basewedPageFile.Web.IPageActor, obj: any) {
            super.ReceivePageSend(config, obj);
            switch (config.FromModulename) {
                case "NEWUSERROLEPAGE":
                    if (obj.RoleSign) {
                        var _obj: Data.User.RoleActorData = obj;
                        this.UserRoleObj.table.addRole(_obj);
                        this.UserRoleObj.table.forceUpdate("");
                    }
                case "NEWUSERPAGE":
                    if (obj.UserSign) {
                        var obj_: Data.User.UserActorData = obj;
                        this.UserRoleObj.table.addUser(obj_);
                    }
                    //this.UserMenuRoleObj.addUser(obj);
                    //this.UserMenuRoleObj.forceUpdate("");
                    break;

                default:
                    break;
            }
        }

    }
    export class zhmTestPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class zhmTestPageProps extends basewedPageFile.Web.BaseWebPageProps<zhmTestPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("ZHMTESTPAGE", basewedPageFile.Web.BaseWebPageVm, zhmTestPageVm);

}
