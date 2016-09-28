import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./ResultCommonDetailMasterRowDom");
import dataFile = require("./../Data");


export module ResultCommonDetailRowDom {
    export class ResultCommonDetailRowDomAction extends domCore.DomAction {
    }

    export class ResultCommonDetailRowDomReact extends domCore.DomReact<ResultCommonDetailRowDomProps, ResultCommonDetailRowDomStates, ResultCommonDetailRowDomAction> implements domCore.IReact {

        public state = new ResultCommonDetailRowDomStates();

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

    export interface IResultCommonDetailRowDomConfig {
        DetailListData: dataFile.ResultCommon.IResultCommonData[];
        MasterConfig: masterRowFile.ResultCommonDetailMasterRowDom.IResultCommonDetailMasterRowDomConfig;

    }


    export class ResultCommonDetailRowDomVm extends domCore.DomVm {
        public ReactType = ResultCommonDetailRowDomReact;
        public MasterRow: masterRowFile.ResultCommonDetailMasterRowDom.ResultCommonDetailMasterRowDomVm;
        public Index: number;
        public DetailListData: dataFile.ResultCommon.IResultCommonData[];
        public IsRowFormHide: boolean;
        public IsItemFormHide: boolean;


        public constructor(config?: IResultCommonDetailRowDomConfig) {
            super();
            if (config) {
                this.MasterRow = new masterRowFile.ResultCommonDetailMasterRowDom.ResultCommonDetailMasterRowDomVm(config.MasterConfig);
            }
        }

    }
    export class ResultCommonDetailRowDomStates extends domCore.DomStates {
    }


    export class ResultCommonDetailRowDomProps extends domCore.DomProps<ResultCommonDetailRowDomVm>{
    }



}


