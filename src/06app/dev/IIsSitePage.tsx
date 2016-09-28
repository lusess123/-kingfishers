

import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");

import ViewPageFile = require("./../../04page/Viewpage");

import React = require("react");
import ReactDOM = require("react-dom");
import iisHookPage = require("./IIsSiteHook"); iisHookPage;

export module IIsSitePage {
    export class IIsSitePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class IIsSitePageReact extends basewedPageFile.Web.BaseWebPageReact<IIsSitePageProps, IIsSitePageStates, IIsSitePageAction> implements domCore.IReact {

        public state = new IIsSitePageStates();
        public pSender(): React.ReactElement<any> {
            return <div>{this._tDom(this.props.Vm.ViewPageObj) }</div>;
        }






    }

    export interface IReactIIsSitePageVm extends basewedPageFile.Web.BaseWebPageVm {
        ViewPageObj: ViewPageFile.Page.WebViewPageVm;
    }

    export interface IIIsSitePageConfig {


    }
    export class IIsSitePageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactIIsSitePageVm {
        public ReactType = IIsSitePageReact;
        public Title: string = "IIsSitePage页面;";
        public ViewPageObj: ViewPageFile.Page.WebViewPageVm;

        public constructor(config?: IIIsSitePageConfig) {
            super();

        }

        private init(config: IIIsSitePageConfig) {
        }
        

        protected loadPage(callback?: () => any) {
            this.ViewPageObj = new ViewPageFile.Page.WebViewPageVm();
            this.ViewPageObj.IsV1 = false;
            this.ViewPageObj.Reset("module/dev/iismode");
            this.ViewPageObj.sysPage_load(function () {
                callback();
            });
        }
        

    }
    export class IIsSitePageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class IIsSitePageProps extends basewedPageFile.Web.BaseWebPageProps<IReactIIsSitePageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("IISSITEPAGE", basewedPageFile.Web.BaseWebPageVm, IIsSitePageVm);

}

