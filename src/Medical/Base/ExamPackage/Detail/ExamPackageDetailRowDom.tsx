import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./ExamPackageDetailMasterRowDom");
import dataFile = require("./../Data");


export module ExamPackageDetailRowDom {
    export class ExamPackageDetailRowDomAction extends domCore.DomAction {
    }

    export class ExamPackageDetailRowDomReact extends domCore.DomReact<ExamPackageDetailRowDomProps, ExamPackageDetailRowDomStates, ExamPackageDetailRowDomAction> implements domCore.IReact {

        public state = new ExamPackageDetailRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="title Hu-pointer" onClick={() => { this.fun_itemTitleClick(); } }>{this.props.Vm.Index + 1}<i className={"fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "up" : "down") }></i></div>
                <div className={this.props.Vm.IsItemFormHide ? "hide" : "Hm-toggle-item"}>
                    {this.props.Vm.MasterRow.intoDom() }
                    <div className="panel">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a onClick = {() => { this.fun_rowTitleClick(); } }>关联项目<i className={"fa fa-angle-" + (this.props.Vm.IsRowFormHide ? "up" : "down") }></i></a>
                            </h4>
                        </div>
                        <div className="panel-collapse collapse in">
                            <div className={"content active" + (this.props.Vm.IsRowFormHide ? "hide" : "") }>
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped">
                                    <thead className="thead-default">
                                        <tr className="ACT-HEADER MEMBER">
                                            <th className="thCheckAll acsTextC" style={{ width: "1em" }}></th>
                                            <th className="hide"><span>主键</span></th>
                                            <th><span>项目名称</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.props.Vm.DetailListData.map((data, index) => {
                                                return (<tr>
                                                    <td>{(index + 1).toString() }</td>
                                                    <td className="hide">{data.FID}</td>
                                                    <td>{data.ItemId}</td>
                                                </tr>);
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

        private fun_rowTitleClick() {
            this.props.Vm.IsRowFormHide = !this.props.Vm.IsRowFormHide;
            this.forceUpdate();
        }

        private fun_itemTitleClick() {
            this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
            this.forceUpdate();
        }


        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IExamPackageDetailRowDomConfig {
        DetailListData: dataFile.ExamPackage.IExamPackageItemData[];
        MasterConfig: masterRowFile.ExamPackageDetailMasterRowDom.IExamPackageDetailMasterRowDomConfig;

    }


    export class ExamPackageDetailRowDomVm extends domCore.DomVm {
        public ReactType = ExamPackageDetailRowDomReact;
        public MasterRow: masterRowFile.ExamPackageDetailMasterRowDom.ExamPackageDetailMasterRowDomVm;
        public Index: number;
        public DetailListData: dataFile.ExamPackage.IExamPackageItemData[];
        public IsRowFormHide: boolean;
        public IsItemFormHide: boolean;


        public constructor(config?: IExamPackageDetailRowDomConfig) {
            super();
            if (config) {
                this.MasterRow = new masterRowFile.ExamPackageDetailMasterRowDom.ExamPackageDetailMasterRowDomVm(config.MasterConfig);
                this.DetailListData = config.MasterConfig.RowData.DetailListData;
            }
        }

    }
    export class ExamPackageDetailRowDomStates extends domCore.DomStates {
    }


    export class ExamPackageDetailRowDomProps extends domCore.DomProps<ExamPackageDetailRowDomVm>{
    }



}


