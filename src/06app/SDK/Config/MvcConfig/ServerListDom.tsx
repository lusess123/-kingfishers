import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import EditSpanFile = require("./../../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;

export module ServerListDom {
    export class ServerListDomAction extends domCore.DomAction {
    }

    export class ServerListDomReact extends domCore.DomReact<ServerListDomProps, ServerListDomStates, ServerListDomAction> implements domCore.IReact {

        public state = new ServerListDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                { this.props.Vm.ServerList.map((a, number) => {
                   return  this.PerSendServer(number, a);
                }) }
            </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

        public PerSendServer(number: number, Value: string) {

            return <div className="pull-left">
                <label className="form-control-label text-right ">{number + 1}</label>{this.props.Vm.psenderMvcConfig(Value) }
            </div>

        }


    }

    export interface IReactServerListDomVm extends domCore.DomVm {
        ServerList: Array<string>;
        psenderMvcConfig: (Text: string) => {};
    }

    export interface IServerListDomConfig {
        ServerList: Array<string>;
    }

    export class ServerListDomVm extends domCore.DomVm implements IReactServerListDomVm {
        public ReactType = ServerListDomReact;
        public ServerList: Array<string>;
        public EditText: EditSpanFile.EditSpan.EditSpanVm;
        public constructor(config?: IServerListDomConfig) {
            super();
            if (config.ServerList) {
                this.ServerList = config.ServerList;
            }
        }

        public psenderMvcConfig(Value: string) {
            this.EditText = new EditSpanFile.EditSpan.EditSpanVm();
            this.EditText.Content = Value;
            return this.EditText.intoDom();
        }

        public submitClick() {
            return this.ServerList;
        }
    }
    export class ServerListDomStates extends domCore.DomStates {
    }


    export class ServerListDomProps extends domCore.DomProps<IReactServerListDomVm>{
    }



}


