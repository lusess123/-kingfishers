import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");

import modalFile = require("./../../../../05tool/Modal/ModalDom");

export module AppraisalRegisterPage {
    export class AppraisalRegisterPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class AppraisalRegisterPageReact extends basewedPageFile.Web.BaseWebPageReact<AppraisalRegisterPageProps, AppraisalRegisterPageStates, AppraisalRegisterPageAction> implements domCore.IReact {

        public state = new AppraisalRegisterPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                <a className="btn btn-sm btn-primary" onClick={() => { this.newOpt("new"); } }>登记1</a>
                <a className="btn btn-sm btn-primary" onClick={() => { this.registerOpt("new"); } }>登记2</a>
                
            </div>;
        }

        public newOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$winNewAppraisalRegisterPage$" + vals + "$", true);
        }

        public registerOpt(vals: string) {
            urlFile.Core.AkUrl.Current().openUrl("$winNewAppraisalRegisterPageT$" + vals + "$", true);

        }


    }

    export interface IReactAppraisalRegisterPageVm extends basewedPageFile.Web.BaseWebPageVm {
    }

    export interface IAppraisalRegisterPageConfig {


    }


    export class AppraisalRegisterPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactAppraisalRegisterPageVm {
        public ReactType = AppraisalRegisterPageReact;

        public constructor(config?: IAppraisalRegisterPageConfig) {
            super();

        }

        private init(config: IAppraisalRegisterPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class AppraisalRegisterPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class AppraisalRegisterPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactAppraisalRegisterPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("APPRAISALREGISTERPAGE", basewedPageFile.Web.BaseWebPageVm, AppraisalRegisterPageVm);

}
