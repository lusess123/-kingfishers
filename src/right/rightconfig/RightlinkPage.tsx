import domFile = require("./../../01core/0Dom");

import React = require("react");
  
import iocFile = require("./../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import EditSpanFile = require("./../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
import RevealFile = require("./../H/tool/Reveal");
import Reveal = RevealFile.Reveal.RevealReact;
import RevealVm = RevealFile.Reveal.RevealVm;
import alinkFile = require("./../05tool/ALink");
import ALink = alinkFile.ui.ALinkReact;
import PaginationFile = require("./../../05tool/Pagination");
import pageViewFile = require("./../07data/PageView");
import menuuserrolepage = require("./MenuUserRolePage/MenuUserRole");

import Data = require("./MenuUserRolePage/Data");

import OrgTreeFile = require("./../H/tool/OrgTree");
import OrgTree = OrgTreeFile.OrgTree.OrgTreeReact;
import OrgTreeVm = OrgTreeFile.OrgTree.OrgTreeVm;


export module RightlinkPage {
    export class RightlinkPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class RightlinkPageReact extends basewedPageFile.Web.BaseWebPageReact<RightlinkPageProps, RightlinkPageStates, RightlinkPageAction> implements domCore.IReact {

        public state = new RightlinkPageStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="Hm-toggle-menu text-left acsTop">
                    {this.props.Vm.OrgTreeObj.intoDom() }
                </div>
                <div className="main acsTop0  acs-main">
                    <div className="acsPaddingLR0-5 acsMarginT0-5 acsGrayBg">

                        <div className="acs-table Hg-width">
                            {this.props.Vm.menuuserrole.intoDom() }
                        </div>
                    </div>
                </div>
            </div>;
        }

    }


    export class RightlinkPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public menuuserrole: menuuserrolepage.MenuUserRole.MenuUserRoleVm;
        public ReactType = RightlinkPageReact;
        public OrgTreeObj: OrgTreeVm = new OrgTreeVm();
        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "RightPalform.json" }, (a) => {
                this.menuuserrole.table.RoleData = a.RoleData;
                this.menuuserrole.table.MenuData = a.MenuData;
                this.menuuserrole.table.UserData = a.UserData;
                this.menuuserrole.table.UserRoleData = a.UserRoleData;
                if (callback) {
                    callback();
                }
            });

        }


        public constructor() {
            super();
            this.menuuserrole = new menuuserrolepage.MenuUserRole.MenuUserRoleVm();
        }


        protected ReceivePageSend(config: basewedPageFile.Web.IPageActor, obj: any) {
            super.ReceivePageSend(config, obj);

            switch (config.FromModulename) {
                case "NEWROLEPAGE":
                    if (obj.RoleSign) {
                        var _obj: Data.Menu.RoleActorData = obj;
                        //this.menuuserrole.table.RoleData.push({ FID: "", RoleName: obj.RoleName, RoleSign: obj.RoleSign })
                        //this.UserMenuRoleObj.addRole(_obj);
                        this.menuuserrole.table.addRole(_obj);
                    }
                    break;
                case "NEWUSERPAGE":
                    if (obj.UserSign) {
                        var obj_: Data.Menu.UserActorData = obj;
                        this.menuuserrole.table.addUser(obj_);
                    }
                    //this.UserMenuRoleObj.addUser(obj);
                    //this.UserMenuRoleObj.forceUpdate("");
                    break;
                case "NEWORGPAGE":
                    //this.OrgTreeObj.addNodeByName(obj);
                    break;

                case "NEWNODEPAGE":
                    this.menuuserrole.table.addMenu(obj.MenuName);
                    break;
                default:
                    break;
            }
        }
    }



    export class RightlinkPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class RightlinkPageProps extends basewedPageFile.Web.BaseWebPageProps<RightlinkPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("RIGHTLINK", basewedPageFile.Web.BaseWebPageVm, RightlinkPageVm);

}

