
import domFile = require("./../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import iocFile = require("./../../01core/Ioc");

import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");

import baseMDMasterDomFile = require("./BaseMDMasterDom");
import baseMDRowDomFile = require("./BaseMDRowDom");

export module BaseMDPage {
    export class BaseMDPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class BaseMDPageReact<P extends BaseMDPageProps, S extends BaseMDPageStates, A extends BaseMDPageAction> extends basewedPageFile.Web.BaseWebPageReact<P, S, A> implements domCore.IReact {

       // public state = new BaseMDPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals"><h4>{this.props.Vm.Title}</h4>
                <div>
                    {this.props.Vm.RowList.map((row) => {
                        return row.intoDom();
                    }) }
                </div>
                <div className="text-center"><span className="btn btn-sm btn-primary" onClick={() => { this.fun_submitBtn(); } } >提交</span></div>
            </div>;
        }

        private fun_submitBtn() {
            this.props.Vm.reactSubmit();
        }
    }

    export class TestBaseMDPageReact extends BaseMDPageReact<BaseMDPageProps, BaseMDPageStates, BaseMDPageAction>
    {
    }

    export class BaseMDPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = TestBaseMDPageReact;
        public Title: string = "基础页面";
        public RowList: baseMDRowDomFile.BaseMDRowDom.BaseMDRowDomVm[] = [];


        public constructor() {
            super();
            var _row: baseMDRowDomFile.BaseMDRowDom.BaseMDRowDomVm = new baseMDRowDomFile.BaseMDRowDom.BaseMDRowDomVm();
            this.RowList.push(_row);
        }

        public reactSubmit()
        {
            this.submit();
        }

        protected submit()
        {
        }

    }
    export class BaseMDPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class BaseMDPageProps extends basewedPageFile.Web.BaseWebPageProps<BaseMDPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("BASEMDPAGE", basewedPageFile.Web.BaseWebPageVm, BaseMDPageVm);

}

