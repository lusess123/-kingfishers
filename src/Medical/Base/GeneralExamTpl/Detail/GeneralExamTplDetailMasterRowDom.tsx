import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import textFile = require("./../../../../02col/01single/Text");
import dataFile = require("./../Data");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");

export module GeneralExamTplDetailMasterRowDom {
    export class GeneralExamTplDetailMasterRowDomAction extends domCore.DomAction {
    }

    export class GeneralExamTplDetailMasterRowDomReact extends domCore.DomReact<GeneralExamTplDetailMasterRowDomProps, GeneralExamTplDetailMasterRowDomStates, GeneralExamTplDetailMasterRowDomAction> implements domCore.IReact {

        public state = new GeneralExamTplDetailMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="panel">
                <div className="panel-heading">
                    <h4 className="panel-title"><a onClick={() => { this.fun_titleClick(); } }>模板明细<i className={"fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down") }></i></a>
                        </h4>
                </div>
                <div className="panel-collapse collapse in">
                    <div className={"content active " + (this.props.Vm.IsFormHide ? "hide" : "") } >
                        <div className="Hm-form clearfix" >
                            <div className="col-lg-12 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">名称：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.Name}</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">综述：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.Summary}</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">建议：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.Advice}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
        }

        private fun_titleClick() {
            this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IGeneralExamTplDetailMasterRowDomConfig {
        RowData: dataFile.GeneralExamTpl.IGeneralExamTplData;

    }

    export class GeneralExamTplDetailMasterRowDomVm extends domCore.DomVm {
        public ReactType = GeneralExamTplDetailMasterRowDomReact;
        public RowData: dataFile.GeneralExamTpl.IGeneralExamTplData;
        public IsFormHide: boolean;


        public constructor(config?: IGeneralExamTplDetailMasterRowDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
            }

        }

    }
    export class GeneralExamTplDetailMasterRowDomStates extends domCore.DomStates {
    }


    export class GeneralExamTplDetailMasterRowDomProps extends domCore.DomProps<GeneralExamTplDetailMasterRowDomVm>{
    }



}


