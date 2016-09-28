import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./DepartUpdateMasterRowDom");
import eventFile = require("./../../../../01core/Event");
import dataFile = require("./../Data");

export module DepartUpdateRowDom {
    export class DepartUpdateRowDomAction extends domCore.DomAction {
    }

    export class DepartUpdateRowDomReact extends domCore.DomReact<DepartUpdateRowDomProps, DepartUpdateRowDomStates, DepartUpdateRowDomAction> implements domCore.IReact {

        public state = new DepartUpdateRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="title Hu-pointer" onClick={() => { this.fun_masterTitleClick(); } }>{this.props.Vm.Index + 1}<i className={"fa fa-angle-double-" + (this.props.Vm.IsMasterHide ? "up" : "down") }></i></div>
                <div className={this.props.Vm.IsMasterHide ? "hide" : ""}>
                    {this.props.Vm.MasterRow.intoDom() }
                </div>
            </div>;
        }

        private fun_detailTitleClick() {
            this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
            this.forceUpdate();
        }
        private fun_masterTitleClick() {
            this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface DepartUpdateRowDomConfig {
        MasterConfig: masterRowFile.DepartUpdateMasterRowDom.DepartUpdateMasterRowDomConfig;

    }

    export class DepartUpdateRowDomVm extends domCore.DomVm {
        public ReactType = DepartUpdateRowDomReact;
        public MasterRow: masterRowFile.DepartUpdateMasterRowDom.DepartUpdateMasterRowDomVm = new masterRowFile.DepartUpdateMasterRowDom.DepartUpdateMasterRowDomVm();

        public IsMasterHide: boolean;
        public IsDetailHide: boolean;

        public DelFidList: string[] = [];

        public Index: number;

        public UniId: string = "";

        public constructor(config?: DepartUpdateRowDomConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            if (config) {
                config.MasterConfig.UniId = this.UniId;
                this.MasterRow = new masterRowFile.DepartUpdateMasterRowDom.DepartUpdateMasterRowDomVm(config.MasterConfig);
            };
        }

        public legal(): boolean {
            var _isres: boolean = this.MasterRow.legal();
            return _isres;
        }

        public getData(): dataFile.MRP_Departments.Department {
            var _data = this.MasterRow.getData();
            return _data;
        }

    }
    export class DepartUpdateRowDomStates extends domCore.DomStates {
    }


    export class DepartUpdateRowDomProps extends domCore.DomProps<DepartUpdateRowDomVm>{
    }



}


