import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import updateRowFile = require("./CombinationExamItemUpdateRowDom");
import dataFile = require("./../Data");

export module CombinationExamItemUpdatePage {
    export class CombinationExamItemUpdatePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class CombinationExamItemUpdatePageReact extends basewedPageFile.Web.BaseWebPageReact<CombinationExamItemUpdatePageProps, CombinationExamItemUpdatePageStates, CombinationExamItemUpdatePageAction> implements domCore.IReact {

        public state = new CombinationExamItemUpdatePageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="acs-modals-panel"><h4>{this.props.Vm.Title}</h4>
                <div className="acsModalList">
                    {this.props.Vm.RowList.map((row, i) => {
                        row.Index = i;
                        return row.intoDom();
                    }) }
                </div>
                <div className="acsTextC"><span className="button tiny" onClick={() => { this.fun_submitBtn(); } } >提交</span></div>
            </div>;
        }


        private fun_submitBtn() {
            this.props.Vm.submit();
        }



    }
    export interface ICombinationExamItemUpdatePageConfig {
        RowConfigList: updateRowFile.CombinationExamItemUpdateRowDom.ICombinationExamItemUpdateRowDomConfig[];
    }

    export class CombinationExamItemUpdatePageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = CombinationExamItemUpdatePageReact;
        public RowList: updateRowFile.CombinationExamItemUpdateRowDom.CombinationExamItemUpdateRowDomVm[] = [];


        public constructor(config?: ICombinationExamItemUpdatePageConfig) {
            super();
            this.Title = "编辑体检套餐";
            if (config) {
                this.init(config);
            }

        }

        private init(config: ICombinationExamItemUpdatePageConfig) {
            config.RowConfigList.forEach((row, index) => {
                var _row = new updateRowFile.CombinationExamItemUpdateRowDom.CombinationExamItemUpdateRowDomVm(row);
                _row.Index = index;
                this.RowList.push(_row);

            });
        }

        protected loadPage(callback?: () => any) {

            urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "CombinationExamItemListData.json" }, (a) => {

                if (a)
                {
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

        public submit() {
           
        }

    }
    export class CombinationExamItemUpdatePageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class CombinationExamItemUpdatePageProps extends basewedPageFile.Web.BaseWebPageProps<CombinationExamItemUpdatePageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("CombinationExamItemUPDATEPAGE", basewedPageFile.Web.BaseWebPageVm, CombinationExamItemUpdatePageVm);

}
