import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./ExamPackageInsertMasterRowDom");
import detailRowFile = require("./ExamPackageInsertDetailRowDom");
import eventFile = require("./../../../../01core/Event");
import dataFile = require("./../Data");

export module ExamPackageInsertRowDom {
    export class ExamPackageInsertRowDomAction extends domCore.DomAction {
    }

    export class ExamPackageInsertRowDomReact extends domCore.DomReact<ExamPackageInsertRowDomProps, ExamPackageInsertRowDomStates, ExamPackageInsertRowDomAction> implements domCore.IReact {

        public state = new ExamPackageInsertRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
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

            </div>;
        }


        private fun_addNewButtonRow() {
            this.props.Vm.addButtonRow();
        }

        private fun_detailTitleClick() {
            this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IExamPackageInsertRowDomConfig {


    }

    export class ExamPackageInsertRowDomVm extends domCore.DomVm {
        public ReactType = ExamPackageInsertRowDomReact;
        public MasterRow: masterRowFile.ExamPackageInsertMasterRowDom.ExamPackageInsertMasterRowDomVm;
        public DetailRowList: detailRowFile.ExamPackageInsertDetailRowDom.ExamPackageInsertDetailRowDomVm[] = [];
        public IsDetailHide: boolean;
        public UniId: string;


        public constructor(config?: IExamPackageInsertRowDomConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            this.MasterRow = new masterRowFile.ExamPackageInsertMasterRowDom.ExamPackageInsertMasterRowDomVm();
            this.listenAppEvent("medical/base/exampackage/insert/detailrow", this.UniId, (rowIndex: number) => {
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
        public legal(): boolean {
            var l1 = this.MasterRow.TextVmObjList["Name"].legal();
            var l2 = this.MasterRow.TextVmObjList["SimpleCode"].legal();
            var l3 = this.MasterRow.TextVmObjList["GroupPrice"].legal();
            var l4 = this.MasterRow.TextVmObjList["IndividualPrice"].legal();
            var l5 = this.MasterRow.TextVmObjList["AgeUpperLimit"].legal();
            var l6 = this.MasterRow.AgeLowerLimitVm.legal();
            this.DetailRowList.forEach((r) => {
                _res = r.legal() && _res;
            });
            var _res = l1 && l2 && l3 && l4 && l5 && l6;
            return _res;
        }
        public addButtonRow() {
            var data: dataFile.ExamPackage.IExamPackageItemData = { FID: "", PackageId: "", ItemId:""};
            var detailRow: detailRowFile.ExamPackageInsertDetailRowDom.ExamPackageInsertDetailRowDomVm = new detailRowFile.ExamPackageInsertDetailRowDom.ExamPackageInsertDetailRowDomVm({ UniId: this.UniId, RowData:data  });
            this.DetailRowList.push(detailRow);
            this.forceUpdate("");
        }


    }
    export class ExamPackageInsertRowDomStates extends domCore.DomStates {
    }


    export class ExamPackageInsertRowDomProps extends domCore.DomProps<ExamPackageInsertRowDomVm>{
    }



}


