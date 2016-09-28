import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import dataFile = require("./../data");
import modalFile = require("./../../../../05tool/Modal/ModalDom");
import EditMoneySettingPageFile = require("./EditMoneySettingPage");
import MoneySettingDom = require("./MoneySettingDom");


export module MoneySettingRow {
    export class MoneySettingRowAction extends domCore.DomAction { }


    export class MoneySettingRowReact extends domCore.DomReact<MoneySettingRowProps, MoneySettingRowStates, MoneySettingRowAction> implements domCore.IReact {
        public state = new MoneySettingRowStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td>{this.props.Vm.UserData.TrueName}</td>
                <td>{this.props.Vm.Fnumber}</td>
                <td>{this.props.Vm.UserData.PositionName}</td>
                <td><a className="text-primary" onClick={() => { this.NewOpt(this.props.Vm.UserData.UserId) } }>薪资设定</a></td>
                {this.props.Vm.ModalObj.intoDom() }
            </tr>;
        }
        public NewOpt(vals: string) {
            this.props.Vm.openModal(vals);
        }
        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactMoneySettingRowVm extends domCore.DomVm {
        ModalObj: modalFile.ModalDom.ModalDomVm;
        MoneySettingDom: MoneySettingDom.MoneySettingDom.MoneySettingDomVm;
        UserData: dataFile.Data.IUsersData;
        openModal(vals: string): void;
        SalaryItemValue: dataFile.Data.ISalaryItemSet;
        Fnumber: string;
    }

    export interface IMoneySettingRowConfig {
        Data?: dataFile.Data.IUsersData;
        Unid?: string;
        SalaryItemValue?: dataFile.Data.ISalaryItemSet;
        SalaryItemData: dataFile.Data.ISalaryItem[];
    }

    export class MoneySettingRowVm extends domCore.DomVm implements IReactMoneySettingRowVm {
        public ReactType = MoneySettingRowReact;
        //public dataList = new Array<data.Result.DepartTemplate>();
        public MoneySettingDom: MoneySettingDom.MoneySettingDom.MoneySettingDomVm;
        public ModalObj: modalFile.ModalDom.ModalDomVm;
        public SalaryItemData: dataFile.Data.ISalaryItem[];
        public SalaryItemValue: dataFile.Data.ISalaryItemSet;
        public UserData: dataFile.Data.IUsersData = { UserId: "", TrueName: "", PositionName: "", DisplayName: "", DeptName: "" };
        public SalaryItemSetDataList: dataFile.Data.ISalaryItemSet[] = [];
        public Fnumber: string;
        public openModal(vals: string) {
            this.ModalObj.UniId = vals;
            //this.Unitid=vals;
            this.ModalObj.open();
        }
        public constructor(config?: IMoneySettingRowConfig) {
            super();
            if (config) {
                //this.dataList = config.derpartData.List;
                this.UserData = config.Data;
                if (config.Data) {
                    urlFile.Core.AkPost("/HospPerformance/HumanResource/SalaryGetUsreFNumber", { userID: this.UserData.UserId }, (a) => {
                        this.Fnumber = a;
                        this.forceUpdate("");
                    });
                }
                this.UniId = config.Unid;
                this.SalaryItemData = config.SalaryItemData;
                this.SalaryItemValue = config.SalaryItemValue;
                if (config.SalaryItemValue)
                    this.SalaryItemSetDataList.push(config.SalaryItemValue);
            }
            this.listenAppEvent("ItemListToMoneySetting", this.UniId, (item: dataFile.Data.ISalaryItem[]) => {
                //var selectedValue = this.SelectorDom.UserListboxObj.dataValueGet();
                this.SalaryItemData = item;
                this.IsMulit = true;
                this.IsChange = true;
                this.forceUpdate("");
            });
            //弹出
            var modal: modalFile.ModalDom.IModalDomConfig = {
                Title: "薪资设定",
                ModalShowingFun: (a, callback) => {
                    var _config: EditMoneySettingPageFile.EditMoneySettingPage.IEditMoneySettingPageConfig = { Data: [{ FID: "", Name: "", Fileds: "", Detail: "", Type: "" }], DataValue: this.SalaryItemValue, Unid: this.UniId, UserId: a.UniId, UserName: "" }

                    this.SalaryItemSetDataList.map(s => {
                        if (a.UniId == s.UserID) {

                            _config.DataValue = s;
                        } else if (s.UserID == "all") {

                            _config.DataValue = s;
                        }

                    })
                    _config.UserName = this.UserData.TrueName;
                    _config.Data = this.SalaryItemData;

                    a.DomObj = new EditMoneySettingPageFile.EditMoneySettingPage.EditMoneySettingPageVm(_config);
                    callback();
                },
                ModalCloseFun: (a) => {
                    a.DomObj = null;
                }
            };
            //this.MoneyTemplateDom = new MoneyTemplateDom.MoneyTemplateDom.MoneyTemplateDomVm();
            this.ModalObj = new modalFile.ModalDom.ModalDomVm(modal);
            this.listenAppEvent("EditMoneyValues", this.UniId, (item: dataFile.Data.ISalaryItemSet) => {
                //var selectedValue = this.SelectorDom.UserListboxObj.dataValueGet();
                this.ModalObj.close();
                this.SalaryItemSetDataList.push(item);
                if (item.UserID == "all") {
                    this.SalaryItemSetDataList.map(s => {
                        s.UserID = "all";
                        s.SalaryItemValue = item.SalaryItemValue;
                    })
                }
                //this.SalaryItemData=item;
                this.IsMulit = true;
                this.IsChange = true;
                this.forceUpdate("");
            });

        }
    }

    export class MoneySettingRowStates extends domCore.DomStates {

    }

    export class MoneySettingRowProps extends domCore.DomProps<MoneySettingRowVm> { }
}