﻿import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./GeneralExamTplDetailMasterRowDom");
import dataFile = require("./../Data");


export module GeneralExamTplDetailRowDom {
    export class GeneralExamTplDetailRowDomAction extends domCore.DomAction {
    }

    export class GeneralExamTplDetailRowDomReact extends domCore.DomReact<GeneralExamTplDetailRowDomProps, GeneralExamTplDetailRowDomStates, GeneralExamTplDetailRowDomAction> implements domCore.IReact {

        public state = new GeneralExamTplDetailRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="title Hu-pointer" onClick={() => { this.fun_itemTitleClick(); } }>{this.props.Vm.Index + 1}<i className={"fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "up" : "down") }></i></div>
                <div className={this.props.Vm.IsItemFormHide ? "hide" : "Hm-toggle-item"}>
                    {this.props.Vm.MasterRow.intoDom() }

                    <div className="panel">
                        <div className="panel-heading">
                            <h4 className="panel-title"><a onClick = {() => { this.fun_rowTitleClick(); } }>关联项目<i className={"fa fa-angle-" + (this.props.Vm.IsRowFormHide ? "up" : "down") }></i></a>
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
                                            <th><span>高于</span></th>
                                            <th><span>低于</span></th>
                                            <th><span>单位</span></th>
                                            <th><span>是否阳性</span></th>
                                            <th><span>关键词</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.props.Vm.DetailListData.map((data, index) => {
                                                return (<tr>
                                                    <td>{(index + 1).toString() }</td>
                                                    <td className="hide">{data.FID}</td>
                                                    <td>{data.ItemName}</td>
                                                    <td>{data.GreaterThan}</td>
                                                    <td>{data.LessThan}</td>
                                                    <td>{data.Unit}</td>
                                                    <td>{data.IsPositive}</td>
                                                    <td>{data.KeyWord}</td>
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

    export interface IGeneralExamTplDetailRowDomConfig {
        DetailListData: dataFile.GeneralExamTpl.IGeneralExamTplItemData[];
        MasterConfig: masterRowFile.GeneralExamTplDetailMasterRowDom.IGeneralExamTplDetailMasterRowDomConfig;

    }


    export class GeneralExamTplDetailRowDomVm extends domCore.DomVm {
        public ReactType = GeneralExamTplDetailRowDomReact;
        public MasterRow: masterRowFile.GeneralExamTplDetailMasterRowDom.GeneralExamTplDetailMasterRowDomVm;
        public Index: number;
        public DetailListData: dataFile.GeneralExamTpl.IGeneralExamTplItemData[] = [];
        public IsRowFormHide: boolean;
        public IsItemFormHide: boolean;


        public constructor(config?: IGeneralExamTplDetailRowDomConfig) {
            super();
            if (config) {
                this.MasterRow = new masterRowFile.GeneralExamTplDetailMasterRowDom.GeneralExamTplDetailMasterRowDomVm(config.MasterConfig);
                this.DetailListData = config.DetailListData;
            }
        }

    }
    export class GeneralExamTplDetailRowDomStates extends domCore.DomStates {
    }


    export class GeneralExamTplDetailRowDomProps extends domCore.DomProps<GeneralExamTplDetailRowDomVm>{
    }



}


