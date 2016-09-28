import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import PickListBaseDomFile = require("./../../../../05tool/Picker/PickListBaseDom");
//import ItemMultiSelectPageFile = require("./../ItemMultiSelectPage");
import ItemSelectorPageFile = require("./../../../base/ExamItem/Selector/ExamItemSelectorListPage");


export module ExamPickListDom {
    export class ExamPickListDomAction extends domCore.DomAction {
    }

    export class ExamPickListDomReact extends domCore.DomReact<ExamPickListDomProps, ExamPickListDomStates, ExamPickListDomAction> implements domCore.IReact {

        public state = new ExamPickListDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>{this._tDom(this.props.Vm.ItemSelectorPageObj) }</div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactExamPickListDomVm extends PickListBaseDomFile.PickListBaseDom.IReactPickListBaseDomVm {
        //ItemMultiSelectPageObj: ItemMultiSelectPageFile.ItemMultiSelectPage.ItemMultiSelectPageVm;
        ItemSelectorPageObj: ItemSelectorPageFile.ExamItemSelectorListPage.ExamItemSelectorListPageVm;
    }

    export interface IExamPickListDomConfig extends PickListBaseDomFile.PickListBaseDom.IPickListBaseDomConfig {


    }
    export interface IPickItem {
        Text: string;
        Key: string;
        IsSelect?: boolean;

    }
    export class ExamPickListDomVm extends PickListBaseDomFile.PickListBaseDom.PickListBaseDomVm implements IReactExamPickListDomVm {

        public ReactType: any = ExamPickListDomReact;
        // public ItemMultiSelectPageObj: ItemMultiSelectPageFile.ItemMultiSelectPage.ItemMultiSelectPageVm;
        public ItemSelectorPageObj: ItemSelectorPageFile.ExamItemSelectorListPage.ExamItemSelectorListPageVm;

        public constructor(config?: IExamPickListDomConfig) {
            super();
            if (config.UniId) {
                this.UniId = config.UniId;
            }
            //this.ItemMultiSelectPageObj =
            //    new ItemMultiSelectPageFile.ItemMultiSelectPage.ItemMultiSelectPageVm({ UniId: this.UniId });
            this.ItemSelectorPageObj = new ItemSelectorPageFile.ExamItemSelectorListPage.ExamItemSelectorListPageVm();
        }

        public loadDom(items: IPickItem[]) {
            urlFile.Core.AkPost("/MedicalCenter/ExamItem/SearchExamItem", {}, (a) => {
                var pageConfig: ItemSelectorPageFile.ExamItemSelectorListPage.IExamItemSelectorListPageConfig =
                    {
                        PagerListData: a.Data,
                        UniId: this.UniId
                    };
                this.ItemSelectorPageObj.init(pageConfig);

                this.ItemSelectorPageObj.GridFormVm.RowList.forEach((r) => {
                    var _len = items.filter((item) => { return item.Key == r.RowData.FID });
                    if (_len.length > 0) {
                        r.RowData.IsSelect = true;
                    }
                });
                this.ItemSelectorPageObj.forceUpdate("");
             
            });
        }

    }
    export class ExamPickListDomStates extends domCore.DomStates {
    }


    export class ExamPickListDomProps extends domCore.DomProps<IReactExamPickListDomVm>{
    }



}



