import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import detailRowFile = require("./CombinationExamItemDetailRowDom");
import dataFile = require("./../Data");

export module CombinationExamItemDetailPage {
    export class CombinationExamItemDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class CombinationExamItemDetailPageReact extends basewedPageFile.Web.BaseWebPageReact<CombinationExamItemDetailPageProps, CombinationExamItemDetailPageStates, CombinationExamItemDetailPageAction> implements domCore.IReact {

        public state = new CombinationExamItemDetailPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="acs-modals-panel">
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

    export interface ICombinationExamItemDetailPageConfig {

        RowConfigList: detailRowFile.CombinationExamItemDetailRowDom.ICombinationExamItemDetailRowDomConfig[];
    }

    export class CombinationExamItemDetailPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = CombinationExamItemDetailPageReact;
        public RowList: detailRowFile.CombinationExamItemDetailRowDom.CombinationExamItemDetailRowDomVm[] = [];

        public constructor(config?: ICombinationExamItemDetailPageConfig) {
            super();
            this.Title = "体检套餐详细信息";
            if (config) {
                this.init(config);
            }

        }

        private init(config: ICombinationExamItemDetailPageConfig) {
            config.RowConfigList.forEach((row, index) => {
                var _row = new detailRowFile.CombinationExamItemDetailRowDom.CombinationExamItemDetailRowDomVm(row);
                _row.Index = index;
                this.RowList.push(_row);
            });
        }

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "CombinationExamItemListData.json" }, (a) => {
                if (a) {
                    var rowConfigList = [];
                    var data1 = a.ListData;
                    data1.map((data, index) => {
                        var masterData: dataFile.CombinationExamItem.ICombinationExamItemData = data;
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
    export class CombinationExamItemDetailPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class CombinationExamItemDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<CombinationExamItemDetailPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("CombinationExamItemDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, CombinationExamItemDetailPageVm);

}
