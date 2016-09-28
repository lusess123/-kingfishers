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
export module EppWorkBenchPage {
    export class EppWorkBenchPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }
    export class EppWorkBenchPageReact extends basewedPageFile.Web.BaseWebPageReact<EppWorkBenchPageProps, EppWorkBenchPageStates, EppWorkBenchPageAction> implements domCore.IReact {
        public state = new EppWorkBenchPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="epp-homepage">
                <ul className="nav nav-pills epp-list">
                    <li className="nav-item">
                        <a href="$$module/EPP/inspection/EquipmentManage"><img src="/areas/epp/Content/imgs/xj_sb.png" /><span>设备管理</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="$$module/EPP/inspection/PatrolTask"><img src="/areas/epp/Content/imgs/xj_xj.png" /><span>巡检任务</span></a>
                    </li>
                    <li className="nav-item">
                        <a href="$$module/EPP/inspection/maintainplan"><img src="/areas/epp/Content/imgs/xj_by.png" /><span>保养计划</span></a>
                    </li>
                </ul>
            </div>;
        }
    }
    export interface IReactEppWorkBenchPageVm extends basewedPageFile.Web.BaseWebPageVm {
    }
    export interface IEppWorkBenchPageConfig {
    }
    export class EppWorkBenchPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactEppWorkBenchPageVm {
        public ReactType = EppWorkBenchPageReact;
        public constructor(config?: IEppWorkBenchPageConfig) {
            super();
        }
        private init(config: IEppWorkBenchPageConfig) {
        }
        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }
    }
    export class EppWorkBenchPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }
    export class EppWorkBenchPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactEppWorkBenchPageVm>{
    }
    iocFile.Core.Ioc.Current().RegisterType("EppWorkBenchPage", basewedPageFile.Web.BaseWebPageVm, EppWorkBenchPageVm);
}

