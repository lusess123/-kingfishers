import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import detailRowFile = require("./AnomalyDetailRowDom");
import dataFile = require("./../Data");

export module AnomalyDetailPage {
    export class AnomalyDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class AnomalyDetailPageReact extends basewedPageFile.Web.BaseWebPageReact<AnomalyDetailPageProps, AnomalyDetailPageStates, AnomalyDetailPageAction> implements domCore.IReact {

        public state = new AnomalyDetailPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals">
                <h4>{this.props.Vm.Title}</h4>
                <div>
                    {this.props.Vm.RowList.map((_row) => {
                        return _row.intoDom();
                    })
                    }
                </div>

            </div>;
        }

    }

    export interface IAnomalyDetailPageConfig {

        RowConfigList: detailRowFile.AnomalyDetailRowDom.IAnomalyDetailRowDomConfig[];
    }

    export class AnomalyDetailPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = AnomalyDetailPageReact;
        public RowList: detailRowFile.AnomalyDetailRowDom.AnomalyDetailRowDomVm[] = [];

        public constructor(config?: IAnomalyDetailPageConfig) {
            super();
            this.Title = "异常详细信息";
            if (config) {
                this.init(config);
            }

        }

        private init(config: IAnomalyDetailPageConfig) {
            config.RowConfigList.forEach((row, index) => {
                var _row = new detailRowFile.AnomalyDetailRowDom.AnomalyDetailRowDomVm(row);
                _row.Index = index;
                this.RowList.push(_row);
            });
        }

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/MedicalCenter/Anomaly/FetchAnomalyDetailList", { fids: this.Param1 }, (a) => {
                if (a&&a.Data) {
                    var rowConfigList = [];
                    a.Data.map((data, index) => {
                        var masterData: dataFile.Anomaly.IAnomalyData = data;
                        var masterConfig = { RowData: masterData };
                        var detailConfigList = [];
                        var detailListData: dataFile.Anomaly.IAnomalyItemData[] = data.ItemList;
                        rowConfigList.push({ MasterConfig: masterConfig, DetailListData: detailListData })
                    });
                    var pageConfig = {
                        RowConfigList: rowConfigList
                    }
                    this.init(pageConfig);

                }
                if (callback) {
                    callback();
                }
            })
        }

    }
    export class AnomalyDetailPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class AnomalyDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<AnomalyDetailPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("ANOMALYDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, AnomalyDetailPageVm);

}
