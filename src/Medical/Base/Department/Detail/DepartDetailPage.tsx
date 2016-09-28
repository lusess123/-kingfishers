import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");

import detailRowFile = require("./DepartDetailRowDom");
import dataFile = require("./../Data");

export module DepartDetailPage {
    export class DepartDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class DepartDetailPageReact extends basewedPageFile.Web.BaseWebPageReact<DepartDetailPageProps, DepartDetailPageStates,DepartDetailPageAction> implements domCore.IReact {

        public state = new DepartDetailPageStates();
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
    export interface DepartDetailPageConfig {
        RowConfigList: detailRowFile.DepartDetailRowDom.DepartDetailRowDomConfig[];

    }
    export class DepartDetailPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = DepartDetailPageReact;

        public RowList: detailRowFile.DepartDetailRowDom.DepartDetailRowDomVm[] = [];

        public constructor(config?: DepartDetailPageConfig) {
            super();
            this.Title = "科室详细信息";
            if (config) {
                this.init(config);
            }
        }

        private init(config: DepartDetailPageConfig) {
            config.RowConfigList.forEach((row, index) => {
                var _row = new detailRowFile.DepartDetailRowDom.DepartDetailRowDomVm(row);
                _row.Index = index;
                this.RowList.push(_row);
            });
        }

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/MedicalCenter/Department/FetchDepartmentList", { fids: this.Param1 }, (a) => {
                if (a) {
                    var rowConfigList = [];
                    a.Data.map((data, index) => {
                        var masterData: dataFile.MRP_Departments.Department = data;
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
    export class DepartDetailPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class DepartDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<DepartDetailPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("DEPARTDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, DepartDetailPageVm);

}
