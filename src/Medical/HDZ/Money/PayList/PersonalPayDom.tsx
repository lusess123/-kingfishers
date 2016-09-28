import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import PersonalPayTableFile = require("./PersonalPayTable");
import PersonalPayTable = PersonalPayTableFile.PersonalPayTable.PersonalPayTableReact;
import PersonalPayTableVm = PersonalPayTableFile.PersonalPayTable.PersonalPayTableVm;

export module PersonalPayDom {
    export class PersonalPayDomAction extends domCore.DomAction {
    }

    export class PersonalPayDomReact extends domCore.DomReact<PersonalPayDomProps, PersonalPayDomStates, PersonalPayDomAction> implements domCore.IReact {

        public state = new PersonalPayDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                {this._initHandle() }
                {this.props.Vm.PersonalPayTableObj.intoDom()}
            </div>;
        }


        public _initHandle(): React.ReactElement<any> {

            return <div className="YSm-handle clearfix">
                <div className="col-lg-6 col-md-6 YSm-search">
                    <input className="col-lg-11 col-md-10" type="text" placeholder="输入身份证、体检号、档案号查询" />
                    <a className="col-lg-1 col-md-2 btn btn-primary">查询</a>
                </div>
            </div>;
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactPersonalPayDomVm extends domCore.DomVm {
        PersonalPayTableObj:  PersonalPayTableFile.PersonalPayTable.PersonalPayTableVm;
    }

    export interface IPersonalPayDomConfig {


    }

    export class PersonalPayDomVm extends domCore.DomVm implements IReactPersonalPayDomVm {
        public ReactType = PersonalPayDomReact;

        public PersonalPayTableObj: PersonalPayTableVm = new PersonalPayTableFile.PersonalPayTable.PersonalPayTableVm();

        public constructor(config?: IPersonalPayDomConfig) {
            super();

        }

    }
    export class PersonalPayDomStates extends domCore.DomStates {
    }


    export class PersonalPayDomProps extends domCore.DomProps<IReactPersonalPayDomVm>{
    }



}


