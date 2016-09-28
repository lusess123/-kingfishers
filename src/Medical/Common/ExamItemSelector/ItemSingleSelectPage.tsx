import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");
import itemListPage = require("./../../base/examitem/selector/examitemselectorlistpage");
//import itemListPage = require("./../../base/anomaly/list/anomalylistpage");

export module ItemSingleSelectPage {
    export class ItemSingleSelectPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class ItemSingleSelectPageReact extends basewedPageFile.Web.BaseWebPageReact<ItemSingleSelectPageProps, ItemSingleSelectPageStates, ItemSingleSelectPageAction> implements domCore.IReact {

        public state = new ItemSingleSelectPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="YSm-modals">
                <h4 className="YSu-modal-title">选择体检项</h4>
                <div className="YSm-modal-body clearfix">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 YSm-modal-left">
                        {this.props.Vm.ListPageObj.intoDom()}
                    </div>
                </div>
            </div>;
        }


    }
    export interface IReactItemSingleSelectPageVm extends basewedPageFile.Web.BaseWebPageVm {
        ListPageObj: itemListPage.ExamItemSelectorListPage.ExamItemSelectorListPageVm;
       // ListPageObj: itemListPage.AnomalyListPage.AnomalyListPageVm;

    }

    export interface IItemSingleSelectPageConfig {


    }
    export class ItemSingleSelectPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactItemSingleSelectPageVm {
        public ReactType = ItemSingleSelectPageReact;
        public ListPageObj: itemListPage.ExamItemSelectorListPage.ExamItemSelectorListPageVm;
       // public ListPageObj: itemListPage.AnomalyListPage.AnomalyListPageVm;

        public constructor(config?: IItemSingleSelectPageConfig) {
            super();

        }

        private init(config: IItemSingleSelectPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "ExamItemListData.json" }, (a) => {
                var pageConfig: itemListPage.ExamItemSelectorListPage.IExamItemSelectorListPageConfig = { PagerListData: a, IsMultiSelect:false };
                this.ListPageObj = new itemListPage.ExamItemSelectorListPage.ExamItemSelectorListPageVm(pageConfig);
                if (callback) {
                    callback();
                }
            });

            //urlFile.Core.AkPost("/MedicalCenter/Anomaly/SearchAnomalies", {}, (a) => {
            //    var pageConfig: itemListPage.AnomalyListPage.IAnomalyListPageConfig = { PagerListData: a.Data };
            //    this.ListPageObj = new itemListPage.AnomalyListPage.AnomalyListPageVm(pageConfig);
            //    if (callback) {
            //        callback();
            //    }
            //});
        }

    }
    export class ItemSingleSelectPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class ItemSingleSelectPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactItemSingleSelectPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("ItemSingleSelectPAGE", basewedPageFile.Web.BaseWebPageVm, ItemSingleSelectPageVm);

}
