import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import dataFile = require("./Data");

export module ClassInfoRowDom {
    export class ClassInfoRowDomAction extends domCore.DomAction {
    }

    export class ClassInfoRowDomReact extends domCore.DomReact<ClassInfoRowDomProps, ClassInfoRowDomStates, ClassInfoRowDomAction> implements domCore.IReact {

        public state = new ClassInfoRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td>{this.props.Vm.RegName}</td>
                <td>{this.props.Vm.BaseClass}</td>
                <td>{this.props.Vm.Author}</td>
                <td>{this.props.Vm.CreatTime}</td>
                <td>{this.props.Vm.Mesg}</td>
                <td>{this.props.Vm.ClassInfoError}</td>
            </tr>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactClassInfoRowDomVm extends domCore.DomVm {
        RegName: string;
        BaseClass: string;
        Author: string;
        CreatTime: string;
        Mesg: string;
        ClassInfoError: string;
    }

    export interface IClassInfoRowDomConfig {
        RegName: string;
        BaseClass: string;
        Author: string;
        CreatTime: string;
        Mesg: string;
        ClassInfoError: string;

    }

    export class ClassInfoRowDomVm extends domCore.DomVm implements IReactClassInfoRowDomVm {
        public ReactType = ClassInfoRowDomReact;

        public RegName: string;
        public BaseClass: string;
        public Author: string;
        public CreatTime: string;
        public Mesg: string;
        public ClassInfoError: string;
        public constructor(config?: IClassInfoRowDomConfig) {
            super();


            if (config) {
                if (config.RegName) {
                    this.RegName = config.RegName;
                }
                if (config.BaseClass) {
                    this.BaseClass = config.BaseClass;
                }
                if (config.Author) {
                    this.Author = config.Author;
                }
                if (config.CreatTime) {
                    this.CreatTime = config.CreatTime;
                }
                if (config.Mesg) {
                    this.Mesg = config.Mesg;
                }
                if (config.ClassInfoError) {
                    this.ClassInfoError = config.ClassInfoError;
                }
            }
        }

    }
    export class ClassInfoRowDomStates extends domCore.DomStates {
    }


    export class ClassInfoRowDomProps extends domCore.DomProps<IReactClassInfoRowDomVm>{
    }



}


