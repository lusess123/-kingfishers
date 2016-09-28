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

export module ItemMultiSelectPage {
    export class ItemMultiSelectPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class ItemMultiSelectPageReact extends basewedPageFile.Web.BaseWebPageReact<ItemMultiSelectPageProps, ItemMultiSelectPageStates, ItemMultiSelectPageAction> implements domCore.IReact {

        public state = new ItemMultiSelectPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="YSm-modals">
                <h4 className="YSu-modal-title">选择体检项</h4>
                <div className="YSm-modal-body clearfix">
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 YSm-modal-left">
                        {this.props.Vm.ListPageObj.intoDom()}
                    </div>
                </div>
                <div className="YSm-modal-footer text-center">
                    <a className="btn btn-sm btn-secondary">取消</a>
                    <a className="btn btn-sm btn-primary">保存</a>
                </div>
            </div>;
        }


    }
    export interface IReactItemMultiSelectPageVm extends basewedPageFile.Web.BaseWebPageVm {
        ListPageObj: itemListPage.ExamItemSelectorListPage.ExamItemSelectorListPageVm;
       // ListPageObj: itemListPage.AnomalyListPage.AnomalyListPageVm;

    }

    export interface IItemMultiSelectPageConfig {
        UniId?: string;

    }
    export class ItemMultiSelectPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactItemMultiSelectPageVm {
        public ReactType = ItemMultiSelectPageReact;
        public ListPageObj: itemListPage.ExamItemSelectorListPage.ExamItemSelectorListPageVm;
       // public ListPageObj: itemListPage.AnomalyListPage.AnomalyListPageVm;

        public constructor(config?: IItemMultiSelectPageConfig) {
            super();
            if (config && config.UniId) {
                this.UniId = config.UniId;
            }
        }

        private init(config: IItemMultiSelectPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            //urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "ExamItemListData.json" }, (a) => {
            //    var pageConfig: itemListPage.ExamItemSelectorListPage.IExamItemSelectorListPageConfig =
            //        {
            //            PagerListData: a,
            //            UniId: this.UniId 
            //        };
            //    this.ListPageObj = new itemListPage.ExamItemSelectorListPage.ExamItemSelectorListPageVm(pageConfig);
            //    if (callback) {
            //        callback();
            //    }
            //});
            urlFile.Core.AkPost("/MedicalCenter/ExamItem/SearchExamItem", {}, (a) => {
                var pageConfig: itemListPage.ExamItemSelectorListPage.IExamItemSelectorListPageConfig = { PagerListData: a.Data };
                this.init(pageConfig);
                if (callback) {
                    callback();
                }
            });
         
        }

    }
    export class ItemMultiSelectPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class ItemMultiSelectPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactItemMultiSelectPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("ItemMultiSelectPAGE", basewedPageFile.Web.BaseWebPageVm, ItemMultiSelectPageVm);

}
