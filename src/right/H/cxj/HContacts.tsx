import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import React = require("react");
export module HContacts {
    export class HContactsAction extends domCore.DomAction {
    }

    export class HContactsReact extends domCore.DomReact<HContactsProps, HContactsStates, HContactsAction> implements domCore.IReact {

        public state = new HContactsStates();

        public pSender(): React.ReactElement<any> {
            return <div>名称为: HContacts的组件</div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IHContactsConfig {


    }

    export class HContactsVm extends domCore.DomVm {
        public ReactType = HContactsReact;


    }
    export class HContactsStates extends domCore.DomStates {
    }


    export class HContactsProps extends domCore.DomProps<HContactsVm>{
    }



}
