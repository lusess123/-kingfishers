import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import expandFile = require("./../../../Common/RowButtonExpandDom");
import Data = require("./../Data");

export namespace DepartGirdRow {
    export class DepartGirdRowAction extends domCore.DomAction { }

    export class DepartGirdRowReact extends domCore.DomReact<DepartGirdRowProps, DepartGirdRowStates, DepartGirdRowAction> implements
        domCore.IReact{

        public state = new DepartGirdRowStates();

        public pSender(): React.ReactElement<any>{
            return <tr className={this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}>
                <td className={(this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-td" : "") } style={{ left: this.props.Vm.LeftNum }}>
                    <span>{this.createSingleCheckBox() }
                        <span>{this.props.Vm.RowNumber}
                        </span>{this.createRowButtonExpand()}
                    </span>
                </td>
                <td className="hide"><span><input placeholder=".." type="hidden"></input></span></td>
                <td><span></span>{this.props.Vm.RowData.SimpleCode}</td>
                <td><span><span><a onClick={() => { this.fun_linkDetai(); return false; } }>{this.props.Vm.RowData.FName}</a></span></span></td>
                <td><span></span>{this.props.Vm.RowData.FNumber}</td>
                <td><span></span>{this.props.Vm.RowData.DeptType}</td>
                <td><span></span>{this.props.Vm.RowData.Description}</td>
                <td><span></span>{this.props.Vm.RowData.Remark}</td>
                <td><span><span>{this.props.Vm.RowData.UPDATE_TIME}</span></span></td>
                </tr>  
        }

        private fun_linkDetai() {
            urlFile.Core.AkUrl.Current().openUrl("$panelDepartDetailPage$" + this.props.Vm.RowData.FID + "$");
        }

        private createSingleCheckBox(): React.ReactElement<any> {
            return this.props.Vm.SingleCheckVm.intoDom();
        }

        public createRowButtonExpand(): React.ReactElement<any> {
            return this.props.Vm.RowButtonExpand.intoDom();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();
        }

    }
    export interface DepartGirdRowConfig {
        RowData: Data.MRP_Departments.Department;
        IsAcsRelative: boolean;
        LeftNum: number;
        RowNumber: string;
    }

    export class DepartGirdRowVm extends domCore.DomVm {
        public ReactType = DepartGirdRowReact;
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowData: Data.MRP_Departments.Department;
        public RowNumber: string;

        public RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();

        public constructor(config?: DepartGirdRowConfig) {
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
    export class DepartGirdRowStates extends domCore.DomStates { }

    export class DepartGirdRowProps extends domCore.DomProps<DepartGirdRowVm>{ }
}