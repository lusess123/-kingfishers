import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./GeneralExamTplInsertMasterRowDom");
//import detailRowFile = require("./GeneralExamTplInsertDetailRowDom");
import detailRowFile = require("./../../../Common/ItemConditionInsertDetailRowDom");
import eventFile = require("./../../../../01core/Event");
import dataFile = require("./../Data");

export module GeneralExamTplInsertRowDom {
    export class GeneralExamTplInsertRowDomAction extends domCore.DomAction {
    }

    export class GeneralExamTplInsertRowDomReact extends domCore.DomReact<GeneralExamTplInsertRowDomProps, GeneralExamTplInsertRowDomStates, GeneralExamTplInsertRowDomAction> implements domCore.IReact {

        public state = new GeneralExamTplInsertRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                {this.props.Vm.MasterRow.intoDom() }
                <div className="panel">
                    <div className="panel-heading">
                        <h4 className="panel-title"><a  onClick={() => { this.fun_detailTitleClick(); } }>关联项目<i className={"fa fa-angle-" + (this.props.Vm.IsDetailHide ? "up" : "down") }></i></a>
                            </h4>
                    </div>
                    <div className="panel-collapse collapse in">
                        <div className={"content active" + (this.props.Vm.IsDetailHide ? "hide" : "") }>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <thead className="thead-default">
                                    <tr className="ACT-HEADER MEMBER">
                                        <th className="thCheckAll acsTextC" style={{ width: "1em" }}></th>
                                        <th className="hide"><span>主键</span></th>
                                        <th><span>项目名称</span></th>
                                        <th><span>高于</span></th>
                                        <th><span>低于</span></th>
                                        <th><span>单位</span></th>
                                        <th><span>是否阳性</span></th>
                                        <th><span>关键词</span></th>
                                        <th><i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_addNewDetailRow() } }></i></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.Vm.DetailRowList.map((row, index) => {
                                            row.RowNumber = index;
                                            return row.intoDom()
                                        })
                                    }
                                </tbody>
                            </table>
                                </div>
                        </div>
                    </div>

                </div>

            </div>;
        }

        private fun_addNewDetailRow() {
            this.props.Vm.addDetailRow();
        }

        private fun_detailTitleClick() {
            this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IGeneralExamTplInsertRowDomConfig {


    }

    export class GeneralExamTplInsertRowDomVm extends domCore.DomVm {
        public ReactType = GeneralExamTplInsertRowDomReact;
        public MasterRow: masterRowFile.GeneralExamTplInsertMasterRowDom.GeneralExamTplInsertMasterRowDomVm;
        //public DetailRowList: detailRowFile.GeneralExamTplInsertDetailRowDom.GeneralExamTplInsertDetailRowDomVm[] = [];
        public DetailRowList: detailRowFile.ItemConditionInsertDetailRowDom.ItemConditionInsertDetailRowDomVm[] = [];

        public IsDetailHide: boolean;
        public UniId: string;

        public constructor(config?: IGeneralExamTplInsertRowDomConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            this.MasterRow = new masterRowFile.GeneralExamTplInsertMasterRowDom.GeneralExamTplInsertMasterRowDomVm();
            this.listenAppEvent("medical/base/GeneralExamTpl/Insert/DetailRow", this.UniId, (rowIndex: number) => {
                this.delDetailRowByIndex(rowIndex);
            });

        }

        private delDetailRowByIndex(rowIndex: number) {
            this.DetailRowList.splice(rowIndex, 1);
            this.DetailRowList.forEach((r, i) => {
                if (i >= rowIndex) {
                    r.toChange();
                }
            });
            this.forceUpdate("");
        }

        public addDetailRow() {
            var data: dataFile.GeneralExamTpl.IGeneralExamTplItemData = { FID: "", ItemName: "", GreaterThan: "", LessThan: "", Unit: "", IsPositive: "", KeyWord: "" };
            //var detailRow: detailRowFile.GeneralExamTplInsertDetailRowDom.GeneralExamTplInsertDetailRowDomVm = new detailRowFile.GeneralExamTplInsertDetailRowDom.GeneralExamTplInsertDetailRowDomVm({ UniId: this.UniId, RowData: data });
            var detailRow: detailRowFile.ItemConditionInsertDetailRowDom.ItemConditionInsertDetailRowDomVm = new detailRowFile.ItemConditionInsertDetailRowDom.ItemConditionInsertDetailRowDomVm({ UniId: this.UniId, RowData: data });

            this.DetailRowList.push(detailRow);
            this.forceUpdate("");
        }

        public legal(): boolean {
            //var l1 = this.MasterRow.TextVmObjList["Name"].legal();
            //var l2 = (this.MasterRow.RowData.Content == null || this.MasterRow.RowData.Content == "") ? false : true;
            //var _res = l1 && l2;
            var _res = this.MasterRow.legal();
            this.DetailRowList.forEach((r) => {
                _res = r.legal() && _res;

            });
            return _res;
        }


    }
    export class GeneralExamTplInsertRowDomStates extends domCore.DomStates {
    }


    export class GeneralExamTplInsertRowDomProps extends domCore.DomProps<GeneralExamTplInsertRowDomVm>{
    }



}


