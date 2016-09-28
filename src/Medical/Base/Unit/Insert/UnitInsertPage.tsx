import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import insertRowFile = require("./UnitInsertRowDom");


export module UnitInsertPage {
    export class UnitInsertPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class UnitInsertPageReact extends basewedPageFile.Web.BaseWebPageReact<UnitInsertPageProps, UnitInsertPageStates, UnitInsertPageAction> implements domCore.IReact {

        public state = new UnitInsertPageStates();
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

     

    export interface IUnitInsertPageConfig {

       }

    export class UnitInsertPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = UnitInsertPageReact;
        public InsertRowList: insertRowFile.UnitInsertRowDom.UnitInsertRowDomVm[] = [];

        public constructor(config?: IUnitInsertPageConfig) {
            super();
            this.Title = "新增单位";
            var insertRow = new insertRowFile.UnitInsertRowDom.UnitInsertRowDomVm();
            this.InsertRowList.push(insertRow);
        }

        private init(config: IUnitInsertPageConfig) {
        }

        public submit() {
            var postData = [];
            var masterRow = this.InsertRowList[0].MasterRow;
            var resultcommonData = masterRow.RowData;
            postData.push(resultcommonData);
            var jsonData = JSON.stringify(postData);
            var _isSuccess = masterRow.legal();
            if (_isSuccess) {
                urlFile.Core.AkPost("/MedicalCenter/Unit/AddUnits",
                    {
                        units: jsonData
                    },
                    (a) => {
                        if (a.Content == "ok") {
                            var _list: string[] = a.Data;
                            //var _strs: string = _list.join(",");
                            //urlFile.Core.AkUrl.Current().openUrl(
                            //    "$panelunitdetailpage$" + _strs + "$",
                            //    true,
                            //    () => {
                            //        urlFile.Core.AkUrl.Current().openUrl("$unitlistpage$" + _strs + "$", false);
                            //    }
                            //);
                            urlFile.Core.AkUrl.Current().openUrl("$unitlistpage$", false);

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
    export class UnitInsertPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class UnitInsertPageProps extends basewedPageFile.Web.BaseWebPageProps<UnitInsertPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("UnitINSERTPAGE", basewedPageFile.Web.BaseWebPageVm, UnitInsertPageVm);

}
