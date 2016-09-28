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
import PickSelectorFile = require("./../../../../02col/03selector/PickSelector");
import ExamPickListDomFile = require("./ExamPickListDom");
import eventFile = require("./../../../../01core/Event");

export module ExamPickTestPage {
    export class ExamPickTestPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;   
        public Vm: any;
    }

    export class ExamPickTestPageReact extends basewedPageFile.Web.BaseWebPageReact<ExamPickTestPageProps, ExamPickTestPageStates, ExamPickTestPageAction> implements domCore.IReact {

        public state = new ExamPickTestPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>{this._tDom(this.props.Vm.PickSelectorObj) }</div>;
        }






    }

    export interface IReactExamPickTestPageVm extends basewedPageFile.Web.BaseWebPageVm {
        PickSelectorObj: PickSelectorFile.PickSelector.PickSelectorVm;
    }

    export interface IExamPickTestPageConfig {


    }
    export class ExamPickTestPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactExamPickTestPageVm {
        public ReactType = ExamPickTestPageReact;

        public PickSelectorObj: PickSelectorFile.PickSelector.PickSelectorVm;

        public constructor(config?: IExamPickTestPageConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            var _obj: ExamPickListDomFile.ExamPickListDom.ExamPickListDomVm =
                new ExamPickListDomFile.ExamPickListDom.ExamPickListDomVm(
                    {
                        UniId: this.UniId
                    });
            this.PickSelectorObj =
                new PickSelectorFile.PickSelector.PickSelectorVm(
                {
                    LeftDomVmObj: _obj,
                    UniId: this.UniId 
                }
                );
        }

        private init(config: IExamPickTestPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class ExamPickTestPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class ExamPickTestPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactExamPickTestPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("EXAMPICKTESTPAGE", basewedPageFile.Web.BaseWebPageVm, ExamPickTestPageVm);

}
