import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import insertRowFile = require("./AnomalyInsertRowDom");


export module AnomalyInsertPage {
    export class AnomalyInsertPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class AnomalyInsertPageReact extends basewedPageFile.Web.BaseWebPageReact<AnomalyInsertPageProps, AnomalyInsertPageStates, AnomalyInsertPageAction> implements domCore.IReact {

        public state = new AnomalyInsertPageStates();
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



    export interface IAnomalyInsertPageConfig {

    }

    export class AnomalyInsertPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = AnomalyInsertPageReact;
        public InsertRowList: insertRowFile.AnomalyInsertRowDom.AnomalyInsertRowDomVm[] = [];

        public constructor(config?: IAnomalyInsertPageConfig) {
            super();
            this.Title = "新增异常";
            var insertRow = new insertRowFile.AnomalyInsertRowDom.AnomalyInsertRowDomVm();
            this.InsertRowList.push(insertRow);
        }

        private init(config: IAnomalyInsertPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

        public submit() {
            var postData = [];
            var masterRow = this.InsertRowList[0].MasterRow;
            var anomalyData = masterRow.RowData;
            anomalyData.ItemList = [];
            this.InsertRowList[0].DetailRowList.forEach((detailRow) => {
                anomalyData.ItemList.push(detailRow.RowData);
            });
            postData.push(anomalyData);
            var jsonData = JSON.stringify(postData);
            var _isSuccess = this.InsertRowList[0].legal();
            if (_isSuccess) {
                urlFile.Core.AkPost("/MedicalCenter/Anomaly/AddAnomalies",
                    {
                        anomalies: jsonData
                    },
                    (a) => {
                        if (a.Content == "ok") {
                            var _list: string[] = a.Data;
                            var _strs: string = _list.join(",");
                            //urlFile.Core.AkUrl.Current().openUrl(
                            //    "$panelanomalydetailpage$" + _strs + "$",
                            //    true,
                            //    () => {
                            //        urlFile.Core.AkUrl.Current().openUrl("$anomalylistpage$" + _strs + "$", false);
                            //    }
                            //);
                            urlFile.Core.AkUrl.Current().openUrl("$anomalylistpage$", true);


                        }
                        else {
                            utilFile.Core.Util.Noty("数据新增失败");
                        }


                    });
            }
        }

    }
    export class AnomalyInsertPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class AnomalyInsertPageProps extends basewedPageFile.Web.BaseWebPageProps<AnomalyInsertPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("ANOMALYINSERTPAGE", basewedPageFile.Web.BaseWebPageVm, AnomalyInsertPageVm);

}

