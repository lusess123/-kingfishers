import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import baseColFile = require("./../../../../02col/00core/BaseCol");
import dataFile = require("./../data");
import ListBoxFile = require("./../../../../02col/02Mulite/Listbox");
import PickDomFile = require("./../../../../05tool/Picker/PickDom");
import PickDom = PickDomFile.PickDom.PickDomReact;
import PickDomVm = PickDomFile.PickDom.PickDomVm;
import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import modalFile = require("./../../../../05tool/Modal/ModalDom");
import DetaiMoneyProjectPageFile = require("./DetailMoneyTemplatePage");


export module MoneyProjectDom {
    export class MoneyProjectDomAction extends domCore.DomAction {
    }

    export class MoneyProjectDomReact extends domCore.DomReact<MoneyProjectDomProps, MoneyProjectDomStates, MoneyProjectDomAction> implements domCore.IReact {

        public state = new MoneyProjectDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <p>已选项目：</p>
                {this._initTable() }
         
            </div>;
        }

        public _initTable(): React.ReactElement<any> {
            var theader = <thead className="thead-default">
                {this.initHeader() }
            </thead>
            var tbody = this.initBody();

            var table = <table className="table table-striped table-bordered table-hover">{theader}{tbody}</table>;
            return <div className="table-responsive"  onScroll={(e) => { this.fun_Scroll(e); } }>{table}</div>;


        }
        private fun_Scroll(e: React.UIEvent) {
            var _$obj = $(e.target);
            this.props.Vm.ScrollAuto(_$obj.scrollLeft());
        }
        public initHeader(): React.ReactElement<any> {
            return <tr>                
                <th>项目名称</th>
                <th>类型</th>
                <th>值或计算公式</th>
                <th>项目说明</th>
            </tr>
        };
        public initBody(): React.ReactElement<any> {
            return <tbody>
                {this.props.Vm.SalaryItemValueOrCount.map(a => {
                    return <tr>                        
                        <td>{a.Name}</td>
                        <td>{a.Type}</td>
                        <td>{a.ValueOrCount}</td>
                        <td>{a.Detail}</td>
                    </tr>          
                })}
                     
            </tbody>;
        };

        private getThDomVM(w?: number) {
            var _ther = new thFile.Web.ThDomVm();
            if (w) {
                _ther.Width = w;
            }
            return _ther;
        }

        //public NewOpt(vals: string) {
        //    this.props.Vm.openModal();
        //}

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactMoneyProjectDomVm extends domCore.DomVm {
        ScrollAuto(left: number);
        //openModal();
       // ModalObj: modalFile.ModalDom.ModalDomVm;
        SalaryItemData: dataFile.Data.ISalaryItem[];
        SalaryItemValueOrCount: dataFile.Data.SalaryItemValueOrCount[]
        //SelectorDom: NewMoneyProjectPageFile.NewMoneyProjectPage.NewMoneyProjectPageVm;
    }


    export interface IMoneyProjectDomConfig {
        ItemSelectData: dataFile.Data.IItemSelectData;
        UniId?: string;
        SalaryItemData: dataFile.Data.ISalaryItem[];
        SalaryItemValueOrCount: dataFile.Data.SalaryItemValueOrCount[];
    }

    export class MoneyProjectDomVm extends domCore.DomVm implements IReactMoneyProjectDomVm {
        public ReactType = MoneyProjectDomReact;

        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public SalaryItemData: dataFile.Data.ISalaryItem[]=[];
        //public ModalObj: modalFile.ModalDom.ModalDomVm;
        public SelectorDom: DetaiMoneyProjectPageFile.DetailMoneyTemplatePage.DetailMoneyTemplatePageVm;
        public SelectedValue: string;
        public SalaryItemValueOrCount: dataFile.Data.SalaryItemValueOrCount[];
        //public openModal() {
        //    this.ModalObj.open();
        //}
       
        public constructor(config?: IMoneyProjectDomConfig) {
            super();
            if (config) {
                //this.SalaryItemData = config.SalaryItemData;
                this.UniId = config.UniId;
                if (config.SalaryItemData) {
                    this.SalaryItemData = config.SalaryItemData;
                }
                if (config.SalaryItemValueOrCount) {
                    this.SalaryItemValueOrCount = config.SalaryItemValueOrCount;
                }
            }
            //this.SelectorDom = new DetaiMoneyProjectPageFile.DetailMoneyTemplatePage.DetailMoneyTemplatePageVm({ ItemSelectData: config ? config.ItemSelectData : {}, UniId: this.UniId, SelectedValue: this.SelectedValue });
            //var modal: modalFile.ModalDom.IModalDomConfig = {
            //    Title: "薪资项目",
            //    ModalShowingFun: (a, callback) => {
            //        a.DomObj = this.SelectorDom;
            //        callback();
            //    },
            //    ModalCloseFun: (a) => {
            //        a.DomObj = null;

            //    }
            //};
            //this.ModalObj = new  modalFile.ModalDom.ModalDomVm(modal);
            //this.listenAppEvent("SalaryTemplateItemSelectorSave", this.UniId, () => {
            //    var selectedValue = this.SelectorDom.ColVmObjList["MoneyProject"].dataValueGet();
            //    this.ModalObj.close();
            //    urlFile.Core.AkPost("/HospPerformance/HumanResource/SalaryItemModel", { fids: selectedValue }, (data) => {
            //        var _data = data.Data;
            //        if (_data) {
            //            this.SalaryItemData = _data;
            //            if (_data.length>0)
            //            this.emitAppEvent("ItemListToMoneySetting", this.UniId, _data);
            //            this.forceUpdate("");
            //        }
            //    });
            //});
        }

        
        public ScrollAuto(left: number) {
            this.IsAcsRelative = left > 0;
            this.LeftNum = left;
            this.forceUpdate("");
        }
        public getData() {
            var idList = [];
            this.SalaryItemData.forEach(a => {
                idList.push(a.FID)
            });
            return idList;
        }
       
 
      

    }
    export class MoneyProjectDomStates extends domCore.DomStates {
    }


    export class MoneyProjectDomProps extends domCore.DomProps<IReactMoneyProjectDomVm>{
    }



}


