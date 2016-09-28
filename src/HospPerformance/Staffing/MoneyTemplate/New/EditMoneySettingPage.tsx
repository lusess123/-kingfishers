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

import textFile = require("./../../../../02col/01single/Text");
import dataFile = require("./../data");
import text = textFile.ui.TextReact;
import textVm = textFile.ui.TextVm;
import EditMoneyRow = require("./EditMoneyRow");

export module EditMoneySettingPage {
    export class EditMoneySettingPageAction extends domCore.DomAction {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class EditMoneySettingPageReact extends domCore.DomReact<EditMoneySettingPageProps, EditMoneySettingPageStates, EditMoneySettingPageAction> implements domCore.IReact {

        public state = new EditMoneySettingPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="p-a-md">

                <p>薪资人员：{this.props.Vm.UserName}</p>

                {this._initTable() }

                <div className="text-center">
                    <a className="btn btn-sm btn-primary" onClick={() => { this.Submit() } }>保存</a>
                </div>

            </div>;
        }

        public _initTable(): React.ReactElement<any> {

            var theader = <thead className="thead-default">
                {this.initHeader() }
            </thead>
            var tbody = this.initBody();

            var table = <table className="table table-striped table-bordered table-hover">{theader}{tbody}</table>;
            return <div className="table-responsive">{table}</div>;
        }

        public initHeader(): React.ReactElement<any> {
            return <tr>
                <th>薪资项目</th>
                <th>值</th>
            </tr>
        };
        public initBody(): React.ReactElement<any> {
            return <tbody>              
                {this.props.Vm.SalaryItemRowList.map(r => {
                    return r.intoDom();
                }) }
            </tbody>;
        };
        //获得输入框的对应的值
        public getInputValues() {
            var _list: dataFile.Data.ISalaryItemValue[] = [];

            this.props.Vm.SalaryItemRowList.map(r => {

                _list.unshift(r.SalaryItemValue);
            });
            this.forceUpdate();
            return _list;
        }
        public Submit() {
            //this.getInputValues();
            this.props.Vm.Submit(this.getInputValues());
        }
        //public GridRowVm:  EditMoneyRow.EditMoneyRow.EditMoneyRowVm;
        ////根据数据创建每一行
        //public createGridRow(data: any): React.ReactElement<any> {
        //    var rowVm = new EditMoneyRow.EditMoneyRow.EditMoneyRowVm();
        //    rowVm.salaryItemData = data;
        //    rowVm.rowObj = this.props.Vm;            
        //    this.props.Vm.SalaryItemRowList.push(rowVm);
        //    //分页
        //    rowVm.IsChange = true;
        //    this.GridRowVm = rowVm;

        //    return rowVm.intoDom();

        //}
        protected pComponentDidMount() { super.pComponentDidMount(); }

    }

    export interface IReactEditMoneySettingPageVm extends domCore.DomVm {

        SalaryItemSetData: dataFile.Data.ISalaryItemSet;
        salaryItemData: dataFile.Data.ISalaryItem[];
        SalaryItemRowList: EditMoneyRow.EditMoneyRow.EditMoneyRowVm[];
        Submit(data: dataFile.Data.ISalaryItemValue[]): void;
        UserID?: string;
        UserName: string;
    }

    export interface IEditMoneySettingPageConfig {
        Data?: dataFile.Data.ISalaryItem[];
        DataValue: dataFile.Data.ISalaryItemSet;
        Unid?: string;
        UserId?: string;
        UserName?: string;

    }
    export class EditMoneySettingPageVm extends domCore.DomVm implements IReactEditMoneySettingPageVm {
        public ReactType = EditMoneySettingPageReact;
        public salaryItemData: dataFile.Data.ISalaryItem[];
        public SalaryItemValue: dataFile.Data.ISalaryItemSet;
        public SalaryItemValue2: dataFile.Data.ISalaryItemSet;
        public SalaryItemRowList: EditMoneyRow.EditMoneyRow.EditMoneyRowVm[] = [];
        public SalaryItemSetData: dataFile.Data.ISalaryItemSet;
        public UserID: string;
        public UserName: string;
        public constructor(config?: IEditMoneySettingPageConfig) {
            super();
            this.SalaryItemSetData = { UserID: "", SalaryItemValue: [{ SalaryItemID: { FID: "", Fileds: "", Name: "", Detail: "", Type: "" }, Value: "" }] };
            if (config) {
                this.UniId = config.Unid;
                this.salaryItemData = config.Data;
                this.UserID = config.UserId;
                this.UserName = config.UserName == "all" || config.UserName == "" ? "全体人员" : config.UserName;
                if (config.DataValue) {
                    this.SalaryItemValue = config.DataValue;
                    var value = "";
                    if (config.Data.length > 0) {
                        this.salaryItemData.map(v => {
                            if (v.Type == "输入项") {
                                var rowconfig: EditMoneyRow.EditMoneyRow.IEditMoneyRowConfig = { Data: { SalaryItemID: v, Value: "" }, Unid: this.UniId }
                                this.SalaryItemValue.SalaryItemValue.map(s => {
                                    if (v.FID == s.SalaryItemID.FID) {
                                        rowconfig.Data.Value = s.Value
                                    }
                                })
                                var rowDom = new EditMoneyRow.EditMoneyRow.EditMoneyRowVm(rowconfig);
                                rowDom.IsChange = true;
                                rowDom.IsMulit = true;
                                this.SalaryItemRowList.push(rowDom);
                            }
                        })
                    } else {
                        this.SalaryItemValue.SalaryItemValue.map(a => {
                            if (a.SalaryItemID.Type == "输入项") {
                                var rowconfig: EditMoneyRow.EditMoneyRow.IEditMoneyRowConfig = { Data: { SalaryItemID: a.SalaryItemID, Value: a.Value }, Unid: this.UniId }
                                var rowDom = new EditMoneyRow.EditMoneyRow.EditMoneyRowVm(rowconfig);
                                rowDom.IsChange = true;
                                rowDom.IsMulit = true;
                                this.SalaryItemRowList.push(rowDom);
                            }
                        })
                    }
                } else {
                    this.salaryItemData.map(a => {
                        if (a.Type == "输入项") {
                            var rowconfig: EditMoneyRow.EditMoneyRow.IEditMoneyRowConfig = { Data: { SalaryItemID: a, Value: "" }, Unid: this.UniId }
                            var rowDom = new EditMoneyRow.EditMoneyRow.EditMoneyRowVm(rowconfig);
                            rowDom.IsChange = true;
                            rowDom.IsMulit = true;
                            this.SalaryItemRowList.push(rowDom);
                        }
                    })
                }


            }
        }
        public legal() {
            var _isRes: boolean = true;
            this.SalaryItemRowList.forEach((row) => {
                if (!row.legal()) {
                    _isRes = false;
                }
            });
            return _isRes;
        }
        public Submit(data: dataFile.Data.ISalaryItemValue[]) {
            if (this.legal()) {
                this.SalaryItemSetData.UserID = this.UserID;
                this.SalaryItemSetData.SalaryItemValue = data;
                this.emitAppEvent("EditMoneyValues", this.UniId, this.SalaryItemSetData);
                this.IsChange = true;
                this.forceUpdate("");
            }
        }
    }
    export class EditMoneySettingPageStates extends domCore.DomStates {
    }


    export class EditMoneySettingPageProps extends domCore.DomProps<IReactEditMoneySettingPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("EditMoneySettingPage", domCore.DomVm, EditMoneySettingPageVm);

}
