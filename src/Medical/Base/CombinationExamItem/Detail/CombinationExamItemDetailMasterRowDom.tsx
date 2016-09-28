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

export module CombinationExamItemDetailMasterRowDom {
    export class CombinationExamItemDetailMasterRowDomAction extends domCore.DomAction {
    }

    export class CombinationExamItemDetailMasterRowDomReact extends domCore.DomReact<CombinationExamItemDetailMasterRowDomProps, CombinationExamItemDetailMasterRowDomStates, CombinationExamItemDetailMasterRowDomAction> implements domCore.IReact {

        public state = new CombinationExamItemDetailMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="1">
                <ul className="tabs">
                    <li className="tab-title active"><a onClick={() => { this.fun_titleClick(); } }>体检套餐明细<i className={"fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down") }></i></a></li>
                </ul>
                <div className="tabs-content">
                    <div className={"content active " + (this.props.Vm.IsFormHide ? "hide" : "") } >
                        <div className="acs-form clearfix" >
                            <div className="large-4 small-12 columns acs-dashed-line">
                                <div className="columns acs-lable">
                                    <label for="right-label" className="right">套餐名称：</label>
                                </div>
                                <div className="columns acs-input">
                                    <label for="right-label" className="left">{this.props.Vm.RowData.ItemId}</label>
                                </div>
                            </div>
                            <div className="large-4 small-12 columns acs-dashed-line">
                                <div className="columns acs-lable">
                                    <label for="right-label" className="right">项目名称：</label>
                                </div>
                                <div className="columns acs-input">
                                    <label for="right-label" className="left">
                                        {this.props.Vm.RowData.PackageId}
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

    export interface ICombinationExamItemDetailMasterRowDomConfig {
        RowData: dataFile.CombinationExamItem.ICombinationExamItemData;

    }

    export class CombinationExamItemDetailMasterRowDomVm extends domCore.DomVm {
        public ReactType = CombinationExamItemDetailMasterRowDomReact;
        public RowData: dataFile.CombinationExamItem.ICombinationExamItemData;
        public IsFormHide: boolean;


        public constructor(config?: ICombinationExamItemDetailMasterRowDomConfig) {
            super();
            if (config)
            {
                this.RowData = config.RowData;
            }

        }

    }
    export class CombinationExamItemDetailMasterRowDomStates extends domCore.DomStates {
    }


    export class CombinationExamItemDetailMasterRowDomProps extends domCore.DomProps<CombinationExamItemDetailMasterRowDomVm>{
    }



}


