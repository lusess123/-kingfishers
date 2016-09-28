import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

export module PersonChargeBottomDom {

    export class PersonChargeBottomDomAction extends domCore.DomAction { }

    export class PersonChargeBottomDomReact extends domCore.DomReact<PersonChargeBottomDomProps, PersonChargeBottomDomStates, PersonChargeBottomDomAction> implements domCore.IReact {
        public state = new PersonChargeBottomDomStates(); public pSender(): React.ReactElement<any> {
            return <div className={(this.props.Vm.Is10 ? " col-lg-12 col-md-12 Hg-default-left " : " col-lg-10 col-md-10 ") + "YSm-fixed-bottom"}>
                <div className="col-lg-12 col-md-12 clearfix">
                    <div className="pull-left">
                        <span>收费金额<b>{this.props.Vm.Amout}</b>元，缴纳费用 <b>
                            <input type="text" value={this.props.Vm.Money} onChange={(a) => { this.props.Vm.textChange(a) } } />

                        </b>元，应找零<b>{this.props.Vm.ChageMoney}</b>元</span>
                    </div>
                    <div className="pull-right">
                        <a className="btn btn-danger" onClick={() => { this.props.Vm.ConfirmCharge() } }>确认收费</a>
                    </div>
                </div>
            </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
    }

    export interface IReactPersonChargeBottomDomVm extends domCore.DomVm {
        Amout: string;
        Is10: boolean;
        Money: string;
        ChageMoney: string;
        ConfirmCharge();
        textChange(a: React.FormEvent);
    }

    export interface IPersonChargeBottomDomConfig {
        Amout: string;
        UniId?: string;
    }

    export class PersonChargeBottomDomVm extends domCore.DomVm implements IReactPersonChargeBottomDomVm {
        public ReactType = PersonChargeBottomDomReact;
        public Amout: string = "0";
        public Is10: boolean = window["LeftMenuStatus"];
        public Money: string;
        public ChageMoney: string = "0";
        public constructor(config?: IPersonChargeBottomDomConfig) {
            super();

            if (config) {
                this.Amout = config.Amout;
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

        public ConfirmCharge() {
            this.emitAppEvent("medical/Charge/PersonChargeBottomDom", this.UniId);
        }

        public textChange(a: React.FormEvent) {
            this.Money = a.target["value"];

            try {
                if (isNaN(parseFloat(this.Money))) {
                    this.ChageMoney = "0"
                } else {
                    this.ChageMoney = (parseFloat(this.Money) - parseFloat(this.Amout)).toString();
                }
            } catch (e) {
                this.ChageMoney = "0"
            }


            this.forceUpdate("");
        }
    }

    export class PersonChargeBottomDomStates extends domCore.DomStates { }

    export class PersonChargeBottomDomProps extends domCore.DomProps<IReactPersonChargeBottomDomVm> { }
}