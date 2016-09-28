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

import ConfigData = require("./MvcData");
import RadioFile = require("./../../../../02col/01single/Radio");
export module MvcConfigRowDom {
    export class MvcConfigRowDomAction extends domCore.DomAction {
    }

    export class MvcConfigRowDomReact extends domCore.DomReact<MvcConfigRowDomProps, MvcConfigRowDomStates, MvcConfigRowDomAction> implements domCore.IReact {

        public state = new MvcConfigRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <table className= "table table-hover" >
                
            </table >;
        }

        public psenderMvcConfig(Type: string, Key: string, value: string) {
            return <td>{this.props.Vm.psenderMvcConfig(Type, Key, value) }</td>
        }



        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactMvcConfigRowDomVm extends domCore.DomVm {
        Data: ConfigData.ConfigData.RoutesDate;
        Number: number;
        psenderMvcConfig: (Type: string, Key: string, Val: string) => {};
    }

    export interface IMvcConfigRowDomConfig {
        Data: ConfigData.ConfigData.RoutesDate;
        Number: number;
        Unid: string;
    }

    export class MvcConfigRowDomVm extends domCore.DomVm implements IReactMvcConfigRowDomVm {
        public ReactType = MvcConfigRowDomReact;
        public Data: ConfigData.ConfigData.RoutesDate;
        public Number: number;
        public Radio: RadioFile.ui.RadioVm;
        public EditText: EditSpanFile.EditSpan.EditSpanVm;

        public constructor(config?: IMvcConfigRowDomConfig) {
            super();

            if (config.Unid) {
                this.UniId = config.Unid;
            }

            if (config.Data) {
                this.Data = config.Data;
            }

            if (config.Number) {
                this.Number = config.Number;
            }

        }

        public psenderMvcConfig(Type: string, Key: string, Val: string) {

            //MultiLog\"]
            var XpathPart = "MvcConfigInfo/MvcConfig/MvcConfig[@Key=\""

            var config: EditSpanFile.EditSpan.IEditSpanVm = { Content: Val }

            this.EditText = new EditSpanFile.EditSpan.EditSpanVm(config);

            return this.EditText.intoDom();
        }



    }
    export class MvcConfigRowDomStates extends domCore.DomStates {
    }


    export class MvcConfigRowDomProps extends domCore.DomProps<IReactMvcConfigRowDomVm>{
    }



}


