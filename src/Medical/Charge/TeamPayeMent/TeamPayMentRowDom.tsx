import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import Data = require("./../../Base/Anomaly/Data");
import singleCheckFile = require("./../../../02col/02Mulite/SingleCheckBox");
export module TeamPayMentRowDom {
    export class TeamPayMentRowDomAction extends domCore.DomAction
    { }

    export class TeamPayMentRowDomReact extends domCore.DomReact<TeamPayMentRowDomProps, TeamPayMentRowDomStates, TeamPayMentRowDomAction> implements domCore.IReact {
        public state = new TeamPayMentRowDomStates(); public pSender(): React.ReactElement<any> {
            return <tr className={this.props.Vm.data.isSelect == "1" ? " Hs-tr-checked" : ""}>
                <td>{this.props.Vm.AllCheck.intoDom() }<span>{this.props.Vm.RowNumber}</span></td>
                <td>{this.props.Vm.data.Bath}</td>
                <td>{this.props.Vm.data.ExamDate}</td>
                <td>{this.props.Vm.data.ChargeTime}</td>
                <td className="text-right">{this.props.Vm.data.ReceivableAmount}</td>
                <td>{this.props.Vm.data.UnitName}</td>
          
                <td>{this.Sender(this.props.Vm.data.ChargeStatus)}</td>
            </tr>;
        }
        //      <td>{this.ExamSender(this.props.Vm.data.ExamStatus) }</td>
         public Sender(num:string): React.ReactElement<any>
        {
            switch (num) {
                case "2": return <span className="label label-default">已退费</span>;
                case "1": return <span className="label label-default">已缴费</span>;
                case "0": return <span className="label label-warning">待缴费</span>;
                default: "";
            }
        }

         public ExamSender(num: string): React.ReactElement<any> {
             switch (num) {
                 case "4": return <span className="label label-default">正在体检</span>;
                 case "5": return <span className="label label-default">待总检</span>;
                 case "6": return <span className="label label-warning">已总检</span>;
                 case "6": return <span className="label label-warning">已审查</span>;
                 default: return <span className="label label-warning">未完成</span>;
             }
         }


        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactTeamPayMentRowDomVm extends domCore.DomVm { }

    export interface ITeamPayMentRowDomConfig {
        data: Data.Anomaly.ITeamCharge;
        number: number;
        Unid?: string;
    }




    export class TeamPayMentRowDomVm extends domCore.DomVm implements IReactTeamPayMentRowDomVm {
        public ReactType = TeamPayMentRowDomReact;
        public RowNumber: string;
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public data: Data.Anomaly.ITeamCharge;
        public constructor(config?: ITeamPayMentRowDomConfig) {
            super();
            this.data = config.data;
            this.UniId = config.Unid;
            this.RowNumber = config.number.toString();
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();

            this.data.isSelect == undefined || this.data.isSelect == "0" ? this.AllCheck.dataValue("false") : this.AllCheck.dataValue("true");

            this.AllCheck.ChangeEventFun = (val, col) => {
                if (val == "true") {
                    this.data.isSelect = "1"
                } else if (val == "false") {
                    this.data.isSelect = "0"
                }
                this.emitAppEvent("medical/teampayment/Row", this.UniId);
                return true;
            }
        }
    }

    export class TeamPayMentRowDomStates extends domCore.DomStates { }

    export class TeamPayMentRowDomProps extends domCore.DomProps<TeamPayMentRowDomVm> { }
}