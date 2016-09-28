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

export module WorkbenchPage {
    export class WorkbenchPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class WorkbenchPageReact extends basewedPageFile.Web.BaseWebPageReact<WorkbenchPageProps, WorkbenchPageStates, WorkbenchPageAction> implements domCore.IReact {

        public state = new WorkbenchPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="YSm-workbench clearfix">
                <div className="pull-left YSm-workbench-left">
                    <ul className="nav nav-pills clearfix">
                        <li className="nav-item">
                            <a className="nav-link" href="#$PersonalListPage$"><img src="/ts/lib/akCss/images/YSWork_pdj_on.png"/>
                                <span>个人登记</span>
                            </a></li>
                        <li className="nav-item"><a className="nav-link">
                            <img src="/ts/lib/akCss/images/YSWork_pzyd_on.png"/>
                            <span>打印指引单</span>
                        </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <img src="/ts/lib/akCss/images/YSWork_pjf_on.png"/><span>个人缴费</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="nav nav-pills clearfix">
                        <li className="nav-item">
                            <a className="nav-link YSs-workbench-blue" href="#$GroupListPage$"><img src="/ts/lib/akCss/images/YSWork_gdj_on.png"/><span>团体登记</span></a></li>
                        <li className="nav-item"><a className="nav-link YSs-workbench-blue"><img src="/ts/lib/akCss/images/YSWork_pzyd_on.png"/><span>打印指引单</span></a></li>
                    </ul>
                </div>
                <div className="pull-right YSm-workbench-right">
                    <ul className="nav nav-pills clearfix">
                        <li className="nav-item"><a className="nav-link"><img src="/ts/lib/akCss/images/YSWork_olr_on.png"/><span>科室录入</span></a></li>
                        <li className="nav-item"><a className="nav-link"><img src="/ts/lib/akCss/images/YSWork_zj_on.png"/><span>总检</span></a></li>
                        <li className="nav-item"><a className="nav-link"><img src="/ts/lib/akCss/images/YSWork_cbg_on.png"/><span>打印体检报告</span></a></li>
                    </ul>
                </div>
                <div className="YSu-workbench-red"></div>
                <div className="YSu-workbench-blue"></div>
            </div>;
        }






    }

    export interface IReactWorkbenchPageVm extends basewedPageFile.Web.BaseWebPageVm {

    }

    export interface IWorkbenchPageConfig {


    }
    export class WorkbenchPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactWorkbenchPageVm {
        public ReactType = WorkbenchPageReact;

        public constructor(config?: IWorkbenchPageConfig) {
            super();

            $(".nav-link").hover(function () {
                var _this = $(this);
                var _img = _this.children("img");
                _img.attr("src",_img.attr("src").replace("_on","_over"));
            }, function () {
                var _this = $(this);
                var _img = _this.children("img");
                _img.attr("src", _img.attr("src").replace("_over", "_on"));
            });

        }

        private init(config: IWorkbenchPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class WorkbenchPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class WorkbenchPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactWorkbenchPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("WORKBENCHPAGE", basewedPageFile.Web.BaseWebPageVm, WorkbenchPageVm);

}

