import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./UnitDetailMasterRowDom");
import dataFile = require("./../Data");


export module UnitDetailRowDom {
    export class UnitDetailRowDomAction extends domCore.DomAction {
    }

    export class UnitDetailRowDomReact extends domCore.DomReact<UnitDetailRowDomProps, UnitDetailRowDomStates, UnitDetailRowDomAction> implements domCore.IReact {

        public state = new UnitDetailRowDomStates();

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

    export interface IUnitDetailRowDomConfig {
        DetailListData: dataFile.Unit.IUnitData[];
        MasterConfig: masterRowFile.UnitDetailMasterRowDom.IUnitDetailMasterRowDomConfig;

    }


    export class UnitDetailRowDomVm extends domCore.DomVm {
        public ReactType = UnitDetailRowDomReact;
        public MasterRow: masterRowFile.UnitDetailMasterRowDom.UnitDetailMasterRowDomVm;
        public Index: number;
        public DetailListData: dataFile.Unit.IUnitData[];
        public IsRowFormHide: boolean;
        public IsItemFormHide: boolean;


        public constructor(config?: IUnitDetailRowDomConfig) {
            super();
            if (config) {
                this.MasterRow = new masterRowFile.UnitDetailMasterRowDom.UnitDetailMasterRowDomVm(config.MasterConfig);
            }
        }

    }
    export class UnitDetailRowDomStates extends domCore.DomStates {
    }


    export class UnitDetailRowDomProps extends domCore.DomProps<UnitDetailRowDomVm>{
    }



}


