import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import iocFile = require("./../01core/Ioc");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module Web {
    export class BaseStageAction extends domCore.DomAction {
        // LogList: Array<string>;
    }

    export class BaseStageReact extends domCore.DomReact<BaseStageProps, BaseStageStates, BaseStageAction> implements domCore.IReact {



        public pSender(): React.ReactElement<any> {
            //return React.DOM.div({}, "空白的页面");
            return <div>空白的页面</div>
        }



    }
    export class BaseStageVm extends domCore.DomVm {
        public ReactType = BaseStageReact;


    }
    export class BaseStageStates extends domCore.DomStates {

    }


    export class BaseStageProps extends domCore.DomProps<BaseStageVm>{
    }
}