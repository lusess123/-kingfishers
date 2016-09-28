import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import detailRowFile = require("./UnitDetailRowDom");
import dataFile = require("./../Data");

export module UnitDetailPage {
    export class UnitDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class UnitDetailPageReact extends basewedPageFile.Web.BaseWebPageReact<UnitDetailPageProps, UnitDetailPageStates, UnitDetailPageAction> implements domCore.IReact {

        public state = new UnitDetailPageStates();
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

    export interface IUnitDetailPageConfig {

        RowConfigList: detailRowFile.UnitDetailRowDom.IUnitDetailRowDomConfig[];
    }

    export class UnitDetailPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = UnitDetailPageReact;
        public RowList: detailRowFile.UnitDetailRowDom.UnitDetailRowDomVm[] = [];

        public constructor(config?: IUnitDetailPageConfig) {
            super();
            this.Title = "单位详细信息";
            if (config) {
                this.init(config);
            }

        }

        private init(config: IUnitDetailPageConfig) {
            config.RowConfigList.forEach((row, index) => {
                var _row = new detailRowFile.UnitDetailRowDom.UnitDetailRowDomVm(row);
                _row.Index = index;
                this.RowList.push(_row);
            });
        }

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/MedicalCenter/Unit/FetchUnitsList", { fids: this.Param1 }, (a) => {
                if (a) {
                    var rowConfigList = [];
                    a.Data.map((data, index) => {
                        var masterData: dataFile.Unit.IUnitData = data;
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
    export class UnitDetailPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class UnitDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<UnitDetailPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("UnitDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, UnitDetailPageVm);

}
