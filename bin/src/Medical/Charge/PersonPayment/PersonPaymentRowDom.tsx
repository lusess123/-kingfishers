import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import Data = require("./../../Base/Anomaly/Data");
import singleCheckFile = require("./../../../02col/02Mulite/SingleCheckBox");
export module PersonPaymentRowDom {
    export class PersonPaymentRowDomAction extends domCore.DomAction
    { }

    export class PersonPaymentRowDomReact extends domCore.DomReact<PersonPaymentRowDomProps, PersonPaymentRowDomStates, PersonPaymentRowDomAction> implements domCore.IReact {
        public state = new PersonPaymentRowDomStates(); public pSender(): React.ReactElement<any> {
            return <tr className={this.props.Vm.data.isSelect == "1" ?" Hs-tr-checked":""}>
                <td>{this.props.Vm.AllCheck.intoDom() }<span>{this.props.Vm.RowNumber}</span></td>
                <td>{this.props.Vm.data.MemberName}</td>
                <td>{this.props.Vm.data.ExamDate}</td>
                <td>{this.props.Vm.data.ChargeTime}</td>
                <td className="text-right">{this.props.Vm.data.ReceivableAmount}</td>
                <td>{this.props.Vm.data.UnitName}</td>
                <td>{this.Sender(this.props.Vm.data.ChargeStatus) }</td>
            </tr>;
        }

        public Sender(num:string): React.ReactElement<any>
        {
            switch (num) {
                case "2": return <span className="label label-default">已退费</span>;
                case "1": return <span className="label label-default">已缴费</span>;
                case "0": return <span className="label label-warning">待缴费</span>;
                default: "";
            }
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactPersonPaymentRowDomVm extends domCore.DomVm { }

    export interface IPersonPaymentRowDomConfig {
        data: Data.Anomaly.IPersonCharge;
        number: number;
        Unid?: string;
    }

    export class PersonPaymentRowDomVm extends domCore.DomVm implements IReactPersonPaymentRowDomVm {
        public ReactType = PersonPaymentRowDomReact;
        public RowNumber: string;
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public data: Data.Anomaly.IPersonCharge;
        public constructor(config?: IPersonPaymentRowDomConfig) {
            super();

            this.RowNumber = config.number.toString();
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();

            if (config) {
                this.data = config.data;
                this.UniId = config.Unid;
            }

            this.data.isSelect == undefined || this.data.isSelect == "0" ? this.AllCheck.dataValue("false") : this.AllCheck.dataValue("true");

            this.AllCheck.ChangeEventFun = (val, col) => {
                if (val == "true") {
                    this.data.isSelect = "1"
                } else if (val == "false") {
                    this.data.isSelect = "0"
                }

                this.emitAppEvent("medical/personpayment/Row", this.UniId);
                return true;
            }

        }
    }

    export class PersonPaymentRowDomStates extends domCore.DomStates { }

    export class PersonPaymentRowDomProps extends domCore.DomProps<PersonPaymentRowDomVm> { }
}