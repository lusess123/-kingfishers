import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import expandFile = require("./../../../Common/RowButtonExpandDom");
import dataFile = require("./../Data");


export module AnomalyGridRowDom {
    export class AnomalyGridRowDomAction extends domCore.DomAction {
    }

    export class AnomalyGridRowDomReact extends domCore.DomReact<AnomalyGridRowDomProps, AnomalyGridRowDomStates, AnomalyGridRowDomAction> implements domCore.IReact {

        public state = new AnomalyGridRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr className={this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}>
                <td  className={(this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-td" : "") }
                    style={{ left: this.props.Vm.LeftNum }} >
                    <span>{this.createSingleCheckBox() }
                        <span>{this.props.Vm.RowNumber}
                        </span>{this.createRowButtonExpand() }
                    </span>
                </td>
                <td className="hide"><span><input placeholder=".." type="hidden"></input></span></td>
                <td><span><span>{this.props.Vm.RowData.SimpleCode}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Name}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.OrderNumber}</span></span></td>
            </tr>
        }

        private createSingleCheckBox(): React.ReactElement<any> {
            return this.props.Vm.SingleCheckVm.intoDom();
        }

        private createRowButtonExpand(): React.ReactElement<any> {
            return this.props.Vm.RowButtonExpand.intoDom();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IAnomalyGridRowDomConfig {
        RowData: dataFile.Anomaly.IAnomalyData;
        IsAcsRelative: boolean;
        LeftNum: number;
        RowNumber: string;

    }

    export class AnomalyGridRowDomVm extends domCore.DomVm {
        public ReactType = AnomalyGridRowDomReact;
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowData: dataFile.Anomaly.IAnomalyData;
        public RowNumber: string;
        public RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();


        public constructor(config?: IAnomalyGridRowDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
                this.IsAcsRelative = config.IsAcsRelative;
                this.LeftNum = config.LeftNum;
                this.RowNumber = config.RowNumber;
            }
        }

    }
    export class AnomalyGridRowDomStates extends domCore.DomStates {
    }


    export class AnomalyGridRowDomProps extends domCore.DomProps<AnomalyGridRowDomVm>{
    }



}


