import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import Data = require("./Data");

export module CensusDeptRowDom {
    export class CensusDeptRowDomAction extends domCore.DomAction {
    }

    export class CensusDeptRowDomReact extends domCore.DomReact<CensusDeptRowDomProps, CensusDeptRowDomStates, CensusDeptRowDomAction> implements domCore.IReact {

        public state = new CensusDeptRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td>{this.props.Vm.data.DeptName}</td>
                <td>{this.props.Vm.data.PersonNum}</td>
                <td>{this.props.Vm.data.Price}</td>
            </tr>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactCensusDeptRowDomVm extends domCore.DomVm {
        data: Data.CensusDept.censusDeptData;
    }

    export interface ICensusDeptRowDomConfig {
        data: Data.CensusDept.censusDeptData;

    }

    export class CensusDeptRowDomVm extends domCore.DomVm implements IReactCensusDeptRowDomVm {
        public ReactType = CensusDeptRowDomReact;
        public data: Data.CensusDept.censusDeptData;
        public constructor(config?: ICensusDeptRowDomConfig) {
            super();
            if (config.data) {
                this.data = config.data;
            }
        }

    }
    export class CensusDeptRowDomStates extends domCore.DomStates {
    }


    export class CensusDeptRowDomProps extends domCore.DomProps<IReactCensusDeptRowDomVm>{
    }



}


