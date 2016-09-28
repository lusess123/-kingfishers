import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import detailRowFile = require("./ExamPackageDetailRowDom");
import dataFile = require("./../Data");

export module ExamPackageDetailPage {
    export class ExamPackageDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class ExamPackageDetailPageReact extends basewedPageFile.Web.BaseWebPageReact<ExamPackageDetailPageProps, ExamPackageDetailPageStates, ExamPackageDetailPageAction> implements domCore.IReact {

        public state = new ExamPackageDetailPageStates();
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

    export interface IExamPackageDetailPageConfig {

        RowConfigList: detailRowFile.ExamPackageDetailRowDom.IExamPackageDetailRowDomConfig[];
    }

    export class ExamPackageDetailPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = ExamPackageDetailPageReact;
        public RowList: detailRowFile.ExamPackageDetailRowDom.ExamPackageDetailRowDomVm[] = [];

        public constructor(config?: IExamPackageDetailPageConfig) {
            super();
            this.Title = "体检套餐详细信息";
            if (config) {
                this.init(config);
            }

        }

        private init(config: IExamPackageDetailPageConfig) {
            config.RowConfigList.forEach((row, index) => {
                var _row = new detailRowFile.ExamPackageDetailRowDom.ExamPackageDetailRowDomVm(row);
                _row.Index = index;
                this.RowList.push(_row);
            });
        }

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/MedicalCenter/ExamPackage/FetchExamPackageDetailList", { fids: this.Param1 }, (a) => {
                if (a) {
                    var rowConfigList = [];
                    a.Data.map((data, index) => {
                        var masterData: dataFile.ExamPackage.IExamPackageData = data;
                        var masterConfig = { RowData: masterData };
                        var detailConfigList = [];
                        var detailListData: dataFile.ExamPackage.IExamPackageItemData[] = data.DetailListData;
                        detailListData.map((detail, index) => {
                            var detailConfig = { RowData: detail };
                            detailConfigList.push(detailConfig);
                        });
                        rowConfigList.push({ MasterConfig: masterConfig, DetailRowConfigList: detailConfigList })
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
    export class ExamPackageDetailPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class ExamPackageDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<ExamPackageDetailPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("ExamPackageDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, ExamPackageDetailPageVm);

}
