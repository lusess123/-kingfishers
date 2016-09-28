import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import detailRowFile = require("./ResultCommonDetailRowDom");
import dataFile = require("./../Data");

export module ResultCommonDetailPage {
    export class ResultCommonDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class ResultCommonDetailPageReact extends basewedPageFile.Web.BaseWebPageReact<ResultCommonDetailPageProps, ResultCommonDetailPageStates, ResultCommonDetailPageAction> implements domCore.IReact {

        public state = new ResultCommonDetailPageStates();
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

    export interface IResultCommonDetailPageConfig {

        RowConfigList: detailRowFile.ResultCommonDetailRowDom.IResultCommonDetailRowDomConfig[];
    }

    export class ResultCommonDetailPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = ResultCommonDetailPageReact;
        public RowList: detailRowFile.ResultCommonDetailRowDom.ResultCommonDetailRowDomVm[] = [];

        public constructor(config?: IResultCommonDetailPageConfig) {
            super();
            this.Title = "常规体检详细信息";
            if (config) {
                this.init(config);
            }

        }

        private init(config: IResultCommonDetailPageConfig) {
            config.RowConfigList.forEach((row, index) => {
                var _row = new detailRowFile.ResultCommonDetailRowDom.ResultCommonDetailRowDomVm(row);
                _row.Index = index;
                this.RowList.push(_row);
            });
        }

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/MedicalCenter/ResultCommon/FetchResultCommonsList", { fids: this.Param1 }, (a) => {
                if (a) {
                    var rowConfigList = [];
                    a.Data.map((data, index) => {
                        var masterData: dataFile.ResultCommon.IResultCommonData = data;
                        var masterConfig = { RowData: masterData };
                        rowConfigList.push({ MasterConfig: masterConfig})
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
    export class ResultCommonDetailPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class ResultCommonDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<ResultCommonDetailPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("CommonResultDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, ResultCommonDetailPageVm);

}
