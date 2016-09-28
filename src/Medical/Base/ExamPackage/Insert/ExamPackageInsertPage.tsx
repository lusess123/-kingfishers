import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import insertRowFile = require("./ExamPackageInsertRowDom");


export module ExamPackageInsertPage {
    export class ExamPackageInsertPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class ExamPackageInsertPageReact extends basewedPageFile.Web.BaseWebPageReact<ExamPackageInsertPageProps, ExamPackageInsertPageStates, ExamPackageInsertPageAction> implements domCore.IReact {

        public state = new ExamPackageInsertPageStates();
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

     

    export interface IExamPackageInsertPageConfig {

       }

    export class ExamPackageInsertPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = ExamPackageInsertPageReact;
        public InsertRowList: insertRowFile.ExamPackageInsertRowDom.ExamPackageInsertRowDomVm[] = [];

        public constructor(config?: IExamPackageInsertPageConfig) {
            super();
            this.Title = "新增体检套餐";
            var insertRow = new insertRowFile.ExamPackageInsertRowDom.ExamPackageInsertRowDomVm();
            this.InsertRowList.push(insertRow);
        }

        private init(config: IExamPackageInsertPageConfig) {
        }

        public submit() {
            var postData = [];
            var masterRow = this.InsertRowList[0].MasterRow;
            var exampackageData = masterRow.RowData;

            exampackageData.DetailListData = [];
            this.InsertRowList[0].DetailRowList.forEach((detailRow) => {
                exampackageData.DetailListData.push(detailRow.RowData);
            });
            postData.push(exampackageData);
            var jsonData = JSON.stringify(postData);
            var _isSuccess = this.InsertRowList[0].legal();
            if (_isSuccess) {
                urlFile.Core.AkPost("/MedicalCenter/ExamPackage/AddExamPackage",
                    {
                        exampackages: jsonData
                    },
                    (a) => {
                        if (a.Content == "ok") {
                            var _list: string[] = a.Data;
                            var _strs: string = _list.join(",");
                            //urlFile.Core.AkUrl.Current().openUrl(
                            //    "$panelexampackagedetailpage$" + _strs + "$",
                            //    true,
                            //    () => {
                            //        urlFile.Core.AkUrl.Current().openUrl("$panelexampackagedetailpage$" + _strs + "$", false);
                            //    }
                            //);
                            urlFile.Core.AkUrl.Current().openUrl("$exampackagelistpage$", true);


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
    export class ExamPackageInsertPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class ExamPackageInsertPageProps extends basewedPageFile.Web.BaseWebPageProps<ExamPackageInsertPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("ExamPackageINSERTPAGE", basewedPageFile.Web.BaseWebPageVm, ExamPackageInsertPageVm);

}
