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
            return <div className="Hg-w80 pull-left">                
                { this.props.Vm.ServerList.map((a, number) => {
                    return this.PerSendServer(number, a);
                }) }
                <a className="btn btn-sm"  onClick={() => { this.props.Vm.Add() } }><i className="fa fa-plus"></i>添加服务地址</a>
            </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
        }

        public PerSendServer(number: number, Value: string) {

            return <div>
                <label className="form-control-label text-right">服务地址{number + 1}：</label>
                {this.props.Vm.psenderAppSetting(Value, number) }
                <i className="fa fa-minus-circle"   onClick={() => { this.props.Vm.delete(Value) } }></i>
            </div>

        }


    }

    export interface IReactServerListDomVm extends domCore.DomVm {
        ServerList: Array<string>;
        psenderAppSetting: (Text: string, number: number) => {};
        delete: Function;
        Add: Function;
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

        public psenderAppSetting(Value: string, number: number) {
            var config: EditSpanFile.EditSpan.IEditSpanVm = {
                Content: Value, ChangeEvent: () => {
                    this.ServerList[number] = this.EditText.Content;
                }
            }
            this.EditText = new EditSpanFile.EditSpan.EditSpanVm(config);
            return this.EditText.intoDom();
        }

        public delete(Value: string) {
            if (confirm("确定删除？")) {
                this.ServerList.forEach((a, number) => {
                    if (a == Value) {
                        this.ServerList.splice(number, 1);
                    }
                })

                this.IsMulit = true;
                this.forceUpdate("");
            }
        }

        public Add() {
            this.ServerList.push("Emptry" + this.ServerList.length);
            this.IsMulit = true;
            this.forceUpdate("");
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


