import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import pagination = require("./../../../../05tool/Pagination");
import baseColFile = require("./../../../../02col/00core/BaseCol");
import DataFile = require("./../Data");
import comboFile = require("./../../../../02col/02Mulite/Combo");
import constantData = require("./../../../Common/Data");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import Selector = require("./../../../../02col/03selector/selector");


export module AccountRowDom {
    export class AccountRowDomAction extends domCore.DomAction {
    }

    export class AccountRowDomReact extends domCore.DomReact<AccountRowDomProps, AccountRowDomStates, AccountRowDomAction> implements domCore.IReact {

        public state = new AccountRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td  className={(this.props.Vm.IsAcsRelative ? "  Hf-relative Hf-table-td " : "") }
                    style={{ left: this.props.Vm.LeftNum }} >
                    <span>{this.createSingleCheckBox() }
                        <span>{this.props.Vm.RowNumber + 1}
                        </span>
                    </span>
                </td>
                <td>
                    {this.props.Vm.RowData.UnitName  }
                </td>
                <td>
                    {this.props.Vm.RowData.BatchId  }
                </td>
                <td>
                    {this.props.Vm.RowData.ReservationCount  }
                </td>
                <td>
                    {this.props.Vm.RowData.RealCount }
                </td>

                <td>
                    {this.props.Vm.RowData.Fee }
                </td>
                <td>
                    <a className="text-primary" onClick={() => { this.props.Vm.updateOpt() } }>修改</a>
                </td>

            </tr>;
        }
        private createSingleCheckBox(): React.ReactElement<any> {
            return this.props.Vm.SingleCheckVm.intoDom();
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactAccountRowDomVm extends domCore.DomVm {

    }

    export interface IAccountRowDomConfig {
        RowData: DataFile.Group.IAccount;
        IsAcsRelative: boolean;
        LeftNum: number;
        UniId: string;
        BatchId: string;
    }
    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }
    export class AccountRowDomVm extends domCore.DomVm implements IReactAccountRowDomVm {
        public ReactType = AccountRowDomReact;
        public ColVmObjList: IColVmDic = {};
        public RowData: DataFile.Group.IAccount;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowNumber: number;
        public UniId: string;
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public BatchId: string;
        public constructor(config?: IAccountRowDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
                this.IsAcsRelative = config.IsAcsRelative;
                this.LeftNum = config.LeftNum;
                this.UniId = config.UniId
                this.BatchId = config.BatchId;
            }

            this.initColVm("GroupName", "SelectorVm", "notNull");
            this.initColVm("Name", "TextVm", "notNull");
            this.initColVm("IDCard", "TextVm", "notNull");
            this.initColVm("Age", "TextVm", "notNull");
            this.initColVm("Gender", "ComboVm");
            this.initColVm("MaritalStatus", "ComboVm");
            this.initColVm("Job", "ComboVm");

        }
        public GetText(List: any, Id: string): string {
            for (var index = 0; index < List.length; index++) {
                if (List[index].Value == Id) {
                    return List[index].Text;
                }
            }
            return ""
        }
        public updateOpt() {
            var vals = this.BatchId;
            urlFile.Core.AkUrl.Current().openUrl("$WINUpdateAccountPage$" + vals + "$", true);
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
                if (this.RowData[colName] != undefined || this.RowData[colName] != null) {
                    _exciteBean.dataValueSet(this.RowData[colName]);
                }
                _exciteBean.Tag = colName;
                _exciteBean.LegalObj.Kind = legal ? legal : "";
                _exciteBean.onChangeHandle((val) => {
                    this.RowData[colName] = val;
                    return true;
                });
                _exciteBean.IsMulit = true;
                if (colType == "ComboVm") {
                    this.initCombo(colName, utilFile.Core.Util.Cast<comboFile.ui.ComboVm>(_exciteBean));
                }
                if (colType == "SelectorVm") {
                    this.initSelector(colName, utilFile.Core.Util.Cast<Selector.ui.SelectorVm>(_exciteBean));
                }
                this.ColVmObjList[_name] = _exciteBean;
            }
        }
        public initSelector(colName: string, selectVm: Selector.ui.SelectorVm) {
            selectVm.RegName = "UnitDataTable";
            selectVm.OnPostDataSetFun = function (ds) {
                var _rows = ds["UnitGroupTable"] = [];
                var _row = { UnitId: "001" };
                _rows.push(_row);
                return ds;
            }
        }
        public initCombo(colName: string, comboVm: comboFile.ui.ComboVm) {
            switch (colName) {
                case "Gender":
                    comboVm.ItemList = constantData.Data.GenderTypeData;
                    comboVm.dataValue(this.RowData[colName]);
                    break;
                case "MaritalStatus":
                    comboVm.ItemList = constantData.Data.MaritalTypeData;
                    comboVm.dataValue(this.RowData[colName]);
                    break;
                case "Job":
                    comboVm.ItemList = constantData.Data.JobTypeData;
                    comboVm.dataValue(this.RowData[colName]);
                    break;
                case "Term":
                    comboVm.ItemList = constantData.Data.JobTypeData;
                    comboVm.dataValue(this.RowData[colName]);
                    break;
                case "Pay":
                    comboVm.ItemList = constantData.Data.ExamBanlanceKindData;
                    comboVm.dataValue(this.RowData[colName]);
                    break;
                case "Price":
                    comboVm.ItemList = constantData.Data.JobTypeData;
                    comboVm.dataValue(this.RowData[colName]);
                    break;
                default:
                    break;
            }
        }
        public legal(): boolean {
            //  var l1 = this.initColVm["BatchName"].legal();
            // var l2 = this.initColVm["BeginDate"].legal();
            //   var l3 = this.initColVm["EndDate"].legal();
            //  var l4 = this.initColVm["PreNumber"].legal();
            //  var _res = l1 && l2 && l3 && l4;
            return true;
        }

    }
    export class AccountRowDomStates extends domCore.DomStates {
    }


    export class AccountRowDomProps extends domCore.DomProps<AccountRowDomVm>{
    }



}
