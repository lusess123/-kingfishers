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
import constantData = require("./../../../Common/Data")


export module CensusDieaseGridRowDom {
    export class CensusDieaseGridRowDomAction extends domCore.DomAction {
    }

    export class CensusDieaseGridRowDomReact extends domCore.DomReact<CensusDieaseGridRowDomProps, CensusDieaseGridRowDomStates, CensusDieaseGridRowDomAction> implements domCore.IReact {

        public state = new CensusDieaseGridRowDomStates();

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
                <td><span><span>{this.props.Vm.RowData.Number}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Name}</span></span></td>
                <td><span><span>{this.props.Vm.GetText(constantData.Data.GenderTypeData, this.props.Vm.RowData.Gender)}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.ExamDate}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.DieaseName}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.DoctorName}</span></span></td>
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

    export interface ICensusDieaseGridRowDomConfig {
        RowData: dataFile.CensusDiease.ICensusDieaseData;
        IsAcsRelative: boolean;
        LeftNum: number;
        RowNumber: string;

    }

    export class CensusDieaseGridRowDomVm extends domCore.DomVm {
        public ReactType = CensusDieaseGridRowDomReact;
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowData: dataFile.CensusDiease.ICensusDieaseData;
        public RowNumber: string;
        public RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();


        public constructor(config?: ICensusDieaseGridRowDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
                this.IsAcsRelative = config.IsAcsRelative;
                this.LeftNum = config.LeftNum;
                this.RowNumber = config.RowNumber;
            }
        }
        public GetText(List: any, Id: string): string {
            for (var index = 0; index < List.length; index++) {
                if (List[index].Value == Id) {
                    return List[index].Text;
                }
            }
            return ""
        }

    }
    export class CensusDieaseGridRowDomStates extends domCore.DomStates {
    }


    export class CensusDieaseGridRowDomProps extends domCore.DomProps<CensusDieaseGridRowDomVm>{
    }



}


