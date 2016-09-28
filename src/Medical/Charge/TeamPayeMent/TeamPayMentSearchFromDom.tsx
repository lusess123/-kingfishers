import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

export module TeamPayMentSearchFormDom {
    export class TeamPayMentSearchFormDomAction extends domCore.DomAction
    { }
    export class TeamPayMentSearchFormDomReact extends domCore.DomReact<TeamPayMentSearchFormDomProps, TeamPayMentSearchFormDomStates, TeamPayMentSearchFormDomAction> implements domCore.IReact {
        public state = new TeamPayMentSearchFormDomStates();
        public pSender(): React.ReactElement<any> {
            return <div className="YSm-handle clearfix">
                <div className="col-lg-6 col-md-6 YSm-search">
                    <input className="col-lg-11 col-md-10 YSu-border-blue " type={this.props.Vm.SreachName}  onChange={(a) => { this.props.Vm.ChageSreach(a) } } placeholder="输入组织名称或者编号" />
                    <a className="col-lg-1 col-md-2 btn btn-primary" onClick={() => {
                        this.props.Vm.Sreach()
                    } }>查询</a>
                </div>
            </div>
                ;
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactTeamPayMentSearchFormDomVm extends domCore.DomVm
    { }

    export interface ITeamPayMentSearchFormDomConfig {
        Unid: string;
    }

    export class TeamPayMentSearchFormDomVm extends domCore.DomVm implements IReactTeamPayMentSearchFormDomVm {
        public ReactType = TeamPayMentSearchFormDomReact;
        public SreachName = "";
        public constructor(config?: ITeamPayMentSearchFormDomConfig) {
            super();
            if (config) {
                this.UniId = config.Unid;
            }
        }

        public ChageSreach(a: React.FormEvent) {
            this.SreachName = a.target["value"];
            this.IsMulit = true;
            this.forceUpdate("");
        }

        public Sreach() {
            this.emitAppEvent("Medical/charge/TeamPayment/Search", this.UniId, this.SreachName.trim());
        }
    }
    export class TeamPayMentSearchFormDomStates extends domCore.DomStates { }

    export class TeamPayMentSearchFormDomProps extends domCore.DomProps<TeamPayMentSearchFormDomVm> {
    }
}