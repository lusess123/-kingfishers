import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

export module PersonPaymentSearchFormDom {
    export class PersonPaymentSearchFormDomAction extends domCore.DomAction
    { }
    export class PersonPaymentSearchFormDomReact extends domCore.DomReact<PersonPaymentSearchFormDomProps, PersonPaymentSearchFormDomStates, PersonPaymentSearchFormDomAction> implements domCore.IReact {
        public state = new PersonPaymentSearchFormDomStates();
        public pSender(): React.ReactElement<any> {
            return <div className="YSm-handle clearfix">
                <div className="col-lg-6 col-md-6 YSm-search">
                    <input className="col-lg-11 col-md-10 YSu-border-blue " type="text" placeholder="输入身份证、体检号" onChange={(a) => { this.props.Vm.ChageSreach(a) } } value={this.props.Vm.SreachName} />
                    <a className="col-lg-1 col-md-2 btn btn-primary" onClick={() => { this.props.Vm.Sreach() } }>查询</a>
                </div>
            </div>;
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactPersonPaymentSearchFormDomVm extends domCore.DomVm {

    }

    export interface IPersonPaymentSearchFormDomConfig { Unid?: string; }

    export class PersonPaymentSearchFormDomVm extends domCore.DomVm implements IReactPersonPaymentSearchFormDomVm {
        public ReactType = PersonPaymentSearchFormDomReact;
        public SreachName = "";
        public constructor(config?: IPersonPaymentSearchFormDomConfig) {
            super();

            if (config) {
                this.UniId = config.Unid;
            }
        }

        public Sreach() {
            this.emitAppEvent("Medical/charge/PersonPayment/Search", this.UniId, this.SreachName.trim());
        }

        public ChageSreach(a: React.FormEvent) {
            this.SreachName = a.target["value"];
            this.IsMulit = true;
            this.forceUpdate("");
        }
    }
    export class PersonPaymentSearchFormDomStates extends domCore.DomStates { }

    export class PersonPaymentSearchFormDomProps extends domCore.DomProps<PersonPaymentSearchFormDomVm> {
    }
}