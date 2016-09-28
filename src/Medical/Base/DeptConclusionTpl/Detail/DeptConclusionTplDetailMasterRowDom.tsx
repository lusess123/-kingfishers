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

export module DeptConclusionTplDetailMasterRowDom {
    export class DeptConclusionTplDetailMasterRowDomAction extends domCore.DomAction {
    }

    export class DeptConclusionTplDetailMasterRowDomReact extends domCore.DomReact<DeptConclusionTplDetailMasterRowDomProps, DeptConclusionTplDetailMasterRowDomStates, DeptConclusionTplDetailMasterRowDomAction> implements domCore.IReact {

        public state = new DeptConclusionTplDetailMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="panel">
                <div className="panel-heading">
                    <h4 className="panel-title"><a onClick={() => { this.fun_titleClick(); } }>模板明细<i className={"fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down") }></i></a>
                        </h4>
                </div>
                <div className="panel-collapse collapse in">
                    <div className={"content active " + (this.props.Vm.IsFormHide ? "hide" : "") } >
                        <div className="Hm-form clearfix" >
                            <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="right">科室：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label for="right-label" className="left">{this.props.Vm.RowData.DeptName}</label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="right">名称：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label for="right-label" className="left">
                                        {this.props.Vm.RowData.Name}
                                    </label>
                                </div>
                            </div>
                          
                            <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="right">小结内容：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label for="right-label" className="left">{this.props.Vm.RowData.Content}</label>
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

    export interface IDeptConclusionTplDetailMasterRowDomConfig {
        RowData: dataFile.DeptConclusionTpl.IDeptConclusionTplData;

    }

    export class DeptConclusionTplDetailMasterRowDomVm extends domCore.DomVm {
        public ReactType = DeptConclusionTplDetailMasterRowDomReact;
        public RowData: dataFile.DeptConclusionTpl.IDeptConclusionTplData;
        public IsFormHide: boolean;


        public constructor(config?: IDeptConclusionTplDetailMasterRowDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
            }

        }

    }
    export class DeptConclusionTplDetailMasterRowDomStates extends domCore.DomStates {
    }


    export class DeptConclusionTplDetailMasterRowDomProps extends domCore.DomProps<DeptConclusionTplDetailMasterRowDomVm>{
    }



}


