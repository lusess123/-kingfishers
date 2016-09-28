import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./ResultCommonUpdateMasterRowDom");
import eventFile = require("./../../../../01core/Event");
import dataFile = require("./../Data");


export module ResultCommonUpdateRowDom {
    export class ResultCommonUpdateRowDomAction extends domCore.DomAction {
    }

    export class ResultCommonUpdateRowDomReact extends domCore.DomReact<ResultCommonUpdateRowDomProps, ResultCommonUpdateRowDomStates, ResultCommonUpdateRowDomAction> implements domCore.IReact {

        public state = new ResultCommonUpdateRowDomStates();

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

    export interface IResultCommonUpdateRowDomConfig {
        MasterConfig: masterRowFile.ResultCommonUpdateMasterRowDom.IResultCommonUpdateMasterRowDomConfig;

    }
 


    export class ResultCommonUpdateRowDomVm extends domCore.DomVm {
        public ReactType = ResultCommonUpdateRowDomReact;

        public MasterRow: masterRowFile.ResultCommonUpdateMasterRowDom.ResultCommonUpdateMasterRowDomVm = new masterRowFile.ResultCommonUpdateMasterRowDom.ResultCommonUpdateMasterRowDomVm();

        public IsMasterHide: boolean;
        public IsDetailHide: boolean;

        public DelFidList: string[] = [];

        public Index: number;

        public UniId: string = "";

        public constructor(config?: IResultCommonUpdateRowDomConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            if (config) {
                config.MasterConfig.UniId = this.UniId;
                this.MasterRow = new masterRowFile.ResultCommonUpdateMasterRowDom.ResultCommonUpdateMasterRowDomVm(config.MasterConfig);
                };
        }
        public legal(): boolean {
            var _isres: boolean = this.MasterRow.legal();
            return _isres;
        }

        public getData(): dataFile.ResultCommon.IResultCommonData {
            var _data = this.MasterRow.getData();
            return _data;
        }
    }
    export class ResultCommonUpdateRowDomStates extends domCore.DomStates {
    }


    export class ResultCommonUpdateRowDomProps extends domCore.DomProps<ResultCommonUpdateRowDomVm>{
    }



}


