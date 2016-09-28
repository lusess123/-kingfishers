import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import PickListBaseDomFile = require("./../../../../05tool/Picker/PickListBaseDom");
import selectorFile = require("./AppraisalItemSelectorListPage");


export module AppraisalItemPickListDom {
    export class AppraisalItemPickListDomAction extends domCore.DomAction {
    }

    export class AppraisalItemPickListDomReact extends domCore.DomReact<AppraisalItemPickListDomProps, AppraisalItemPickListDomStates, AppraisalItemPickListDomAction> implements domCore.IReact {

        public state = new AppraisalItemPickListDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>{this._tDom(this.props.Vm.ItemSelectorPageObj) }</div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactAppraisalItemPickListDomVm extends PickListBaseDomFile.PickListBaseDom.IReactPickListBaseDomVm {
        ItemSelectorPageObj: selectorFile.AppraisalItemSelectorListPage.AppraisalItemSelectorListPageVm;
    }

    export interface IAppraisalItemPickListDomConfig extends PickListBaseDomFile.PickListBaseDom.IPickListBaseDomConfig {


    }

    export interface IPickItem {
        Text: string;
        Key: string;
        IsSelect?: boolean;

    }

    export class AppraisalItemPickListDomVm extends PickListBaseDomFile.PickListBaseDom.PickListBaseDomVm implements IReactAppraisalItemPickListDomVm {

        public ReactType: any = AppraisalItemPickListDomReact;
        public ItemSelectorPageObj: selectorFile.AppraisalItemSelectorListPage.AppraisalItemSelectorListPageVm;
        public ResultType: string;

        public constructor(config?: IAppraisalItemPickListDomConfig) {
            super();
            if (config.UniId) {
                this.UniId = config.UniId;
            }
            this.ItemSelectorPageObj = new selectorFile.AppraisalItemSelectorListPage.AppraisalItemSelectorListPageVm({ UniId: this.UniId });

            
        }

        public getObjByItems(items: IPickItem[]):any {
            return {};
        }
     
        //protected pRegAppEvent() {
        //    this.listenAppEvent("AppraisalItemSelector/loadpagedata", this.UniId, (pageIndex: number) => {
        //        this.ItemSelectorPageObj.loadPageData(pageIndex);
        //    });
        //}

        protected loadDom(items: IPickItem[], callback: Function) {
            this.ResultType = window["ResultType" + this.UniId];
            urlFile.Core.AkPost("/HospPerformance/AppraisalItem/SearchAppraisalItems", { resultType: this.ResultType }, (a) => {
                if (a && a.Data) {
                    var pageConfig: selectorFile.AppraisalItemSelectorListPage.IAppraisalItemSelectorListPageConfig =
                        {
                            PagerListData: a.Data,
                            ResultType: this.ResultType,
                            IsSearch: false
                        };
                    this.ItemSelectorPageObj.init(pageConfig);
                    this.ItemSelectorPageObj.GridFormVm.RowList.forEach((r) => {
                      var _selItems = items.filter((item) => { return item.Key == r.RowData.FID });
                        if (_selItems.length > 0) {
                            r.RowData.IsSelect = true;
                            r.SingleCheckVm.dataValueSet("true");
                        }
                    });

                    this.ItemSelectorPageObj.forceUpdate("");
                    
                    callback();
                }

            });
        }

    }
    export class AppraisalItemPickListDomStates extends domCore.DomStates {
    }


    export class AppraisalItemPickListDomProps extends domCore.DomProps<IReactAppraisalItemPickListDomVm>{
    }



}




