


import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module BaseMDDetailRowDom {
    export class BaseMDDetailRowDomAction extends domCore.DomAction {
    }

    export class BaseMDDetailRowDomReact extends domCore.DomReact<BaseMDDetailRowDomProps, BaseMDDetailRowDomStates, BaseMDDetailRowDomAction> implements domCore.IReact {

        public state = new BaseMDDetailRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>名称为: BaseMDDetailRowDom的组件</div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export class BaseMDDetailRowDomVm extends domCore.DomVm {
        public ReactType = BaseMDDetailRowDomReact;
        public Index: number = 0;

    }
    export class BaseMDDetailRowDomStates extends domCore.DomStates {
    }


    export class BaseMDDetailRowDomProps extends domCore.DomProps<BaseMDDetailRowDomVm>{
    }



}


