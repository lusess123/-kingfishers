import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./MemberDetailMasterRowDom");
import dataFile = require("./../Data");


export module MemberDetailRowDom {
    export class MemberDetailRowDomAction extends domCore.DomAction {
    }

    export class MemberDetailRowDomReact extends domCore.DomReact<MemberDetailRowDomProps, MemberDetailRowDomStates, MemberDetailRowDomAction> implements domCore.IReact {

        public state = new MemberDetailRowDomStates();

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

    export interface IMemberDetailRowDomConfig {
        DetailListData: dataFile.Member.IMemberData[];
        MasterConfig: masterRowFile.MemberDetailMasterRowDom.IMemberDetailMasterRowDomConfig;

    }


    export class MemberDetailRowDomVm extends domCore.DomVm {
        public ReactType = MemberDetailRowDomReact;
        public MasterRow: masterRowFile.MemberDetailMasterRowDom.MemberDetailMasterRowDomVm;
        public Index: number;
        public DetailListData: dataFile.Member.IMemberData[];
        public IsRowFormHide: boolean;
        public IsItemFormHide: boolean;


        public constructor(config?: IMemberDetailRowDomConfig) {
            super();
            if (config) {
                this.MasterRow = new masterRowFile.MemberDetailMasterRowDom.MemberDetailMasterRowDomVm(config.MasterConfig);
            }
        }

    }
    export class MemberDetailRowDomStates extends domCore.DomStates {
    }


    export class MemberDetailRowDomProps extends domCore.DomProps<MemberDetailRowDomVm>{
    }



}


