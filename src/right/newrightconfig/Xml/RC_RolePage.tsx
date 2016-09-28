import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");
import ViewPageFile = require("./../../../04page/Viewpage");
export module RC_RolePage {
    export class RC_RolePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class RC_RolePageReact extends basewedPageFile.Web.BaseWebPageReact<RC_RolePageProps, RC_RolePageStates, RC_RolePageAction> implements domCore.IReact {

        public state = new RC_RolePageStates();
        public pSender(): React.ReactElement<any> {
            return <div>{this._tDom(this.props.Vm.ViewPageObj) }</div>;
        }






    }

    export interface IReactRC_RolePageVm extends basewedPageFile.Web.BaseWebPageVm {
        ViewPageObj: ViewPageFile.Page.WebViewPageVm;
    }

    export interface IRC_RolePageConfig {


    }
    export class RC_RolePageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactRC_RolePageVm {
        public ReactType = RC_RolePageReact;
        public Title: string = "RC_RolePage页面;";
        public ViewPageObj: ViewPageFile.Page.WebViewPageVm;
        public constructor(config?: IRC_RolePageConfig) {
            super();

        }

        private init(config: IRC_RolePageConfig) {
        }

        protected loadPage(callback?: () => any) {
            this.ViewPageObj = new ViewPageFile.Page.WebViewPageVm();
            this.ViewPageObj.IsV1 = false;
            this.ViewPageObj.Reset("module/rightcloud/RC_Role");
            this.ViewPageObj.sysPage_load(function () {
                callback();
            });
        }

    }
    export class RC_RolePageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class RC_RolePageProps extends basewedPageFile.Web.BaseWebPageProps<IReactRC_RolePageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("RC_RolePage", basewedPageFile.Web.BaseWebPageVm, RC_RolePageVm);

}

