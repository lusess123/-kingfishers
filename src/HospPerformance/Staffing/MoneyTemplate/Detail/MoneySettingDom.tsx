import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import modalFile = require("./../../../../05tool/Modal/ModalDom");
import EditMoneySettingPageFile = require("./EditMoneySettingPage");
import dataFile = require("./../data");
import MoneyTemplateDom = require("./MoneyTemplateDom");
import MoneySettingRow = require("./MoneySettingRow");

export module MoneySettingDom {
    export class MoneySettingDomAction extends domCore.DomAction {
    }

    export class MoneySettingDomReact extends domCore.DomReact<MoneySettingDomProps, MoneySettingDomStates, MoneySettingDomAction> implements domCore.IReact {

        public state = new MoneySettingDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                
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
        //public NewOpt(val: string) {
        //    this.props.Vm.openModal(val);
        //}
        private fun_Scroll(e: React.UIEvent) {
            var _$obj = $(e.target);
            this.props.Vm.ScrollAuto(_$obj.scrollLeft());
        }
        public initHeader(): React.ReactElement<any> {
            return <tr>
                <th>员工</th>
                <th>员工编号</th>
                <th>职位</th>
                <th>操作</th>
            </tr>
        };
        public initBody(): React.ReactElement<any> {
            return <tbody>
                {
                    this.props.Vm.UserRowList.map((r) => {
                        return r.intoDom();
                    })
                }
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

    export interface IReactMoneySettingDomVm extends domCore.DomVm {
        ScrollAuto(left: number);
        //openModal();
        //ModalObj: modalFile.ModalDom.ModalDomVm;
        UserList: dataFile.Data.IUsersData[];
        //SalaryItemData: dataFile.Data.ISalaryItem[];
        UserRowList: MoneySettingRow.MoneySettingRow.MoneySettingRowVm[];
        //openModal(val: string): void;
        SalaryItemValue: dataFile.Data.ISalaryItemValue;
        SalaryItemSetDataList: dataFile.Data.ISalaryItemSet[];
    }

    export interface IMoneySettingDomConfig {
        UserList: dataFile.Data.IUsersData[];
        SalaryItemSet: dataFile.Data.ISalaryItemSet[];
        UniId?: string;

    }

    export class MoneySettingDomVm extends domCore.DomVm implements IReactMoneySettingDomVm {
        public ReactType = MoneySettingDomReact;
        //public ModalObj: modalFile.ModalDom.ModalDomVm;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public UserList: dataFile.Data.IUsersData[] = [];
        //public SalaryItemData: dataFile.Data.ISalaryItem[] = [];
        public SalaryItemValue: dataFile.Data.ISalaryItemSet;
        public SalaryItemSetDataList: dataFile.Data.ISalaryItemSet[] = [];
        public UserRowList: MoneySettingRow.MoneySettingRow.MoneySettingRowVm[] = [];
        //public openModal(val: string) {
        //    this.ModalObj.UniId = val;
        //    this.ModalObj.open();
        //}

        public constructor(config?: IMoneySettingDomConfig) {
            super();
            if (config) {
                this.UniId = config.UniId;
                if (config.UserList)
                    this.UserList = config.UserList;
                if (config.SalaryItemSet)
                    this.SalaryItemSetDataList = config.SalaryItemSet;
                this.UserList.map(a => {
                    this.SalaryItemSetDataList.map(b => {
                        if (a.UserId == b.UserID) {
                            this.SalaryItemValue = b;
                            var rowconfig: MoneySettingRow.MoneySettingRow.IMoneySettingRowConfig = {
                                Data: a,
                                Unid: this.UniId,
                                SalaryItemValue: this.SalaryItemValue
                            }
                            var rowDom = new MoneySettingRow.MoneySettingRow.MoneySettingRowVm(rowconfig);
                            rowDom.IsChange = true;
                            rowDom.IsMulit = true;

                            this.UserRowList.push(rowDom);
                        }
                    })
                   
                })
            }
            //this.listenAppEvent("ItemListToMoneySetting", this.UniId, (item: dataFile.Data.ISalaryItem[]) => {
            //    //var selectedValue = this.SelectorDom.UserListboxObj.dataValueGet();
            //    this.SalaryItemData = item;
            //    this.IsMulit = true;
            //    this.IsChange = true;
            //    this.forceUpdate("");
            //});
            //var modal: modalFile.ModalDom.IModalDomConfig = {
            //    Title: "薪资设定",
            //    ModalShowingFun: (a, callback) => {
            //        var _config: EditMoneySettingPageFile.EditMoneySettingPage.IEditMoneySettingPageConfig = { DataValue: this.SalaryItemValue, Unid: this.UniId, UserId: a.UniId }
            //        this.SalaryItemSetDataList.map(s => {
            //            if (a.UniId == s.UserID) {

            //                _config.DataValue = s.SalaryItemValue;
            //            }

            //        })

            //        _config.Data = this.SalaryItemValue;

            //        a.DomObj = new EditMoneySettingPageFile.EditMoneySettingPage.EditMoneySettingPageVm(_config);
            //        callback();
            //    },
            //    ModalCloseFun: (a) => {
            //        a.DomObj = null;
            //    }
            //};
            //this.MoneyTemplateDom = new MoneyTemplateDom.MoneyTemplateDom.MoneyTemplateDomVm();
            //this.ModalObj = new modalFile.ModalDom.ModalDomVm(modal);

            //this.listenAppEvent("UsersListToMoneySetting", this.UniId, (item: dataFile.Data.IUsersData[]) => {

            //    this.UserList = item;
            //    this.UserRowList = this.UserRowList.filter(row => {
            //        return false;
            //    })
            //    item.forEach(a => {
            //        var rowconfig: MoneySettingRow.MoneySettingRow.IMoneySettingRowConfig = {
            //            Data: a,
            //            Unid: this.UniId,
            //            SalaryItemData: this.SalaryItemData
            //        }
            //        var rowDom = new MoneySettingRow.MoneySettingRow.MoneySettingRowVm(rowconfig);
            //        rowDom.IsChange = true;
            //        rowDom.IsMulit = true;

            //        this.UserRowList.push(rowDom);
            //    })
            //    this.IsMulit = true;
            //    this.IsChange = true;
            //    this.forceUpdate("");
            //});

            //this.listenAppEvent("EditMoneyValues", this.UniId, (item: dataFile.Data.ISalaryItemSet) => {
            //    //var selectedValue = this.SelectorDom.UserListboxObj.dataValueGet();
            //    this.ModalObj.close();

            //    this.SalaryItemSetDataList.push(item);
            //    //this.SalaryItemData=item;
            //    this.IsMulit = true;
            //    this.IsChange = true;
            //    this.forceUpdate("");
            //});
        }

        public ScrollAuto(left: number) {
            this.IsAcsRelative = left > 0;
            this.LeftNum = left;
            this.forceUpdate("");
        }


    }
    export class MoneySettingDomStates extends domCore.DomStates {
    }


    export class MoneySettingDomProps extends domCore.DomProps<IReactMoneySettingDomVm>{
    }



}


