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

export module TestPage {
    export class TestPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class TestPageReact extends basewedPageFile.Web.BaseWebPageReact<TestPageProps, TestPageStates, TestPageAction> implements domCore.IReact {

        public state = new TestPageStates();
        public pSender(): React.ReactElement<any> {
            return <ul className="nav">
                <li className="nav-item"><a href="#$WorkbenchPage$" className="nav-link">工作台</a></li>
                <li className="nav-item"><a href="#$PersonalListPage$" className="nav-link">个人预约登记</a></li>
                <li className="nav-item"><a href="#$GroupListPage$" className="nav-link">团体预约登记</a></li>
                <li className="nav-item"><a href="#$MoneyListPage$" className="nav-link">财务收费</a></li>
            </ul>;
        }






    }

    export interface IReactTestPageVm extends basewedPageFile.Web.BaseWebPageVm {

    }

    export interface ITestPageConfig {


    }
    export class TestPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactTestPageVm {
        public ReactType = TestPageReact;

        public constructor(config?: ITestPageConfig) {
            super();

        }
        private init(config: ITestPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class TestPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class TestPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactTestPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("TESTPAGE", basewedPageFile.Web.BaseWebPageVm, TestPageVm);

}

