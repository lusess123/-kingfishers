

import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");

export module ApplicationPage {
    export class ApplicationPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class ApplicationPageReact extends basewedPageFile.Web.BaseWebPageReact<ApplicationPageProps, ApplicationPageStates, ApplicationPageAction> implements domCore.IReact {

        public state = new ApplicationPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>ApplicationPage的页面wewewe</div>;
        }






    }

    export interface IReactApplicationPageVm extends basewedPageFile.Web.BaseWebPageVm {

    }

    export interface IApplicationPageConfig {


    }
    export class ApplicationPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactApplicationPageVm {
        public ReactType = ApplicationPageReact;
        public Title: string = "ApplicationPage页面;";
        public constructor(config?: IApplicationPageConfig) {
            super();

        }

        private init(config: IApplicationPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class ApplicationPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class ApplicationPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactApplicationPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("APPLICATIONPAGE", basewedPageFile.Web.BaseWebPageVm, ApplicationPageVm);

}

