import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import EditSpanFile = require("./../../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm
import ConfigData = require("./../Data");
import RadioFile = require("./../../../../02col/01single/Radio");
export module MvcSettingRowDom {
    export class MvcSettingRowDomAction extends domCore.DomAction {
    }
    export class MvcSettingRowDomReact extends domCore.DomReact<MvcSettingRowDomProps, MvcSettingRowDomStates, MvcSettingRowDomAction> implements domCore.IReact {
        public state = new MvcSettingRowDomStates();
        public pSender(): React.ReactElement<any> {
            var a = this.props.Vm.Data;
            return <tr>
                    <td><i className={this.fun_IsDefault(a.IsUser) } onClick={() => { this.fun_Ischange() } }></i></td>
                <td>{this.Concent("Name", this.props.Vm.Data.Name) }</td>
                <td>{this.Concent("ControlName", a.ControlName)}</td>
                <td>{this.Concent("ActionName", a.ActionName)}</td>
                <td>{this.Concent("AreaName", a.AreaName)}</td>
                <td>{this.Concent("Param", a.Param) }</td>
                <td>{this.Concent("NameSpace", a.NameSpace) }</td>
                <td><i className="fa fa-minus-circle"  onClick={() => { this.props.Vm.delete() } }></i></td>
            </tr>;

        }

        public fun_Ischange() {
            if (this.props.Vm.Data.IsUser == false) {
                this.props.Vm.Data.IsUser = true;
            } else {
                this.props.Vm.Data.IsUser = false;
            }
            this.forceUpdate();
        }
        public fun_IsDefault(val: boolean) {
            if (val == false) {
                this.props.Vm.IsDefault = "fa fa-circle-o Hu-pointer";
            } if (val == true) {
                this.props.Vm.IsDefault = "fa fa-circle Hu-pointer";
            }
            return this.props.Vm.IsDefault;
        }
        public Concent(value: string, type: string) {
            return this.props.Vm.Concent(value,type); 
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
    }
    export interface IReactMvcSettingRowDomVm extends domCore.DomVm {
        Data: ConfigData.ConfigData.DataRouteData;
        Concent: (value: string, Type: string) => {};
        IsDefault: string;
        delete: Function;
    }
    export interface IMvcSettingRowDomConfig {
        Routes:ConfigData.ConfigData.RoutesData
        Data: ConfigData.ConfigData.DataRouteData;
        Unid: string;
    }
    export class MvcSettingRowDomVm extends domCore.DomVm implements IReactMvcSettingRowDomVm {
        public ReactType = MvcSettingRowDomReact;

        public Data: ConfigData.ConfigData.DataRouteData;
        public EditText: EditSpanFile.EditSpan.EditSpanVm;

        public IsDefault:string;
        public Regname:string;

        public constructor(config?: IMvcSettingRowDomConfig) {
            super();
            if (config.Unid) {
                this.UniId = config.Unid;
            }

            if(config.Routes){
            this.Regname = config.Routes.RegName;
            }
            if (config.Data) {
                this.Data = config.Data;
                if(this.Data.Name == this.Regname){
                this.Data.IsUser = true;
                }
                else{
                this.Data.IsUser = false;
                }
            }
        }
        public Concent(Type: string, Val: string) {
            if (Val == ""||Val == null) {Val = "空";}
            var config: EditSpanFile.EditSpan.IEditSpanVm = {
                Content: Val, ChangeEvent: (v, ischage) => {
                    if (Type == "Name") {
                        this.Data.Name = v.Content;
                    }
                    if (Type == "ControlName")
                    {
                        this.Data.ControlName = v.Content; 
                    }
                    if (Type == "ActionName") {
                        this.Data.ActionName = v.Content;
                    }
                    if (Type == "AreaName") {
                        this.Data.AreaName = v.Content;
                    }
                    if (Type == "Param") {
                        this.Data.Param = v.Content;
                    }
                    if (Type == "NameSpace") {
                        this.Data.NameSpace = v.Content;
                    }
                }
            }
            this.EditText = new EditSpanFile.EditSpan.EditSpanVm(config);
            return this.EditText.intoDom();
        }

        public delete() {
            this.emitAppEvent("app/SDK/Config/Mvc/RowDelete", this.UniId, this.Data.Name);
        }

    }
    export class MvcSettingRowDomStates extends domCore.DomStates {
    }
    export class MvcSettingRowDomProps extends domCore.DomProps<IReactMvcSettingRowDomVm>{
    }
}


