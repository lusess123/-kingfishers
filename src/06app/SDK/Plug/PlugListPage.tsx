

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
export module PlugListPage {
    export class PlugListPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class PlugListPageReact extends basewedPageFile.Web.BaseWebPageReact<PlugListPageProps, PlugListPageStates, PlugListPageAction> implements domCore.IReact {

        public state = new PlugListPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>{this._tDom(this.props.Vm.ViewPageObj) }</div>;
        }






    }

    export interface IReactPlugListPageVm extends basewedPageFile.Web.BaseWebPageVm {
        ViewPageObj: ViewPageFile.Page.WebViewPageVm;
    }

    export interface IPlugListPageConfig {


    }
    export class PlugListPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactPlugListPageVm {
        public ReactType = PlugListPageReact;
        public Title: string = "PlugListPage页面;";
        public ViewPageObj: ViewPageFile.Page.WebViewPageVm;
        public constructor(config?: IPlugListPageConfig) {
            super();

        }

        private init(config: IPlugListPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            this.ViewPageObj = new ViewPageFile.Page.WebViewPageVm();
            this.ViewPageObj.IsV1 = false;
            this.ViewPageObj.Reset("module/plug");
            this.ViewPageObj.sysPage_load(function () {
                callback();
            });
        }

    }
    export class PlugListPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class PlugListPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactPlugListPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("PLUGLISTPAGE", basewedPageFile.Web.BaseWebPageVm, PlugListPageVm);

}

