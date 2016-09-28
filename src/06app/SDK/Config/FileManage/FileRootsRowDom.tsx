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
export module FileRootsRowDom {
    export class FileRootsRowDomAction extends domCore.DomAction {
    }

    export class FileRootsRowDomReact extends domCore.DomReact<FileRootsRowDomProps, FileRootsRowDomStates, FileRootsRowDomAction> implements domCore.IReact {

        public state = new FileRootsRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td>{this.props.Vm.Number}</td>
                <td>{this.Concent("Name", this.props.Vm.Data.Name) }</td>
                <td>{this.Concent("ID", this.props.Vm.Data.ID) }</td>
                <td>{this.Concent("PhysicalPath", this.props.Vm.Data.PhysicalPath) }</td>
                <td>{this.Concent("FtpPath", this.props.Vm.Data.FtpPath) }</td>
                <td>{this.Concent("HttpPath", this.props.Vm.Data.HttpPath) }</td>
                <td>{this.Concent("MMSPath", this.props.Vm.Data.MMSPath) }</td>

            </tr>;

        }

        public Concent(type: string, value: string) {
            return <td>{this.props.Vm.Concent(type, value) }</td>
        }



        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactFileRootsRowDomVm extends domCore.DomVm {
        Data: ConfigData.ConfigData.FileRootsData;
        Number: number;
        Concent: (type: string, value: string) => {};
    }

    export interface IFileRootsRowDomConfig {
        Data: ConfigData.ConfigData.FileRootsData;
        Number: number;
        Unid: string;
    }

    export class FileRootsRowDomVm extends domCore.DomVm implements IReactFileRootsRowDomVm {
        public ReactType = FileRootsRowDomReact;
        public Data: ConfigData.ConfigData.FileRootsData;
        public Number: number;
        public Radio: RadioFile.ui.RadioVm;
        public EditText: EditSpanFile.EditSpan.EditSpanVm;

        public constructor(config?: IFileRootsRowDomConfig) {
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

        public Concent(type: string, Val: string) {
            if (Val == "") Val = "空";
            var config: EditSpanFile.EditSpan.IEditSpanVm = {
                Content: Val, ChangeEvent: (v, ischage) => {
                    if (type == "Name") {
                        this.Data.Name = v.Content;
                    }
                    if (type == "FtpPath") {
                        this.Data.FtpPath = v.Content;
                    }
                    if (type == "ID") {
                        this.Data.ID = v.Content;
                    }
                    if (type == "MMSPath") {
                        this.Data.MMSPath = v.Content;
                    }
                    if (type == "PhysicalPath") {
                        this.Data.PhysicalPath = v.Content;
                    }
                    if (type == "HttpPath") {
                        this.Data.HttpPath = v.Content;
                    }
                }
            }

            this.EditText = new EditSpanFile.EditSpan.EditSpanVm(config);
            return this.EditText.intoDom();
        }
    }

    export class FileRootsRowDomStates extends domCore.DomStates {
    }


    export class FileRootsRowDomProps extends domCore.DomProps<IReactFileRootsRowDomVm>{
    }



}


