import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import insertRowFile = require("./ExamItemInsertRowDom");

export module ExamItemInsertPage {
    export class ExamItemInsertPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class ExamItemInsertPageReact extends basewedPageFile.Web.BaseWebPageReact<ExamItemInsertPageProps, ExamItemInsertPageStates, ExamItemInsertPageAction> implements domCore.IReact {

        public state = new ExamItemInsertPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals"><h4>{this.props.Vm.Title}</h4>
                <div>{this.props.Vm.InsertRowList.map((row) => {
                    return row.intoDom();
                }) }</div>
                <div className="text-center"><span className="btn btn-xs btn-primary" onClick={() => { this.fun_submitBtn(); } } >提交</span></div>
            </div>;
        }
        private fun_submitBtn() {
            this.props.Vm.submit();
        }
    }
    export interface IExamItemInsertPageConfig {


    }
    export class ExamItemInsertPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = ExamItemInsertPageReact;
        public InsertRowList: insertRowFile.ExamItemInsertRowDom.ExamItemInsertRowDomVm[] = [];
        public constructor(config?: IExamItemInsertPageConfig) {
            super();
            this.Title = "新增体检项目";
            var insertRow = new insertRowFile.ExamItemInsertRowDom.ExamItemInsertRowDomVm();
            this.InsertRowList.push(insertRow);
        }

        private init(config: IExamItemInsertPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

        public submit() {
            var postData = [];
            var masterRow = this.InsertRowList[0].MasterRow;
            var resultcommonData = masterRow.RowData;
            postData.push(resultcommonData);
            var jsonData = JSON.stringify(postData);
            var _isSuccess = masterRow.legal();
            if (_isSuccess) {
                urlFile.Core.AkPost("/MedicalCenter/ExamItem/addExamItem",
                    {
                        exam: jsonData
                    },
                    (a) => {
                        if (a.Content == "ok") {
                            var _list: string[] = a.Data;
                            urlFile.Core.AkUrl.Current().openUrl("$examitemlistpage$", false);

                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }


                    });
            }
        }

    }
    export class ExamItemInsertPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class ExamItemInsertPageProps extends basewedPageFile.Web.BaseWebPageProps<ExamItemInsertPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("EXAMITEMINSERTPAGE", basewedPageFile.Web.BaseWebPageVm, ExamItemInsertPageVm);

}
