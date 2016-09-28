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


export module CensusDoctorGridRowDom {
    export class CensusDoctorGridRowDomAction extends domCore.DomAction {
    }

    export class CensusDoctorGridRowDomReact extends domCore.DomReact<CensusDoctorGridRowDomProps, CensusDoctorGridRowDomStates, CensusDoctorGridRowDomAction> implements domCore.IReact {

        public state = new CensusDoctorGridRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr className={this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}>
                <td  className={(this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-td" : "") }
                    style={{ left: this.props.Vm.LeftNum }} >
                    <span>
                        <span>{this.props.Vm.RowNumber}
                        </span>
                    </span>
                </td>
                <td className="hide"><span><input placeholder=".." type="hidden"></input></span></td>
                <td><span><span>{this.props.Vm.RowData.DoctorName}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Department}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.DoctorType}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.ExamPeople}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.ExamDate}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.InputTime}</span></span></td>

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

    export interface ICensusDoctorGridRowDomConfig {
        RowData: dataFile.CensusDoctor.ICensusDoctorData;
        IsAcsRelative: boolean;
        LeftNum: number;
        RowNumber: string;

    }

    export class CensusDoctorGridRowDomVm extends domCore.DomVm {
        public ReactType = CensusDoctorGridRowDomReact;
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowData: dataFile.CensusDoctor.ICensusDoctorData;
        public RowNumber: string;
        public RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();


        public constructor(config?: ICensusDoctorGridRowDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
                this.IsAcsRelative = config.IsAcsRelative;
                this.LeftNum = config.LeftNum;
                this.RowNumber = config.RowNumber;
            }
        }

    }
    export class CensusDoctorGridRowDomStates extends domCore.DomStates {
    }


    export class CensusDoctorGridRowDomProps extends domCore.DomProps<CensusDoctorGridRowDomVm>{
    }



}


