import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import Data = require("./../Data");
import expandFile = require("./../../../Common/RowButtonExpandDom");

export module ExamItemGirdRow {
    export class ExamItemGirdRowAction extends domCore.DomAction { }

    export class ExamItemGirdRowReact extends domCore.DomReact<ExamItemGirdRowProps, ExamItemGirdRowStates, ExamItemGirdRowAction> implements domCore.IReact {
        public state = new ExamItemGirdRowStates();

        public pSender(): React.ReactElement<any> {
            return <tr className={this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}>
                <td className={(this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-td" : "") } style={{ left: this.props.Vm.LeftNum }}>
                    <span>{this.createSingleCheckBox()}
                        <span>{this.props.Vm.RowNumber}
                        </span>{this.createRowButtonExpand()}
                    </span>
                </td>
                <td className="hide"><span><input placeholder=".." type="hidden"></input></span></td>
                <td><span><span><a onClick={() => { this.fun_linkDetai(); return false; } }>{this.props.Vm.RowData.SimpleCode}</a></span></span></td>
                <td><span><span>{this.props.Vm.RowData.ItemCode}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Name}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.DepartmentId}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.ItemCategory}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Unit}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.UpperLimit}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.LowerLimit}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Price}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Order}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.ResultClass}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.Remark}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.UPDATE_TIME}</span></span></td>
            </tr>
        }

        private fun_linkDetai() {
            urlFile.Core.AkUrl.Current().openUrl("$panelExamItemDetailPage$" + this.props.Vm.RowData.FID + "$");
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

    export interface ExamItemGirdRowConfig {
        RowData: Data.ExamItem.IExamItemData;
        IsAcsRelative: boolean;
        LeftNum: number;
        RowNumber: string;
    }

    export class ExamItemGirdRowVm extends domCore.DomVm {
        public ReactType = ExamItemGirdRowReact;

        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public IsAcsRelative: boolean = false;
        public RowData: Data.ExamItem.IExamItemData;
        public RowNumber: string;
        public LeftNum: number = 0;

        public RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();

        public constructor(config?: ExamItemGirdRowConfig) {
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

    export class ExamItemGirdRowStates extends domCore.DomStates { }

    export class ExamItemGirdRowProps extends domCore.DomProps<ExamItemGirdRowVm>{ }
}