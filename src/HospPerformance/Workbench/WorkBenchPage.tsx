import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");
export module WorkBenchPage {
    export class WorkBenchPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }
    export class WorkBenchPageReact extends basewedPageFile.Web.BaseWebPageReact<WorkBenchPageProps, WorkBenchPageStates, WorkBenchPageAction> implements domCore.IReact {
        public state = new WorkBenchPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>WorkBenchPage的页面</div>;
        }
    }
    export interface IReactWorkBenchPageVm extends basewedPageFile.Web.BaseWebPageVm {
    }
    export interface IWorkBenchPageConfig {
    }
    export class WorkBenchPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactWorkBenchPageVm {
        public ReactType = WorkBenchPageReact;
        public constructor(config?: IWorkBenchPageConfig) {
            super();
        }
        private init(config: IWorkBenchPageConfig) {
        }
        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }
    }
    export class WorkBenchPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }
    export class WorkBenchPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactWorkBenchPageVm>{
    }
    iocFile.Core.Ioc.Current().RegisterType("WorkBenchPage", basewedPageFile.Web.BaseWebPageVm, WorkBenchPageVm);
}

