import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import singleCheckFile = require("./../../../02col/02Mulite/SingleCheckBox");
import expandFile = require("./../RowButtonExpandDom");

export module MedicalBaseGridRowDom {
    export class MedicalBaseGridRowDomAction extends domCore.DomAction {
    }

    export class MedicalBaseGridRowDomReact<P extends MedicalBaseGridRowDomProps<MedicalBaseGridRowDomVm>, S extends MedicalBaseGridRowDomStates, A extends MedicalBaseGridRowDomAction> extends domCore.DomReact<P, S, A> {


        public pSender(): React.ReactElement<any> {
            return null;
        }

        protected createFirstTd(): React.ReactElement<any> {
            return <td  className={(this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-td" : "") }
                style={{ left: this.props.Vm.LeftNum }} >
                <span>{this.createSingleCheckBox() }
                    <span>{this.props.Vm.RowNumber}
                    </span>{this.createRowButtonExpand() }
                </span>
            </td>
        }


        protected createSingleCheckBox(): React.ReactElement<any> {
            return this.props.Vm.SingleCheckVm.intoDom();
        }

        protected createRowButtonExpand(): React.ReactElement<any> {
            return this.props.Vm.RowButtonExpand.intoDom();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

    }


    export interface IMedicalBaseGridRowDomConfig {
        RowData: any;
        IsAcsRelative: boolean;
        LeftNum: number;
        RowNumber: string;
    }

    export class MedicalBaseGridRowDomVm extends domCore.DomVm {
        public ReactType = MedicalBaseGridRowDomReact;
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowNumber: string;
        public RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();
        public RowData: any;


        public constructor(config?: IMedicalBaseGridRowDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
                this.IsAcsRelative = config.IsAcsRelative;
                this.LeftNum = config.LeftNum;
                this.RowNumber = config.RowNumber;
            }
        }

    }
    export class MedicalBaseGridRowDomStates extends domCore.DomStates {
    }

    export class MedicalBaseGridRowDomProps<V extends MedicalBaseGridRowDomVm > extends domCore.DomProps<V>{
    }


}


