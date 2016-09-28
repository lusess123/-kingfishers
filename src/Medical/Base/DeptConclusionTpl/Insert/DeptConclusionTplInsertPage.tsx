import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import insertRowFile = require("./DeptConclusionTplInsertRowDom");


export module DeptConclusionTplInsertPage {
    export class DeptConclusionTplInsertPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class DeptConclusionTplInsertPageReact extends basewedPageFile.Web.BaseWebPageReact<DeptConclusionTplInsertPageProps, DeptConclusionTplInsertPageStates, DeptConclusionTplInsertPageAction> implements domCore.IReact {

        public state = new DeptConclusionTplInsertPageStates();
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



    export interface IDeptConclusionTplInsertPageConfig {

    }

    export class DeptConclusionTplInsertPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = DeptConclusionTplInsertPageReact;
        public InsertRowList: insertRowFile.DeptConclusionTplInsertRowDom.DeptConclusionTplInsertRowDomVm[] = [];

        public constructor(config?: IDeptConclusionTplInsertPageConfig) {
            super();
            this.Title = "新增模板";
            var insertRow = new insertRowFile.DeptConclusionTplInsertRowDom.DeptConclusionTplInsertRowDomVm();
            this.InsertRowList.push(insertRow);
        }

        private init(config: IDeptConclusionTplInsertPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

        public submit() {
            var postData = [];
            var masterRow = this.InsertRowList[0].MasterRow;
            var rowData = masterRow.RowData;
            rowData.ItemList = [];
            this.InsertRowList[0].DetailRowList.forEach((detailRow) => {
                rowData.ItemList.push(detailRow.RowData);
            });
            postData.push(rowData);
            var jsonData = JSON.stringify(postData);
            var _isSuccess = this.InsertRowList[0].legal();
            if (_isSuccess) {
                urlFile.Core.AkPost("/MedicalCenter/DeptConclusionTpl/AddTemplates",
                    {
                        templates: jsonData
                    },
                    (a) => {
                        if (a.Content == "ok") {
                            var _list: string[] = a.Data;
                            var _strs: string = _list.join(",");
                            //urlFile.Core.AkUrl.Current().openUrl(
                            //    "$panelDeptConclusionTpldetailpage$" + _strs + "$",
                            //    true,
                            //    () => {
                            //        urlFile.Core.AkUrl.Current().openUrl("$DeptConclusionTpllistpage$" + _strs + "$", false);
                            //    }
                            //);
                            urlFile.Core.AkUrl.Current().openUrl("$DeptConclusionTpllistpage$", true);

                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }


                    });
            }
        }

    }
    export class DeptConclusionTplInsertPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class DeptConclusionTplInsertPageProps extends basewedPageFile.Web.BaseWebPageProps<DeptConclusionTplInsertPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("DEPTCONCLUSIONTPLINSERTPAGE", basewedPageFile.Web.BaseWebPageVm, DeptConclusionTplInsertPageVm);

}

