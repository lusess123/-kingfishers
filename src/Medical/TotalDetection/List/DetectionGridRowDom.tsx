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
import insertTalbFile = require("./DetectionGridRowDom");
export module DetectionRowDom {
    export class DetectionRowDomAction extends domCore.DomAction {
    }

    export class DetectionRowDomReact extends domCore.DomReact<DetectionRowDomProps, DetectionRowDomStates, DetectionRowDomAction> implements domCore.IReact {

        public state = new DetectionRowDomStates();

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
                <tr className={this.props.Vm.SingleCheckboxVm.vmDataValueGet() == "true" ? "acs-check-bg  Hs-tr-checked" : ""}>

                    <td className="hide"><span><input placeholder=".." type="hidden"></input></span></td>
                    <td>{this.createSingelCheckBox() }<span>{this.props.Vm.RowNumber}</span></td>
                    <td>{this.props.Vm.RowData.MemberName}</td>
                    <td>{this.props.Vm.RowData.IDCard}</td>
                    <td>{this.props.Vm.RowData.ExamNumber}</td>
                    <td>{this.props.Vm.RowData.FileNumber}</td>
                    <td>{this.props.Vm.RowData.UnitName}</td>
                    <td><span className={this.props.Vm.statusStyle}>{this.props.Vm.status() }</span></td>
                </tr>
            )
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
    }

    export interface IDetectionRowConfig {
        RowData: dataFile.DetectionData.DetectionData;
        IsAcsRelative: boolean;
        RowNumber: string;
    }

    export class DetectionRowDomVm extends domCore.DomVm {
        public ReactType = DetectionRowDomReact;
        public SingleCheckboxVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public RowNumber: string;
        public IsAcsRelative: boolean = false;
        public RowButtonExpand = new expandFile.RowButtonExpandDom.RowButtonExpandDomVm();
        public RowData: dataFile.DetectionData.DetectionData;
        public statusStyle: string;
        public constructor(config?: IDetectionRowConfig) {

           
            super();
            if (config) {
                this.RowData = config.RowData;
                this.IsAcsRelative = config.IsAcsRelative;
                this.RowNumber = config.RowNumber;
            }
            var styles = this.RowData.Status;
            if (styles == "2") {
                this.statusStyle = "statu-span status-a";
            }
            if (styles == "3") {
                this.statusStyle = "statu-span status-a";
            }
            if (styles == "4") {
                this.statusStyle = "statu-span status-a";
            }
            if (styles == "5") {
                this.statusStyle = "statu-span status-b";
            }
            if (styles == "6") {
                this.statusStyle = "statu-span status-c";
            }
            if (styles == "7") {
                this.statusStyle = "statu-span status-b";
            }
            if (styles == "8") {
                this.statusStyle = "statu-span status-a";
            }
        }
        public status() {
            var status = this.RowData.Status;
            switch (status) {
                case "2":
                    return "未缴费";
                case "3":
                    return "未开始";
                case "4":
                    return "体检中";
                case "5":
                    return "待总检";
                case "6":
                    return "已总检";
                case "7":
                    return "已退款";
                case "8":
                    return "已审核";
               
            }
        }

    }
    export class DetectionRowDomStates extends domCore.DomStates { }
    export class DetectionRowDomProps extends domCore.DomProps<DetectionRowDomVm>{ }



}
