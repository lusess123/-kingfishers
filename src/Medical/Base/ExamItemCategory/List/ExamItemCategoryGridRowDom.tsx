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

export module ExamItemCategoryGridRowDom {
    export class EExamItemCategoryGridRowDomAction extends domCore.DomAction { }

    export class ExamItemCategoryGridRowDomReact extends domCore.DomReact<ExamItemCategoryGridRowDomProps, ExamItemCategoryGridRowDomStates, EExamItemCategoryGridRowDomAction> implements domCore.IReact {
        public state = new ExamItemCategoryGridRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr className={this.props.Vm.SingleCheckVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}>
                <td  className={(this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-td " : "") }
                    style={{ left: this.props.Vm.LeftNum }} >
                    <span>{this.createSingleCheckBox() }
                        <span>{this.props.Vm.RowNumber}
                        </span>{this.createRowButtonExpand() }
                    </span>
                </td>
                <td className="hide"><span><input placeholder=".." type="hidden"></input></span></td>
                <td><span><span><a onClick={() => { this.fun_linkDetai(); return false; } }>{this.props.Vm.RowData.Code}</a></span></span></td>
                <td><span><span>{this.props.Vm.RowData.Name}</span></span></td>
                <td><span><span>{this.props.Vm.RowData.UPDATE_TIME}</span></span></td>
            </tr>
        }


        private fun_linkDetai() {
            urlFile.Core.AkUrl.Current().openUrl("$panelUserDetailPage$" + this.props.Vm.RowData.FID + "$");
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

    export interface ExamItemCategoryGridRowDomConfig {
        RowData: dataFile.ExamItemCategory.ExamItemCategoryData;
        IsAcsRelative: boolean;
        LeftNum: number;
        RowNumber: string;
    }

    export class ExamItemCategoryGridRowDomVm extends domCore.DomVm {
        public ReactType = ExamItemCategoryGridRowDomReact;

        public RowNumber: string;
        public LeftNum: number = 0;
        public IsAcsRelative: boolean = false;

        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();

        public RowData: dataFile.ExamItemCategory.ExamItemCategoryData;

        public constructor(config?: ExamItemCategoryGridRowDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
                this.IsAcsRelative = config.IsAcsRelative;
                this.LeftNum = config.LeftNum;
                this.RowNumber = config.RowNumber;
            }
        }
    }

    export class ExamItemCategoryGridRowDomStates extends domCore.DomStates { }

    export class ExamItemCategoryGridRowDomProps extends domCore.DomProps<ExamItemCategoryGridRowDomVm>{ }
}