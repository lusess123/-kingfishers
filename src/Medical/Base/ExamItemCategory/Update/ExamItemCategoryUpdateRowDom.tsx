import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import masterRowFile = require("./ExamItemCategoryUpdateMasterRowDom");
import eventFile = require("./../../../../01core/Event");
import dataFile = require("./../Data");

export module ExamItemCategoryUpdateRowDom {
    export class ExamItemCategoryUpdateRowDomAction extends domCore.DomAction {
    }

    export class ExamItemCategoryUpdateRowDomReact extends domCore.DomReact<ExamItemCategoryUpdateRowDomProps, ExamItemCategoryUpdateRowDomStates, ExamItemCategoryUpdateRowDomAction> implements domCore.IReact {

        public state = new ExamItemCategoryUpdateRowDomStates();

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

    export interface IExamItemCategoryUpdateRowDomConfig {
        MasterConfig: masterRowFile.ExamItemCategoryUpdateMasterRowDom.IExamItemCategoryUpdateMasterRowDomConfig;

    }

    export class ExamItemCategoryUpdateRowDomVm extends domCore.DomVm {
        public ReactType = ExamItemCategoryUpdateRowDomReact;
        public MasterRow: masterRowFile.ExamItemCategoryUpdateMasterRowDom.ExamItemCategoryUpdateMasterRowDomVm = new masterRowFile.ExamItemCategoryUpdateMasterRowDom.ExamItemCategoryUpdateMasterRowDomVm();

        public IsMasterHide: boolean;
        public IsDetailHide: boolean;

        public DelFidList: string[] = [];

        public Index: number;

        public UniId: string = "";

        public constructor(config?: IExamItemCategoryUpdateRowDomConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();

            if (config) {
                config.MasterConfig.UniId = this.UniId;
                this.MasterRow = new masterRowFile.ExamItemCategoryUpdateMasterRowDom.ExamItemCategoryUpdateMasterRowDomVm(config.MasterConfig);
            };
        }

        public legal(): boolean {
            var _isres: boolean = this.MasterRow.legal();
            return _isres;
        }

        public getData(): dataFile.ExamItemCategory.ExamItemCategoryData
        {
            var _data = this.MasterRow.getData();
            return _data;
        }

    }
    export class ExamItemCategoryUpdateRowDomStates extends domCore.DomStates {
    }


    export class ExamItemCategoryUpdateRowDomProps extends domCore.DomProps<ExamItemCategoryUpdateRowDomVm>{
    }



}


