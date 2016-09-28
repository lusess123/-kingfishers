


import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module NewCircleDom {
    export class NewCircleDomAction extends domCore.DomAction {
    }

    export class NewCircleDomReact extends domCore.DomReact<NewCircleDomProps, NewCircleDomStates, NewCircleDomAction> implements domCore.IReact {

        public state = new NewCircleDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                {
                    this.props.Vm.NewCount == 0 ? "" :
                        <div className="label label-pill label-danger Hu-news-circle" onClick={() => { this.props.Vm.clear(); }}
                             > <em className="u-news-num">{this.props.Vm.NewCount}</em></div>
                }
                  </div>;

        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface INewCircleDomConfig {


    }

    export class NewCircleDomVm extends domCore.DomVm {
        public ReactType = NewCircleDomReact;
        public NewCount: number = 0;

        public constructor(config?: INewCircleDomConfig) {
            super();
        }

        public clear()
        {
            this.NewCount = 0;
            this.forceUpdate("");
        }

        public add()
        {
            this.NewCount ++;
            this.forceUpdate("");
        }




    }
    export class NewCircleDomStates extends domCore.DomStates {
    }


    export class NewCircleDomProps extends domCore.DomProps<NewCircleDomVm>{
    }



}


