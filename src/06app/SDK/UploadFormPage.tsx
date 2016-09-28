

import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");
import uploadFormDomFile = require("./../../05tool/Upload/UploadFormDom");

export module UploadFormPage {
    export class UploadFormPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class UploadFormPageReact extends basewedPageFile.Web.BaseWebPageReact<UploadFormPageProps, UploadFormPageStates, UploadFormPageAction> implements domCore.IReact {

        public state = new UploadFormPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>{this._tDom(this.props.Vm.UploadObj) }</div>;
        }






    }

    export interface IReactUploadFormPageVm extends basewedPageFile.Web.BaseWebPageVm {
        UploadObj: uploadFormDomFile.UploadFormDom.UploadFormDomVm;
    }

    export interface IUploadFormPageConfig {


    }
    export class UploadFormPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactUploadFormPageVm {
        public ReactType = UploadFormPageReact;
        public Title: string = "UploadFormPage页面;";
        public UploadObj: uploadFormDomFile.UploadFormDom.UploadFormDomVm;

        public constructor(config?: IUploadFormPageConfig) {
            super();
            this.UploadObj = new uploadFormDomFile.UploadFormDom.UploadFormDomVm();
        }

        private init(config: IUploadFormPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class UploadFormPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class UploadFormPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactUploadFormPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("UPLOADFORMPAGE", basewedPageFile.Web.BaseWebPageVm, UploadFormPageVm);

}

