import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

export module PersonChargeRowBtnDom {

    export class PersonChargeRowBtnDomAction extends domCore.DomAction { }

    export class PersonChargeRowBtnDomReact extends domCore.DomReact<PersonChargeRowBtnDomProps, PersonChargeRowBtnDomStates, PersonChargeRowBtnDomAction> implements domCore.IReact {
        public state = new PersonChargeRowBtnDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="YSm-table-btngroup">
                <span className="YSu-name">收费项目明细</span></div>;
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactPersonChargeRowBtnDomVm extends domCore.DomVm { }

    export interface IPersonChargeRowBtnDomConfig { }

    export class PersonChargeRowBtnDomVm extends domCore.DomVm implements IReactPersonChargeRowBtnDomVm {
        public ReactType = PersonChargeRowBtnDomReact;

        public constructor(config?: IPersonChargeRowBtnDomConfig) { super(); }
    }

    export class PersonChargeRowBtnDomStates extends domCore.DomStates { }

    export class PersonChargeRowBtnDomProps extends domCore.DomProps<PersonChargeRowBtnDomVm> { }
}