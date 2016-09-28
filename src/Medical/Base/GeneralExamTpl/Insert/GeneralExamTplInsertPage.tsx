import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import insertRowFile = require("./GeneralExamTplInsertRowDom");


export module GeneralExamTplInsertPage {
    export class GeneralExamTplInsertPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class GeneralExamTplInsertPageReact extends basewedPageFile.Web.BaseWebPageReact<GeneralExamTplInsertPageProps, GeneralExamTplInsertPageStates, GeneralExamTplInsertPageAction> implements domCore.IReact {

        public state = new GeneralExamTplInsertPageStates();
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



    export interface IGeneralExamTplInsertPageConfig {

    }

    export class GeneralExamTplInsertPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = GeneralExamTplInsertPageReact;
        public InsertRowList: insertRowFile.GeneralExamTplInsertRowDom.GeneralExamTplInsertRowDomVm[] = [];

        public constructor(config?: IGeneralExamTplInsertPageConfig) {
            super();
            this.Title = "新增模板";
            var insertRow = new insertRowFile.GeneralExamTplInsertRowDom.GeneralExamTplInsertRowDomVm();
            this.InsertRowList.push(insertRow);
        }

        private init(config: IGeneralExamTplInsertPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

        public submit() {
            var postData = [];
            var masterRow = this.InsertRowList[0].MasterRow;
            var GeneralExamTplData = masterRow.RowData;
            GeneralExamTplData.ItemList = [];
            this.InsertRowList[0].DetailRowList.forEach((detailRow) => {
                GeneralExamTplData.ItemList.push(detailRow.RowData);
            });
            postData.push(GeneralExamTplData);
            var jsonData = JSON.stringify(postData);
            var _isSuccess = this.InsertRowList[0].legal();
            if (_isSuccess) {
                urlFile.Core.AkPost("/MedicalCenter/GeneralExamTpl/AddTemplates",
                    {
                        templates: jsonData
                    },
                    (a) => {
                        if (a.Content == "ok") {
                            var _list: string[] = a.Data;
                            var _strs: string = _list.join(",");
                            //urlFile.Core.AkUrl.Current().openUrl(
                            //    "$panelGeneralExamTpldetailpage$" + _strs + "$",
                            //    true,
                            //    () => {
                            //        urlFile.Core.AkUrl.Current().openUrl("$GeneralExamTpllistpage$" + _strs + "$", false);
                            //    }
                            //);
                            urlFile.Core.AkUrl.Current().openUrl("$GeneralExamTpllistpage$", true);

                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }


                    });
            }
        }

    }
    export class GeneralExamTplInsertPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class GeneralExamTplInsertPageProps extends basewedPageFile.Web.BaseWebPageProps<GeneralExamTplInsertPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("GENERALEXAMTPLINSERTPAGE", basewedPageFile.Web.BaseWebPageVm, GeneralExamTplInsertPageVm);

}

