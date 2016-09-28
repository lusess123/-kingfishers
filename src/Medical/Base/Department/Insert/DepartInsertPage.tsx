import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import insertRowFile = require("./DepartInsertRowDom");


export module DepartmentInsertPage {
    export class DepartmentInsertPageAction extends basewedPageFile.Web.BaseWebPageAction {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class DepartmentInsertPageReact extends basewedPageFile.Web.BaseWebPageReact<DepartmentInsertPagePops, DepartmentInsertPageStates, DepartmentInsertPageAction> implements domCore.IReact {
        public state = new DepartmentInsertPageStates();

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

    export interface DepartmentInsertPageConfig { }

    export class DepartmentInsertPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = DepartmentInsertPageReact;
        public InsertRowList: insertRowFile.DepartInsertRowDom.DepartInsertRowDomVm[] = [];

        public constructor(config?: DepartmentInsertPageConfig) {
            super();
            this.Title = "新增科室";
            var insertRow = new insertRowFile.DepartInsertRowDom.DepartInsertRowDomVm();
            this.InsertRowList.push(insertRow);
        }

        public init(config: DepartmentInsertPageConfig) { }

        public submit() {
            var postData = [];
            var masterRow = this.InsertRowList[0].MasterRow;
            var resultcommonData = masterRow.RowData;
            postData.push(resultcommonData);
            var jsonData = JSON.stringify(postData);
            var _isSuccess = masterRow.legal();
            if (_isSuccess) {
                urlFile.Core.AkPost("/MedicalCenter/Department/AddDepartment",
                    {
                        depart: jsonData
                    },
                    (a) => {
                        if (a.Content == "ok") {
                            var _list: string[] = a.Data;
                            urlFile.Core.AkUrl.Current().openUrl("$DEPARTMENTPAGE$", false);

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

    export class DepartmentInsertPageStates extends basewedPageFile.Web.BaseWebPageStates { }

    export class DepartmentInsertPagePops extends basewedPageFile.Web.BaseWebPageProps<DepartmentInsertPageVm>{ }

    iocFile.Core.Ioc.Current().RegisterType("DEPARTMENTINSERTPAGE", basewedPageFile.Web.BaseWebPageVm, DepartmentInsertPageVm);
}