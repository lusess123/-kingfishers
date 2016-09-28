import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

export module TeamPayMentRowBtnDom {
    export class TeamPayMentRowBtnDomAction extends domCore.DomAction
    { }

    export class TeamPayMentRowBtnDomReact extends domCore.DomReact<TeamPayMentRowBtnDomProps, TeamPayMentRowBtnDomStates, TeamPayMentRowBtnDomAction> implements domCore.IReact {
        public state = new TeamPayMentRowBtnDomStates();
        public pSender(): React.ReactElement<any> {
            return <div className="YSm-table-btngroup">
                <a className="btn btn-sm btn-danger">￥缴费</a>
                <a className="btn btn-sm btn-secondary">团体退款</a>
                <div className="btn-group btn-group-sm">
                    <a type="button" className="btn btn-primary-outline">删除</a>
                </div>
            </div>;
        }
        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactTeamPayMentRowBtnDomVm extends domCore.DomVm
    { }

    export interface ITeamPayMentRowBtnDomConfig
    {
        UniId: string;
    }

    export class TeamPayMentRowBtnDomVm extends domCore.DomVm implements IReactTeamPayMentRowBtnDomVm {

        public ReactType = TeamPayMentRowBtnDomReact;

        public constructor(config?: ITeamPayMentRowBtnDomConfig)
        {
            super();
            if (config)
            {
                this.UniId = config.UniId;
            }
            
        }

    }

    export class TeamPayMentRowBtnDomStates extends domCore.DomStates { }

    export class TeamPayMentRowBtnDomProps extends domCore.DomProps<TeamPayMentRowBtnDomVm> { }
}