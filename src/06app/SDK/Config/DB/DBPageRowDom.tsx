import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import pageViewFile = require("./../../../07data/PageView");

import EditSpanFile = require("./../../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;

import SingleCheckBoxFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import SingleCheckBox = SingleCheckBoxFile.ui.SingleCheckBoxReact;
import SingleCheckBoxVm = SingleCheckBoxFile.ui.SingleCheckBoxVm;
import ConfigData = require("./../Data");

export module DBPageRowDom {
    export class DBPageRowDomAction extends domCore.DomAction {
    }

    export class DBPageRowDomReact extends domCore.DomReact<DBPageRowDomProps, DBPageRowDomStates, DBPageRowDomAction> implements domCore.IReact {

        public state = new DBPageRowDomStates();

        public pSender(): React.ReactElement<any> {
            var a = this.props.Vm.Data;
            var b = this.props.Vm.Item;
            var c = this.props.Vm.Number;
            return <tbody>
                <tr>
                    <td><i className={this.fun_IsDefault(a.IsDefault) } onClick={() => { this.fun_Ischange() } }></i></td>

                    {this.pSenderDBRow("Name", a.Name, a.Name) }
                    DataSource={this.pSenderDBRow("DataSource", b[c * 4].DataSource, b[c * 4].DataSource) };
                    InitialCatalog={this.pSenderDBRow("InitialCatalog", b[c*4+1].InitialCatalog, b[c*4 +1].InitialCatalog) };
                    UserID={this.pSenderDBRow("UserID", b[c*4+2].UserID, b[c*4+2].UserID) };
                    PassWord={this.pSenderDBRow("PassWord", b[c * 4 + 3].PassWord, b[c * 4 + 3].PassWord) };

                    <td><i className="fa fa-minus-circle Hu-pointer" onClick={() => { this.Delete() } }></i></td> 
                </tr>
            </tbody>
        }

        public fun_Ischange() {
            if (this.props.Vm.Data.IsDefault == false) {
                this.props.Vm.Data.IsDefault = true;
            } else {
                this.props.Vm.Data.IsDefault = false;
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

        public pSenderDBRow(Type: string, Key: string, value: string) {
            return <td>{this.props.Vm.pSenderDBRow(Type, Key, value) }</td>
        }

        public Delete() {
            this.props.Vm.Delete();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
    }

    export interface IReactDBPageRowDomVm extends domCore.DomVm {
        Data: ConfigData.ConfigData.DBSubmit;
        SingleCheckVm: SingleCheckBoxFile.ui.SingleCheckBoxVm;
        Number: number;
        Item: Array<any>;
        Delete: Function;
        IsDefault: string;
        pSenderDBRow: (Type: string, Key: string, Val: string) => {};
    }

    export interface IDBPageRowDomConfig {
        Data: ConfigData.ConfigData.DBSubmit;
        Item: Array<any>;
        Unid: string;
        Number: number;
    }

    export class DBPageRowDomVm extends domCore.DomVm  {
        public ReactType = DBPageRowDomReact;

        public Data: ConfigData.ConfigData.DBData;
        public Number: number;
        public Item: Array<any>;
        public IsDefault: string;
        public SingleCheckVm: SingleCheckBoxFile.ui.SingleCheckBoxVm;

        public EditText: EditSpanFile.EditSpan.EditSpanVm;

        public constructor(config?: IDBPageRowDomConfig) {
            super();

            if (config.Data) {
                this.Data = config.Data;
                this.Item = config.Item;
                if (config.Unid) {
                    this.UniId = config.Unid;
                }
            }
            if (config.Number) {
                this.Number = config.Number;
            }
            if (config.Number == 0)
            {
                this.Number = 0;
            }
        }

        public pSenderDBRow(Type: string, Key: string, Val: string) {
            if (Val == "") Val = "空";
            var num = this.Number;
            var config: EditSpanFile.EditSpan.IEditSpanVm = {
                Content: Val, ChangeEvent: (v, ischage) => {
                    if (Type == "Name") {
                        this.Data.Name = v.Content;
                    }
                    if (Type == "DataSource") {
                        this.Item[num*4].DataSource = v.Content;
                    }
                    if (Type == "InitialCatalog") {
                        this.Item[num*4+1].InitialCatalog = v.Content;
                    }
                    if (Type == "UserID") {
                        this.Item[num*4+2].UserID = v.Content;
                    }
                    if (Type == "PassWord") {
                        this.Item[num*4+3].PassWord = v.Content;
                    }
                }
            }
            this.EditText = new EditSpanFile.EditSpan.EditSpanVm(config);
            return this.EditText.intoDom();
        }

        public Delete() {
            this.emitAppEvent("app/SDK/Config/DB/RowDelete", this.UniId, this.Data.Name);
        }

    }
    export class DBPageRowDomStates extends domCore.DomStates {
    }


    export class DBPageRowDomProps extends domCore.DomProps<IReactDBPageRowDomVm>{
    }



}


