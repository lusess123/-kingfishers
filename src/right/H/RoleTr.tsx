import domFile = require("./../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
import iocFile = require("./../01core/Ioc");
import urlFile = require("./../01core/Url");

export module RoleTr {
    export class RoleTrAction extends domCore.DomAction {
    }

    export class RoleTrReact extends domCore.DomReact<RoleTrProps, RoleTrStates, RoleTrAction> implements domCore.IReact {

        public state = new RoleTrStates();

        public pSender(): React.ReactElement<any> {
            return <tr><th><span>报修人员角色</span><a className="button"></a></th></tr>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export class RoleTrVm extends domCore.DomVm {
        public ReactType = RoleTrReact;


    }
    export class RoleTrStates extends domCore.DomStates {
    }


    export class RoleTrProps extends domCore.DomProps<RoleTrVm>{
    }



}
