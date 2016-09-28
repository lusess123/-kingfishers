import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import insertRowFile = require("./CombinationExamItemInsertRowDom");


export module CombinationExamItemInsertPage {
    export class CombinationExamItemInsertPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class CombinationExamItemInsertPageReact extends basewedPageFile.Web.BaseWebPageReact<CombinationExamItemInsertPageProps, CombinationExamItemInsertPageStates, CombinationExamItemInsertPageAction> implements domCore.IReact {

        public state = new CombinationExamItemInsertPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="acs-modals-panel"><h4>{this.props.Vm.Title}</h4>
                <div>{this.props.Vm.InsertRowList.map((row) => {
                    return row.intoDom();
                }) }</div>
                <div className="acsTextC"><span className="button tiny" onClick={() => { this.fun_submitBtn(); } } >提交</span></div>
            </div>;
        }

        private fun_submitBtn() {
        }

    }

     

    export interface ICombinationExamItemInsertPageConfig {

       }

    export class CombinationExamItemInsertPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = CombinationExamItemInsertPageReact;
        public InsertRowList: insertRowFile.CombinationExamItemInsertRowDom.CombinationExamItemInsertRowDomVm[] = [];

        public constructor(config?: ICombinationExamItemInsertPageConfig) {
            super();
            this.Title = "新增套餐项目";
            var insertRow = new insertRowFile.CombinationExamItemInsertRowDom.CombinationExamItemInsertRowDomVm();
            this.InsertRowList.push(insertRow);
        }

        private init(config: ICombinationExamItemInsertPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class CombinationExamItemInsertPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class CombinationExamItemInsertPageProps extends basewedPageFile.Web.BaseWebPageProps<CombinationExamItemInsertPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("CombinationExamItemINSERTPAGE", basewedPageFile.Web.BaseWebPageVm, CombinationExamItemInsertPageVm);

}
