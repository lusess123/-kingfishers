import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./UnitUpdateMasterRowDom");
import eventFile = require("./../../../../01core/Event");
import dataFile = require("./../Data");


export module UnitUpdateRowDom {
    export class UnitUpdateRowDomAction extends domCore.DomAction {
    }

    export class UnitUpdateRowDomReact extends domCore.DomReact<UnitUpdateRowDomProps, UnitUpdateRowDomStates, UnitUpdateRowDomAction> implements domCore.IReact {

        public state = new UnitUpdateRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="title acsPointer" onClick={() => { this.fun_masterTitleClick(); } }>{this.props.Vm.Index + 1}<i className={"fa fa-angle-double-" + (this.props.Vm.IsMasterHide ? "up" : "down") }></i></div>
                <div className={this.props.Vm.IsMasterHide ? "hide" : "acs-toggle-item"}>
                    {this.props.Vm.MasterRow.intoDom() }
                </div>
            </div>;
        }



        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

        private fun_detailTitleClick() {
            this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
            this.forceUpdate();
        }
        private fun_masterTitleClick() {
            this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
            this.forceUpdate();
        }



    }

    export interface IUnitUpdateRowDomConfig {
        MasterConfig: masterRowFile.UnitUpdateMasterRowDom.IUnitUpdateMasterRowDomConfig;

    }
 


    export class UnitUpdateRowDomVm extends domCore.DomVm {
        public ReactType = UnitUpdateRowDomReact;

        public MasterRow: masterRowFile.UnitUpdateMasterRowDom.UnitUpdateMasterRowDomVm = new masterRowFile.UnitUpdateMasterRowDom.UnitUpdateMasterRowDomVm();

        public IsMasterHide: boolean;
        public IsDetailHide: boolean;

        public DelFidList: string[] = [];

        public Index: number;

        public UniId: string = "";

        public constructor(config?: IUnitUpdateRowDomConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();

            if (config) {
                config.MasterConfig.UniId = this.UniId;
                this.MasterRow = new masterRowFile.UnitUpdateMasterRowDom.UnitUpdateMasterRowDomVm(config.MasterConfig);
                };
        }
        public legal(): boolean {
            var _isres: boolean = this.MasterRow.legal();
            return _isres;
        }

        public getData(): dataFile.Unit.IUnitData {
            var _data = this.MasterRow.getData();
            return _data;
        }
    }
    export class UnitUpdateRowDomStates extends domCore.DomStates {
    }


    export class UnitUpdateRowDomProps extends domCore.DomProps<UnitUpdateRowDomVm>{
    }



}


