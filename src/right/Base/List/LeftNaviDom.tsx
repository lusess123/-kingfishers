import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");

/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module LeftNaviDom {
    export class LeftNaviDomAction extends domCore.DomAction {
    }

    export class LeftNaviDomReact extends domCore.DomReact<LeftNaviDomProps, LeftNaviDomStates, LeftNaviDomAction> implements domCore.IReact {

        public state = new LeftNaviDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="Hm-toggle-menu text-left"><h5>{this.props.Vm.Title}</h5></div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export class LeftNaviDomVm extends domCore.DomVm {
        public ReactType = LeftNaviDomReact;

        public Title: string;

    }
    export class LeftNaviDomStates extends domCore.DomStates {
    }


    export class LeftNaviDomProps extends domCore.DomProps<LeftNaviDomVm>{
    }



}


