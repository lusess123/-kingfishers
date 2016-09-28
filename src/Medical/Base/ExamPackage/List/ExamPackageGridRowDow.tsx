import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import expandFile = require("./../../../Common/RowButtonExpandDom");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import rowDataFlie = require("./../Data");

import React = require("react");
import ReactDOM = require("react-dom");

export module ExamPackageGridRowDow {
    export class ExamPackageGridRowDowAction extends domCore.DomAction {
    }

    export class ExamPackageGridRowDowReact extends domCore.DomReact<ExamPackageGridRowDowProps, ExamPackageGridRowDowStates, ExamPackageGridRowDowAction> implements domCore.IReact {

        public state = new ExamPackageGridRowDowStates();
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
                <td><span><span><a onClick={() => { this.fun_linkDetai(); return false; } }>{this.props.Vm.RowData.Name}</a></span></span></td>
                <td><span><span>{this.props.Vm.RowData.GroupPrice}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.IndividualPrice}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.AgeUpperLimit}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.AgeLowerLimit}</span></span></td>
                <td><span><span>{ this.props.Vm.GetGenderText(this.props.Vm.RowData.Gender)}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Remark}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.UPDATE_TIME}</span></span></td>
            </tr>
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

        private fun_linkDetai() {
            urlFile.Core.AkUrl.Current().openUrl("$panelExamPackageDetailPage$" + this.props.Vm.RowData.FID + "$");
        }
        private createSingleCheckBox(): React.ReactElement<any> {
            return this.props.Vm.SingleCheckVm.intoDom();
        }

        private createRowButtonExpand(): React.ReactElement<any> {
            return this.props.Vm.RowButtonExpand.intoDom();
        }

    }
      
    export interface IExamPackageGridRowDowConfig {
        RowData: rowDataFlie.ExamPackage.IExamPackageData;
        IsAcsRelative: boolean;
        LeftNum: number;
        RowNumber: string;
    }
    
    export class ExamPackageGridRowDowVm extends domCore.DomVm {
        public ReactType = ExamPackageGridRowDowReact;
        public RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public RowData: rowDataFlie.ExamPackage.IExamPackageData;
        public RowNumber: string;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;

        public constructor(config?: IExamPackageGridRowDowConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
                this.IsAcsRelative = config.IsAcsRelative;
                this.LeftNum = config.LeftNum;
                this.RowNumber = config.RowNumber;
            }
        }
        public GetGenderText(Id: number): string
        {
            var List = rowDataFlie.ExamPackage.ExamPackageGenderData;
            for (var index = 0; index < List.length; index++)
            {
                if (List[index].Value == Id)
                {
                    return List[index].Text;
                }
            }
            return""
        }

    }
    export class ExamPackageGridRowDowStates extends domCore.DomStates {
    }


    export class ExamPackageGridRowDowProps extends domCore.DomProps<ExamPackageGridRowDowVm>{
    }



}


