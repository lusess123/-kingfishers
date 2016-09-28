import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");

import dataFile = require("./../Data");
import masterRowFile = require("./DepartDetailMasterRowDom");

export module DepartDetailRowDom {
    export class DepartDetailRowDomAction extends domCore.DomAction { }

    export class DepartDetailRowDomReact extends domCore.DomReact<DepartDetailRowDomProps, DepartDetailRowDomStates, DepartDetailRowDomAction> implements domCore.IReact {

        public state = new DepartDetailRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="title Hu-pointer" onClick={() => { this.fun_itemTitleClick(); } }>{this.props.Vm.Index + 1}<i className={"fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "up" : "down") }></i></div>
                <div className={this.props.Vm.IsItemFormHide ? "hide" : "Hm-toggle-item"}>
                    {this.props.Vm.MasterRow.intoDom() }
                </div>
            </div>;

        }


        private fun_rowTitleClick() {
            this.props.Vm.IsRowFormHide = !this.props.Vm.IsRowFormHide;
            this.forceUpdate();
        }

        private fun_itemTitleClick() {
            this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
    }

    export interface DepartDetailRowDomConfig {
        DetailListData: dataFile.MRP_Departments.Department[];
        MasterConfig: masterRowFile.DepartDetailMasterRowDom.DepartDetailMasterRowDomConfig;
    }

    export class DepartDetailRowDomVm extends domCore.DomVm {
        public ReactType = DepartDetailRowDomReact;
        public MasterRow : masterRowFile.DepartDetailMasterRowDom.DepartDetailMasterRowDomVm;
        public Index: number;
        public IsRowFormHide: boolean;
        public IsItemFormHide: boolean;
        public DetailListData :dataFile.MRP_Departments.Department[];
        

        public constructor(config?: DepartDetailRowDomConfig) {
            super();

            if (config) {
                this.MasterRow = new masterRowFile.DepartDetailMasterRowDom.DepartDetailMasterRowDomVm(config.MasterConfig);
            }
        }

    }

    export class DepartDetailRowDomStates extends domCore.DomStates { }

    export class DepartDetailRowDomProps extends domCore.DomProps<DepartDetailRowDomVm>{ }
}