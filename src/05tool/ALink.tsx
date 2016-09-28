
import domFile = require("./../01core/0Dom");
import iocFile = require("./../01core/Ioc");
import utilFile = require("./../01core/Util");
import urlFile = require("./../01core/Url");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {

    export class ALinkAction extends domFile.Core.DomAction {

    }
    export class ALinkReact extends domFile.Core.DomReact<ALinkProps, ALinkStates, ALinkAction>{
        protected pComponentWillMount(): void {
            if (this.props.Vm == null) {
                this.props.Vm = new ALinkVm();
            }
            super.pComponentWillMount();
        }
        public pSender(): React.ReactElement<any> {
           
            return <a onClick={() => { this.fun_AClick(); } } className={this.props.Vm.ClassName}>{this.props.children}</a>;
        };
  
        private fun_AClick() {
            if (this.props.href) {
                urlFile.Core.AkUrl.Current().openUrl(this.props.href,this.props.Vm.IsUrl);
            }
        }


    }
    export interface IAlinkOption
    {
        ClassName?: string;
    }


    export class ALinkVm extends domFile.Core.DomVm {

        public ReactType = ALinkReact;
        public IsUrl: boolean;
        public ClassName: string;
        constructor(isNoUrl?: boolean, option?: IAlinkOption )
        {
            super();
            if(isNoUrl)
                this.IsUrl = isNoUrl;
            if (option) {
                if (option.ClassName) {
                    this.ClassName = option.ClassName;
                }
            }
        }
    }


    export class ALinkProps extends domFile.Core.DomProps<ALinkVm>{
        public href: string;


    }
    export class ALinkStates extends domFile.Core.DomStates {




    }
}