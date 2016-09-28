import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./CombinationExamItemDetailMasterRowDom");
import dataFile = require("./../Data");


export module CombinationExamItemDetailRowDom {
    export class CombinationExamItemDetailRowDomAction extends domCore.DomAction {
    }

    export class CombinationExamItemDetailRowDomReact extends domCore.DomReact<CombinationExamItemDetailRowDomProps, CombinationExamItemDetailRowDomStates, CombinationExamItemDetailRowDomAction> implements domCore.IReact {

        public state = new CombinationExamItemDetailRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="title acsPointer" onClick={() => { this.fun_itemTitleClick(); } }>{this.props.Vm.Index + 1}<i className={"fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "up" : "down") }></i></div>
                <div className={this.props.Vm.IsItemFormHide ? "hide" : "acs-toggle-item"}>
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

    export interface ICombinationExamItemDetailRowDomConfig {
        DetailListData: dataFile.CombinationExamItem.ICombinationExamItemData[];
        MasterConfig: masterRowFile.CombinationExamItemDetailMasterRowDom.ICombinationExamItemDetailMasterRowDomConfig;

    }


    export class CombinationExamItemDetailRowDomVm extends domCore.DomVm {
        public ReactType = CombinationExamItemDetailRowDomReact;
        public MasterRow: masterRowFile.CombinationExamItemDetailMasterRowDom.CombinationExamItemDetailMasterRowDomVm;
        public Index: number;
        public DetailListData: dataFile.CombinationExamItem.ICombinationExamItemData[];
        public IsRowFormHide: boolean;
        public IsItemFormHide: boolean;


        public constructor(config?: ICombinationExamItemDetailRowDomConfig) {
            super();
            if (config) {
                this.MasterRow = new masterRowFile.CombinationExamItemDetailMasterRowDom.CombinationExamItemDetailMasterRowDomVm(config.MasterConfig);
            }
        }

    }
    export class CombinationExamItemDetailRowDomStates extends domCore.DomStates {
    }


    export class CombinationExamItemDetailRowDomProps extends domCore.DomProps<CombinationExamItemDetailRowDomVm>{
    }



}


