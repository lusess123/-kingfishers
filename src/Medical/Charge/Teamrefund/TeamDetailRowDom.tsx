import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import DataFile = require("./../../Base/Anomaly/Data");

export module TeamDetailRowDom {
    export class TeamDetailRowDomAction extends domCore.DomAction { }

    export class TeamDetailRowDomReact extends domCore.DomReact<TeamDetailRowDomProps, TeamDetailRowDomStates, TeamDetailRowDomAction> implements domCore.IReact {
        public state = new TeamDetailRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td>{this.props.Vm.Data.MemberName}</td>
                <td>{this.props.Vm.Data.GroupName}</td>
                <td>{this.props.Vm.Data.ExamNumber}</td>
                <td>{this.Send(this.props.Vm.Data.status)}</td>
            </tr>;
        }

        public Send(num: string): React.ReactElement<any>
        {
            switch (num)
            {
                case null:
                case "0": return <span className="label label-warning">未检</span>;
                case "1": return <span className="label label-warning">已预约</span>;
                case "2": return <span className="label label-warning">未缴费</span>;
                case "3": return <span className="label label-warning">未开始</span>;
                case "4": return <span className="label label-warning">体检中</span>;
                case "5": return <span className="label label-warning">待总检</span>;
                case "6": return <span className="label label-warning">已总检</span>;
                case "7": return <span className="label label-default">已退款</span>;
                case "8": return <span className="label label-default">已审查</span>;
            }
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactTeamDetailRowDomVm extends domCore.DomVm {
        Data: DataFile.Anomaly.TeamChagreData
    }

    export interface ITeamDetailRowDomConfig {
        Data: DataFile.Anomaly.TeamChagreData
        index: number
    }

    export class TeamDetailRowDomVm extends domCore.DomVm implements IReactTeamDetailRowDomVm {
        public ReactType = TeamDetailRowDomReact;

        public Data: DataFile.Anomaly.TeamChagreData;

        public constructor(config?: ITeamDetailRowDomConfig) {
            super();
            if (config)
            {
                this.Data = config.Data;
            }
        }
    }

    export class TeamDetailRowDomStates extends domCore.DomStates { }

    export class TeamDetailRowDomProps extends domCore.DomProps<IReactTeamDetailRowDomVm> { }
}