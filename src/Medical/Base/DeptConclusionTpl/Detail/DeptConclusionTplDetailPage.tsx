import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import detailRowFile = require("./DeptConclusionTplDetailRowDom");
import dataFile = require("./../Data");

export module DeptConclusionTplDetailPage {
    export class DeptConclusionTplDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class DeptConclusionTplDetailPageReact extends basewedPageFile.Web.BaseWebPageReact<DeptConclusionTplDetailPageProps, DeptConclusionTplDetailPageStates, DeptConclusionTplDetailPageAction> implements domCore.IReact {

        public state = new DeptConclusionTplDetailPageStates();
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

    export interface IDeptConclusionTplDetailPageConfig {

        RowConfigList: detailRowFile.DeptConclusionTplDetailRowDom.IDeptConclusionTplDetailRowDomConfig[];
    }

    export class DeptConclusionTplDetailPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = DeptConclusionTplDetailPageReact;
        public RowList: detailRowFile.DeptConclusionTplDetailRowDom.DeptConclusionTplDetailRowDomVm[] = [];

        public constructor(config?: IDeptConclusionTplDetailPageConfig) {
            super();
            this.Title = "科室小结模板信息";
            if (config) {
                this.init(config);
            }

        }

        private init(config: IDeptConclusionTplDetailPageConfig) {
            config.RowConfigList.forEach((row, index) => {
                var _row = new detailRowFile.DeptConclusionTplDetailRowDom.DeptConclusionTplDetailRowDomVm(row);
                _row.Index = index;
                this.RowList.push(_row);
            });
        }

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/MedicalCenter/DeptConclusionTpl/FetchTemplateDetailList", { fids: this.Param1 }, (a) => {
                if (a && a.Data) {
                    var rowConfigList = [];
                    a.Data.map((data, index) => {
                        var masterData: dataFile.DeptConclusionTpl.IDeptConclusionTplData = data;
                        var masterConfig = { RowData: masterData };
                        var detailConfigList = [];
                        var detailListData: dataFile.DeptConclusionTpl.IDeptConclusionTplItemData[] = data.ItemList;
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
    export class DeptConclusionTplDetailPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class DeptConclusionTplDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<DeptConclusionTplDetailPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("DEPTCONCLUSIONTPLDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, DeptConclusionTplDetailPageVm);

}
