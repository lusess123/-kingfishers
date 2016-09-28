import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./GeneralExamTplUpdateMasterRowDom");
//import detailRowFile = require("./GeneralExamTplUpdateDetailRowDom");
import detailRowFile = require("./../../../Common/ItemConditionUpdateDetailRowDom");
import eventFile = require("./../../../../01core/Event");
import dataFile = require("./../Data");

export module GeneralExamTplUpdateRowDom {
    export class GeneralExamTplUpdateRowDomAction extends domCore.DomAction {
    }

    export class GeneralExamTplUpdateRowDomReact extends domCore.DomReact<GeneralExamTplUpdateRowDomProps, GeneralExamTplUpdateRowDomStates, GeneralExamTplUpdateRowDomAction> implements domCore.IReact {

        public state = new GeneralExamTplUpdateRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="title Hu-pointer" onClick={() => { this.fun_masterTitleClick(); } }>{this.props.Vm.Index + 1}<i className={"fa fa-angle-double-" + (this.props.Vm.IsMasterHide ? "up" : "down") }></i></div>
                <div className={this.props.Vm.IsMasterHide ? "hide" : ""}>
                    {this.props.Vm.MasterRow.intoDom() }
                    <div className="panel">
                        <div className="panel-heading" >
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
                                                this.props.Vm.DetailRowList.map((row, i) => {
                                                    row.RowNumber = i;
                                                    return row.intoDom();
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>;
        }

        private fun_addNewDetailRow() {
            this.props.Vm.addDetailRow();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

        private fun_detailTitleClick() {
            this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
            this.forceUpdate();
        }
        private fun_masterTitleClick() {
            this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
            this.forceUpdate();
        }



    }

    export interface IGeneralExamTplUpdateRowDomConfig {
        //DetailRowConfigList: detailRowFile.GeneralExamTplUpdateDetailRowDom.IGeneralExamTplUpdateDetailRowDomConfig[];
        DetailRowConfigList: detailRowFile.ItemConditionUpdateDetailRowDom.IItemConditionUpdateDetailRowDomConfig[];
        MasterConfig: masterRowFile.GeneralExamTplUpdateMasterRowDom.IGeneralExamTplUpdateMasterRowDomConfig;

    }



    export class GeneralExamTplUpdateRowDomVm extends domCore.DomVm {
        public ReactType = GeneralExamTplUpdateRowDomReact;

        //public DetailRowList: detailRowFile.GeneralExamTplUpdateDetailRowDom.GeneralExamTplUpdateDetailRowDomVm[] = [];
        public DetailRowList: detailRowFile.ItemConditionUpdateDetailRowDom.ItemConditionUpdateDetailRowDomVm[] = [];

        public MasterRow: masterRowFile.GeneralExamTplUpdateMasterRowDom.GeneralExamTplUpdateMasterRowDomVm = new masterRowFile.GeneralExamTplUpdateMasterRowDom.GeneralExamTplUpdateMasterRowDomVm();

        public IsMasterHide: boolean;
        public IsDetailHide: boolean;

        public DelFidList: string[] = [];

        public Index: number;

        public UniId: string = "";

        public constructor(config?: IGeneralExamTplUpdateRowDomConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();

            if (config) {
                config.MasterConfig.UniId = this.UniId;
                this.MasterRow = new masterRowFile.GeneralExamTplUpdateMasterRowDom.GeneralExamTplUpdateMasterRowDomVm(config.MasterConfig);
                config.DetailRowConfigList.forEach((detailRowConfig, i) => {
                    detailRowConfig.UniId = this.UniId;
                    //var detailRowVm = new detailRowFile.GeneralExamTplUpdateDetailRowDom.GeneralExamTplUpdateDetailRowDomVm(detailRowConfig);
                    var detailRowVm = new detailRowFile.ItemConditionUpdateDetailRowDom.ItemConditionUpdateDetailRowDomVm(detailRowConfig);

                    detailRowVm.RowNumber = i;
                    this.DetailRowList.push(detailRowVm);
                });
            }
            this.listenAppEvent("medical/base/GeneralExamTpl/update/DetailRow", this.UniId, (rowIndex: number) => {
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
            var _id = this.DetailRowList[rowIndex].RowData.FID;
            if (_id) {
                this.DelFidList.push(_id);
            }

            this.forceUpdate("");
        }

        public addDetailRow() {

            var data: dataFile.GeneralExamTpl.IGeneralExamTplItemData = { FID: "", ItemName: "", GreaterThan: "", LessThan: "", Unit: "", IsPositive: "", KeyWord: "" };
            //  var detailRow: detailRowFile.GeneralExamTplUpdateDetailRowDom.GeneralExamTplUpdateDetailRowDomVm = new detailRowFile.GeneralExamTplUpdateDetailRowDom.GeneralExamTplUpdateDetailRowDomVm({ UniId: this.UniId, RowData: data, IsNew: true });
            var detailRow: detailRowFile.ItemConditionUpdateDetailRowDom.ItemConditionUpdateDetailRowDomVm = new detailRowFile.ItemConditionUpdateDetailRowDom.ItemConditionUpdateDetailRowDomVm({ UniId: this.UniId, RowData: data, IsNew: true });
            this.DetailRowList.push(detailRow);
            this.forceUpdate("");
        }

        public legal(): boolean {
            var _isres: boolean = this.MasterRow.legal();
            this.DetailRowList.forEach((r) => {
                _isres = _isres && r.legal();
            });
            return _isres;
        }

        public getData(): dataFile.GeneralExamTpl.IGeneralExamTplData {
            var _list = [];
            this.DetailRowList.forEach((r) => {
                var _obj = r.getData();
                if (!utilFile.Core.Util.IsPure(_obj)) {
                    _list.push(_obj);
                }
            });
            var _data = this.MasterRow.getData(_list.length > 0 || this.DelFidList.length > 0);
            if (this.DelFidList.length > 0) {
                _data.DeleteItemList = this.DelFidList;
            }

            if (_list.length > 0) {
                _data.ItemList = _list;
            }
            return _data;
        }


    }
    export class GeneralExamTplUpdateRowDomStates extends domCore.DomStates {
    }


    export class GeneralExamTplUpdateRowDomProps extends domCore.DomProps<GeneralExamTplUpdateRowDomVm>{
    }



}


