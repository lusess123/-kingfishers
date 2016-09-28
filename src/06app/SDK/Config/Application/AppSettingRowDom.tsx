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

import ConfigData = require("./../Data");
import RadioFile = require("./../../../../02col/01single/Radio");
export module AppSettingRowDom {
    export class AppSettingRowDomAction extends domCore.DomAction {
    }

    export class AppSettingRowDomReact extends domCore.DomReact<AppSettingRowDomProps, AppSettingRowDomStates, AppSettingRowDomAction> implements domCore.IReact {

        public state = new AppSettingRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td><span>{"设置" + this.props.Vm.Number } </span></td>
                { this.psenderAppSetting("Key", this.props.Vm.Data.Key, this.props.Vm.Data.Key) }
                {this.psenderAppSetting("Value", this.props.Vm.Data.Key, this.props.Vm.Data.Value) }
                <td>{ this.props.Vm.Radio.intoDom() } </td>

                <td><i className="fa fa-minus-circle"  onClick={() => { this.props.Vm.delete() } }></i></td>
            </tr>;
        }

        public psenderAppSetting(Type: string, Key: string, value: string) {
            return <td>{this.props.Vm.psenderAppSetting(Type, Key, value) }</td>
        }


        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactAppSettingRowDomVm extends domCore.DomVm {
        Data: ConfigData.ConfigData.AppSettingsData;
        Number: number;
        psenderAppSetting: (Type: string, Key: string, Val: string) => {};
        Radio: RadioFile.ui.RadioVm;
        delete: Function;
    }

    export interface IAppSettingRowDomConfig {
        Data: ConfigData.ConfigData.AppSettingsData;
        Number: number;
        Unid: string;
    }

    export class AppSettingRowDomVm extends domCore.DomVm implements IReactAppSettingRowDomVm {
        public ReactType = AppSettingRowDomReact;
        public Data: ConfigData.ConfigData.AppSettingsData;
        public Number: number;
        public Radio: RadioFile.ui.RadioVm;
        public EditText: EditSpanFile.EditSpan.EditSpanVm;

        public constructor(config?: IAppSettingRowDomConfig) {
            super();

            if (config.Unid) {
                this.UniId = config.Unid;
            }

            if (config.Data) {
                this.Data = config.Data;
                this.Radio = new RadioFile.ui.RadioVm();

                if (this.Data.NeedParse) {
                    this.Radio.SelectText = "是";
                } else {
                    this.Radio.SelectText = "否";
                }

                this.Radio.ChangeEventFun = (val, col) => {
                    if (val == "0") {
                        this.Data.NeedParse = "true";
                    } else if (val == "1") {
                        this.Data.NeedParse = "false";
                    }

                    return true;
                }

                this.Radio.ItemList = ConfigData.ConfigData.RodioData;
            }

            if (config.Number) {
                this.Number = config.Number;
            }

        }

        public psenderAppSetting(Type: string, Key: string, Val: string) {

            //MultiLog\"]
            var XpathPart = "AtawApplicationConfig/AppSettings/AppSetting[@Key=\""

            if (Val == "") Val = "空";

            var config: EditSpanFile.EditSpan.IEditSpanVm = {
                Content: Val, ChangeEvent: (v, ischage) => {
                    if (Type == "Key") {
                        this.Data.Key = v.Content;
                    } else if (Type == "Value") {
                        this.Data.Value = v.Content;
                    }

                }
            }

            this.EditText = new EditSpanFile.EditSpan.EditSpanVm(config);
            return this.EditText.intoDom();
        }

        public delete() {
            this.emitAppEvent("app/SDK/Config/Application/RowDelete", this.UniId, this.Data.Key);
        }

    }
    export class AppSettingRowDomStates extends domCore.DomStates {
    }


    export class AppSettingRowDomProps extends domCore.DomProps<IReactAppSettingRowDomVm>{
    }



}


