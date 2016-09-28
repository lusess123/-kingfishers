import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom"); 
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc"); 
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import React = require("react");

export module MenuOrgPage {
    export class MenuOrgPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }


    export class MenuOrgPageReact extends basewedPageFile.Web.BaseWebPageReact<MenuOrgPageProps, MenuOrgPageStates, MenuOrgPageAction> implements domCore.IReact {
        public state = new MenuOrgPageStates();

        public pSender(): React.ReactElement<any> {
            return <table className="acs-table acs-table-tree">123</table>;
        }
    }

    export class MenuOrgPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = MenuOrgPageReact;
    }

    export class MenuOrgPageStates extends basewedPageFile.Web.BaseWebPageStates { }

    export class MenuOrgPageProps extends basewedPageFile.Web.BaseWebPageProps<MenuOrgPageVm> { }

    iocFile.Core.Ioc.Current().RegisterType("MENUUSERROLEPAGE", basewedPageFile.Web.BaseWebPageVm, MenuOrgPageVm);
}