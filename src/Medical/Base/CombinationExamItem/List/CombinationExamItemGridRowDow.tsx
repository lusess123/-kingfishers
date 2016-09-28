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

export module CombinationExamItemGridRowDow {
    export class CombinationExamItemGridRowDowAction extends domCore.DomAction {
    }

    export class CombinationExamItemGridRowDowReact extends domCore.DomReact<CombinationExamItemGridRowDowProps, CombinationExamItemGridRowDowStates, CombinationExamItemGridRowDowAction> implements domCore.IReact {

        public state = new CombinationExamItemGridRowDowStates();
        public pSender(): React.ReactElement<any> {
            return <tr className={this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}>
                <td  className={(this.props.Vm.IsAcsRelative ? "  acsRelative  acsTableTr " : "") }
                    style={{ left: this.props.Vm.LeftNum }} >
                    <span>{this.createSingleCheckBox() }
                        <span>{this.props.Vm.RowNumber}
                        </span>{this.createRowButtonExpand() }
                    </span>
                </td>
                <td className="hide"><span><input placeholder=".." type="hidden"></input></span></td>
                <td><span><span>{this.props.Vm.RowData.ItemId}</span></span></td>
                <td><span><span><a onClick={() => { this.fun_linkDetai(); return false; } }>{this.props.Vm.RowData.PackageId}</a></span></span></td>
                <td><span><span>{this.props.Vm.RowData.UPDATE_TIME}</span></span></td>
            </tr>
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

        private fun_linkDetai() {
            urlFile.Core.AkUrl.Current().openUrl("$panelCombinationExamItemDetailPage$" + this.props.Vm.RowData.FID + "$");
        }
        private createSingleCheckBox(): React.ReactElement<any> {
            return this.props.Vm.SingleCheckVm.intoDom();
        }

        private createRowButtonExpand(): React.ReactElement<any> {
            return this.props.Vm.RowButtonExpand.intoDom();
        }

    }

    export interface ICombinationExamItemGridRowDowConfig {
        RowData: rowDataFlie.CombinationExamItem.ICombinationExamItemData;
        IsAcsRelative: boolean;
        LeftNum: number;
        RowNumber: string;
    }

    export class CombinationExamItemGridRowDowVm extends domCore.DomVm {
        public ReactType = CombinationExamItemGridRowDowReact;
        public RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public RowData: rowDataFlie.CombinationExamItem.ICombinationExamItemData;
        public RowNumber: string;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;

        public constructor(config?: ICombinationExamItemGridRowDowConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
                this.IsAcsRelative = config.IsAcsRelative;
                this.LeftNum = config.LeftNum;
                this.RowNumber = config.RowNumber;
            }
        }

    }
    export class CombinationExamItemGridRowDowStates extends domCore.DomStates {
    }


    export class CombinationExamItemGridRowDowProps extends domCore.DomProps<CombinationExamItemGridRowDowVm>{
    }



}


