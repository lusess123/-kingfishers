import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import detailRowFile = require("./GeneralExamTplDetailRowDom");
import dataFile = require("./../Data");

export module GeneralExamTplDetailPage {
    export class GeneralExamTplDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class GeneralExamTplDetailPageReact extends basewedPageFile.Web.BaseWebPageReact<GeneralExamTplDetailPageProps, GeneralExamTplDetailPageStates, GeneralExamTplDetailPageAction> implements domCore.IReact {

        public state = new GeneralExamTplDetailPageStates();
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

    export interface IGeneralExamTplDetailPageConfig {

        RowConfigList: detailRowFile.GeneralExamTplDetailRowDom.IGeneralExamTplDetailRowDomConfig[];
    }

    export class GeneralExamTplDetailPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = GeneralExamTplDetailPageReact;
        public RowList: detailRowFile.GeneralExamTplDetailRowDom.GeneralExamTplDetailRowDomVm[] = [];

        public constructor(config?: IGeneralExamTplDetailPageConfig) {
            super();
            this.Title = "科室小结模板信息";
            if (config) {
                this.init(config);
            }

        }

        private init(config: IGeneralExamTplDetailPageConfig) {
            config.RowConfigList.forEach((row, index) => {
                var _row = new detailRowFile.GeneralExamTplDetailRowDom.GeneralExamTplDetailRowDomVm(row);
                _row.Index = index;
                this.RowList.push(_row);
            });
        }

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/MedicalCenter/GeneralExamTpl/FetchTemplateDetailList", { fids: this.Param1 }, (a) => {
                if (a && a.Data) {
                    var rowConfigList = [];
                    a.Data.map((data, index) => {
                        var masterData: dataFile.GeneralExamTpl.IGeneralExamTplData = data;
                        var masterConfig = { RowData: masterData };
                        var detailConfigList = [];
                        var detailListData: dataFile.GeneralExamTpl.IGeneralExamTplItemData[] = data.ItemList;
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
    export class GeneralExamTplDetailPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class GeneralExamTplDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<GeneralExamTplDetailPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("GENERALEXAMTPLDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, GeneralExamTplDetailPageVm);

}
