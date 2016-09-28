import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import dataFile = require("./../Data");


export module ReportProcurementGridRowDom {
    export class ReportProcurementGridRowDomAction extends domCore.DomAction {
    }

    export class ReportProcurementGridRowDomReact extends domCore.DomReact<ReportProcurementGridRowDomProps, ReportProcurementGridRowDomStates, ReportProcurementGridRowDomAction> implements domCore.IReact {

        public state = new ReportProcurementGridRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr className={this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}>

                {this.props.Vm.ColList.map((col) => {
                    return <td><span><span> {this.props.Vm.RowData[col]}</span></span></td>
                }) }
            </tr>
        }

        private createSingleCheckBox(): React.ReactElement<any> {
            return this.props.Vm.SingleCheckVm.intoDom();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReportProcurementGridRowDomConfig {
        RowData: any;
        IsAcsRelative: boolean;
        LeftNum: number;
        RowNumber: string;
        ColList: string[];
    }

    export class ReportProcurementGridRowDomVm extends domCore.DomVm {
        public ReactType = ReportProcurementGridRowDomReact;
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowData: any;
        public RowNumber: string;
        public ColList: string[];


        public constructor(config?: IReportProcurementGridRowDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
                this.IsAcsRelative = config.IsAcsRelative;
                this.LeftNum = config.LeftNum;
                this.RowNumber = config.RowNumber;
                this.ColList = config.ColList;
            }
        }

    }
    export class ReportProcurementGridRowDomStates extends domCore.DomStates {
    }


    export class ReportProcurementGridRowDomProps extends domCore.DomProps<ReportProcurementGridRowDomVm>{
    }



}


