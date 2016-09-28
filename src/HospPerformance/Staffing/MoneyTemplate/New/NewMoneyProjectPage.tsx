import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");

import baseColFile = require("./../../../../02col/00core/BaseCol");
import dataFile = require("./../data");
import PickDomFile = require("./../../../../05tool/Picker/PickDom");
import ListBoxFile = require("./../../../../02col/02Mulite/Listbox");
import ListBoxVm = ListBoxFile.ui.ListboxVm;


export module NewMoneyProjectPage {

    export class NewMoneyProjectPageAction extends domCore.DomAction {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class NewMoneyProjectPageReact extends domCore.DomReact<NewMoneyProjectPageProps, NewMoneyProjectPageStates, NewMoneyProjectPageAction> implements domCore.IReact {
        public state = new NewMoneyProjectPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                {this.props.Vm.ColVmObjList["MoneyProject"].intoDom() }

                <div className="text-center">
                    <a className="btn btn-sm btn-primary" onClick={() => { this.Submit() } }>保存</a>
                </div>
            </div>;
        }
        //public _initSelect(): React.ReactElement<any> {
        //    return <div> {this.props.Vm.ItemListboxObj.intoDom() } </div>;
        //}
        public Submit() {
            this.props.Vm.Submit();
        }
    }

    export interface IReactNewMoneyProjectPageVm extends domCore.DomVm {
        ColVmObjList: IColVmDic;
        Submit(): void;
        SalaryItemData: dataFile.Data.ISalaryItem[];
        //ItemListboxObj: ListBoxFile.ui.ListboxVm;
        SelectedValue?: string;
    }

    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }

    export interface INewMoneyProjectPageConfig {
        ItemSelectData?: dataFile.Data.IItemSelectData;
        UniId?: string;
        SelectedValue?: string;
    }

    export class NewMoneyProjectPageVm extends domCore.DomVm implements IReactNewMoneyProjectPageVm {
        public ReactType = NewMoneyProjectPageReact;
        public ColVmObjList: IColVmDic = {};
        public RowData: any = {};
        public SalaryItemData: dataFile.Data.ISalaryItem[];
        public ItemListboxObj: ListBoxVm = new ListBoxFile.ui.ListboxVm;
        public SelectedValue: string;
        //public ItemSelectData: dataFile.Data.IItemSelectData;

        public constructor(config?: INewMoneyProjectPageConfig) {
            super();
            //this.ItemSelectData = [{ Select: false, Text: "", Value: "" }];
            if (config) {
                //this.ItemSelectData = config.ItemData;
                //this.ItemSelectData = config.ItemSelectData;
                this.UniId = config.UniId;
                if (config.SelectedValue) {
                    this.SelectedValue = config.SelectedValue;
                }
                if (config.ItemSelectData) {
                    this.SalaryItemData = config.ItemSelectData.SalaryItem;

                    //this.ItemListboxObj.ItemList = this.setUserItemList(config.ItemSelectData.SalaryItem);
                }
                //this.initListBox(config);           

            }
            this.initColVm("MoneyProject", "ListBoxVm", "notNull");
        }
        private setUserItemList(sourceList: dataFile.Data.ISalaryItem[]) {
            var userItemList = [];
            if (sourceList) {
                sourceList.forEach(a => {
                    userItemList.push({ Value: a.FID, Text: a.Name });
                });
            }
            return userItemList;
        }
        //public initListBox(config?: INewMoneyProjectPageConfig) {
        //    if (config.SelectedValue) {
        //        this.ItemListboxObj.dataValueSet(config.SelectedValue);
        //    }
        //}

        public Submit() {
            this.emitAppEvent("SalaryTemplateItemSelectorSave", this.UniId);
            //var selectData = this.ColVmObjList["MoneyProject"].dataValueGet();
            //this.emitAppEvent("TemplateItemToMoneySetting", this.UniId, selectData);

        }

        private initColVm(colName: string, colType: string, legal?: string) {

            var _name = colName.toString()
            var isexcite = false;

            for (var vn in this.ColVmObjList) {
                var _obj = this.ColVmObjList[_name];
                if (_obj) {
                    isexcite = true;
                    _exciteBean = _obj;
                }
            }
            if (!isexcite) {
                var _exciteBean = iocFile.Core.Ioc.Current().FetchInstance<baseColFile.Core.BaseColVm>(colType, baseColFile.Core.BaseColVm);
                _exciteBean.Tag = colName;
                _exciteBean.LegalObj.Kind = legal ? legal : "";
                _exciteBean.IsMulit = true;
                _exciteBean.onChangeHandle((val) => {
                    this.RowData[colName] = val;
                    return true;
                });
            }
            if (colName == "MoneyProject") {
                var typeListBoxVm = utilFile.Core.Util.Cast<ListBoxFile.ui.ListboxVm>(_exciteBean);
                urlFile.Core.AkPost("/HospPerformance/HumanResource/SalaryItemSelect", {}, (a) => {
                    
                    typeListBoxVm.ItemList = this.setUserItemList(a.Data);
                    if (this.SelectedValue) {
                        typeListBoxVm.dataValueSet(this.SelectedValue);
                    }


                })


            }
            this.ColVmObjList[_name] = _exciteBean;

        }



    }

    export class NewMoneyProjectPageStates extends domCore.DomStates {

    }

    export class NewMoneyProjectPageProps extends domCore.DomProps<IReactNewMoneyProjectPageVm>{

    }


    //iocFile.Core.Ioc.Current().RegisterType("NewMoneyProjectPage", basewedPageFile.Web.BaseWebPageVm, NewMoneyProjectPageVm);
}

