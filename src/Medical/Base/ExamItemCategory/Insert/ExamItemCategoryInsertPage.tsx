import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import insertRowFile = require("./ExamItemCategoryInsertRowDom");

export module ExamItemCategoryInsertPage {
    export class ExamItemCategoryInsertPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class ExamItemCategoryInsertPageReact extends basewedPageFile.Web.BaseWebPageReact<ExamItemCategoryInsertPageProps, ExamItemCategoryInsertPageStates, ExamItemCategoryInsertPageAction> implements domCore.IReact {

        public state = new ExamItemCategoryInsertPageStates();
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
    export interface IExamItemCategoryInsertPageConfig {


    }
    export class ExamItemCategoryInsertPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = ExamItemCategoryInsertPageReact;
        public InsertRowList: insertRowFile.ExamItemCategoryInsertRowDom.ExamItemCategoryInsertRowDomVm[] = [];
        public constructor(config?: IExamItemCategoryInsertPageConfig) {
            super();
            this.Title = "新增体检项目分类";
            var insertRow = new insertRowFile.ExamItemCategoryInsertRowDom.ExamItemCategoryInsertRowDomVm();
            this.InsertRowList.push(insertRow);
        }

        private init(config: IExamItemCategoryInsertPageConfig) {
        }

        public submit() {
            var postData = [];
            var masterRow = this.InsertRowList[0].MasterRow;
            var resultcommonData = masterRow.RowData;
            postData.push(resultcommonData);
            var jsonData = JSON.stringify(postData);
            var _isSuccess = masterRow.legal();
            if (_isSuccess) {
                urlFile.Core.AkPost("/MedicalCenter/ExamItemCategory/addExamItemCategory",
                    {
                        examcate: jsonData
                    },
                    (a) => {
                        if (a.Content == "ok") {
                            var _list: string[] = a.Data;
                            urlFile.Core.AkUrl.Current().openUrl("$EXAMITEMCATEGORYLISTPAGE$", false);
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
    export class ExamItemCategoryInsertPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class ExamItemCategoryInsertPageProps extends basewedPageFile.Web.BaseWebPageProps<ExamItemCategoryInsertPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("ExamItemCategoryInsertPage", basewedPageFile.Web.BaseWebPageVm, ExamItemCategoryInsertPageVm);

}
