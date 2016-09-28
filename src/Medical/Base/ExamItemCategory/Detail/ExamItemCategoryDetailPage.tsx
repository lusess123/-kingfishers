import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import detailRowFile = require("./ExamItemCategoryDetailRowDom");
import dataFile = require("./../Data");

export module ExamItemCategoryDetailPage {
    export class ExamItemCategoryDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class ExamItemCategoryDetailPageReact extends basewedPageFile.Web.BaseWebPageReact<ExamItemCategoryDetailPageProps, ExamItemCategoryDetailPageStates, ExamItemCategoryDetailPageAction> implements domCore.IReact {

        public state = new ExamItemCategoryDetailPageStates();
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
    export interface IExamItemCategoryDetailPageConfig {

        RowConfigList: detailRowFile.ExamItemCategoryDetailRowDom.ExamItemCategoryDetailRowDomConfig[];
    }
    export class ExamItemCategoryDetailPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = ExamItemCategoryDetailPageReact;
        public RowList: detailRowFile.ExamItemCategoryDetailRowDom.ExamItemCategoryDetailRowDomVm[] = [];

        public constructor(config?: IExamItemCategoryDetailPageConfig) {
            super();
            this.Title = "体检项目分类详细信息";
            if (config) {
                this.init(config);
            }
        }

        private init(config: IExamItemCategoryDetailPageConfig) {
            config.RowConfigList.forEach((row, index) => {
                var _row = new detailRowFile.ExamItemCategoryDetailRowDom.ExamItemCategoryDetailRowDomVm(row);
                _row.Index = index;
                this.RowList.push(_row);
            });
        }

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/MedicalCenter/ExamItemCategory/FctchExamItemCategory", { fids: this.Param1 }, (a) => {
                if (a) {
                    var rowConfigList = [];
                    a.Data.map((data, index) => {
                        var masterData: dataFile.ExamItemCategory.ExamItemCategoryData = data;
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
    export class ExamItemCategoryDetailPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class ExamItemCategoryDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<ExamItemCategoryDetailPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("EXAMITEMCATEGORYDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, ExamItemCategoryDetailPageVm);

}
