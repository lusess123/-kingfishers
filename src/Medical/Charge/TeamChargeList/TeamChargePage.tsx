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
import eventFile = require("./../../../01core/Event");
import bottom = require("./TeamChargeBottomDom");
import note = require("./TeamChargeNoteDom");

export module TeamChargePage {
    export class TeamChargePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class TeamChargePageReact extends basewedPageFile.Web.BaseWebPageReact<TeamChargePageProps, TeamChargePageStates, TeamChargePageAction> implements domCore.IReact {
        public state = new TeamChargePageStates(); public pSender(): React.ReactElement<any> {
            return <div className="YSm-table">
                {this.props.Vm.Note.intoDom() }
                {this.props.Vm.Bottom.intoDom() }
            </div>;
        }
    }

    export interface IReactTeamChargePageVm extends basewedPageFile.Web.BaseWebPageVm {

    }
    export interface ITeamChargePageConfig {
        key:string;
    }


    export class TeamChargePageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactTeamChargePageVm {
        public ReactType = TeamChargePageReact;
        public Bottom: bottom.TeamChargeBottomDom.TeamChargeBottomDomVm;
        public Note: note.TeamChargeNoteDom.TeamChargeNoteDomVm;
        public keyID: string;
        public constructor(config?: ITeamChargePageConfig) {
            super();

            this.UniId = eventFile.App.getUniId().toString();
  
            this.listenAppEvent("medical/Charge/Team", this.UniId, () => {
                this.Note.confirmCharge(this.keyID);
            });
           

        }

        private init(config: ITeamChargePageConfig) {

        }

        protected loadPage(callback?: () => any) {
            //查找Team   GetModelReceivableAmount
            this.keyID = this.Param1;

            urlFile.Core.AkPost("/MedicalCenter/TeamCharge/GetModelReceivableAmount", { FID: this.keyID }, (data) => {
                var BottomData = { Amount: data, UniId: this.UniId}
                this.Bottom = new bottom.TeamChargeBottomDom.TeamChargeBottomDomVm(BottomData);
                this.Note = new note.TeamChargeNoteDom.TeamChargeNoteDomVm();
                if (callback) { callback(); }
            });
        }

    }

    export class TeamChargePageStates extends basewedPageFile.Web.BaseWebPageStates { }

    export class TeamChargePageProps extends basewedPageFile.Web.BaseWebPageProps<TeamChargePageVm> { }

    iocFile.Core.Ioc.Current().RegisterType("TEAMCHARGEPAGE", basewedPageFile.Web.BaseWebPageVm, TeamChargePageVm);
}