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

export module ResultCommonDetailMasterRowDom {
    export class ResultCommonDetailMasterRowDomAction extends domCore.DomAction {
    }

    export class ResultCommonDetailMasterRowDomReact extends domCore.DomReact<ResultCommonDetailMasterRowDomProps, ResultCommonDetailMasterRowDomStates, ResultCommonDetailMasterRowDomAction> implements domCore.IReact {

        public state = new ResultCommonDetailMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="panel">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a onClick={() => { this.fun_titleClick(); } }>体检结果<i className={"fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down") }></i></a>
                    </h4>
                </div>
                <div className="panel-collapse collapse in">
                    <div className={"content active " + (this.props.Vm.IsFormHide ? "hide" : "") } >
                        <div className="Hm-form clearfix" >
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">简码：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">{this.props.Vm.RowData.SimpleCode}</label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">体检项目：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.ItemId}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">体检结果：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.Result}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="pull-right">序号：</label>
                                </div>
                                <div className="pull-left Hu-input">
                                    <label className="pull-left">
                                        {this.props.Vm.RowData.OrderNum}
                                    </label>
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

    export interface IResultCommonDetailMasterRowDomConfig {
        RowData: dataFile.ResultCommon.IResultCommonData;

    }

    export class ResultCommonDetailMasterRowDomVm extends domCore.DomVm {
        public ReactType = ResultCommonDetailMasterRowDomReact;
        public RowData: dataFile.ResultCommon.IResultCommonData;
        public IsFormHide: boolean;


        public constructor(config?: IResultCommonDetailMasterRowDomConfig) {
            super();
            if (config)
            {
                this.RowData = config.RowData;
            }

        }

    }
    export class ResultCommonDetailMasterRowDomStates extends domCore.DomStates {
    }


    export class ResultCommonDetailMasterRowDomProps extends domCore.DomProps<ResultCommonDetailMasterRowDomVm>{
    }



}


