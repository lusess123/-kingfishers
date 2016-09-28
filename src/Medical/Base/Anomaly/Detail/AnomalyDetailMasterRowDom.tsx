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

export module AnomalyDetailMasterRowDom {
    export class AnomalyDetailMasterRowDomAction extends domCore.DomAction {
    }

    export class AnomalyDetailMasterRowDomReact extends domCore.DomReact<AnomalyDetailMasterRowDomProps, AnomalyDetailMasterRowDomStates, AnomalyDetailMasterRowDomAction> implements domCore.IReact {

        public state = new AnomalyDetailMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="panel">
                <div className="panel-heading">
                    <h4 className="panel-title"><a onClick={() => { this.fun_titleClick(); } }>异常明细<i className={"fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down") }></i></a>
                        </h4>
                </div>
                <div className="panel-collapse collapse in">
                    <div className={"content active " + (this.props.Vm.IsFormHide ? "hide" : "") } >
                        <div className="Hm-form clearfix" >
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">简码：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.SimpleCode}</label>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">名称：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label for="right-label" className="pull-left">
                                        {this.props.Vm.RowData.Name}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">序号：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.OrderNumber}</label>
                                </div>
                            </div>
                         
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="pull-left Hu-label">
                                    <label for="right-label" className="pull-right">备注：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label for="right-label" className="pull-left">{this.props.Vm.RowData.Remark}</label>
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

    export interface IAnomalyDetailMasterRowDomConfig {
        RowData: dataFile.Anomaly.IAnomalyData;

    }

    export class AnomalyDetailMasterRowDomVm extends domCore.DomVm {
        public ReactType = AnomalyDetailMasterRowDomReact;
        public RowData: dataFile.Anomaly.IAnomalyData;
        public IsFormHide: boolean;


        public constructor(config?: IAnomalyDetailMasterRowDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
            }

        }

    }
    export class AnomalyDetailMasterRowDomStates extends domCore.DomStates {
    }


    export class AnomalyDetailMasterRowDomProps extends domCore.DomProps<AnomalyDetailMasterRowDomVm>{
    }



}


