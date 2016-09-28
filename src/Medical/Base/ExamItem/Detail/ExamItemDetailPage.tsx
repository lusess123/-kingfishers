import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import detailRowFile = require("./ExamItemDetailRowDom");
import dataFile = require("./../Data");

export module ExamItemDetailPage {
    export class ExamItemDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class ExamItemDetailPageReact extends basewedPageFile.Web.BaseWebPageReact<ExamItemDetailPageProps, ExamItemDetailPageStates, ExamItemDetailPageAction> implements domCore.IReact {

        public state = new ExamItemDetailPageStates();
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
    export interface ExamItemDetailPageConfig {
        RowConfigList: detailRowFile.ExamItemDetailRowDom.ExamItemDetailRowDomConfig[];

    }
    export class ExamItemDetailPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = ExamItemDetailPageReact;

        public RowList: detailRowFile.ExamItemDetailRowDom.ExamItemDetailRowDomVm[] = [];

        public constructor(config?: ExamItemDetailPageConfig) {
            super();
            this.Title = "体检项目详细信息";
            if (config) {
                this.init(config);
            }
        }

        private init(config: ExamItemDetailPageConfig) {
            config.RowConfigList.forEach((row, index) => {
                var _row = new detailRowFile.ExamItemDetailRowDom.ExamItemDetailRowDomVm(row);
                _row.Index = index;
                this.RowList.push(_row);
            });
        }

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/MedicalCenter/ExamItem/FetchExamItem", { fids: this.Param1 }, (a) => {
                if (a) {
                    var rowConfigList = [];
                    a.Data.map((data, index) => {
                        var masterData: dataFile.ExamItem.IExamItemData = data;
                        var masterConfig = { RowData: masterData };
                        rowConfigList.push({ MasterConfig: masterConfig })
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
    export class ExamItemDetailPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class ExamItemDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<ExamItemDetailPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("EXAMIREMDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, ExamItemDetailPageVm);

}
