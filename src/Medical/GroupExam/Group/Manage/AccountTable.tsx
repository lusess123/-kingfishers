import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import buttonFile = require("./../../../../05tool/Button");

import pagination = require("./../../../../05tool/Pagination");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import baseColFile = require("./../../../../02col/00core/BaseCol");
import DataFile = require("./../Data");
import comboFile = require("./../../../../02col/02Mulite/Combo");
import eventFile = require("./../../../../01core/Event");

import constantData = require("./../../../Common/Data");
import AccountRow = require("./AccountRow");
export module AccountTable {
    export class AccountTableAction extends domCore.DomAction {
    }

    export class AccountTableReact extends domCore.DomReact<AccountTableProps, AccountTableStates, AccountTableAction> implements domCore.IReact {

        public state = new AccountTableStates();

        public pSender(): React.ReactElement<any> {
            return <div className="YSm-table">
                <div className="table-responsive">{this._initTable() }</div>
            </div>;
        }
        public _initTable(): React.ReactElement<any> {
            return <table className="table table-striped table-bordered table-hover">
                <thead className="thead-default">
                    <tr>
                        <th className={"thCheckAll acsTextC acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " acsRelative acsTableTh  " : "") } style={{ left: this.props.Vm.LeftNum }}   >{this.props.Vm.AllCheck.intoDom() }</th>
                        <th>体检单位</th>
                        <th>体检批次</th>
                        <th>预检人数</th>
                        <th>实检人数</th>
                        <th>应收金额（元）</th>     
                        <th>操作</th>         
                    </tr>
                </thead>
                <tbody>
                    { this.props.Vm.RowList.map((row, index) => {
                        row.RowNumber = index;
                        return row.intoDom()
                    }) }
                </tbody>
            </table>;
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactAccountTableVm extends domCore.DomVm {

    }

    export interface IAccountTableConfig {
        Data: DataFile.Group.IAccount[];
        BatchId: string;
        Unild: string;
    }
    export class AccountTableVm extends domCore.DomVm implements IReactAccountTableVm {
        public ReactType = AccountTableReact;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public RowNumber: number;
        public DataBtnList = new Array<buttonFile.ui.ButtonVm>();
        public RowList: AccountRow.AccountRowDom.AccountRowDomVm[];
        public FormData: Array<DataFile.Group.IAccount>;
        public UniId: string;
        public BatchId: string;
        public PaginationVm: pagination.tool.PaginationVm;
        public PagerListData: DataFile.Group.PagerListBatchData;

        public constructor(config?: IAccountTableConfig) {
            super();
            this.RowList = new Array<AccountRow.AccountRowDom.AccountRowDomVm>();
            if (config)
            { 
                this.UniId = config.Unild
                this.RowList = [];
                this.FormData = [];
                var data:DataFile.Group.IAccount = {UnitName: "杭州信使"}
                this.FormData= config.Data
                this.BatchId = config.BatchId;
                this.FormData.forEach((rowData, index) => {
                    var rowNumber = index
                    var rowConfig = { RowData: rowData, IsAcsRelative: this.IsAcsRelative, LeftNum: this.LeftNum, RowNumber: rowNumber, UniId: this.UniId, BatchId: this.BatchId };
                    var rowVm = new AccountRow.AccountRowDom.AccountRowDomVm(rowConfig);
                    this.RowList.push(rowVm);
                });
                this.RowList.forEach((row) => {
                    row.SingleCheckVm.ChangeEventFun = (val, col) => {
                        this.checkCheckBox(val, col);
                        return true;
                    };
                });
            }


            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            this.AllCheck.ChangeEventFun = (val, col) => {
                this.allCheckChecked(val, col);
                return true;
            };
        }
        public checkCheckBox(val: string, checkDom: domFile.Core.DomVm): void {
            var rowList = this.RowList;
            window["isHand"] = true;
            var isCheck = false;
            var isAllCheck = true;
            var checkedCount = 0;
            if (val == "true") {
                isCheck = true;
            }

            rowList.forEach((row) => {
                var chk = row.SingleCheckVm;
                var _val = chk.dataValue();
                if (_val == "true" && checkDom != chk) {
                    isCheck = true;
                    checkedCount++;
                }
                if (checkDom == chk) {
                    if (val == "true") {
                        checkedCount++;
                    }
                }
            });


            isAllCheck = rowList.length == checkedCount ? true : false;
            this.DataBtnList.forEach((btn) => {
                btn.NoEnable = isCheck ? false : true;
                btn.forceUpdate("");
            });

            this.AllCheck.vmDataValueSet(isAllCheck ? "true" : "false");

            this.AllCheck.forceUpdate("", () => {
                window["isHand"] = false;
            });

        }

        public allCheckChecked(val: string, checkDom: domFile.Core.DomVm): void {

            if (!window["isHand"]) {

                //this.CheckBoxList.forEach((chk) => {
                //    chk.reactDataValueSet(val);
                //});

                this.RowList.forEach((row) => {
                    var chk = row.SingleCheckVm
                    chk.reactDataValueSet(val);
                });
            }
        }
        public delOpt(val: string): void {
            alert("删除成功！");
        }
        private getSelectValues() {
            var _list: DataFile.Group.IGroupBathData[] = [];

            this.RowList.forEach((r) => {
                var ck = r.SingleCheckVm;
                if (ck.vmDataValueGet() == "true") {
                    _list.push(r.RowData);
                }
            });

            console.log(_list);
            return _list;
        }
        public buttonClickCommond(obj: buttonFile.ui.ButtonVm) {
            switch (obj.DisplayName) {
                //case "复制":
                //    var _list = this.getSelectValues();
                //    var _ids = _list.map((n) => n.FID).join(",");
                //    this.ManageOpt(_ids);
                //    break;
                case "删除":
                    var _list = this.getSelectValues();
                    var _ids = _list.map((n) => n.FID).join(",");
                    this.delOpt(_ids);
                    break;
                default:
                    break;
            }
        }

    }
    export class AccountTableStates extends domCore.DomStates {
    }


    export class AccountTableProps extends domCore.DomProps<AccountTableVm>{
    }



}
