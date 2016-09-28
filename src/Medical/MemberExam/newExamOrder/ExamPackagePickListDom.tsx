﻿import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import PickListBaseDomFile = require("./../../../05tool/Picker/PickListBaseDom");
import selectorFile = require("./ExamPackageSelectorDom");


export module ExamPackagePickListDom {
    export class ExamPackagePickListDomAction extends domCore.DomAction {
    }

    export class ExamPackagePickListDomReact extends domCore.DomReact<ExamPackagePickListDomProps, ExamPackagePickListDomStates, ExamPackagePickListDomAction> implements domCore.IReact {

        public state = new ExamPackagePickListDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>{this._tDom(this.props.Vm.ItemSelectorDomObj) }</div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactExamPackagePickListDomVm extends PickListBaseDomFile.PickListBaseDom.IReactPickListBaseDomVm {
        //ItemMultiSelectPageObj: ItemMultiSelectPageFile.ItemMultiSelectPage.ItemMultiSelectPageVm;
        ItemSelectorDomObj: selectorFile.ExamPackageSelectorDomDom.ExamPackageSelectorDomVm;
    }

    export interface IExamPackagePickListDomConfig extends PickListBaseDomFile.PickListBaseDom.IPickListBaseDomConfig {


    }

    export interface IPickItem {
        Text: string;
        Key: string;
        IsSelect?: boolean;

    }

    export class ExamPackagePickListDomVm extends PickListBaseDomFile.PickListBaseDom.PickListBaseDomVm implements IReactExamPackagePickListDomVm {

        public ReactType: any = ExamPackagePickListDomReact;
        // public ItemMultiSelectPageObj: ItemMultiSelectPageFile.ItemMultiSelectPage.ItemMultiSelectPageVm;
        public ItemSelectorDomObj: selectorFile.ExamPackageSelectorDomDom.ExamPackageSelectorDomVm;
        public IsPackageChecked: boolean = true;

        public constructor(config?: IExamPackagePickListDomConfig) {
            super();
            if (config.UniId) {
                this.UniId = config.UniId;
            }
            //this.ItemMultiSelectPageObj =
            //    new ItemMultiSelectPageFile.ItemMultiSelectPage.ItemMultiSelectPageVm({ UniId: this.UniId });
            //   var pager={
            //     TableName:"", 
            //     PageNo: 0,
            //     PageSize: 15,
            //     TotalCount: 0};
            //var itemPagerListData={Pager:pager,ListData:[]};
            //var packagePagerListData={Pager:pager,ListData:[]};
            this.ItemSelectorDomObj = new selectorFile.ExamPackageSelectorDomDom.ExamPackageSelectorDomVm({ UniId: this.UniId });
        }

        public getObjByItems(items: IPickItem[]):any {
            return {};
        }

        protected pRegAppEvent() {
            //super.pRegAppEvent();
            this.listenAppEvent("PackageorItemChecked", this.UniId, (isPackageChecked: boolean) => {
                this.ItemSelectorDomObj.isRadioSel = isPackageChecked;
                this.ItemSelectorDomObj.forceUpdate("");
            });
        }


        protected loadDom(items: IPickItem[], callback: Function) {
            urlFile.Core.AkPost("/MedicalCenter/PackageSelector/FetchPackageSelectorData", {}, (a) => {
                if (a && a.Data) {
                    var pageConfig: selectorFile.ExamPackageSelectorDomDom.IExamPackageSelectorDomConfig =
                        {
                            PackagePagerListData: a.Data.PackagePagerListData,
                            ItemPagerListData: a.Data.ItemPagerListData
                            //UniId: this.UniId,
                        };
                    this.ItemSelectorDomObj.init(pageConfig);
                    this.ItemSelectorDomObj.ItemFormVm.RowList.forEach((r) => {
                      var _selItems = items.filter((item) => { return item.Key == r.RowData.ItemId });
                        if (_selItems.length > 0) {
                            r.RowData.IsSelect = true;
                            r.SingleCheckboxVm.dataValueSet("true");
                        }
                    });

                    this.ItemSelectorDomObj.forceUpdate("");
                    callback();
                }

            });
        }

    }
    export class ExamPackagePickListDomStates extends domCore.DomStates {
    }


    export class ExamPackagePickListDomProps extends domCore.DomProps<IReactExamPackagePickListDomVm>{
    }



}




