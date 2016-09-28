import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

export module TeamChargeBottomDom {
    export class TeamChargeBottomDomAction extends domCore.DomAction { }

    export class TeamChargeBottomDomReact extends domCore.DomReact<TeamChargeBottomDomProps, TeamChargeBottomDomStates, TeamChargeBottomDomAction> implements domCore.IReact {
        public state = new TeamChargeBottomDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className={(this.props.Vm.Is10 ? " col-lg-12 col-md-12 Hg-default-left " : " col-lg-10 col-md-10 ") + "YSm-fixed-bottom"}>
                <div className="col-lg-12 col-md-12 clearfix">
                    <div className="pull-left">
                        <span>收费金额<b>{this.props.Vm.Amount}</b>元，缴纳费用 <b>
                            <input type="text" value={this.props.Vm.Money}
                                onChange={(a) => { this.props.Vm.textChange(a) } } />
                        </b>元，应找零

                            <b>{this.props.Vm.ChageMoney}</b>元</span>
                    </div>
                    <div className="pull-right">
                        <a className="btn btn-danger" onClick={() => { this.props.Vm.confirmCharge() } }>确认收费</a>
                    </div>
                </div>
            </div>;
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactTeamChargeBottomDomVm extends domCore.DomVm {
        Is10: boolean;
        Money: string;
        ChageMoney: string;
        textChange(a: React.FormEvent);
    }

    export interface ITeamChargeBottomDomConfig {
        Amount: string;
        UniId: string;
    }

    export class TeamChargeBottomDomVm extends domCore.DomVm implements IReactTeamChargeBottomDomVm {
        public ReactType = TeamChargeBottomDomReact;
        public Amount: string;
        public Money: string;
        public ChageMoney: string = "0";
        public Is10: boolean = window["LeftMenuStatus"];
        public constructor(config?: ITeamChargeBottomDomConfig) {
            super();
            if (config) {
                this.Amount = config.Amount;
                this.UniId = config.UniId;
            }
            this.listenPageButtom();
        }

        public listenPageButtom() {
            this.listenAppEvent("pageButtom", "page", (is10: boolean) => {
                if (this.Is10 != is10) {
                    this.Is10 = is10;
                    this.forceUpdate("");
                }
            });
        }

        public textChange(a: React.FormEvent) {
            this.Money = a.target["value"];

            try {
                if (isNaN(parseFloat(this.Money))) {
                    this.ChageMoney = "0"
                } else {
                    this.ChageMoney = (parseFloat(this.Money) - parseFloat(this.Amount)).toString();
                }
            } catch (e) {
                this.ChageMoney = "0"
            }


            this.forceUpdate("");
        }

        public confirmCharge() {
            this.emitAppEvent("medical/Charge/Team", this.UniId);
        }
    }

    export class TeamChargeBottomDomStates extends domCore.DomStates { } export class TeamChargeBottomDomProps extends domCore.DomProps<TeamChargeBottomDomVm> { }
}