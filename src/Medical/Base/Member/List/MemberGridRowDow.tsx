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
import constantData = require("./../../../Common/Data")

export module MemberGridRowDow {
    export class MemberGridRowDowAction extends domCore.DomAction {
    }

    export class MemberGridRowDowReact extends domCore.DomReact<MemberGridRowDowProps, MemberGridRowDowStates, MemberGridRowDowAction> implements domCore.IReact {

        public state = new MemberGridRowDowStates();
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
                <td><span><span>{this.props.Vm.RowData.FileNumber}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.UnitId}</span></span></td>
                <td><span><span><a onClick={() => { this.fun_linkDetai(); return false; } }>{this.props.Vm.RowData.Name}</a></span></span></td>
                <td><span><span>{this.props.Vm.GetText(constantData.Data.GenderTypeData, this.props.Vm.RowData.Gender) }</span></span></td>
                <td><span><span>{this.props.Vm.RowData.BirthDate}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Age}</span></span></td>
                <td><span><span>{this.props.Vm.GetText(constantData.Data.MaritalTypeData, this.props.Vm.RowData.MaritalStatus) }</span></span></td>
                <td><span><span>{this.props.Vm.GetText(constantData.Data.NationTypeData, this.props.Vm.RowData.Nation) }</span></span></td>
                <td><span><span>{this.props.Vm.RowData.NativePlace}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.IDCard}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.WorkUnit}</span></span></td>
                <td><span><span>{this.props.Vm.GetText(constantData.Data.JobTypeData, this.props.Vm.RowData.Job)}</span></span></td>
                <td><span><span>{this.props.Vm.GetText(constantData.Data.JobTitleTypeData, this.props.Vm.RowData.JobTitle) }</span></span></td>
                <td><span><span>{this.props.Vm.GetText(constantData.Data.MemberTypeData, this.props.Vm.RowData.MemberType) }</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Address}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Phone}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.PastMedicalHistory}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.FamilyMedicalHistory}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.ExamCount}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Remark}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.UPDATE_TIME}</span></span></td>
            </tr>
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

        private fun_linkDetai() {
            urlFile.Core.AkUrl.Current().openUrl("$panelMemberDetailPage$" + this.props.Vm.RowData.FID + "$");
        }
        private createSingleCheckBox(): React.ReactElement<any> {
            return this.props.Vm.SingleCheckVm.intoDom();
        }

        private createRowButtonExpand(): React.ReactElement<any> {
            return this.props.Vm.RowButtonExpand.intoDom();
        }

    }

    export interface IMemberGridRowDowConfig {
        RowData: rowDataFlie.Member.IMemberData;
        IsAcsRelative: boolean;
        LeftNum: number;
        RowNumber: string;
    }

    export class MemberGridRowDowVm extends domCore.DomVm {
        public ReactType = MemberGridRowDowReact;
        public RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public RowData: rowDataFlie.Member.IMemberData;
        public RowNumber: string;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public constructor(config?: IMemberGridRowDowConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
                this.IsAcsRelative = config.IsAcsRelative;
                this.LeftNum = config.LeftNum;
                this.RowNumber = config.RowNumber;
            }
        }
        public GetText(List:any, Id: number): string {
            for (var index = 0; index < List.length; index++) {
                if (List[index].Value == Id) {
                    return List[index].Text;
                }
            }
            return ""
        }

    }
    export class MemberGridRowDowStates extends domCore.DomStates {
    }


    export class MemberGridRowDowProps extends domCore.DomProps<MemberGridRowDowVm>{
    }



}


