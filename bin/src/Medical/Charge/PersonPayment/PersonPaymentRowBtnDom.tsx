import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

export module PersonPaymentRowBtnDom {
    export class PersonPaymentRowBtnDomAction extends domCore.DomAction
    { }

    export class PersonPaymentRowBtnDomReact extends domCore.DomReact<PersonPaymentRowBtnDomProps, PersonPaymentRowBtnDomStates, PersonPaymentRowBtnDomAction> implements domCore.IReact {
        public state = new PersonPaymentRowBtnDomStates();
        public pSender(): React.ReactElement<any> {
            return <div className="YSm-table-btngroup">
                <a className="btn btn-sm btn-danger" onClick={() => { this.props.Vm.payment() } }>￥缴费</a>
                <div className="btn-group btn-group-sm">
                    <a  className="btn btn-primary-outline">删除</a>
                </div>
                <div className="btn-group btn-group-sm">
                    <a  className="btn btn-primary-outline">个人退款</a>
                </div>
            </div>;
        }
        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactPersonPaymentRowBtnDomVm extends domCore.DomVm
    {

    }

    export interface IPersonPaymentRowBtnDomConfig { }

    export class PersonPaymentRowBtnDomVm extends domCore.DomVm implements IReactPersonPaymentRowBtnDomVm {
        public ReactType = PersonPaymentRowBtnDomReact;
        public constructor(config?: IPersonPaymentRowBtnDomConfig)
        { super(); }

        public payment()
        {
            urlFile.Core.AkUrl.Current().openUrl("$PERSONCHARGEPAGE$", true);
        }

        public refund()
        {

        }
    }

    export class PersonPaymentRowBtnDomStates extends domCore.DomStates { }

    export class PersonPaymentRowBtnDomProps extends domCore.DomProps<PersonPaymentRowBtnDomVm> { }
}