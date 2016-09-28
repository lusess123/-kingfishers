import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import DataFile = require("./../../Base/Anomaly/Data");

import RowDom = require("./TeamDetailRowDom");

export module TeamDetailTableDom {
    export class TeamDetailTableDomAction extends domCore.DomAction { }

    export class TeamDetailTableDomReact extends domCore.DomReact<TeamDetailTableDomProps, TeamDetailTableDomStates, TeamDetailTableDomAction> implements domCore.IReact {
        public state = new TeamDetailTableDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <table className="table table-striped table-bordered table-hover">
                    <thead className="thead-default">
                        <th>名字</th>
                        <th>组名</th>
                        <th>体检编号</th>
                        <th>状态</th>
                    </thead>
                    <tbody>
                        {this.props.Vm.RowList.map((a) => {
                            return a.intoDom();
                        }) }
                    </tbody>
                </table>

            </div>;
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactTeamDetailTableDomVm extends domCore.DomVm {
        RowList: RowDom.TeamDetailRowDom.TeamDetailRowDomVm[]
    }

    export interface ITeamDetailTableDomConfig {
        Data: DataFile.Anomaly.TeamChagreData[];
    }

    export class TeamDetailTableDomVm extends domCore.DomVm implements IReactTeamDetailTableDomVm {
        public ReactType = TeamDetailTableDomReact;

        public DataList: DataFile.Anomaly.TeamChagreData[] = [];
        public row: RowDom.TeamDetailRowDom.TeamDetailRowDomVm;

        public RowList: RowDom.TeamDetailRowDom.TeamDetailRowDomVm[] = [];
        public constructor(config?: ITeamDetailTableDomConfig) {
            super();
            if (config) {
                this.DataList = config.Data;

                this.DataList.forEach((a, index) => {
                    var config: RowDom.TeamDetailRowDom.ITeamDetailRowDomConfig = { Data: a, index: index }
                    this.row = new RowDom.TeamDetailRowDom.TeamDetailRowDomVm(config);
                    this.RowList.push(this.row);
                })
            }

        }
    }

    export class TeamDetailTableDomStates extends domCore.DomStates { }

    export class TeamDetailTableDomProps extends domCore.DomProps<IReactTeamDetailTableDomVm> { }
}