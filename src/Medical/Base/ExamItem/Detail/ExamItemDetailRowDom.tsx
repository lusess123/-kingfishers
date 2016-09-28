import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");

import masterRowFile = require("./ExamItemDetailMasterRowDom");
import dataFile = require("./../Data");

export module ExamItemDetailRowDom {
    export class ExamItemDetailRowDomAction extends domCore.DomAction {
    }

    export class ExamItemDetailRowDomReact extends domCore.DomReact<ExamItemDetailRowDomProps, ExamItemDetailRowDomStates, ExamItemDetailRowDomAction> implements domCore.IReact {

        public state = new ExamItemDetailRowDomStates();

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

    export interface ExamItemDetailRowDomConfig {
        DetailListData: dataFile.ExamItem.IExamItemData[];
        MasterConfig: masterRowFile.ExamItemDetailMasterRowDom.ExamItemDetailMasterRowDomConfig;

    }

    export class ExamItemDetailRowDomVm extends domCore.DomVm {
        public ReactType = ExamItemDetailRowDomReact;

        public MasterRow: masterRowFile.ExamItemDetailMasterRowDom.ExamItemDetailMasterRowDomVm;

        public IsRowFormHide: boolean;
        public IsItemFormHide: boolean;
        public Index: number;

        public DetailListData: dataFile.ExamItem.IExamItemData[];

        public constructor(config?: ExamItemDetailRowDomConfig) {
            super();
            if (config) {
                this.MasterRow = new masterRowFile.ExamItemDetailMasterRowDom.ExamItemDetailMasterRowDomVm(config.MasterConfig);
            }
        }

    }
    export class ExamItemDetailRowDomStates extends domCore.DomStates {
    }


    export class ExamItemDetailRowDomProps extends domCore.DomProps<ExamItemDetailRowDomVm>{
    }



}


