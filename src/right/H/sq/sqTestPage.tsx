import domFile = require("./../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../01core/Ioc");
 
   
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");

import UserMenuRoleFile = require("./../../../right/rightconfig/MenuUserRolePage/MenuUserRole");
import UserMenuRole = UserMenuRoleFile.MenuUserRole.MenuUserRoleReact;
import UserMenuRoleVm = UserMenuRoleFile.MenuUserRole.MenuUserRoleVm;

import Data = require("./../../rightconfig/MenuUserRolePage/Data");
import Data1 = require("./../../rightconfig/MenuOrgPage/Data");
import Data2 = require("./../../rightconfig/Group/Data");

export module sqTestPage {
    export class sqTestPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class sqTestPageReact extends basewedPageFile.Web.BaseWebPageReact<sqTestPageProps, sqTestPageStates, sqTestPageAction> implements domCore.IReact {
        public state = new sqTestPageStates(); public pSender(): React.ReactElement<any> {
            return <div>{this.props.Vm.UserMenuRoleObj.intoDom()}</div>;
        }
    }

    export interface IsqTestPageConfig { }

    export interface IRightMainPageConfig {
        MenuUserRole: UserMenuRoleFile.MenuUserRole.IMenuUserRoleConfig;
    }

    export class sqTestPageVm extends basewedPageFile.Web.BaseWebPageVm {

        public ReactType = sqTestPageReact;
        public UserMenuRoleObj: UserMenuRoleVm;
        public constructor(config: IsqTestPageConfig) {
            super();
        }

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "RightPalform.json" }, (a) => {
                if (a) {
                    //var _config: IRightMainPageConfig = {
                    //    MenuUserRole: {
                    //        MenuUserTable: { RoleData: [], MenuData: [], UserRoleData: [], UserData: [], Role_Menu: [], Role_User:[] }
                    //        ,UniId:""
                    //    }
                    //};
                    //_config.MenuUserRole = a;
                    //this.UserMenuRoleObj = new UserMenuRoleVm(_config.MenuUserRole);
                    //this.UserMenuRoleObj.forceUpdate("");
                    //if (callback) {
                    //    callback();
                    //}
                }
            })
        }

        protected ReceivePageSend(config: basewedPageFile.Web.IPageActor, obj: any) {
            super.ReceivePageSend(config, obj);
            debugger
            switch (config.FromModulename) {

                case "NEWROLEPAGE":
                    if (obj.RoleSign) {
                        debugger
                        var _obj: Data.Menu.RoleActorData = obj;
                        //this.menuuserrole.table.RoleData.push({ FID: "", RoleName: obj.RoleName, RoleSign: obj.RoleSign })
                        //this.UserMenuRoleObj.addRole(_obj);
                        this.UserMenuRoleObj.table.addRole(_obj);
                        this.UserMenuRoleObj.table.forceUpdate("");
                    }
                    break;
                case "NEWUSERPAGE":
                    if (obj.UserSign) {
                        var obj_: Data.Menu.UserActorData = obj;
                        this.UserMenuRoleObj.table.addUser(obj_);
                    }
                    //this.UserMenuRoleObj.addUser(obj);
                    //this.UserMenuRoleObj.forceUpdate("");
                    break;
                case "NEWORGPAGE":
                    //this.OrgTreeObj.addNodeByName(obj);
                    break;
                //case "MENUNEWPAGE":
                //    var _objMenu: Data1.Menu.IMenuSimpleData = obj;
                //    this.OrgMenuObj.table.addMenu(_objMenu.CODE_TEXT, _objMenu.Type);
                //    break;
                case "NEWNODEPAGE":
                    debugger
                    this.UserMenuRoleObj.table.addMenu(obj.MenuName);
                    break;

                case "ADDMENUORBUTTONPAGE":
                    debugger
                    if (obj.Type == "Node") {
                        this.UserMenuRoleObj.table.addMenu(obj.MenuName);
                    } else if (obj.Type = "Button") {
                        this.UserMenuRoleObj.table.addButton(obj.MenuName);
                    }
                    break;

                default:
                    break;
            }
        }
    }

    export class sqTestPageStates extends basewedPageFile.Web.BaseWebPageStates { }

    export class sqTestPageProps extends basewedPageFile.Web.BaseWebPageProps<sqTestPageVm> { } iocFile.Core.Ioc.Current().RegisterType("SQTESTPAGE", basewedPageFile.Web.BaseWebPageVm, sqTestPageVm);
}