import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import dataFile = require("./../Data");
import textFile = require("./../../../../02col/01single/Text");
import comboFile = require("./../../../../02col/02Mulite/Combo");

export module CombinationExamItemInsertMasterRowDom {
    export class CombinationExamItemInsertMasterRowDomAction extends domCore.DomAction {
    }

    export class CombinationExamItemInsertMasterRowDomReact extends domCore.DomReact<CombinationExamItemInsertMasterRowDomProps, CombinationExamItemInsertMasterRowDomStates, CombinationExamItemInsertMasterRowDomAction> implements domCore.IReact {

        public state = new CombinationExamItemInsertMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="1">
                <ul className="tabs" >
                    <li className="tab-title active"><a onClick={() => { this.fun_titleMasterClick(); } }>套餐项目<i className={"fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down") }></i></a></li>
                </ul>
                <div className="tabs-content">
                    <div className={"content active " + (this.props.Vm.IsMasterHide ? "hide" : "") }  >
                        <div className="acs-form clearfix" >
                            <div className="large-6 small-12 columns">
                                <div className="columns acs-lable">
                                    <label className="right required">套餐名称：</label>
                                </div>
                                <div className="columns acs-input">
                                    {this.props.Vm.ItemVm.intoDom() }
                                </div>
                            </div>
                            <div className="large-6 small-12 columns">
                                <div className="columns acs-lable">
                                    <label className="right required">项目名称：</label>
                                </div>
                                <div className="columns acs-input">
                                    {this.props.Vm.PackageVm.intoDom() }
                                </div>
                            </div>           
                        </div>
                    </div>
                </div>

            </div>

            );
        }

        private fun_OnChange(e, fName: string) {
            var _val = e.target["value"];
            this.props.Vm.RowData[fName] = _val;
            this.forceUpdate();
        }

        private fun_titleMasterClick() {
            this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface ICombinationExamItemInsertMasterRowDomConfig {


    }

    export class CombinationExamItemInsertMasterRowDomVm extends domCore.DomVm {
        public ReactType = CombinationExamItemInsertMasterRowDomReact;
        public IsMasterHide: boolean;
        public RowData: dataFile.CombinationExamItem.ICombinationExamItemData = {};
        public ItemVm: textFile.ui.TextVm;
        public PackageVm: textFile.ui.TextVm;

        public constructor(config?: ICombinationExamItemInsertMasterRowDomConfig) {
                super();    

                this.ItemVm = new textFile.ui.TextVm();
                this.ItemVm.LegalObj.Kind = "notNull";
                this.ItemVm.onChangeHandle((str) => {
                    this.RowData.ItemId = str;
                    return true;
                });

                this.PackageVm = new textFile.ui.TextVm();
                this.PackageVm.LegalObj.Kind = "notNull";
                this.PackageVm.onChangeHandle((str) => {
                    this.RowData.PackageId = str;
                    return true;
                });
            }       
    }
    export class CombinationExamItemInsertMasterRowDomStates extends domCore.DomStates {
    }


    export class CombinationExamItemInsertMasterRowDomProps extends domCore.DomProps<CombinationExamItemInsertMasterRowDomVm>{
    }



}


