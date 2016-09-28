import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import expandFile = require("./../../../Common/RowButtonExpandDom");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import rowDataFlie = require("./Data");

import React = require("react");
import ReactDOM = require("react-dom");

export module ResultCommonGridRowDow {
    export class ResultCommonGridRowDowAction extends domCore.DomAction {
    }

    export class ResultCommonGridRowDowReact extends domCore.DomReact<ResultCommonGridRowDowProps, ResultCommonGridRowDowStates, ResultCommonGridRowDowAction> implements domCore.IReact {

        public state = new ResultCommonGridRowDowStates();
        public pSender(): React.ReactElement<any> {
            return <tr className={this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}>
                <td  className={(this.props.Vm.IsAcsRelative ? "  Hf-relative Hf-table-td " : "") }
                    style={{ left: this.props.Vm.LeftNum }} >
                    <span>{this.createSingleCheckBox() }
                        <span>{this.props.Vm.RowNumber}
                        </span>{this.createRowButtonExpand() }
                    </span>
                </td>
                <td className="hide"><span><input placeholder=".." type="hidden"></input></span></td>
                <td><span><span>{this.props.Vm.RowData.SimpleCode}</span></span></td>
                <td><span><span><a onClick={() => { this.fun_linkDetai(); return false; } }>{this.props.Vm.RowData.ItemId}</a></span></span></td>
                <td><span><span>{this.props.Vm.RowData.Result}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.OrderNum}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.UPDATE_TIME}</span></span></td>
            </tr>
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

        private fun_linkDetai() {
            urlFile.Core.AkUrl.Current().openUrl("$panelCommonResultDetailPage$" + this.props.Vm.RowData.FID + "$");
        }
        private createSingleCheckBox(): React.ReactElement<any> {
            return this.props.Vm.SingleCheckVm.intoDom();
        }

        private createRowButtonExpand(): React.ReactElement<any> {
            return this.props.Vm.RowButtonExpand.intoDom();
        }

    }

    export interface IResultCommonGridRowDowConfig {
        RowData: rowDataFlie.ResultCommon.IResultCommonData;
        IsAcsRelative: boolean;
        LeftNum: number;
        RowNumber: string;
    }

    export class ResultCommonGridRowDowVm extends domCore.DomVm {
        public ReactType = ResultCommonGridRowDowReact;
        public RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public RowData: rowDataFlie.ResultCommon.IResultCommonData;
        public RowNumber: string;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;

        public constructor(config?: IResultCommonGridRowDowConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
                this.IsAcsRelative = config.IsAcsRelative;
                this.LeftNum = config.LeftNum;
                this.RowNumber = config.RowNumber;
            }
        }

    }
    export class ResultCommonGridRowDowStates extends domCore.DomStates {
    }


    export class ResultCommonGridRowDowProps extends domCore.DomProps<ResultCommonGridRowDowVm>{
    }



}


