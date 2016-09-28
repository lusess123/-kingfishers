import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import Data = require("./../../Base/Anomaly/Data");

export module PersonChargeRowDom {
    export class PersonChargeRowDomAction extends domCore.DomAction { }

    export class PersonChargeRowDomReact extends domCore.DomReact<PersonChargeRowDomProps, PersonChargeRowDomStates, PersonChargeRowDomAction> implements domCore.IReact {
        public state = new PersonChargeRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td>{this.props.Vm.number}</td>
                <td>{this.props.Vm.Data.ExamItemName}</td>
                <td className="text-right">{this.props.Vm.Data.ReceivableAmount}</td>
                <td>{this.SenderStatus(this.props.Vm.Data.ExamStatus) }</td>
            </tr>;
        }

        public SenderStatus(num: string): React.ReactElement<any> {
            switch (num) {
                case "0": return <span className="label label-default">未检查</span>;
                case "1": return <span className="label label-default">已检查</span>;
                case "2": return <span className="label label-default">已录入</span>;
                case "3": return <span className="label label-default">已退款</span>;
                default: return <span></span>;
            }
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactPersonChargeRowDomVm extends domCore.DomVm { }

    export interface IPersonChargeRowDomConfig {
        Data: Data.Anomaly.IPersonPay;
        RowNumber: number;
    }

    export class PersonChargeRowDomVm extends domCore.DomVm implements IReactPersonChargeRowDomVm {

        public ReactType = PersonChargeRowDomReact;
        public Data: Data.Anomaly.IPersonPay;
        public number: number;
        public constructor(config?: IPersonChargeRowDomConfig) {
            super();
            if (config) {
                this.Data = config.Data;
                this.number = config.RowNumber;
            }
        }
    }

    export class PersonChargeRowDomStates extends domCore.DomStates { }

    export class PersonChargeRowDomProps extends domCore.DomProps<PersonChargeRowDomVm> { }
}