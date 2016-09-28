import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import insertRowFile = require("./ResultCommonInsertRowDom");


export module ResultCommonInsertPage {
    export class ResultCommonInsertPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class ResultCommonInsertPageReact extends basewedPageFile.Web.BaseWebPageReact<ResultCommonInsertPageProps, ResultCommonInsertPageStates, ResultCommonInsertPageAction> implements domCore.IReact {

        public state = new ResultCommonInsertPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals"><h4>{this.props.Vm.Title}</h4>
                <div>{this.props.Vm.InsertRowList.map((row) => {
                    return row.intoDom();
                }) }</div>
                <div className="text-center"><span className="btn btn-xs btn-primary" onClick={() => { this.fun_submitBtn(); } } >提交</span></div>
            </div>
        }

        private fun_submitBtn() {
            this.props.Vm.submit();
        }

    }

     

    export interface IResultCommonInsertPageConfig {

       }

    export class ResultCommonInsertPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = ResultCommonInsertPageReact;
        public InsertRowList: insertRowFile.ResultCommonInsertRowDom.ResultCommonInsertRowDomVm[] = [];

        public constructor(config?: IResultCommonInsertPageConfig) {
            super();
            this.Title = "新增常规体检结果";
            var insertRow = new insertRowFile.ResultCommonInsertRowDom.ResultCommonInsertRowDomVm();
            this.InsertRowList.push(insertRow);
        }

        private init(config: IResultCommonInsertPageConfig) {
        }

        public submit() {
            var postData = [];
            var masterRow = this.InsertRowList[0].MasterRow;
            var resultcommonData = masterRow.RowData;
            postData.push(resultcommonData);
            var jsonData = JSON.stringify(postData);
            var _isSuccess = masterRow.legal();
            if (_isSuccess) {
                urlFile.Core.AkPost("/MedicalCenter/ResultCommon/AddResultCommons",
                    {
                        resultcommons: jsonData
                    },
                    (a) => {
                        if (a.Content == "ok") {
                            var _list: string[] = a.Data;
                            //var _strs: string = _list.join(",");
                            //urlFile.Core.AkUrl.Current().openUrl(
                            //    "$panelCommonResultdetailpage$" + _strs + "$",
                            //    true,
                            //    () => {
                            //        urlFile.Core.AkUrl.Current().openUrl("$CommonResultlistpage$" + _strs + "$", false);
                            //    }
                            //);
                            urlFile.Core.AkUrl.Current().openUrl("$CommonResultlistpage$", false);


                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }


                    });
            }
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class ResultCommonInsertPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class ResultCommonInsertPageProps extends basewedPageFile.Web.BaseWebPageProps<ResultCommonInsertPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("CommonResultINSERTPAGE", basewedPageFile.Web.BaseWebPageVm, ResultCommonInsertPageVm);

}
