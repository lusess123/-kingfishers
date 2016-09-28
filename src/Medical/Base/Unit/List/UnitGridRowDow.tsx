import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import expandFile = require("./../../../Common/RowButtonExpandDom");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import rowDataFlie = require("./../Data");
import constantData = require("./../../../Common/Data")
import React = require("react");
import ReactDOM = require("react-dom");

export module UnitGridRowDow {
    export class UnitGridRowDowAction extends domCore.DomAction {
    }

    export class UnitGridRowDowReact extends domCore.DomReact<UnitGridRowDowProps, UnitGridRowDowStates, UnitGridRowDowAction> implements domCore.IReact {

        public state = new UnitGridRowDowStates();
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
                <td><span><span>{this.props.Vm.RowData.Code}</span></span></td>
                <td><span><span><a onClick={() => { this.fun_linkDetai(); return false; } }>{this.props.Vm.RowData.Name}</a></span></span></td>
                <td><span><span>{this.props.Vm.RowData.ContactPerson}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Phone}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Fax}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Email}</span></span></td>
                <td><span><span>{this.props.Vm.GetText(constantData.Data.UnitTypeData,this.props.Vm.RowData.Type)}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Address}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Description}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.UPDATE_TIME}</span></span></td>
            </tr>
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

        private fun_linkDetai() {
            urlFile.Core.AkUrl.Current().openUrl("$panelUnitDetailPage$" + this.props.Vm.RowData.FID + "$");
        }
        private createSingleCheckBox(): React.ReactElement<any> {
            return this.props.Vm.SingleCheckVm.intoDom();
        }

        private createRowButtonExpand(): React.ReactElement<any> {
            return this.props.Vm.RowButtonExpand.intoDom();
        }

    }

    export interface IUnitGridRowDowConfig {
        RowData: rowDataFlie.Unit.IUnitData;
        IsAcsRelative: boolean;
        LeftNum: number;
        RowNumber: string;
    }

    export class UnitGridRowDowVm extends domCore.DomVm {
        public ReactType = UnitGridRowDowReact;
        public RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public RowData: rowDataFlie.Unit.IUnitData;
        public RowNumber: string;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;

        public constructor(config?: IUnitGridRowDowConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
                this.IsAcsRelative = config.IsAcsRelative;
                this.LeftNum = config.LeftNum;
                this.RowNumber = config.RowNumber;
            }
        }
        public GetText(List: any, Id: number): string {
            for (var index = 0; index < List.length; index++) {
                if (List[index].Value == Id) {
                    return List[index].Text;
                }
            }
            return ""
        }
    }
    export class UnitGridRowDowStates extends domCore.DomStates {
    }


    export class UnitGridRowDowProps extends domCore.DomProps<UnitGridRowDowVm>{
    }



}


