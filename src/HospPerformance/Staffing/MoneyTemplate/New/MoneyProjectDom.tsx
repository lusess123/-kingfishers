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
import NewMoneyProjectPageFile = require("./NewMoneyProjectPage");
import textFile = require("./../../../../02col/01single/Text");
import MoneyProjectRowDom = require("./MoneyProjectRowDom");


export module MoneyProjectDom {
    export class MoneyProjectDomAction extends domCore.DomAction {
    }

    export class MoneyProjectDomReact extends domCore.DomReact<MoneyProjectDomProps, MoneyProjectDomStates, MoneyProjectDomAction> implements domCore.IReact {

        public state = new MoneyProjectDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <p>已选项目：*公式提示：[]中括号里面添加项目名称，例如:[基本工资]+[福利补贴]，[加班工时]*50<a className="btn btn-sm btn-primary pull-right" onClick={() => { { this.NewOpt("new") } } }>添加</a></p>
                {this._initTable() }
                {this.props.Vm.ModalObj.intoDom() }
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
        private inputValue(value: string, fid: string): React.ReactElement<any> {
            var textvalue = value;
            this.props.Vm.ItemValueOrcount.map(s => {
                if (s.FID == fid) {
                    textvalue = s.ValueOrCount;
                }
            })
            if (!this.props.Vm.textVm) {
                var _vm = this.getInputVm(textvalue, "notNull");
                this.props.Vm.textVm = _vm;
                _vm.onChangeHandle((str) => {
                    value = str;
                    this.props.Vm.ItemValueOrcount.map(a => {
                        if (a.FID == fid) {
                            a.ValueOrCount = value;
                        }

                    })
                    return true;
                });
            }
            return this.props.Vm.textVm.intoDom();
        }


        private getInputVm(val: string, legalKind: string, fun?: Function): textFile.ui.TextVm {

            var _bean = new textFile.ui.TextVm();
            _bean.dataValueSet(val);
            _bean.LegalObj.Kind = legalKind;

            return _bean;
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
                {this.props.Vm.ItemValueOrcountList.map(a => {
                    return a.intoDom();
                }) }

            </tbody>;
        };

        //获得输入框的对应的值
        public getInputValues() {
            var _list: SalaryItemValueOrCount[]=[];

            this.props.Vm.ItemValueOrcountList.map(r => {

                _list.unshift(r);
            });
            this.forceUpdate();
            return _list;
        }
        private getThDomVM(w?: number) {
            var _ther = new thFile.Web.ThDomVm();
            if (w) {
                _ther.Width = w;
            }
            return _ther;
        }

        public NewOpt(vals: string) {
            this.props.Vm.openModal();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactMoneyProjectDomVm extends domCore.DomVm {
        ScrollAuto(left: number);
        openModal();
        ModalObj: modalFile.ModalDom.ModalDomVm;
        SalaryItemData: dataFile.Data.ISalaryItem[];
        ItemValueOrcount: dataFile.Data.SalaryItemValueOrCount[];
        textVm: textFile.ui.TextVm;
        textValue: string;
        ItemValueOrcountList: MoneyProjectRowDom.MoneyProjectRowDom.MoneyProjectRowDomVm[];
        //SelectorDom: NewMoneyProjectPageFile.NewMoneyProjectPage.NewMoneyProjectPageVm;
    }

    export interface SalaryItemValueOrCount {
        FID?: string;
        Name?: string;
        Fileds?: string;
        Type?: string;
        Detail?: string;
        ValueOrCount?: string;
    }
    export interface IMoneyProjectDomConfig {
        ItemSelectData: dataFile.Data.IItemSelectData;
        UniId?: string;
        SalaryItemData: dataFile.Data.ISalaryItem[];
        SalaryItemValueOrCount: dataFile.Data.SalaryItemValueOrCount[];
    }

    export class MoneyProjectDomVm extends domCore.DomVm implements IReactMoneyProjectDomVm {
        public ReactType = MoneyProjectDomReact;
        public textVm: textFile.ui.TextVm;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public SalaryItemData: dataFile.Data.ISalaryItem[] = [];
        public ModalObj: modalFile.ModalDom.ModalDomVm;
        public SelectorDom: NewMoneyProjectPageFile.NewMoneyProjectPage.NewMoneyProjectPageVm;
        public SelectedValue: string;
        public ItemValueOrcount: dataFile.Data.SalaryItemValueOrCount[] = [];
        public ItemValueOrcountList: MoneyProjectRowDom.MoneyProjectRowDom.MoneyProjectRowDomVm[] = [];
        public textValue: string;
        public openModal() {
            this.ModalObj.open();
        }

        public constructor(config?: IMoneyProjectDomConfig) {
            super();
            //this.ItemValueOrcount = [{ FID: "", Type: "", ValueOrCount:"" }]
            if (config) {
                this.SalaryItemData = config.SalaryItemData;
                this.UniId = config.UniId;
                if (config.SalaryItemData) {
                    this.SalaryItemData = config.SalaryItemData;
                    var valueList = [];
                    this.SalaryItemData.forEach(a => {
                        valueList.push("'" + a.FID + "'");
                    });
                    this.SelectedValue = valueList.join(",");
                }
                if (config.SalaryItemValueOrCount) {
                    this.ItemValueOrcount = config.SalaryItemValueOrCount;
                } else {
                    this.ItemValueOrcount = this.SalaryItemData;
                }
                

                this.ItemValueOrcount.map(s => {
                    var rowconfig: MoneyProjectRowDom.MoneyProjectRowDom.IMoneyProjectRowDomConfig = { Data: s, Unid: this.UniId }
                    var rowDom = new MoneyProjectRowDom.MoneyProjectRowDom.MoneyProjectRowDomVm(rowconfig);
                    rowDom.IsChange = true;
                    rowDom.IsMulit = true;
                    this.ItemValueOrcountList.push(rowDom);
                })
            }
            this.SelectorDom = new NewMoneyProjectPageFile.NewMoneyProjectPage.NewMoneyProjectPageVm({ ItemSelectData: config ? config.ItemSelectData : {}, UniId: this.UniId, SelectedValue: this.SelectedValue });
            var modal: modalFile.ModalDom.IModalDomConfig = {
                Title: "薪资项目",
                ModalShowingFun: (a, callback) => {
                    a.DomObj = this.SelectorDom;
                    callback();
                },
                ModalCloseFun: (a) => {
                    a.DomObj = null;

                }
            };
            this.ModalObj = new modalFile.ModalDom.ModalDomVm(modal);
            this.listenAppEvent("SalaryTemplateItemSelectorSave", this.UniId, () => {
                var selectedValue = this.SelectorDom.ColVmObjList["MoneyProject"].dataValueGet();
                this.ModalObj.close();
                urlFile.Core.AkPost("/HospPerformance/HumanResource/SalaryItemModel", { fids: selectedValue }, (data) => {
                    var _data = data.Data;
                    if (_data) {
                        var sss = this.ItemValueOrcount;
                        this.ItemValueOrcountList = this.ItemValueOrcountList.filter(row => {
                            return false;
                        })
                        this.ItemValueOrcount = this.ItemValueOrcount.filter(row => {
                            return false;
                        })
                        this.SalaryItemData = _data;
                        this.SalaryItemData.map(i => {
                            var count: dataFile.Data.SalaryItemValueOrCount = { FID: i.FID, Fileds: i.Fileds, Detail: i.Detail, Name: i.Name, Type: i.Type, ValueOrCount: "" }
                            sss.map(n => {
                                if (n.FID == i.FID) {
                                    count.ValueOrCount = n.ValueOrCount;
                                }
                            })
                            this.ItemValueOrcount.push(count);
                        })                        
                        this.ItemValueOrcount.map(s => {
                            var rowconfig: MoneyProjectRowDom.MoneyProjectRowDom.IMoneyProjectRowDomConfig = { Data: s, Unid: this.UniId }
                            var rowDom = new MoneyProjectRowDom.MoneyProjectRowDom.MoneyProjectRowDomVm(rowconfig);
                            rowDom.IsChange = true;
                            rowDom.IsMulit = true;
                            this.ItemValueOrcountList.push(rowDom);
                        })
                        if (_data.length > 0)
                            this.emitAppEvent("ItemListToMoneySetting", this.UniId, _data);
                        this.forceUpdate("");
                    }
                });
            });
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