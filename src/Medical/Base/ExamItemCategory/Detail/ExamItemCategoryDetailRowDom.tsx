import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./ExamItemCategoryDetailMasterRowDom");
import dataFile = require("./../Data");


export module ExamItemCategoryDetailRowDom {
    export class ExamItemCategoryDetailRowDomAction extends domCore.DomAction {
    }

    export class ExamItemCategoryDetailRowDomReact extends domCore.DomReact<ExamItemCategoryDetailRowDomProps, ExamItemCategoryDetailRowDomStates, ExamItemCategoryDetailRowDomAction> implements domCore.IReact {

        public state = new ExamItemCategoryDetailRowDomStates();

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

    export interface ExamItemCategoryDetailRowDomConfig {
        DetailListData: dataFile.ExamItemCategory.ExamItemCategoryData[];
        MasterConfig: masterRowFile.ExamItemCategoryDetailMasterRowDom.ExamItemCategoryDetailMasterRowDomConfig;
    }

    export class ExamItemCategoryDetailRowDomVm extends domCore.DomVm {
        public ReactType = ExamItemCategoryDetailRowDomReact;
        public MasterRow: masterRowFile.ExamItemCategoryDetailMasterRowDom.ExamItemCategoryDetailMasterRowDomVm;
        public Index: number;
        public DetailListData: dataFile.ExamItemCategory.ExamItemCategoryData[];
        public IsRowFormHide: boolean;
        public IsItemFormHide: boolean;

        public constructor(config?: ExamItemCategoryDetailRowDomConfig) {
            super();
            this.MasterRow = new masterRowFile.ExamItemCategoryDetailMasterRowDom.ExamItemCategoryDetailMasterRowDomVm(config.MasterConfig);
        }

    }
    export class ExamItemCategoryDetailRowDomStates extends domCore.DomStates {
    }


    export class ExamItemCategoryDetailRowDomProps extends domCore.DomProps<ExamItemCategoryDetailRowDomVm>{
    }



}


