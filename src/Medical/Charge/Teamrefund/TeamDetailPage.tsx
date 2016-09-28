import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom"); 
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc"); 
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");

import Table = require("./TeamDetailTableDom");

export module TeamDetailPage {
    export class TeamDetailPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string; public Id: string; public Vm: any;
    }

    export class TeamDetailPageReact extends basewedPageFile.Web.BaseWebPageReact<TeamDetailPageProps, TeamDetailPageStates, TeamDetailPageAction> implements domCore.IReact {
        public state = new TeamDetailPageStates(); public pSender(): React.ReactElement<any> {
            return <div>{this._tDom(this.props.Vm.table) }</div>;
        }
    }

    export interface IReactTeamDetailPageVm extends basewedPageFile.Web.BaseWebPageVm {
        table: Table.TeamDetailTableDom.TeamDetailTableDomVm
    }

    export interface ITeamDetailPageConfig { }

    export class TeamDetailPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactTeamDetailPageVm {

        public ReactType = TeamDetailPageReact;
        public table: Table.TeamDetailTableDom.TeamDetailTableDomVm;

        public constructor(config?: ITeamDetailPageConfig) {
            super();
            this.Title = "团体详情";
        }

        private init(config: ITeamDetailPageConfig) { }

        protected loadPage(callback?: () => any) {

            urlFile.Core.AkPost("/MedicalCenter/TeamCharge/GetMemberData", { ChagreID: this.Param1 }, (a) => {
             
                var config: Table.TeamDetailTableDom.ITeamDetailTableDomConfig = { Data: a.Data }
                this.table = new Table.TeamDetailTableDom.TeamDetailTableDomVm(config);
                //this.table.RowList.forEach(a => a.IsChange = true);
                //this.table.IsMulit = true;
                //this.table.forceUpdate("");

                if (callback) { callback(); }
            })

        }
    }

    export class TeamDetailPageStates extends basewedPageFile.Web.BaseWebPageStates { }

    export class TeamDetailPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactTeamDetailPageVm> { }

    iocFile.Core.Ioc.Current().RegisterType("TEAMDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, TeamDetailPageVm);
}