import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import singleCheckFile = require("./../../../02col/02Mulite/SingleCheckBox");
import dataFile = require("./../data");
import expandFile = require("./../../Common/RowButtonExpandDom");
import insertTalbFile = require("./insertTableDom");
export module InsertRowDom {
    export class InsertRowDomAction extends domCore.DomAction {
    }

    export class InsertRowDomReact extends domCore.DomReact<InsertRowDomProps, InsertRowDomStates, InsertRowDomAction> implements domCore.IReact {

        public state = new InsertRowDomStates();

        public pSender(): React.ReactElement<any> {
            var gridRow = this.creatRow();
            return gridRow;
        }
        private createSingelCheckBox(): React.ReactElement<any> {
            return this.props.Vm.SingleCheckboxVm.intoDom();
        }
        private createRowButtonExpand(): React.ReactElement<any> {
            return this.props.Vm.RowButtonExpand.intoDom();
        }
        public creatRow(): React.ReactElement<any> {
            return (
                <tr className={this.props.Vm.SingleCheckboxVm.vmDataValueGet() == "true" ? "acs-check-bg" : ""}>
                    
                    <td className="hide"><span><input placeholder=".." type="hidden"></input></span></td>
                    <td>{this.createSingelCheckBox() }<span>{this.props.Vm.RowNumber}</span></td>
                    <td>{this.props.Vm.RowData.Name}</td>
                    <td>{this.props.Vm.RowData.IDCard}</td>
                    <td>{this.props.Vm.RowData.ExamCode}</td>
                    <td>{this.props.Vm.RowData.RecordID}</td>
                    <td>{this.props.Vm.RowData.Unit}</td>
                    <td>{this.sendStatus(this.props.Vm.RowData.State)}</td>
                </tr>
            )
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

        public sendStatus(status: number)
        {
            switch (status)
            {
                case 1: return <span className="label label-default">体检中</span>;
                case 2: return <span className="label label-default">已检未录入</span>;
                case 3: return <span className="label label-default">已录入</span>;
                default: return null;
            }
        }
    }

    export interface IInsertRowConfig {
        RowData: dataFile.Result.IInsertData;
        IsAcsRelative: boolean;
        RowNumber: string;
    }

    export class InsertRowDomVm extends domCore.DomVm {
        public ReactType = InsertRowDomReact;
        public SingleCheckboxVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public RowNumber: string;
        public IsAcsRelative: boolean = false;
        public RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();
        public RowData: dataFile.Result.IInsertData;
        //public InsertRowObj: insertTalbFile.InsertTableDom.InsertTableDomVm;
        public constructor(config?: IInsertRowConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
                this.IsAcsRelative = config.IsAcsRelative;
                this.RowNumber = config.RowNumber;
            }
        }

    }
    export class InsertRowDomStates extends domCore.DomStates { }
    export class InsertRowDomProps extends domCore.DomProps<InsertRowDomVm>{ }



}
