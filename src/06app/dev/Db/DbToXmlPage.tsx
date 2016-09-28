

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

export module DbToXmlPage {
    export class DbToXmlPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class DbToXmlPageReact extends basewedPageFile.Web.BaseWebPageReact<DbToXmlPageProps, DbToXmlPageStates, DbToXmlPageAction> implements domCore.IReact {

        public state = new DbToXmlPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>DbToXmlPage的页面</div>;
        }






    }

    export interface IReactDbToXmlPageVm extends basewedPageFile.Web.BaseWebPageVm {

    }

    export interface IDbToXmlPageConfig {


    }
    export class DbToXmlPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactDbToXmlPageVm {
        public ReactType = DbToXmlPageReact;
        public Title: string = "DbToXmlPage页面;";
        public constructor(config?: IDbToXmlPageConfig) {
            super();

        }

        private init(config: IDbToXmlPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class DbToXmlPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class DbToXmlPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactDbToXmlPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("DBTOXMLPAGE", basewedPageFile.Web.BaseWebPageVm, DbToXmlPageVm);

}

