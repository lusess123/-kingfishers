
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");

import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
import iocFile = require("./../01core/Ioc");
import urlFile = require("./../01core/Url");



export module Timer {
    export class TimerAction extends domCore.DomAction {
    }

    export class TimerReact extends domCore.DomReact<TimerProps, TimerStates, TimerAction> implements domCore.IReact {

        public state = new TimerStates();
        private _funInterval: any;
        public pSender(): React.ReactElement<any> {
            return <span   className={this.props.Vm.ClassName}>{this.props.Vm.timerLength}</span>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
           this. _funInterval =  setInterval( () => {
                this.props.Vm.interVal();
                this.forceUpdate();
            },100);

        }

        protected pComponentWillUnmount(): void {
            super.pComponentWillUnmount();
            if (this._funInterval) {
                clearInterval(this._funInterval);
            }
        };


    }
    export class TimerVm extends domCore.DomVm {
        public ReactType = TimerReact;
        public timerLength: number = 0; 
        public ClassName: string;
        public interVal()
        {
            this.timerLength = this.timerLength + 1;
           
        }
    }
    export class TimerStates extends domCore.DomStates {
    }


    export class TimerProps extends domCore.DomProps<TimerVm>{
    }



}


