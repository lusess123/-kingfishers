import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import newFile = require("./New");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module Day {
    export class DayAction extends domCore.DomAction {
    }

    export class DayReact extends domCore.DomReact<DayProps, DayStates, DayAction> implements domCore.IReact {

        public state = new DayStates();

        public pSender(): React.ReactElement<any> {
            return <ul >
                <div className="Hu-ym-date ">
                    <div>{utilFile.Core.Util.DateFormat(new Date(Date.parse(this.props.Vm.DayString.replace(/\-/g, "/"))), "yyyy年") }</div>
                    <div>{utilFile.Core.Util.DateFormat(new Date(Date.parse(this.props.Vm.DayString.replace(/\-/g, "/"))), "MM月dd日") }</div></div>
               
                     {this.props.Vm.NewList.map(
                         (neVM,i) => {
                             return <li >{ neVM.intoDom() }<em></em></li>;
                         })
                     }
                   
                   </ul>;
               
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export class DayVm extends domCore.DomVm {
        public ReactType = DayReact;
        public DayString: string;
        public NewList: Array<newFile.Sns.NewVm> = [];

    }
    export class DayStates extends domCore.DomStates {
    }


    export class DayProps extends domCore.DomProps<DayVm>{
    }



}


