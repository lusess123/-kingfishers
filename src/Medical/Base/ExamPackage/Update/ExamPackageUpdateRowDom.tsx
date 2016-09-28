import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./ExamPackageUpdateMasterRowDom");
import detailRowFile = require("./ExamPackageUpdateDetailRowDom");
import eventFile = require("./../../../../01core/Event");
import dataFile = require("./../Data");


export module ExamPackageUpdateRowDom {
    export class ExamPackageUpdateRowDomAction extends domCore.DomAction {
    }

    export class ExamPackageUpdateRowDomReact extends domCore.DomReact<ExamPackageUpdateRowDomProps, ExamPackageUpdateRowDomStates, ExamPackageUpdateRowDomAction> implements domCore.IReact {

        public state = new ExamPackageUpdateRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="title Hu-pointer" onClick={() => { this.fun_masterTitleClick(); } }>{this.props.Vm.Index + 1}<i className={"fa fa-angle-double-" + (this.props.Vm.IsMasterHide ? "up" : "down") }></i></div>
                <div className={this.props.Vm.IsMasterHide ? "hide" : ""}>
                {this.props.Vm.MasterRow.intoDom() }
                <div className="panel">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a  onClick={() => { this.fun_detailTitleClick(); } }>关联项目<i className={"fa fa-angle-" + (this.props.Vm.IsDetailHide ? "up" : "down") }></i>
                            </a>
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
                                            <th><i className="fa fa-plus-circle acsPointer" onClick={() => { this.fun_addNewButtonRow() } }></i></th>
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
                </div>
            </div>
        }

        private fun_addNewButtonRow() {
            this.props.Vm.addButtonRow();
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

    export interface IExamPackageUpdateRowDomConfig {
        DetailRowConfigList: detailRowFile.ExamPackageUpdateDetailRowDom.IExamPackageUpdateDetailRowDomConfig[];
        MasterConfig: masterRowFile.ExamPackageUpdateMasterRowDom.IExamPackageUpdateMasterRowDomConfig;

    }
 


    export class ExamPackageUpdateRowDomVm extends domCore.DomVm {
        public ReactType = ExamPackageUpdateRowDomReact;

        public DetailRowList: detailRowFile.ExamPackageUpdateDetailRowDom.ExamPackageUpdateDetailRowDomVm[] = [];
        public MasterRow: masterRowFile.ExamPackageUpdateMasterRowDom.ExamPackageUpdateMasterRowDomVm = new masterRowFile.ExamPackageUpdateMasterRowDom.ExamPackageUpdateMasterRowDomVm();

        public IsMasterHide: boolean;
        public IsDetailHide: boolean;

        public DelFidList: string[] = [];

        public Index: number;

        public UniId: string = "";

        public constructor(config?: IExamPackageUpdateRowDomConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();

            if (config) {
                config.MasterConfig.UniId = this.UniId;
                this.MasterRow = new masterRowFile.ExamPackageUpdateMasterRowDom.ExamPackageUpdateMasterRowDomVm(config.MasterConfig);
                config.DetailRowConfigList.forEach((detailRowConfig, i) => {
                    detailRowConfig.UniId = this.UniId;
                    var detailRowVm = new detailRowFile.ExamPackageUpdateDetailRowDom.ExamPackageUpdateDetailRowDomVm(detailRowConfig);
                    this.DetailRowList.push(detailRowVm);
                });
                this.listenAppEvent("medical/base/exampackage/update/DetailRow", this.UniId, (rowIndex: number) => {
                    this.delDetailRowByIndex(rowIndex);
                });
            }
        }

        private delDetailRowByIndex(rowIndex: number) {
        
            var _id = this.DetailRowList[rowIndex].RowData.FID;
            if (_id) {
                this.DelFidList.push(_id);
            }

            this.DetailRowList.splice(rowIndex, 1);
            this.DetailRowList.forEach((r, i) => {
                if (i >= rowIndex) {
                    r.toChange();
                }
            });


            this.forceUpdate("");
        }
        public addButtonRow() {

            var data: dataFile.ExamPackage.IExamPackageItemData = { FID: "", PackageId: "", ItemId:""};
            var detailRow: detailRowFile.ExamPackageUpdateDetailRowDom.ExamPackageUpdateDetailRowDomVm = new detailRowFile.ExamPackageUpdateDetailRowDom.ExamPackageUpdateDetailRowDomVm({ UniId: this.UniId, RowData: data });
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

        public getData(): dataFile.ExamPackage.IExamPackageData {
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
                _data.DetailListData = _list;
            }
            return _data;
        }
    }
    export class ExamPackageUpdateRowDomStates extends domCore.DomStates {
    }


    export class ExamPackageUpdateRowDomProps extends domCore.DomProps<ExamPackageUpdateRowDomVm>{
    }



}


