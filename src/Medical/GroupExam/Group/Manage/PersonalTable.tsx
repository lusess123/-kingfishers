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
import PersonalRow = require("./PersonalRow");
export module PersonalTable {
    export class PersonalTableAction extends domCore.DomAction {
    }

    export class PersonalTableReact extends domCore.DomReact<PersonalTableProps, PersonalTableStates, PersonalTableAction> implements domCore.IReact {

        public state = new PersonalTableStates();

        public pSender(): React.ReactElement<any> {
            return <div className="">
                <div className="table-responsive">{this._initTable() }</div>
                {  this.props.Vm.PaginationVm.intoDom()}
            </div>;
        }
        public _initTable(): React.ReactElement<any> {
            try {
                return <table className="table table-striped table-bordered table-hover">
                    <thead className="thead-default">
                        <tr>
                            <th className={"thCheckAll acsTextC acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " acsRelative acsTableTh  " : "") } style={{ left: this.props.Vm.LeftNum }}   >{this.props.Vm.AllCheck.intoDom() }</th>
                            <th>分组名称</th>
                            <th>人员名称</th>
                            <th>身份证</th>
                            <th>年龄</th>
                            <th>性别</th>
                            <th>婚姻状况</th>
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
            catch (e) {
                console.log(e);
                return null;
            }
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactPersonalTableVm extends domCore.DomVm {

    }

    export interface IPersonalTableConfig {
        Data: DataFile.Group.PagerListData;
        BatchId: string;
        Unild: string;
        Key: string
    }
    export class PersonalTableVm extends domCore.DomVm implements IReactPersonalTableVm {
        public ReactType = PersonalTableReact;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public RowNumber: number;
        public DataBtnList = new Array<buttonFile.ui.ButtonVm>();
        public RowList: PersonalRow.PersonalRowDom.PersonalRowDomVm[];
        public FormData: Array<DataFile.Group.IMember>;
        public UniId: string;
        public BatchId: string;
        public PaginationVm: pagination.tool.PaginationVm;
        public PagerListData: DataFile.Group.PagerListBatchData;
        public Key: string;
        public constructor(config?: IPersonalTableConfig) {
            super();
            this.RowList = new Array<PersonalRow.PersonalRowDom.PersonalRowDomVm>();
            if (config) {
                this.PagerListData = config.Data;
                this.Key = config.Key;
                this.PaginationVm = new pagination.tool.PaginationVm();
                this.PaginationVm.isPartHidden = true;
                this.PaginationVm.IsChange = true;
                var pager = this.PagerListData.Pager;
                if (pager!= null)
                {
                    this.PaginationVm.PageNo = pager.PageNo;
                    this.PaginationVm.PageSize = pager.PageSize;
                    this.PaginationVm.TotalCount = pager.TotalCount;
                    this.PaginationVm.PageClickEvent = (pageIndex) => {
                        //this.loadPageData(pageIndex, this.Unid);
                        this.emitAppEvent("Manage/PersonalTable/loadPageData", this.UniId, "PersonalManage", pageIndex.toString(), this.Key);
                    }
                }
                this.UniId = config.Unild
                this.RowList = [];
                this.FormData = [];
                this.FormData = config.Data.ListData;
                this.BatchId = config.BatchId;
                this.FormData.forEach((rowData, index) => {
                    var rowNumber = index
                    var rowConfig = { RowData: rowData, IsAcsRelative: this.IsAcsRelative, LeftNum: this.LeftNum, RowNumber: rowNumber, UniId: this.UniId, BatchId: this.BatchId  };
                    var rowVm = new PersonalRow.PersonalRowDom.PersonalRowDomVm(rowConfig);
                    this.RowList.push(rowVm);
                });
                this.RowList.forEach((row, index) => {
                    row.SingleCheckVm.ChangeEventFun = (val, col) => {
                        this.checkCheckBox(val, col);
                        return true;
                    };
                });
            }
            this.listenAppEvent("Manage/PersonalRow", this.UniId, (rowIndex: number) => {
                this.delRowByIndex(rowIndex);
            });

            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            this.AllCheck.ChangeEventFun = (val, col) => {
                this.allCheckChecked(val, col);
                return true;
            };
        }
        public delRowByIndex(rowIndex:number)
        {
            var _id = this.RowList[rowIndex].RowData.FID;
            //if (_id) {
            //    this.DelFidList.push(_id);
            //}

            this.RowList.splice(rowIndex, 1);
            //this.RowList.forEach((r, i) => {
            //    if (i >= rowIndex) {
            //        r.toChange();
            //    }
            //});


            this.forceUpdate("");
        }
        public newRow() {
            var ds = {}
            var rowConfig = { RowData: ds, IsAcsRelative: this.IsAcsRelative, LeftNum: this.LeftNum, UniId: this.UniId, BatchId: this.BatchId };
            var rowVm = new PersonalRow.PersonalRowDom.PersonalRowDomVm(rowConfig);
            this.RowList.push(rowVm);
            this.RowList.forEach((row) => {
                row.SingleCheckVm.ChangeEventFun = (val, col) => {
                    this.checkCheckBox(val, col);
                    return true;
                };
            });

            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            this.AllCheck.ChangeEventFun = (val, col) => {
                this.allCheckChecked(val, col);
                return true;
            };
            this.forceUpdate("");
        }
    
        public createButton(displayName: string): React.ReactElement<any> {
            var btnVm = new buttonFile.ui.ButtonVm();
            btnVm.DisplayName = displayName;
            btnVm.NoEnable = true;
            btnVm.KindCss = " btn-primary-outline ";
            this.DataBtnList.push(btnVm);
            btnVm.ClickFun = (a) => {
                this.buttonClickCommond(a);
            };
            return btnVm.intoDom();
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
    export class PersonalTableStates extends domCore.DomStates {
    }


    export class PersonalTableProps extends domCore.DomProps<PersonalTableVm>{
    }



}

