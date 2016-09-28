import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./CombinationExamItemUpdateMasterRowDom");
import eventFile = require("./../../../../01core/Event");
import dataFile = require("./../Data");


export module CombinationExamItemUpdateRowDom {
    export class CombinationExamItemUpdateRowDomAction extends domCore.DomAction {
    }

    export class CombinationExamItemUpdateRowDomReact extends domCore.DomReact<CombinationExamItemUpdateRowDomProps, CombinationExamItemUpdateRowDomStates, CombinationExamItemUpdateRowDomAction> implements domCore.IReact {

        public state = new CombinationExamItemUpdateRowDomStates();

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

    export interface ICombinationExamItemUpdateRowDomConfig {
        MasterConfig: masterRowFile.CombinationExamItemUpdateMasterRowDom.ICombinationExamItemUpdateMasterRowDomConfig;

    }
 


    export class CombinationExamItemUpdateRowDomVm extends domCore.DomVm {
        public ReactType = CombinationExamItemUpdateRowDomReact;

        public MasterRow: masterRowFile.CombinationExamItemUpdateMasterRowDom.CombinationExamItemUpdateMasterRowDomVm = new masterRowFile.CombinationExamItemUpdateMasterRowDom.CombinationExamItemUpdateMasterRowDomVm();

        public IsMasterHide: boolean;
        public IsDetailHide: boolean;

        public DelFidList: string[] = [];

        public Index: number;

        public UniId: string = "";

        public constructor(config?: ICombinationExamItemUpdateRowDomConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();

            if (config) {
                config.MasterConfig.UniId = this.UniId;
                this.MasterRow = new masterRowFile.CombinationExamItemUpdateMasterRowDom.CombinationExamItemUpdateMasterRowDomVm(config.MasterConfig);
                };
            }
    }
    export class CombinationExamItemUpdateRowDomStates extends domCore.DomStates {
    }


    export class CombinationExamItemUpdateRowDomProps extends domCore.DomProps<CombinationExamItemUpdateRowDomVm>{
    }



}


