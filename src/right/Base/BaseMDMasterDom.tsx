


import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module BaseMDMasterDom {
    export class BaseMDMasterDomAction extends domCore.DomAction {
    }

    export class BaseMDMasterDomReact extends domCore.DomReact<BaseMDMasterDomProps, BaseMDMasterDomStates, BaseMDMasterDomAction> implements domCore.IReact {

        public state = new BaseMDMasterDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>名称为: BaseMDMasterDom的组件</div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export class BaseMDMasterDomVm extends domCore.DomVm {
        public ReactType = BaseMDMasterDomReact;


    }
    export class BaseMDMasterDomStates extends domCore.DomStates {
    }


    export class BaseMDMasterDomProps extends domCore.DomProps<BaseMDMasterDomVm>{
    }



}


